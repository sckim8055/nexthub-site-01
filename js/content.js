/* ================================================================
   content.js — 3개국어 텍스트 데이터
   
   ================================================================
   이 파일의 역할:
   - 웹사이트에 표시되는 모든 텍스트를 한곳에서 관리
   - 영어(en), 한국어(ko), 중국어(zh) 3개 언어 지원
   - 텍스트를 수정하고 싶으면 이 파일만 고치면 됨
   
   ================================================================
   사용 방법:
   - HTML에서 data-i18n="키이름" 속성을 붙이면
   - main.js가 이 파일에서 해당 키의 텍스트를 찾아서 넣어줌
   
   예시:
   HTML:  <h1 data-i18n="hero_headline">기본 텍스트</h1>
   여기:  hero_headline: "Your Dedicated IT Team in Korea"
   결과:  언어 전환 시 해당 언어 텍스트로 교체됨
   
   ================================================================
   주의:
   - 키 이름(hero_headline 등)은 HTML의 data-i18n 값과 정확히 같아야 함
   - 새 텍스트를 추가하면 en, ko, zh 3개 언어 모두에 넣어야 함
   ================================================================ */


const CONTENT = {

  /* ================================================================
     영어 (English)
     - 기본 언어
     - 외국 본사 IT 담당자, 글로벌 파트너가 주로 읽음
     - 톤: 전문적이고 명확한 비즈니스 영어
     ================================================================ */
  en: {

    /* ----------------------------------------
       내비게이션 바 — #nav-bar
       ---------------------------------------- */
    nav_services: "Services",
    nav_whyus: "Why Us",
    nav_clients: "Clients",
    nav_cases: "Case Studies",
    nav_process: "How We Work",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Get a Quote",

    /* ----------------------------------------
       히어로 섹션 — #section-hero
       ---------------------------------------- */
    hero_headline: "Your Dedicated IT Team<br>in Korea",
    hero_subtitle: "We run IT operations for multinational companies in Korea — so your HQ doesn't have to worry about the local side.",
    hero_badge_1: "Onsite & Remote Support",
    hero_badge_2: "Cybersecurity",
    hero_badge_3: "Consulting",
    hero_badge_4: "IT Outsourcing",
    hero_cta_1: "Explore Our Services",
    hero_cta_2: "Get a Free Consultation",
    hero_trust: "Trusted by MNCs across 6+ industries in Korea",

    /* ----------------------------------------
       고충 섹션 — #section-painpoints
       ---------------------------------------- */
    pain_title: "Challenges MNCs Face in Korea",
    pain_subtitle: "Sound familiar? You're not alone.",

    pain_1_title: "No Reliable Local IT Partner",
    pain_1_desc: "Your HQ needs someone on the ground in Korea who understands global IT standards — but finding that person is harder than expected.",

    pain_2_title: "No Onsite IT Presence",
    pain_2_desc: "When a network goes down or a laptop breaks in Seoul, your European or US helpdesk can't fix it remotely at 3am their time.",

    pain_3_title: "Language & Vendor Barrier",
    pain_3_desc: "Korean telecom setup, vendor contracts, government compliance — all require native Korean. And your HQ needs reports in English or Chinese.",

    pain_4_title: "Too Small for a Dedicated IT Team",
    pain_4_desc: "Your Korea office has 5 to 50 people. Hiring a full-time IT manager doesn't make sense — but going without IT support isn't an option either.",

    pain_answer: "That's exactly why NextHub exists.",
    pain_link: "See how →",

    /* ----------------------------------------
       서비스 섹션 — #section-services
       ---------------------------------------- */
    svc_title: "Our Services",
    svc_subtitle: "End-to-end IT services built for multinational companies operating in Korea",

    // 서비스 1: IT 현장·원격 지원
    svc_1_title: "IT Onsite & Remote Support",
    svc_1_summary: "We put a dedicated IT engineer in your Korea office — someone who speaks your language and follows your HQ's standards.",
    svc_1_f1: "L1/L2 helpdesk — PC, network, printer, software issues",
    svc_1_f2: "Ticket management on ServiceNow or your existing ITSM tool",
    svc_1_f3: "Flexible engagement: full-time, scheduled visits, or remote",
    svc_1_f4: "Wifi survey, server room check, IT equipment dispatch",
    svc_1_f5: "New hire IT setup & offboarding asset collection",

    // 서비스 2: 사이버 보안
    svc_2_title: "Cybersecurity & Compliance",
    svc_2_summary: "We make sure your Korea office meets HQ security policies and local regulations — without your HQ needing to micromanage it.",
    svc_2_f1: "Endpoint protection rollout and daily monitoring",
    svc_2_f2: "Network vulnerability scanning & remediation",
    svc_2_f3: "HQ security policy localization & enforcement",
    svc_2_f4: "Security incident handling & root cause reporting",
    svc_2_f5: "Staff security training (phishing, data handling, etc.)",

    // 서비스 3: 컨설팅 & PM
    svc_3_title: "IT Consulting & Project Management",
    svc_3_summary: "Need to launch a new system, migrate platforms, or align Korea IT with global strategy? We manage it end to end.",
    svc_3_f1: "IT roadmap planning aligned with HQ strategy",
    svc_3_f2: "System integration (SI) project execution",
    svc_3_f3: "Requirements gathering & business process analysis",
    svc_3_f4: "PMO operation, budget planning (CAPEX/OPEX)",
    svc_3_f5: "Local vendor sourcing, evaluation & management",

    // 서비스 4: 아웃소싱
    svc_4_title: "IT Outsourcing & SPOC",
    svc_4_summary: "Don't need a full IT department? We act as your Korea IT team — handling everything from daily ops to HQ reporting under one contract.",
    svc_4_f1: "Full or partial IT operations takeover",
    svc_4_f2: "SPOC: one contact for everything IT in Korea",
    svc_4_f3: "Infra, cloud & network managed services",
    svc_4_f4: "Monthly operations report & SLA dashboard",
    svc_4_f5: "Trilingual HQ communication (KR / EN / CN)",

    /* ----------------------------------------
       왜 넥스트허브인가 — #section-whyus
       ---------------------------------------- */
    why_title: "Why NextHub",
    why_subtitle: "What makes us different from typical IT outsourcing firms",

    why_1_title: "Trilingual by Default",
    why_1_desc: "Every engagement is covered in Korean, English, and Chinese. No extra cost, no third-party translators. Your HQ call at 9am? We're on it in their language.",

    why_2_title: "We've Sat on Your Side of the Table",
    why_2_desc: "Our team has worked inside global IT organizations across APAC. We know what HQ expects in a Monday morning report and what the Korea office actually needs on a Friday afternoon.",

    why_3_title: "More Than Break-Fix",
    why_3_desc: "Most IT vendors stop at fixing problems. We also help you plan IT strategy, deliver projects, and turn data into dashboards. One team, full spectrum.",

    why_4_title: "Transparent & Process-Driven",
    why_4_desc: "We run ServiceNow, follow ISO-aligned workflows, and share SLA dashboards monthly. You always know what we're doing and how we're performing.",

    why_5_title: "Right-Sized, Right-Priced",
    why_5_desc: "Big outsourcing firms charge big overhead. We deliver senior-level work at a fraction of the cost — and our contracts flex to your actual needs.",

    why_6_title: "One Vendor, Full Coverage",
    why_6_desc: "IT support, security, consulting, and outsourcing — four services, one contract, one point of contact. No more juggling multiple vendors.",

    /* ----------------------------------------
       실적 숫자 — #section-metrics
       ---------------------------------------- */
    metrics_title: "Our Track Record",
    metrics_years: "Years of Combined IT Experience",
    metrics_projects: "Projects Delivered",
    metrics_clients: "MNC Clients Served",
    metrics_industries: "Industries Covered",
    metrics_response: "Avg. Response Time",
    metrics_retention: "Client Retention Rate",

    /* ----------------------------------------
       클라이언트 — #section-clients
       ---------------------------------------- */
    clients_title: "Trusted by Leading MNCs",
    clients_subtitle: "We serve multinational corporations across diverse industries in Korea",

    client_1: "Global Pharmaceutical Company",
    client_2: "European Auto Parts Manufacturer",
    client_3: "Global Electronics Corporation",
    client_4: "Medical Device MNC",
    client_5: "Leading Beauty & Retail Enterprise",
    client_6: "Global Retail Chain",
    client_7: "Japanese Manufacturing Company",

    industries_title: "Industries We Serve",
    ind_pharma: "Pharmaceutical",
    ind_auto: "Automotive",
    ind_electronics: "Electronics",
    ind_medical: "Medical Device",
    ind_beauty: "Beauty & Retail",
    ind_manufacturing: "Manufacturing",
    ind_education: "Education",
    ind_finance: "Finance",

    /* ----------------------------------------
       케이스 스터디 — #section-cases
       ---------------------------------------- */
    cases_title: "Case Studies",
    cases_subtitle: "Real results for real MNCs in Korea",

    // 공통 라벨 (Challenge / Solution / Result)
    case_challenge: "Challenge",
    case_solution: "What We Did",
    case_result: "Result",

    // 케이스 1: 제약사
    case_1_badge: "IT Support",
    case_1_industry: "Global Pharmaceutical Company",
    case_1_title: "Closing the 8-Hour Response Gap",
    case_1_challenge: "30-person Korea office, no local IT. European HQ helpdesk took 8+ hours to respond due to timezone gap.",
    case_1_solution: "NextHub deployed a bilingual engineer onsite 3 days/week plus always-on remote support. All tickets managed via ServiceNow with SLA tracking and monthly HQ reports.",
    case_1_result: "Response: 8h → 2h. Staff satisfaction up 40%. Zero SLA breaches in 12 months.",

    // 케이스 2: 자동차 부품
    case_2_badge: "Support + Outsourcing",
    case_2_industry: "European Auto Parts Manufacturer",
    case_2_title: "Korea Office Up and Running in 4 Weeks",
    case_2_challenge: "New 20-seat Korea office needed full IT infrastructure in 4 weeks. HQ had zero local vendor contacts and couldn't navigate Korean telecom or procurement processes.",
    case_2_solution: "NextHub managed everything: ISP contract, network architecture, PC and peripheral sourcing, security setup, and full installation. One local project manager handling all Korean vendors on behalf of HQ.",
    case_2_result: "Office fully operational in 4 weeks. 15% under budget. Ongoing managed support contract signed.",

    // 케이스 3: 리테일
    case_3_badge: "IT Support",
    case_3_industry: "Global Retail Chain",
    case_3_title: "Multi-Store IT That Runs Before You Open",
    case_3_challenge: "Multiple Korea stores needed reliable IT for POS, network, and in-store devices. Previous vendor was slow and couldn't report to regional HQ in English.",
    case_3_solution: "NextHub assigned engineers for scheduled store visits and emergency dispatch. Standardized IT configurations across all locations and provided weekly English reports to regional HQ.",
    case_3_result: "Store IT downtime cut 60%. All issues resolved before business hours. Expanded from 3 to 8 stores.",

    // 케이스 4: 의료기기
    case_4_badge: "IT Outsourcing",
    case_4_industry: "Medical Device MNC",
    case_4_title: "NextHub Became Their Korea IT Department",
    case_4_challenge: "10-person Korea branch. No budget for full-time IT, but HQ demanded professional operations and strict security compliance.",
    case_4_solution: "NextHub became the IT SPOC — covering infrastructure, endpoint security, vendor coordination, procurement, and monthly English reporting to APAC HQ.",
    case_4_result: "IT cost down 30%. Korea rated \"best-in-class\" for IT compliance in Asia. Contract renewed 3rd year.",

    // 케이스 5: eCommerce
    case_5_badge: "Consulting",
    case_5_industry: "Beauty & Retail Enterprise",
    case_5_title: "eCommerce Platform Delivered On Time",
    case_5_challenge: "Large-scale eCommerce system integration with 4 development vendors. Tight deadline, and the client had no PM experienced enough to coordinate all moving parts.",
    case_5_solution: "NextHub stepped in as PM/PMO — led requirements workshops, coordinated all vendors, oversaw QA cycles, and executed go-live. Weekly status reports to executive stakeholders in English.",
    case_5_result: "Launched on schedule. Handled 3x projected traffic on first campaign — zero downtime. Platform stabilized within 2 weeks.",

    // 케이스 6: 제조 공장
    case_6_badge: "IT Support",
    case_6_industry: "Japanese Manufacturer",
    case_6_title: "Factory IT Without a Full-Time Engineer",
    case_6_challenge: "Korea factory needed periodic server checks, network maintenance, and equipment setup — but the workload didn't justify a full-time IT hire.",
    case_6_solution: "NextHub provided bi-weekly scheduled dispatch plus on-call emergency support. Covered servers, network, endpoints, and production system connectivity. All work logged and reported in English to Japan HQ.",
    case_6_result: "Maintenance cost down 40% vs. previous full-time arrangement. Zero unplanned production downtime for 12 months.",

    /* ----------------------------------------
       프로세스 — #section-process
       ---------------------------------------- */
    process_title: "How We Work",
    process_subtitle: "A clear, structured process from first contact to ongoing operations",

    step_1_title: "Discovery Call",
    step_1_desc: "Tell us about your Korea IT situation. We listen, ask the right questions, and figure out if we're a good fit. No cost, no strings attached.",

    step_2_title: "Assessment & Proposal",
    step_2_desc: "We evaluate your current setup — onsite or remote — identify gaps, and deliver a clear proposal: scope, SLA, timeline, and pricing. No surprises.",

    step_3_title: "Onboarding",
    step_3_desc: "Once agreed, we hit the ground in 1–2 weeks. We set up monitoring tools, get system access, and introduce our team to your HQ IT contacts.",

    step_4_title: "Execution",
    step_4_desc: "We deliver services under agreed SLAs. Every task is ticketed, tracked, and documented. You see exactly what we're doing — no black boxes.",

    step_5_title: "Review & Optimize",
    step_5_desc: "Monthly or quarterly business reviews with KPI dashboards. We talk about what's working, what can improve, and adjust as your needs evolve.",

    /* ----------------------------------------
       회사 소개 — #section-about
       ---------------------------------------- */
    about_title: "About NextHub",

    about_mission_title: "Why We Exist",
    about_mission_text: "NextHub was built to solve one problem: multinational companies in Korea deserve a local IT partner that actually gets how global organizations work. We're not a generic IT vendor. We're the team that bridges your HQ and Korea operations — in the language your people speak, with the process your HQ trusts.",

    about_team_title: "Our Team",
    about_team_text: "Our consultant network spans infrastructure, security, project management, and IT operations — all with hands-on experience serving multinationals in Korea and across APAC. We staff each engagement with the right people for the job.",
    about_team_1: "Consultants from leading global IT companies and top-tier system integrators",
    about_team_2: "Decades of combined MNC IT service experience in APAC",
    about_team_3: "Certified professionals: ITSM, project management, security",
    about_team_4: "Native-level Korean, English, and Chinese",

    about_coverage_title: "Where We Operate",
    about_cov_primary_label: "Primary:",
    about_cov_primary: "Seoul Metropolitan Area & all major Korean cities",
    about_cov_extended_label: "Extended:",
    about_cov_extended: "Remote support available across APAC",
    about_cov_scale_label: "Scale:",
    about_cov_scale: "From 5-person branch offices to 500+ employee sites",

    /* ----------------------------------------
       FAQ — #section-faq
       ---------------------------------------- */
    faq_title: "Frequently Asked Questions",

    faq_1_q: "What types of contracts do you offer?",
    faq_1_a: "We offer monthly retainers, annual contracts, and per-project engagements. We design the structure around your budget and needs — not the other way around.",

    faq_2_q: "Is there a minimum contract period?",
    faq_2_a: "For managed services, we recommend at least 3 months so we can properly onboard and show results. Project work is scoped individually — no minimum.",

    faq_3_q: "Our Korea office is really small. Can you help?",
    faq_3_a: "Absolutely. Many of our clients are small Korea branches — 5 to 20 people. We right-size the service so you only pay for what you actually need.",

    faq_4_q: "Can you talk directly to our HQ?",
    faq_4_a: "Yes — that's one of our core strengths. Our team joins global IT calls, submits reports in English or Chinese, and works inside your HQ's ITSM platform daily.",

    faq_5_q: "Can we start small and add services later?",
    faq_5_a: "Of course. Most clients actually start with one service — usually IT support — and expand as they see results. No pressure, no upselling.",

    faq_6_q: "How fast do you respond?",
    faq_6_a: "For onsite support clients, we average under 4 hours during business hours. Critical issues are escalated immediately — regardless of the clock.",

    faq_7_q: "Do you use our existing ITSM tools?",
    faq_7_a: "Yes. We have hands-on experience with ServiceNow, Jira, Freshdesk, and others. We plug into your HQ's existing tools and workflows — no need to change anything.",

    /* ----------------------------------------
       서비스 확장 예고 — #section-coming-soon
       ---------------------------------------- */
    coming_title: "Expanding Our Services",
    coming_subtitle: "We're growing to cover more of your IT needs.",
    coming_1_title: "Data Analytics & BI",
    coming_1_desc: "Dashboards, ETL pipelines, and self-service BI — turning scattered data into clear decisions.",
    coming_cta: "Request Early Access",

    /* ----------------------------------------
       문의하기 — #section-contact
       ---------------------------------------- */
    contact_title: "Let's Discuss Your IT Needs",
    contact_subtitle: "Tell us about your Korea IT challenges. Our team will get back to you within one business day.",

    // 폼 라벨
    form_name: "Your Name *",
    form_company: "Company *",
    form_email: "Business Email *",
    form_service: "Service Interest",
    form_svc_default: "Select a service",
    form_svc_1: "IT Onsite / Remote Support",
    form_svc_2: "Cybersecurity & Compliance",
    form_svc_3: "IT Consulting & PM",
    form_svc_4: "IT Outsourcing",
    form_svc_5: "Not Sure / Multiple",
    form_size: "Korea Office Size",
    form_size_default: "Select range",
    form_size_1: "1 – 10 employees",
    form_size_2: "11 – 50 employees",
    form_size_3: "51 – 200 employees",
    form_size_4: "200+ employees",
    form_message: "How can we help?",
    form_attachment: "Attachment (Optional)",
    form_file_note: "Max 10MB. PDF, DOC, XLS, PPT, Images, TXT, ZIP",
    form_submit: "Send Inquiry",
    form_note: "🔒 Your information is confidential. We respond within 1 business day.",
    form_success: '✅ <strong>Thank you!</strong> We received your inquiry and will respond within 1 business day.',
    form_error: '❌ <strong>Something went wrong.</strong> Please email us at <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>',
    form_warn_file_size: "⚠️ <strong>File size must be under 10MB.</strong> Please select a smaller file.",
    form_warn_file_type: "⚠️ <strong>This file type is not supported.</strong> Allowed: PDF, DOC, XLS, PPT, Images, TXT, ZIP",
    form_warn_default: "⚠️ <strong>Please check your file.</strong>",

    // 직접 연락처
    contact_direct_title: "Prefer to reach us directly?",
    contact_email_label: "Business Inquiries",
    contact_phone_label: "Office",
    contact_location_label: "Location",
    contact_location: "Seoul, South Korea",
    contact_hours_label: "Business Hours",
    contact_hours: "Mon–Fri, 09:00–18:00 KST",

    /* ----------------------------------------
       푸터 — #footer
       ---------------------------------------- */
    footer_tagline: "Your Dedicated IT Team in Korea",
    footer_location: "Seoul, South Korea",
    footer_services: "Services",
    footer_svc_1: "Onsite & Remote Support",
    footer_svc_2: "Cybersecurity & Compliance",
    footer_svc_3: "Consulting & PM",
    footer_svc_4: "IT Outsourcing",
    footer_company: "Company",
    footer_about: "About Us",
    footer_cases: "Case Studies",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_reach: "Contact",
    footer_copyright: "© 2025 NextHub. All rights reserved."
  },


  /* ================================================================
     한국어
     - 한국 법인 담당자, 총무, IT 관리자가 주로 읽음
     - 톤: 신뢰감 있는 비즈니스 격식체 (~합니다)
     - 한국 IT업계에서 실제로 쓰는 용어 사용
     ================================================================ */
  ko: {

    /* ----------------------------------------
       내비게이션 바
       ---------------------------------------- */
    nav_services: "서비스",
    nav_whyus: "왜 넥스트허브",
    nav_clients: "고객사",
    nav_cases: "서비스 사례",
    nav_process: "진행 절차",
    nav_about: "회사 소개",
    nav_faq: "FAQ",
    nav_contact: "문의하기",

    /* ----------------------------------------
       히어로 섹션
       ---------------------------------------- */
    hero_headline: "한국 IT 운영,<br>넥스트허브에 맡기세요",
    hero_subtitle: "다국적 기업의 한국 지사 IT를 통합 운영합니다. 본사가 현지 IT를 걱정할 필요가 없도록.",
    hero_badge_1: "현장·원격 지원",
    hero_badge_2: "사이버 보안",
    hero_badge_3: "컨설팅",
    hero_badge_4: "IT 아웃소싱",
    hero_cta_1: "서비스 알아보기",
    hero_cta_2: "무료 상담 신청",
    hero_trust: "국내 6개 이상 산업군의 글로벌 기업이 이용 중",

    /* ----------------------------------------
       고충 섹션
       ---------------------------------------- */
    pain_title: "한국 진출 외국기업의 IT 고충",
    pain_subtitle: "혹시 이런 상황이신가요?",

    pain_1_title: "믿고 맡길 현지 IT 파트너가 없다",
    pain_1_desc: "본사 IT 정책을 이해하면서 한국 현지 사정도 아는 파트너, 생각보다 찾기 어렵습니다.",

    pain_2_title: "현장에서 바로 대응할 IT 인력이 없다",
    pain_2_desc: "서울 사무실에서 네트워크 장애나 PC 고장이 나면, 시차 때문에 본사 헬프데스크 대응은 한참 걸립니다.",

    pain_3_title: "한국 벤더와 소통이 안 된다",
    pain_3_desc: "통신사 설치, 벤더 계약, 정부 인허가 — 전부 한국어가 필요합니다. 그런데 본사에는 영어나 중국어로 보고해야 하죠.",

    pain_4_title: "전담 IT팀을 두기엔 규모가 애매하다",
    pain_4_desc: "5~50명 규모의 한국 지사. 정규 IT 인력을 뽑기엔 부담이지만, IT 없이 운영할 수도 없는 상황입니다.",

    pain_answer: "넥스트허브가 바로 이 문제를 해결합니다.",
    pain_link: "서비스 보기 →",

    /* ----------------------------------------
       서비스 섹션
       ---------------------------------------- */
    svc_title: "서비스 소개",
    svc_subtitle: "한국에서 운영되는 다국적 기업을 위한 맞춤형 IT 서비스",

    svc_1_title: "IT 현장·원격 지원",
    svc_1_summary: "한국 사무실에 전담 IT 엔지니어를 배치합니다. 본사 기준에 맞춰 일하고, 한/영/중으로 소통합니다.",
    svc_1_f1: "L1/L2 헬프데스크 — PC, 네트워크, 프린터, 소프트웨어 대응",
    svc_1_f2: "ServiceNow 또는 기존 ITSM 도구를 활용한 티켓 관리",
    svc_1_f3: "상주, 정기 방문, 원격 등 유연한 운영 방식",
    svc_1_f4: "Wifi 환경 조사, 서버룸 점검, IT 장비 디스패치",
    svc_1_f5: "신규 입사자 IT 세팅 & 퇴사자 자산 회수",

    svc_2_title: "사이버 보안 & 컴플라이언스",
    svc_2_summary: "한국 지사의 보안 환경을 본사 정책과 국내 법규에 맞게 구축·관리합니다. 본사가 일일이 챙기지 않아도 됩니다.",
    svc_2_f1: "단말 보안 솔루션 배포 및 일상 모니터링",
    svc_2_f2: "네트워크 취약점 점검 및 조치",
    svc_2_f3: "본사 보안 정책의 현지 적용 및 이행",
    svc_2_f4: "보안 사고 대응 및 원인 분석 보고",
    svc_2_f5: "직원 보안 교육 (피싱, 데이터 관리 등)",

    svc_3_title: "IT 컨설팅 & 프로젝트 매니지먼트",
    svc_3_summary: "신규 시스템 도입, 플랫폼 전환, 글로벌 IT 전략에 맞춘 한국 IT 정비 — 기획부터 완료까지 책임집니다.",
    svc_3_f1: "본사 전략에 맞춘 IT 로드맵 수립",
    svc_3_f2: "SI(시스템 통합) 프로젝트 실행",
    svc_3_f3: "요구사항 수집 및 업무 프로세스 분석",
    svc_3_f4: "PMO 운영, 예산 계획(CAPEX/OPEX)",
    svc_3_f5: "국내 벤더 발굴, 평가, 관리",

    svc_4_title: "IT 아웃소싱 & 단일 창구(SPOC)",
    svc_4_summary: "IT 부서를 따로 둘 필요 없습니다. 일상 운영부터 본사 보고까지, 하나의 계약으로 한국 IT 전체를 운영합니다.",
    svc_4_f1: "IT 운영 전체 또는 일부 위탁",
    svc_4_f2: "한국 IT 관련 모든 건의 단일 창구",
    svc_4_f3: "인프라, 클라우드, 네트워크 관리 운영",
    svc_4_f4: "월간 운영 보고서 및 SLA 대시보드 제공",
    svc_4_f5: "본사 커뮤니케이션 한/영/중 대응",

    /* ----------------------------------------
       왜 넥스트허브인가
       ---------------------------------------- */
    why_title: "왜 넥스트허브인가",
    why_subtitle: "일반적인 IT 아웃소싱 업체와 다른 점",

    why_1_title: "3개국어는 기본입니다",
    why_1_desc: "모든 서비스가 한국어·영어·중국어로 제공됩니다. 추가 비용도, 별도 통역도 필요 없습니다. 본사에서 아침 9시에 전화 오면, 그 나라 말로 바로 대응합니다.",

    why_2_title: "우리는 같은 자리에 앉아봤습니다",
    why_2_desc: "넥스트허브 팀은 APAC 글로벌 IT 조직 내부에서 일한 경험이 있습니다. 월요일 아침 본사가 기대하는 보고서가 뭔지, 금요일 오후 한국 현장에서 실제로 필요한 게 뭔지 압니다.",

    why_3_title: "고장 수리 그 이상입니다",
    why_3_desc: "대부분의 IT 업체는 문제 해결에서 끝납니다. 넥스트허브는 IT 전략 수립, 프로젝트 수행, 데이터 대시보드 구축까지 한 팀이 해냅니다.",

    why_4_title: "투명하고 체계적인 운영",
    why_4_desc: "ServiceNow 기반 운영, ISO 수준의 워크플로우, 월간 SLA 대시보드 공유. 우리가 무엇을 하고 있고, 성과가 어떤지 항상 확인할 수 있습니다.",

    why_5_title: "규모에 맞는, 합리적인 비용",
    why_5_desc: "대형 아웃소싱 업체는 관리 비용부터 다릅니다. 넥스트허브는 시니어급 서비스를 훨씬 합리적인 비용에 제공하며, 계약도 실제 필요에 맞게 유연하게 구성합니다.",

    why_6_title: "업체 하나로 끝",
    why_6_desc: "IT 지원, 보안, 컨설팅, 아웃소싱 — 네 가지 서비스를 하나의 계약, 하나의 창구로. 여러 업체 관리하느라 고생할 필요 없습니다.",

    /* ----------------------------------------
       실적 숫자
       ---------------------------------------- */
    metrics_title: "넥스트허브 실적",
    metrics_years: "IT 서비스 통합 경력",
    metrics_projects: "수행 완료 프로젝트",
    metrics_clients: "서비스 제공 다국적 기업",
    metrics_industries: "서비스 산업군",
    metrics_response: "평균 응답 시간",
    metrics_retention: "고객 유지율",

    /* ----------------------------------------
       클라이언트
       ---------------------------------------- */
    clients_title: "글로벌 기업들이 신뢰합니다",
    clients_subtitle: "다양한 산업군의 한국 진출 다국적 기업에 서비스를 제공합니다",

    client_1: "글로벌 제약사",
    client_2: "유럽계 자동차 부품 제조사",
    client_3: "글로벌 전자 기업",
    client_4: "글로벌 의료기기 기업",
    client_5: "뷰티·리테일 대기업",
    client_6: "글로벌 리테일 체인",
    client_7: "일본계 제조기업",

    industries_title: "서비스 산업군",
    ind_pharma: "제약",
    ind_auto: "자동차",
    ind_electronics: "전자",
    ind_medical: "의료기기",
    ind_beauty: "뷰티·리테일",
    ind_manufacturing: "제조",
    ind_education: "교육",
    ind_finance: "금융",

    /* ----------------------------------------
       케이스 스터디
       ---------------------------------------- */
    cases_title: "서비스 사례",
    cases_subtitle: "한국 내 다국적 기업의 실제 성과",

    case_challenge: "상황",
    case_solution: "넥스트허브의 대응",
    case_result: "성과",

    case_1_badge: "IT 지원",
    case_1_industry: "글로벌 제약사 한국 지사",
    case_1_title: "응답 시간 8시간에서 2시간으로",
    case_1_challenge: "30명 규모 한국 지사에 IT 인력 전무. 유럽 본사 헬프데스크는 시차 때문에 응답까지 8시간 이상 소요.",
    case_1_solution: "넥스트허브가 바이링구얼 엔지니어를 주 3일 상주 배치하고, 상시 원격 지원을 병행. ServiceNow로 전체 티켓을 SLA 기준으로 관리하며 본사에 월간 보고.",
    case_1_result: "응답 시간 8h→2h. 직원 만족도 40% 향상. 12개월간 SLA 위반 0건.",

    case_2_badge: "지원 + 아웃소싱",
    case_2_industry: "유럽계 자동차 부품 제조사",
    case_2_title: "한국 사무소, 4주 만에 IT 구축 완료",
    case_2_challenge: "20인 규모 한국 사무소 신규 오픈. 4주 내 IT 인프라 전체 필요. 본사는 한국 벤더 접점도, 통신사 계약 경험도 없는 상황.",
    case_2_solution: "ISP 계약, 네트워크 설계, PC·주변기기 조달, 보안 구축, 설치까지 넥스트허브가 일괄 수행. 본사 대신 한국 벤더 전체를 관리하는 단일 프로젝트 매니저 역할.",
    case_2_result: "4주 내 오피스 IT 완비. 예산 대비 15% 절감. 지속 운영 지원 계약 체결.",

    case_3_badge: "IT 지원",
    case_3_industry: "글로벌 리테일 체인",
    case_3_title: "매장 오픈 전에 IT 이슈 해결 완료",
    case_3_challenge: "한국 내 다수 매장에서 POS, 네트워크, 매장 기기의 안정적 IT 지원 필요. 기존 업체는 대응이 느리고, 리전 본사에 영어 보고가 안 되는 상황.",
    case_3_solution: "정기 매장 방문 엔지니어 배치 + 긴급 디스패치 체제 구축. 전 매장 IT 환경 표준화. 리전 본사에 주간 영문 리포트 제출.",
    case_3_result: "매장 IT 다운타임 60% 감소. 모든 이슈 영업시간 전 해결. 3개→8개 매장으로 확대.",

    case_4_badge: "IT 아웃소싱",
    case_4_industry: "글로벌 의료기기 기업",
    case_4_title: "넥스트허브가 곧 한국 IT 부서",
    case_4_challenge: "10명 규모 한국 지사. 정규 IT 채용 예산 없음. 본사는 전문 운영과 엄격한 보안 컴플라이언스 요구.",
    case_4_solution: "넥스트허브가 IT SPOC으로서 인프라, 단말 보안, 벤더 관리, 조달, 아태 본사 월간 영문 보고를 전담 수행.",
    case_4_result: "IT 운영비 30% 절감. 아시아 지역 IT 컴플라이언스 최우수 평가. 3년차 계약 갱신.",

    case_5_badge: "컨설팅",
    case_5_industry: "뷰티·리테일 대기업",
    case_5_title: "eCommerce 플랫폼, 일정 내 성공 오픈",
    case_5_challenge: "4개 개발 벤더가 참여하는 대규모 eCommerce SI 프로젝트. 촉박한 일정 속에서 전체를 조율할 숙련된 PM이 부재.",
    case_5_solution: "넥스트허브가 PM/PMO로 투입. 요구사항 워크숍 주관, 전체 벤더 조율, QA 관리, 오픈 실행까지 전담. 경영진에게 주간 영문 보고.",
    case_5_result: "일정 내 오픈 완료. 첫 프로모션에서 예상 3배 트래픽 처리, 다운타임 제로. 2주 내 안정화.",

    case_6_badge: "IT 지원",
    case_6_industry: "일본계 제조기업",
    case_6_title: "상주 인력 없이 공장 IT 안정 운영",
    case_6_challenge: "한국 공장에 서버 점검, 네트워크 유지보수, 장비 설치 등 정기 IT 작업 필요. 그러나 상시 인력을 둘 만큼의 업무량은 아닌 상황.",
    case_6_solution: "넥스트허브가 격주 정기 디스패치 + 긴급 온콜 지원 체제를 구축. 서버, 네트워크, 단말, 생산 시스템 연결을 관리. 일본 본사에 영문 보고.",
    case_6_result: "이전 상주 인력 대비 유지보수 비용 40% 절감. 12개월간 비계획 생산 다운타임 0건.",

    /* ----------------------------------------
       프로세스
       ---------------------------------------- */
    process_title: "서비스 진행 절차",
    process_subtitle: "첫 상담부터 지속 운영까지, 명확하고 체계적인 프로세스",

    step_1_title: "상담",
    step_1_desc: "한국 IT 현황을 알려주세요. 경청하고, 핵심 질문을 드리고, 저희가 적합한지 판단합니다. 비용도 부담도 없습니다.",

    step_2_title: "현황 진단 & 제안",
    step_2_desc: "현재 IT 환경을 방문 또는 원격으로 진단하고, 개선점을 도출한 뒤 범위·SLA·일정·비용이 명확한 제안서를 드립니다. 숨겨진 비용은 없습니다.",

    step_3_title: "온보딩",
    step_3_desc: "계약 후 1~2주 내 서비스를 시작합니다. 모니터링 도구 세팅, 시스템 접근 권한 확보, 본사 IT 담당자와 인사까지 진행합니다.",

    step_4_title: "실행",
    step_4_desc: "합의된 SLA에 따라 서비스를 수행합니다. 모든 작업은 티켓으로 추적·기록됩니다. 블랙박스 없이 투명하게 운영합니다.",

    step_5_title: "리뷰 & 개선",
    step_5_desc: "월간 또는 분기별 비즈니스 리뷰를 KPI 대시보드와 함께 진행합니다. 성과를 점검하고, 개선점을 찾고, 변화하는 요구에 맞춰 조정합니다.",

    /* ----------------------------------------
       회사 소개
       ---------------------------------------- */
    about_title: "넥스트허브 소개",

    about_mission_title: "넥스트허브가 하는 일",
    about_mission_text: "넥스트허브는 하나의 문제를 풀기 위해 만들어졌습니다. 한국에 진출한 다국적 기업에게는 글로벌 조직의 운영 방식을 진짜 이해하는 현지 IT 파트너가 필요합니다. 우리는 평범한 IT 업체가 아닙니다. 현장 사람들이 쓰는 언어로 소통하고, 본사가 신뢰할 수 있는 프로세스로 운영합니다. 본사와 한국을 연결하는 팀입니다.",

    about_team_title: "넥스트허브 팀",
    about_team_text: "넥스트허브의 컨설턴트 네트워크는 인프라, 보안, 프로젝트 관리, IT 운영 분야를 아우릅니다. 모두 한국과 APAC에서 다국적 기업을 직접 서비스한 경험을 갖추고 있으며, 프로젝트마다 최적의 인력을 배치합니다.",
    about_team_1: "글로벌 IT 기업 및 대형 SI 출신 컨설턴트",
    about_team_2: "APAC 다국적 기업 IT 서비스 수십 년 통합 경험",
    about_team_3: "ITSM, 프로젝트 관리, 보안 분야 인증 전문가",
    about_team_4: "한국어·영어·중국어 네이티브 수준 구사",

    about_coverage_title: "서비스 지역",
    about_cov_primary_label: "주요:",
    about_cov_primary: "수도권 및 전국 주요 도시",
    about_cov_extended_label: "확장:",
    about_cov_extended: "APAC 전역 원격 지원 가능",
    about_cov_scale_label: "규모:",
    about_cov_scale: "5인 지사부터 500인 이상 사업장까지",

    /* ----------------------------------------
       FAQ
       ---------------------------------------- */
    faq_title: "자주 묻는 질문",

    faq_1_q: "어떤 계약 방식이 있나요?",
    faq_1_a: "월 단위 리테이너, 연간 계약, 프로젝트 단위 계약을 모두 지원합니다. 고객 예산과 필요에 맞춰 설계하지, 우리 방식을 강요하지 않습니다.",

    faq_2_q: "최소 계약 기간이 있나요?",
    faq_2_a: "관리형 서비스는 온보딩과 성과 확인을 위해 최소 3개월을 권장합니다. 프로젝트 단위 업무는 최소 기간 없이 건별로 범위를 정합니다.",

    faq_3_q: "한국 오피스가 정말 소규모인데 가능한가요?",
    faq_3_a: "물론 가능합니다. 실제로 많은 고객이 5~20명 규모의 소규모 한국 지사입니다. 서비스를 규모에 맞게 설계해서 필요한 만큼만 비용을 내시면 됩니다.",

    faq_4_q: "본사 IT 팀과 직접 소통이 되나요?",
    faq_4_a: "네 — 그게 넥스트허브의 핵심 강점입니다. 글로벌 IT 회의에 직접 참여하고, 영어 또는 중국어로 보고서를 제출하며, 본사 ITSM 플랫폼에서 매일 업무합니다.",

    faq_5_q: "하나의 서비스로 시작해서 나중에 추가할 수 있나요?",
    faq_5_a: "당연합니다. 대부분의 고객이 IT 지원 하나로 시작해서 성과를 보고 확대합니다. 억지로 추가 서비스를 권하지 않습니다.",

    faq_6_q: "응답 속도는 어떤가요?",
    faq_6_a: "상주 지원 고객 기준, 업무시간 중 평균 4시간 이내에 대응합니다. 긴급 이슈는 시간에 관계없이 즉시 에스컬레이션됩니다.",

    faq_7_q: "저희가 쓰는 ITSM 도구를 같이 쓸 수 있나요?",
    faq_7_a: "네. ServiceNow, Jira, Freshdesk 등 주요 플랫폼을 실무에서 사용해왔습니다. 본사의 기존 도구와 워크플로우에 맞춰 투입되므로, 바꿀 게 없습니다.",

    /* ----------------------------------------
       서비스 확장 예고
       ---------------------------------------- */
    coming_title: "서비스 확장 예정",
    coming_subtitle: "더 많은 IT 요구를 충족하기 위해 준비 중입니다.",
    coming_1_title: "데이터 분석 & BI",
    coming_1_desc: "대시보드, ETL 파이프라인, 셀프 서비스 BI — 흩어진 데이터를 명확한 의사결정으로 바꿉니다.",
    coming_cta: "사전 신청하기",

    /* ----------------------------------------
       문의하기
       ---------------------------------------- */
    contact_title: "IT 요구사항을 함께 이야기합시다",
    contact_subtitle: "한국 IT 관련 고민을 알려주세요. 1영업일 이내에 회신드립니다.",

    form_name: "이름 *",
    form_company: "회사명 *",
    form_email: "업무 이메일 *",
    form_service: "관심 서비스",
    form_svc_default: "서비스를 선택하세요",
    form_svc_1: "IT 현장·원격 지원",
    form_svc_2: "사이버 보안 & 컴플라이언스",
    form_svc_3: "IT 컨설팅 & PM",
    form_svc_4: "IT 아웃소싱",
    form_svc_5: "잘 모르겠음 / 복수 서비스",
    form_size: "한국 오피스 규모",
    form_size_default: "규모를 선택하세요",
    form_size_1: "1~10명",
    form_size_2: "11~50명",
    form_size_3: "51~200명",
    form_size_4: "200명 이상",
    form_message: "어떤 도움이 필요하신가요?",
    form_attachment: "첨부파일 (선택사항)",
    form_file_note: "최대 10MB. PDF, DOC, XLS, PPT, 이미지, TXT, ZIP",
    form_submit: "문의 보내기",
    form_note: "🔒 보내주신 정보는 안전하게 관리됩니다. 1영업일 내 회신드립니다.",
    form_success: '✅ <strong>감사합니다!</strong> 문의가 접수되었습니다. 1영업일 내에 회신드리겠습니다.',
    form_error: '❌ <strong>전송에 실패했습니다.</strong> <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>로 직접 보내주세요.',
    form_warn_file_size: "⚠️ <strong>파일 크기는 10MB 이하여야 합니다.</strong> 더 작은 파일을 선택해 주세요.",
    form_warn_file_type: "⚠️ <strong>지원하지 않는 파일 형식입니다.</strong> PDF, DOC, XLS, PPT, 이미지, TXT, ZIP만 가능합니다.",
    form_warn_default: "⚠️ <strong>파일을 확인해 주세요.</strong>",

    contact_direct_title: "직접 연락하고 싶으신가요?",
    contact_email_label: "비즈니스 문의",
    contact_phone_label: "대표 전화",
    contact_location_label: "위치",
    contact_location: "서울, 대한민국",
    contact_hours_label: "업무 시간",
    contact_hours: "월~금, 09:00–18:00",

    /* ----------------------------------------
       푸터
       ---------------------------------------- */
    footer_tagline: "한국 IT 운영, 넥스트허브에 맡기세요",
    footer_location: "서울, 대한민국",
    footer_services: "서비스",
    footer_svc_1: "현장·원격 지원",
    footer_svc_2: "사이버 보안 & 컴플라이언스",
    footer_svc_3: "컨설팅 & PM",
    footer_svc_4: "IT 아웃소싱",
    footer_company: "회사",
    footer_about: "회사 소개",
    footer_cases: "서비스 사례",
    footer_faq: "자주 묻는 질문",
    footer_contact: "문의하기",
    footer_reach: "연락처",
    footer_copyright: "© 2025 넥스트허브. All rights reserved."
  },


  /* ================================================================
     中文 (Chinese)
     - 中国/台湾总部IT经理、韩国驻在员等阅读
     - 语气：务实专业、简洁有力
     - 使用中国IT行业实际用语
     ================================================================ */
  zh: {

    /* ----------------------------------------
       导航栏
       ---------------------------------------- */
    nav_services: "服务内容",
    nav_whyus: "为什么选我们",
    nav_clients: "客户",
    nav_cases: "服务案例",
    nav_process: "服务流程",
    nav_about: "关于我们",
    nav_faq: "常见问题",
    nav_contact: "联系我们",

    /* ----------------------------------------
       首屏
       ---------------------------------------- */
    hero_headline: "韩国IT运营<br>就找NextHub",
    hero_subtitle: "为跨国企业的韩国分公司提供一站式IT运营服务，让总部不再操心当地IT事务。",
    hero_badge_1: "现场与远程支持",
    hero_badge_2: "网络安全",
    hero_badge_3: "咨询",
    hero_badge_4: "IT外包",
    hero_cta_1: "了解服务内容",
    hero_cta_2: "免费咨询",
    hero_trust: "韩国6大行业的跨国企业正在使用",

    /* ----------------------------------------
       痛点
       ---------------------------------------- */
    pain_title: "跨国企业在韩国常遇到的IT难题",
    pain_subtitle: "这些问题是否似曾相识？",

    pain_1_title: "找不到靠谱的本地IT服务商",
    pain_1_desc: "总部需要一个既懂全球IT标准、又熟悉韩国本地情况的合作伙伴——但这比想象中难找得多。",

    pain_2_title: "办公室没有IT现场支持",
    pain_2_desc: "首尔办公室网络故障或电脑问题，总部服务台因为时差根本来不及处理。",

    pain_3_title: "韩语沟通和供应商管理是个难关",
    pain_3_desc: "韩国的电信开通、供应商合同、政府合规——全部需要韩语。而总部又要求英文或中文报告。",

    pain_4_title: "团队太小，养不起专职IT",
    pain_4_desc: "韩国办公室5到50人，请一个全职IT不划算，但完全没有IT支持又不行。",

    pain_answer: "这正是NextHub存在的理由。",
    pain_link: "了解详情 →",

    /* ----------------------------------------
       服务
       ---------------------------------------- */
    svc_title: "服务内容",
    svc_subtitle: "专为在韩跨国企业打造的全方位IT服务",

    svc_1_title: "IT现场与远程支持",
    svc_1_summary: "在您的韩国办公室安排专属IT工程师——按照总部标准工作，韩英中三语沟通。",
    svc_1_f1: "L1/L2服务台——PC、网络、打印机、软件问题处理",
    svc_1_f2: "通过ServiceNow或现有ITSM工具管理工单",
    svc_1_f3: "灵活合作方式：常驻、定期上门或远程",
    svc_1_f4: "Wifi环境调查、机房巡检、IT设备派送",
    svc_1_f5: "新员工IT配置及离职资产回收",

    svc_2_title: "网络安全与合规管理",
    svc_2_summary: "确保韩国办公室满足总部安全政策和当地法规要求——总部无需事事过问。",
    svc_2_f1: "终端防护部署及日常监控",
    svc_2_f2: "网络漏洞扫描与修复",
    svc_2_f3: "总部安全策略的本地化落地与执行",
    svc_2_f4: "安全事件处理及根因分析报告",
    svc_2_f5: "员工安全培训（钓鱼邮件、数据处理等）",

    svc_3_title: "IT咨询与项目管理",
    svc_3_summary: "新系统上线、平台迁移、韩国IT与全球战略对齐——我们从头到尾负责。",
    svc_3_f1: "与总部战略对齐的IT路线图规划",
    svc_3_f2: "系统集成(SI)项目执行",
    svc_3_f3: "需求收集与业务流程分析",
    svc_3_f4: "PMO运作、预算管理(CAPEX/OPEX)",
    svc_3_f5: "本地供应商寻源、评估与管理",

    svc_4_title: "IT外包与统一对接窗口(SPOC)",
    svc_4_summary: "不需要组建IT部门。日常运维到总部汇报，一份合同搞定韩国所有IT事务。",
    svc_4_f1: "全部或部分IT运营接管",
    svc_4_f2: "SPOC：韩国所有IT事务的唯一对接人",
    svc_4_f3: "基础设施、云和网络托管服务",
    svc_4_f4: "月度运营报告与SLA仪表板",
    svc_4_f5: "韩英中三语对接总部",

    /* ----------------------------------------
       为什么选择我们
       ---------------------------------------- */
    why_title: "为什么选择NextHub",
    why_subtitle: "我们和普通IT外包公司有什么不同",

    why_1_title: "三语服务是标配",
    why_1_desc: "所有服务默认支持韩中英三语。无需额外费用，不用第三方翻译。总部早上9点来电话，我们直接用对方的语言沟通。",

    why_2_title: "我们坐过你的位置",
    why_2_desc: "我们的团队曾在亚太区全球IT组织内部工作。我们清楚总部周一早会想看什么报告，也知道韩国办公室周五下午真正需要什么。",

    why_3_title: "不只是修电脑",
    why_3_desc: "大多数IT供应商只是解决问题。我们还帮您规划IT战略、交付项目、把数据变成仪表板。一个团队，全面覆盖。",

    why_4_title: "透明且流程化的运营",
    why_4_desc: "基于ServiceNow运营，遵循ISO标准工作流，每月共享SLA仪表板。我们做了什么、做得怎样，您随时看得到。",

    why_5_title: "规模合适，价格合理",
    why_5_desc: "大型外包公司光管理费就不少。我们以更合理的价格提供资深级服务，合同也根据您的实际需求灵活调整。",

    why_6_title: "一家搞定全部",
    why_6_desc: "IT支持、安全、咨询、外包——四项服务，一份合同，一个对接人。不用再东奔西跑管理多个供应商。",

    /* ----------------------------------------
       业绩数字
       ---------------------------------------- */
    metrics_title: "NextHub业绩",
    metrics_years: "IT服务综合经验",
    metrics_projects: "已交付项目",
    metrics_clients: "已服务跨国企业",
    metrics_industries: "覆盖行业",
    metrics_response: "平均响应时间",
    metrics_retention: "客户留存率",

    /* ----------------------------------------
       客户
       ---------------------------------------- */
    clients_title: "全球领先企业的信赖之选",
    clients_subtitle: "我们为韩国各行业的跨国企业提供服务",

    client_1: "全球制药企业",
    client_2: "欧洲汽车零部件制造商",
    client_3: "全球电子企业",
    client_4: "全球医疗器械企业",
    client_5: "美妆零售领军企业",
    client_6: "全球零售连锁企业",
    client_7: "日本制造企业",

    industries_title: "服务行业",
    ind_pharma: "制药",
    ind_auto: "汽车",
    ind_electronics: "电子",
    ind_medical: "医疗器械",
    ind_beauty: "美妆零售",
    ind_manufacturing: "制造",
    ind_education: "教育",
    ind_finance: "金融",

    /* ----------------------------------------
       服务案例
       ---------------------------------------- */
    cases_title: "服务案例",
    cases_subtitle: "韩国跨国企业的真实成果",

    case_challenge: "背景",
    case_solution: "NextHub的方案",
    case_result: "成果",

    case_1_badge: "IT支持",
    case_1_industry: "全球制药企业韩国分公司",
    case_1_title: "响应时间从8小时缩短到2小时",
    case_1_challenge: "韩国办公室30人，没有本地IT。欧洲总部服务台因时差响应需8小时以上。",
    case_1_solution: "NextHub安排双语工程师每周3天驻场，同时提供全天候远程支持。所有工单通过ServiceNow管理，按SLA追踪，每月向总部汇报。",
    case_1_result: "响应时间8h→2h。员工满意度提升40%。12个月SLA零违规。",

    case_2_badge: "支持+外包",
    case_2_industry: "欧洲汽车零部件制造商",
    case_2_title: "4周内完成韩国办公室IT搭建",
    case_2_challenge: "新设20人韩国办公室，4周内需要完整IT基础设施。总部在韩国没有任何供应商资源，也不了解当地电信和采购流程。",
    case_2_solution: "NextHub全程管理：ISP合同、网络架构、PC和外设采购、安全部署及安装。作为总部的代表统一管理所有韩国供应商。",
    case_2_result: "4周内办公室全面运营。节省15%预算。签署持续运维合同。",

    case_3_badge: "IT支持",
    case_3_industry: "全球零售连锁企业",
    case_3_title: "开门之前IT问题就已解决",
    case_3_challenge: "韩国多家门店的POS、网络和店内设备需要稳定IT支持。原供应商响应慢，且无法用英语向区域总部汇报。",
    case_3_solution: "NextHub安排工程师定期巡店并提供紧急派遣。统一所有门店IT标准配置。每周向区域总部提交英文报告。",
    case_3_result: "门店IT停机时间减少60%。所有问题在营业前解决。服务从3家扩展到8家门店。",

    case_4_badge: "IT外包",
    case_4_industry: "全球医疗器械企业",
    case_4_title: "NextHub成了他们的韩国IT部门",
    case_4_challenge: "韩国分公司10人。没有招全职IT的预算，但总部要求专业运营和严格安全合规。",
    case_4_solution: "NextHub担任IT SPOC——覆盖基础设施、终端安全、供应商协调、采购，并每月向亚太总部提交英文报告。",
    case_4_result: "IT成本降低30%。韩国获亚洲区IT合规最佳评级。合同续签至第3年。",

    case_5_badge: "咨询",
    case_5_industry: "美妆零售企业",
    case_5_title: "电商平台按时上线",
    case_5_challenge: "大型电商系统集成项目，4家开发供应商参与。交付期限紧迫，客户缺乏能统筹全局的资深项目经理。",
    case_5_solution: "NextHub作为PM/PMO介入——主导需求研讨会，协调所有供应商，监督QA流程，执行上线。每周向管理层提交英文状态报告。",
    case_5_result: "按期上线。首次营销活动承载了预期3倍流量，零宕机。2周内稳定运行。",

    case_6_badge: "IT支持",
    case_6_industry: "日本制造企业",
    case_6_title: "无需全职工程师的工厂IT运维",
    case_6_challenge: "韩国工厂需要定期服务器检查、网络维护和设备安装——但工作量不够配一个全职IT。",
    case_6_solution: "NextHub提供每两周定期派遣加紧急呼叫支持。覆盖服务器、网络、终端和生产系统。所有工作用英文向日本总部报告。",
    case_6_result: "维护成本比之前的全职方案降低40%。12个月内零非计划生产停机。",

    /* ----------------------------------------
       服务流程
       ---------------------------------------- */
    process_title: "服务流程",
    process_subtitle: "从首次沟通到持续运营，清晰且结构化的流程",

    step_1_title: "初步沟通",
    step_1_desc: "跟我们聊聊韩国IT现状。我们倾听、提出关键问题、判断是否匹配。免费，无附加条件。",

    step_2_title: "现状评估与提案",
    step_2_desc: "我们评估现有IT环境（现场或远程），找出差距，提交清晰的方案书：范围、SLA、时间表、报价。没有隐藏费用。",

    step_3_title: "服务启动",
    step_3_desc: "签约后1-2周内服务到位。配置监控工具、获取系统权限，与总部IT负责人对接。",

    step_4_title: "执行运营",
    step_4_desc: "按约定SLA交付服务。每项工作都有工单追踪和记录。运营完全透明——没有黑箱。",

    step_5_title: "回顾与优化",
    step_5_desc: "每月或每季度业务回顾，附KPI仪表板。讨论成效、改进方向，随需求变化持续调整。",

    /* ----------------------------------------
       关于我们
       ---------------------------------------- */
    about_title: "关于NextHub",

    about_mission_title: "我们为何而在",
    about_mission_text: "NextHub为解决一个问题而生：在韩跨国企业需要一个真正懂全球组织运作的本地IT伙伴。我们不是普通IT供应商。我们用现场团队的语言沟通，按总部信赖的流程运营——连接总部与韩国业务的桥梁。",

    about_team_title: "我们的团队",
    about_team_text: "我们的顾问网络覆盖基础设施、安全、项目管理和IT运营——全部具有在韩国和亚太区服务跨国企业的实战经验。每个项目我们都配备最合适的专业人员。",
    about_team_1: "顾问来自全球领先IT企业和一线系统集成商",
    about_team_2: "亚太区跨国企业IT服务数十年综合经验",
    about_team_3: "ITSM、项目管理、安全领域认证专业人员",
    about_team_4: "韩中英母语级沟通能力",

    about_coverage_title: "服务范围",
    about_cov_primary_label: "主要：",
    about_cov_primary: "首尔都市圈及韩国主要城市",
    about_cov_extended_label: "扩展：",
    about_cov_extended: "亚太区远程支持",
    about_cov_scale_label: "规模：",
    about_cov_scale: "从5人分支到500+人办公场所",

    /* ----------------------------------------
       常见问题
       ---------------------------------------- */
    faq_title: "常见问题",

    faq_1_q: "你们提供哪些合同形式？",
    faq_1_a: "我们提供月度固定、年度合同和按项目计费三种方式。根据您的预算和需求来设计，而不是让您适应我们。",

    faq_2_q: "有最短合同期限吗？",
    faq_2_a: "托管服务建议至少3个月，以便完成入驻并展示成果。项目制工作按项目单独确定范围，没有最低期限。",

    faq_3_q: "我们韩国办公室很小，也能服务吗？",
    faq_3_a: "当然可以。我们很多客户就是5到20人的小型韩国分公司。我们按实际需求定制服务，您只需为真正需要的部分付费。",

    faq_4_q: "你们能直接跟总部沟通吗？",
    faq_4_a: "当然——这是我们的核心优势之一。团队直接参加全球IT会议，用英文或中文提交报告，每天在总部ITSM平台上工作。",

    faq_5_q: "可以先从一项服务开始，以后再增加吗？",
    faq_5_a: "当然可以。大多数客户其实都是从一项服务开始——通常是IT支持——看到效果后再扩展。我们不强推，不硬卖。",

    faq_6_q: "你们响应有多快？",
    faq_6_a: "驻场支持客户工作时间内平均响应不超过4小时。紧急问题不分时段立即升级处理。",

    faq_7_q: "你们能用我们现有的ITSM工具吗？",
    faq_7_a: "可以。我们有ServiceNow、Jira、Freshdesk等平台的实战经验。直接对接总部现有工具和工作流——不需要做任何更改。",

    /* ----------------------------------------
       服务扩展预告
       ---------------------------------------- */
    coming_title: "服务即将扩展",
    coming_subtitle: "我们正在成长，覆盖更多IT需求。",
    coming_1_title: "数据分析与商业智能",
    coming_1_desc: "仪表板、ETL管道、自助BI——将分散的数据变成清晰的决策依据。",
    coming_cta: "申请优先体验",

    /* ----------------------------------------
       联系我们
       ---------------------------------------- */
    contact_title: "聊聊您的IT需求",
    contact_subtitle: "告诉我们您在韩国的IT难题。我们的团队将在1个工作日内回复。",

    form_name: "姓名 *",
    form_company: "公司名称 *",
    form_email: "商务邮箱 *",
    form_service: "感兴趣的服务",
    form_svc_default: "请选择服务",
    form_svc_1: "IT现场/远程支持",
    form_svc_2: "网络安全与合规",
    form_svc_3: "IT咨询与项目管理",
    form_svc_4: "IT外包",
    form_svc_5: "不确定/多项服务",
    form_size: "韩国办公室规模",
    form_size_default: "请选择规模",
    form_size_1: "1-10人",
    form_size_2: "11-50人",
    form_size_3: "51-200人",
    form_size_4: "200人以上",
    form_message: "我们能怎么帮到您？",
    form_attachment: "附件（可选）",
    form_file_note: "最大10MB。PDF、DOC、XLS、PPT、图片、TXT、ZIP",
    form_submit: "提交咨询",
    form_note: "🔒 您的信息将严格保密。我们在1个工作日内回复。",
    form_success: '✅ <strong>谢谢！</strong> 我们已收到您的咨询，将在1个工作日内回复。',
    form_error: '❌ <strong>发送失败。</strong> 请发邮件至 <a href="mailto:contact@nexthub.me" style="color:inherit;text-decoration:underline;">contact@nexthub.me</a>',
    form_warn_file_size: "⚠️ <strong>文件大小不能超过10MB。</strong> 请选择较小的文件。",
    form_warn_file_type: "⚠️ <strong>不支持此文件格式。</strong> 仅支持：PDF、DOC、XLS、PPT、图片、TXT、ZIP",
    form_warn_default: "⚠️ <strong>请检查您的文件。</strong>",
    
    contact_direct_title: "想直接联系我们？",
    contact_email_label: "商务咨询",
    contact_phone_label: "办公电话",
    contact_location_label: "地址",
    contact_location: "韩国首尔",
    contact_hours_label: "工作时间",
    contact_hours: "周一至周五 09:00-18:00 韩国时间",

    /* ----------------------------------------
       页脚
       ---------------------------------------- */
    footer_tagline: "韩国IT运营 就找NextHub",
    footer_location: "韩国首尔",
    footer_services: "服务内容",
    footer_svc_1: "现场与远程支持",
    footer_svc_2: "网络安全与合规",
    footer_svc_3: "咨询与项目管理",
    footer_svc_4: "IT外包",
    footer_company: "公司",
    footer_about: "关于我们",
    footer_cases: "服务案例",
    footer_faq: "常见问题",
    footer_contact: "联系我们",
    footer_reach: "联系方式",
    footer_copyright: "© 2025 NextHub. 保留所有权利。"
  }

};