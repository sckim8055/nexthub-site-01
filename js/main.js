/* ================================================================
   main.js — NextHub (Autodesk Redesign)
   ================================================================ */

var currentLang = "en";

var LANG_NAMES = { en:"EN", ko:"KO", zh:"ZH" };
var LANG_FULL_NAMES = { en:"English", ko:"한국어", zh:"中文" };


/* ================================================================
   1. 언어 전환
   ================================================================ */
function switchLanguage(lang) {
  if (!CONTENT[lang]) return;
  currentLang = lang;
  document.documentElement.lang = (lang === "zh") ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var text = CONTENT[lang][el.getAttribute("data-i18n")];
    if (text) el.innerHTML = text;
  });

  /* 데스크탑 드롭다운 */
  var cur = document.getElementById("lang-current");
  if (cur) cur.textContent = LANG_NAMES[lang] || lang;

  document.querySelectorAll(".lang-option").forEach(function(o) {
    o.classList.toggle("active", o.getAttribute("data-lang") === lang);
  });

  /* 모바일 */
  document.querySelectorAll(".mobile-lang-option").forEach(function(o) {
    o.classList.toggle("active", o.getAttribute("data-lang") === lang);
  });

  /* 헤더 텍스트 */
  var ph = document.querySelector(".lang-panel-header span");
  if (ph) ph.textContent = ({en:"Select Language",ko:"언어 선택",zh:"选择语言"})[lang];

  var ml = document.querySelector(".mobile-lang-label");
  if (ml) ml.textContent = ({en:"Language",ko:"언어",zh:"语言"})[lang];

  closeLangDropdown();
  localStorage.setItem("nexthub-lang", lang);
}

function toggleLangDropdown() {
  var dd = document.getElementById("lang-dropdown");
  var tr = document.getElementById("lang-trigger");
  var open = dd.classList.toggle("open");
  tr.setAttribute("aria-expanded", open);
}

function closeLangDropdown() {
  var dd = document.getElementById("lang-dropdown");
  var tr = document.getElementById("lang-trigger");
  if (dd) dd.classList.remove("open");
  if (tr) tr.setAttribute("aria-expanded","false");
}

function initLanguageSwitcher() {
  var trigger = document.getElementById("lang-trigger");
  if (trigger) {
    trigger.addEventListener("click", function(e) {
      e.stopPropagation();
      toggleLangDropdown();
    });
  }

  document.querySelectorAll(".lang-option").forEach(function(o) {
    o.addEventListener("click", function(e) {
      e.stopPropagation();
      switchLanguage(this.getAttribute("data-lang"));
    });
  });

  document.querySelectorAll(".mobile-lang-option").forEach(function(o) {
    o.addEventListener("click", function() {
      switchLanguage(this.getAttribute("data-lang"));
    });
  });

  document.addEventListener("click", function(e) {
    var dd = document.getElementById("lang-dropdown");
    if (dd && !dd.contains(e.target)) closeLangDropdown();
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeLangDropdown();
  });

  var saved = localStorage.getItem("nexthub-lang");
  if (saved && CONTENT[saved]) { switchLanguage(saved); }
  else {
    var bl = navigator.language || navigator.userLanguage;
    if (bl.startsWith("ko")) switchLanguage("ko");
    else if (bl.startsWith("zh")) switchLanguage("zh");
    else switchLanguage("en");
  }
}


/* ================================================================
   2. 내비게이션
   ================================================================ */
function initNavScroll() {
  var nav = document.getElementById("nav-bar");
  window.addEventListener("scroll", function() {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive:true });
}

function initActiveMenu() {
  /* 데스크탑 + 모바일 모든 nav 링크 */
  var desktopLinks = document.querySelectorAll(".nav-links a[href^='#section']");
  var mobileLinks = document.querySelectorAll(".nav-mobile-links a[href^='#section']");
  var allLinks = [].concat(
    Array.prototype.slice.call(desktopLinks),
    Array.prototype.slice.call(mobileLinks)
  );

  var sections = [];
  desktopLinks.forEach(function(link) {
    var s = document.querySelector(link.getAttribute("href"));
    if (s) sections.push({ section:s, href:link.getAttribute("href") });
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        allLinks.forEach(function(l) { l.classList.remove("active"); });
        sections.forEach(function(item) {
          if (item.section === entry.target) {
            allLinks.forEach(function(l) {
              if (l.getAttribute("href") === item.href) l.classList.add("active");
            });
          }
        });
      }
    });
  }, { rootMargin:"-80px 0px -50% 0px", threshold:0 });

  sections.forEach(function(item) { observer.observe(item.section); });
}

function initHamburger() {
  var hamburger = document.getElementById("nav-hamburger");
  var overlay = document.getElementById("nav-overlay");

  if (!hamburger || !overlay) return;

  hamburger.addEventListener("click", function() {
    var isOpen = hamburger.classList.toggle("open");
    overlay.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* 링크 클릭 시 닫기 */
  overlay.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      hamburger.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}


/* ================================================================
   3. 메가메뉴 (데스크탑)
   ================================================================ */
function initMegaMenu() {
  /* 메가메뉴 내 링크 클릭 시 메뉴 닫기 */
  document.querySelectorAll(".mega-link, .mega-cta-card a").forEach(function(link) {
    link.addEventListener("click", function() {
      /* hover 기반이므로 강제 blur */
      this.closest(".nav-item").querySelector("a").blur();
    });
  });
}


/* ================================================================
   4. 부드러운 스크롤
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      var href = this.getAttribute("href");
      if (!href || href === "#") return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      var navH = document.getElementById("nav-bar").offsetHeight;
      var pos = target.getBoundingClientRect().top + window.pageYOffset - navH;

      window.scrollTo({ top:pos, behavior:"smooth" });

      /* 모바일 메뉴 닫기 */
      var hamburger = document.getElementById("nav-hamburger");
      var overlay = document.getElementById("nav-overlay");
      if (hamburger && hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
}


/* ================================================================
   5. 숫자 카운터
   ================================================================ */
function initCounters() {
  var section = document.getElementById("section-metrics");
  if (!section) return;
  var done = false;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !done) {
        done = true;
        section.querySelectorAll(".metric-value[data-target]").forEach(function(el) {
          var target = parseInt(el.getAttribute("data-target"));
          var current = 0;
          var steps = 2000 / 30;
          var inc = target / steps;

          var timer = setInterval(function() {
            current += inc;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current);
          }, 30);
        });
      }
    });
  }, { threshold:0.3 });

  observer.observe(section);
}


/* ================================================================
   6. FAQ 아코디언
   ================================================================ */
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach(function(item) {
    item.querySelector(".faq-question").addEventListener("click", function() {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function(i) { i.classList.remove("open"); });
      if (!isOpen) item.classList.add("open");
    });
  });
}


/* ================================================================
   7. 스크롤 등장
   ================================================================ */
function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");

        entry.target.querySelectorAll(".scroll-reveal-child").forEach(function(child, i) {
          setTimeout(function() { child.classList.add("revealed"); }, i * 120);
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.08, rootMargin:"0px 0px -40px 0px" });

  document.querySelectorAll(".scroll-reveal").forEach(function(el) {
    observer.observe(el);
  });
}


/* ================================================================
   8. 맨 위로 버튼
   ================================================================ */
function initScrollTop() {
  var btn = document.getElementById("scroll-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", function() {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive:true });

  btn.addEventListener("click", function() {
    window.scrollTo({ top:0, behavior:"smooth" });
  });
}


/* ================================================================
   9. 모바일 Sticky CTA
   ================================================================ */
function initMobileStickyCTA() {
  var cta = document.getElementById("mobile-sticky-cta");
  if (!cta) return;

  var hero = document.getElementById("section-hero");
  var contact = document.getElementById("section-contact");

  window.addEventListener("scroll", function() {
    var y = window.scrollY;
    var heroEnd = hero ? hero.offsetTop + hero.offsetHeight : 600;
    var contactStart = contact ? contact.offsetTop - window.innerHeight : Infinity;

    cta.classList.toggle("visible", y > heroEnd && y < contactStart);
  }, { passive:true });
}


/* ================================================================
   10. 문의 폼 — Cloudflare Email 대응 준비
   ================================================================ */
function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;

    if (submitBtn.disabled) return;
    
    // 현재 언어를 폼에 반영
    var langField = document.getElementById("form-lang");
    if (langField) langField.value = currentLang;

    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    submitBtn.textContent = ({
      en: "Sending...",
      ko: "전송 중...",
      zh: "发送中..."
    })[currentLang] || "Sending...";

    /* 
     * Cloudflare Workers를 이용한 이메일 전송
     * 아래 URL을 Cloudflare Worker 엔드포인트로 교체하세요.
     * 현재는 Formspree를 fallback으로 사용합니다.
     * 
     * Cloudflare Worker 예시 URL:
     * https://your-worker.your-subdomain.workers.dev/send-email
     */
    var endpoint = form.action; /* Cloudflare Worker URL로 교체 가능 */

    fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    })
    .then(function(response) {
      if (response.ok) {
        showFormMessage("success");
        form.reset();
      } else {
        return response.json().then(function(data) {
          var detail = "";
          if (data.errors) {
            detail = data.errors.map(function(err) {
              return err.message;
            }).join(", ");
          }
          showFormMessage("error", detail);
        });
      }
    })
    .catch(function(err) {
      console.error("Form submission error:", err);
      showFormMessage("error");
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.textContent = originalText;
    });
  });
}

function showFormMessage(type, detail) {
  var existing = document.querySelector(".form-result-message");
  if (existing) existing.remove();

  var msg = document.createElement("div");
  msg.className = "form-result-message form-result-" + type;

  if (type === "success") {
    msg.innerHTML = ({
      en: '✅ <strong>Thank you!</strong> We received your inquiry and will respond within 1 business day.',
      ko: '✅ <strong>감사합니다!</strong> 문의가 접수되었습니다. 1영업일 내에 회신드리겠습니다.',
      zh: '✅ <strong>谢谢！</strong> 我们已收到您的咨询，将在1个工作日内回复。'
    })[currentLang] || '✅ Thank you!';
  } else {
    var errorMsg = ({
      en: '❌ <strong>Something went wrong.</strong> Please email us at <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>',
      ko: '❌ <strong>전송에 실패했습니다.</strong> <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>로 직접 보내주세요.',
      zh: '❌ <strong>发送失败。</strong> 请发邮件至 <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>'
    })[currentLang] || '❌ Something went wrong.';

    msg.innerHTML = errorMsg;
    if (detail) {
      msg.innerHTML += '<br><small style="opacity:0.7">' + detail + '</small>';
    }
  }

  var formEl = document.getElementById("contact-form");
  formEl.parentNode.insertBefore(msg, formEl.nextSibling);

  msg.scrollIntoView({ behavior: "smooth", block: "nearest" });

  setTimeout(function() {
    msg.style.opacity = "0";
    msg.style.transform = "translateY(-8px)";
    setTimeout(function() {
      if (msg.parentNode) msg.remove();
    }, 400);
  }, 6000);
}


/* ================================================================
   11. 터치 감지
   ================================================================ */
function initTouchDetection() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
  }
}


/* ================================================================
   12. 뷰포트 높이
   ================================================================ */
function initViewportHeight() {
  function set() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  set();
  var timer;
  window.addEventListener("resize", function() {
    clearTimeout(timer); timer = setTimeout(set, 150);
  }, { passive:true });
}


/* ================================================================
   13. 히어로 패럴랙스 (미세한 마우스 추적)
   ================================================================ */
function initHeroParallax() {
  var hero = document.getElementById("section-hero");
  if (!hero) return;

  var cards = hero.querySelectorAll(".scene-card");
  var nodes = hero.querySelectorAll(".scene-node");

  /* 모바일에서는 비활성화 */
  if (window.innerWidth < 768) return;

  hero.addEventListener("mousemove", function(e) {
    var rect = hero.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;  /* -0.5 ~ 0.5 */
    var y = (e.clientY - rect.top) / rect.height - 0.5;

    cards.forEach(function(card, i) {
      var depth = (i + 1) * 8;
      card.style.transform = "translateY(" + (-14 * Math.sin(Date.now() / 1000 + i * 1.75)) + "px) translate(" + (x * depth) + "px, " + (y * depth) + "px)";
    });

    nodes.forEach(function(node, i) {
      var depth = (i + 1) * 3;
      node.style.transform = "translate(" + (x * depth) + "px, " + (y * depth) + "px)";
    });
  });

  hero.addEventListener("mouseleave", function() {
    cards.forEach(function(card) {
      card.style.transform = "";
    });
    nodes.forEach(function(node) {
      node.style.transform = "";
    });
  });
}


/* ================================================================
   14. 초기화
   ================================================================ */
document.addEventListener("DOMContentLoaded", function() {
  initLanguageSwitcher();
  initNavScroll();
  initActiveMenu();
  initHamburger();
  initMegaMenu();
  initSmoothScroll();
  initCounters();
  initFAQ();
  initScrollReveal();
  initScrollTop();
  initMobileStickyCTA();
  initContactForm();
  initTouchDetection();
  initViewportHeight();
  initHeroParallax();

  console.log("✅ NextHub loaded (Autodesk Style)");
  console.log("🌐 Lang:", currentLang);
});