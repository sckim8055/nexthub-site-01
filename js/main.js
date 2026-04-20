/* ================================================================
   main.js — NextHub (Final v5 - Fixed)
   ================================================================ */

var currentLang = "en";

var LANG_NAMES = { en:"EN", ko:"KO", zh:"ZH" };
var LANG_FULL_NAMES = { en:"English", ko:"한국어", zh:"中文" };

var WORKER_ENDPOINT = "https://nexthub-mail-01.sckim805.workers.dev";

var turnstileToken = "";
var turnstileReady = false;


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

  var cur = document.getElementById("lang-current");
  if (cur) cur.textContent = LANG_NAMES[lang] || lang;

  document.querySelectorAll(".lang-option").forEach(function(o) {
    o.classList.toggle("active", o.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll(".mobile-lang-option").forEach(function(o) {
    o.classList.toggle("active", o.getAttribute("data-lang") === lang);
  });

  var ph = document.querySelector(".lang-panel-header span");
  if (ph) ph.textContent = ({en:"Select Language",ko:"언어 선택",zh:"选择语言"})[lang];

  var ml = document.querySelector(".mobile-lang-label");
  if (ml) ml.textContent = ({en:"Language",ko:"언어",zh:"语言"})[lang];

  closeLangDropdown();
  localStorage.setItem("nexthub-lang", lang);

  clearFieldErrors();
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
  var desktopLinks = document.querySelectorAll(".nav-links a[href^='#section']");
  var mobileLinks  = document.querySelectorAll(".nav-slide-links a[href^='#section']");
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


/* ================================================================
   2-B. 모바일 슬라이드 패널
   ================================================================ */
function initHamburger() {
  var hamburger = document.getElementById("nav-hamburger");
  var backdrop  = document.getElementById("nav-slide-backdrop");
  var panel     = document.getElementById("nav-slide-panel");
  var closeBtn  = document.getElementById("nav-slide-close");

  if (!hamburger || !panel || !backdrop) return;

  function openPanel() {
    hamburger.classList.add("open");
    backdrop.classList.add("open");
    panel.classList.add("open");
    document.body.classList.add("nav-panel-open");
  }

  function closePanel() {
    hamburger.classList.remove("open");
    backdrop.classList.remove("open");
    panel.classList.remove("open");
    document.body.classList.remove("nav-panel-open");
  }

  hamburger.addEventListener("click", function(e) {
    e.stopPropagation();
    if (panel.classList.contains("open")) {
      closePanel();
    } else {
      openPanel();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      closePanel();
    });
  }

  backdrop.addEventListener("click", function() {
    closePanel();
  });

  panel.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function() {
      closePanel();
    });
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && panel.classList.contains("open")) {
      closePanel();
    }
  });
}


/* ================================================================
   3. 메가메뉴 (데스크탑)
   ================================================================ */
function initMegaMenu() {
  document.querySelectorAll(".mega-link, .mega-cta-card a").forEach(function(link) {
    link.addEventListener("click", function() {
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

      var panel = document.getElementById("nav-slide-panel");
      if (panel && panel.classList.contains("open")) {
        document.getElementById("nav-hamburger").classList.remove("open");
        document.getElementById("nav-slide-backdrop").classList.remove("open");
        panel.classList.remove("open");
        document.body.classList.remove("nav-panel-open");
      }

      var navH = document.getElementById("nav-bar").offsetHeight;
      var pos = target.getBoundingClientRect().top + window.pageYOffset - navH;

      window.scrollTo({ top: pos, behavior: "smooth" });
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
   10. 🔒 CSRF 토큰 — 서버에서 발급받기
   ================================================================ */
function getCSRFToken() {
  return fetch(WORKER_ENDPOINT + "/csrf-token", {
    method: "GET",
    headers: { "Accept": "application/json" }
  })
  .then(function(res) {
    if (!res.ok) throw new Error("Token request failed: " + res.status);
    return res.json();
  });
}


/* ================================================================
   10-B. 🔒 Cloudflare Turnstile 콜백
   ================================================================ */
function onTurnstileSuccess(token) {
  turnstileToken = token;
  turnstileReady = true;
}

function onTurnstileExpired() {
  turnstileToken = "";
  turnstileReady = false;
  if (window.turnstile) {
    turnstile.reset();
  }
}

function onTurnstileError() {
  turnstileToken = "";
  turnstileReady = false;
}


/* ================================================================
   11. 🔒 커스텀 폼 유효성 검사
   ================================================================ */
function clearFieldErrors() {
  document.querySelectorAll(".field-error-msg").forEach(function(el) {
    el.remove();
  });
  document.querySelectorAll(".form-field-error").forEach(function(el) {
    el.classList.remove("form-field-error");
  });
}

function showFieldError(field, message) {
  field.closest(".form-group").classList.add("form-field-error");

  var errorEl = document.createElement("p");
  errorEl.className = "field-error-msg";
  errorEl.textContent = message;

  if (field.nextElementSibling && field.nextElementSibling.classList.contains("field-error-msg")) {
    field.nextElementSibling.remove();
  }
  field.parentNode.appendChild(errorEl);
}

function validateForm(form) {
  clearFieldErrors();

  var lang = CONTENT[currentLang] || CONTENT.en;
  var hasError = false;
  var firstErrorField = null;

  var nameField = document.getElementById("form-name");
  if (nameField && !nameField.value.trim()) {
    showFieldError(nameField, lang.form_valid_name);
    hasError = true;
    if (!firstErrorField) firstErrorField = nameField;
  }

  var companyField = document.getElementById("form-company");
  if (companyField && !companyField.value.trim()) {
    showFieldError(companyField, lang.form_valid_company);
    hasError = true;
    if (!firstErrorField) firstErrorField = companyField;
  }

  var emailField = document.getElementById("form-email");
  if (emailField) {
    if (!emailField.value.trim()) {
      showFieldError(emailField, lang.form_valid_email);
      hasError = true;
      if (!firstErrorField) firstErrorField = emailField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailField.value.trim())) {
      showFieldError(emailField, lang.form_valid_email_invalid);
      hasError = true;
      if (!firstErrorField) firstErrorField = emailField;
    }
  }

  if (firstErrorField) {
    firstErrorField.focus();
    firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return !hasError;
}


/* ================================================================
   ★★★ 12-B. 폼 사용자 필드만 수동 리셋 (NEW)
   ★★★ Turnstile 숨겨진 필드와 hidden 필드를 보호하기 위해
   ★★★ form.reset() 대신 이 함수를 사용
   ================================================================ */
function resetFormFields(form) {
  var fieldsToReset = [
    "form-name", "form-company", "form-email",
    "form-service", "form-size", "form-message"
  ];

  fieldsToReset.forEach(function(id) {
    var field = document.getElementById(id);
    if (field) {
      if (field.tagName === "SELECT") {
        field.selectedIndex = 0;
      } else {
        field.value = "";
      }
    }
  });

  // 파일 첨부 필드 리셋
  var attachment = document.getElementById("form-attachment");
  if (attachment) {
    attachment.value = "";
  }
}


/* ================================================================
   12. 🔒 문의 폼 (CSRF + Turnstile + 커스텀 유효성)
   ★★★ 수정: form.reset() → resetFormFields() + Turnstile 토큰 안전 처리
   ================================================================ */
function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var isSubmitting = false;

  form.querySelectorAll("input, textarea, select").forEach(function(field) {
    field.addEventListener("input", function() {
      var group = this.closest(".form-group");
      if (group) {
        group.classList.remove("form-field-error");
        var err = group.querySelector(".field-error-msg");
        if (err) err.remove();
      }
    });
    field.addEventListener("change", function() {
      var group = this.closest(".form-group");
      if (group) {
        group.classList.remove("form-field-error");
        var err = group.querySelector(".field-error-msg");
        if (err) err.remove();
      }
    });
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (isSubmitting) return;

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    // ★★★ content.js 참조 ★★★
    var t = CONTENT[currentLang] || CONTENT.en;

    if (submitBtn.disabled) return;

    if (!validateForm(form)) {
      return;
    }

    var langField = document.getElementById("form-lang");
    if (langField) langField.value = currentLang;

    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    // ★★★ Before: 인라인 3개국어 → After: content.js 참조 ★★★
    submitBtn.textContent = t.form_sending;

    isSubmitting = true;

    waitForTurnstileToken(5000).then(function(token) {

      if (!token) {
        // ★★★ Before: 인라인 3개국어 → After: content.js 참조 ★★★
        showFormMessage("error", t.form_turnstile_fail);
        return Promise.reject("no-turnstile");
      }

      var savedTurnstileToken = token;

      return getCSRFToken().then(function(data) {
        document.getElementById("form-ts").value = data.ts;
        document.getElementById("form-token").value = data.token;

        var endpoint = form.action;
        var fd = new FormData(form);
        fd.set("cf-turnstile-response", savedTurnstileToken);

        return fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { "Accept": "application/json" }
        });
      });
    })

    .then(function(response) {
      if (!response) return;

      if (response.ok) {
        showFormMessage("success");
        resetFormFields(form);
        clearFieldErrors();

        turnstileToken = "";
        turnstileReady = false;
        if (window.turnstile) {
          var turnstileEl = form.querySelector(".cf-turnstile");
          if (turnstileEl) turnstile.reset(turnstileEl);
          else turnstile.reset();
        }

      } else {
        return response.json().then(function(data) {
          var detail = "";
          if (data.errors) {
            detail = data.errors.map(function(err) {
              return err.message;
            }).join(", ");
          }

          if (data.error === "File too large" || data.error === "Invalid file type") {
            showFormMessage("warning", detail);

          } else if (data.error === "Invalid token" || data.error === "Token expired") {
            // ★★★ content.js 참조 ★★★
            showFormMessage("error", t.form_session_expired);

          } else if (data.error === "Too many requests") {
            // ★★★ content.js 참조 ★★★
            showFormMessage("error", t.form_rate_limit);

          } else if (data.error === "CAPTCHA verification failed") {
            // ★★★ content.js 참조 ★★★
            showFormMessage("error", t.form_captcha_fail);
            turnstileToken = "";
            turnstileReady = false;
            if (window.turnstile) {
              var te = form.querySelector(".cf-turnstile");
              if (te) turnstile.reset(te);
              else turnstile.reset();
            }

          } else {
            showFormMessage("error", detail);
          }
        });
      }
    })

    .catch(function(err) {
      if (err !== "no-turnstile") {
        showFormMessage("error");
      }
    })
    .finally(function() {
      isSubmitting = false;
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
    msg.innerHTML = CONTENT[currentLang]["form_success"]
      || '✅ <strong>Thank you!</strong> We received your inquiry and will respond within 1 business day.';

  } else if (type === "warning") {
    var warnKey = "form_warn_default";
    if (detail && detail.indexOf("10MB") >= 0) {
      warnKey = "form_warn_file_size";
    } else if (detail && (detail.indexOf("file type") >= 0 || detail.indexOf("Allowed") >= 0)) {
      warnKey = "form_warn_file_type";
    }
    msg.innerHTML = CONTENT[currentLang][warnKey]
      || '⚠️ <strong>Please check your file.</strong>';

  } else {
    if (detail) {
      var icon = document.createTextNode("❌ ");
      var strong = document.createElement("strong");
      strong.textContent = detail;
      msg.appendChild(icon);
      msg.appendChild(strong);
    } else {
      msg.innerHTML = CONTENT[currentLang]["form_error"]
        || '❌ <strong>Something went wrong.</strong> Please email us at <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>';
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
   13. 터치 감지
   ================================================================ */
function initTouchDetection() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
  }
}


/* ================================================================
   14. 뷰포트 높이
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
   15. 히어로 패럴랙스
   ================================================================ */
function initHeroParallax() {
  var hero = document.getElementById("section-hero");
  if (!hero) return;

  var cards = hero.querySelectorAll(".scene-card");
  var nodes = hero.querySelectorAll(".scene-node");

  if (window.innerWidth < 768) return;

  hero.addEventListener("mousemove", function(e) {
    var rect = hero.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
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
   16. 초기화
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
});