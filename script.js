/**
 * 천기누설 | 오늘의 점괘 - 전문 운세 포털 로직 (고급 기능 버전)
 */

/* ============================================================
   다국어(i18n) 설정
   ============================================================ */

let currentLang = localStorage.getItem('chunggi_lang') || localStorage.getItem('cheonki_lang') || 'ko';

const i18n = {
  ko: {
    langBtn: "English",
    menu_home: "홈",
    menu_newyear: "신년운세",
    menu_monthly: "월간운세",
    menu_love: "연애/궁합",
    menu_worry: "연애고민",
    menu_meeting: "만남",
    menu_tenyear: "십년후운세",
    nav_login: "로그인",
    nav_logout: "로그아웃",
    nav_username: "사용자님",
    form_name: "이름",
    form_name_placeholder: "성함을 입력하세요",
    form_gender: "성별",
    form_male: "남성",
    form_female: "여성",
    form_birth: "생년월일",
    form_calendar: "달력",
    form_solar: "양력",
    form_lunar: "음력",
    form_leap: "윤달",
    form_time: "태어난 시간",
    form_time_unknown: "모름",
    form_partner_info: "상대방 정보",
    form_partner_name: "상대방 이름",
    form_partner_name_placeholder: "상대방 성함을 입력하세요",
    form_partner_gender: "상대 성별",
    form_partner_birth: "상대 생일",
    form_partner_calendar: "상대 달력",
    form_partner_time: "상대 시간",
    btn_confirm: "운세 확인하기",
    loading_tarot: "🃏 타로 카드를 신중히 섞는 중...",
    loading_astrology: "⭐ 별자리의 기운을 분석하는 중...",
    loading_saju: "🔮 천기를 읽어 운명의 실타래를 푸는 중...",
    loading_default: "🔮 천기를 읽는 중...",
    tab_total: "총운",
    tab_wealth: "재물",
    tab_love: "애정",
    tab_career: "직장",
    tab_health: "건강",
    btn_save_image: "📥 결과 이미지로 저장하기",
    alert_input_required: "성함과 생년월일을 정확히 알려주셔야 천기를 살필 수 있습니다.",
    alert_invalid_date: "일은 존재하지 않는 날짜입니다. 다시 확인해주세요.",
    alert_save_fail: "이미지 저장에 실패했습니다. 다시 시도해주세요.",
    tarot_instruction: "✨ 마음속으로 간절히 원하는 인연을 생각하며<br>운명의 카드를 한 장 선택하세요",
    auth_title: "🔮 천기누설",
    auth_subtitle: "천기(天機)를 살피려면 먼저 자신을 알려주세요",
    auth_tab_login: "로그인",
    auth_tab_register: "회원가입",
    auth_label_email: "이메일",
    auth_placeholder_email: "이메일을 입력하세요",
    auth_label_password: "비밀번호",
    auth_placeholder_password: "비밀번호를 입력하세요",
    auth_remember: "로그인 상태 유지",
    auth_divider: "또는 구글 계정으로",
    auth_google: "구글로 로그인",
    auth_label_name: "이름",
    auth_placeholder_name: "이름을 입력하세요",
    auth_label_password_confirm: "비밀번호 확인",
    auth_placeholder_password_confirm: "비밀번호를 다시 입력하세요",
    auth_skip: "비회원으로 계속하기 →",
    auth_error_required: "모든 항목을 입력해주세요.",
    auth_error_email: "올바른 이메일 형식이 아닙니다.",
    auth_error_pw_short: "비밀번호는 6자 이상이어야 합니다.",
    auth_error_pw_mismatch: "비밀번호가 일치하지 않습니다.",
    btn_login: "로그인",
    btn_register: "회원가입 완료",
    login_loading: "로그인 중...",
    register_loading: "가입 중...",
    google_loading: "구글 로그인 중...",
    auth_popup_closed: "로그인 창이 닫혔습니다. 다시 시도해주세요.",
    auth_file_protocol_error: "⚠️ 구글 로그인은 배포된 주소에서만 가능해요.",
    auth_forgot_password: "비밀번호를 잊으셨나요?",
    auth_reset_sent: "비밀번호 재설정 메일이 발송되었습니다. 이메일을 확인해주세요.",
    auth_reset_error: "비밀번호 재설정 메일 발송에 실패했습니다. 이메일 주소를 확인해주세요.",
    pw_reset_logo: "🔑 비밀번호 재설정",
    pw_reset_subtitle: "가입하신 이메일로 재설정 링크를 보내드립니다",
    pw_reset_email_label: "이메일",
    pw_reset_email_placeholder: "가입한 이메일을 입력하세요",
    pw_reset_submit: "재설정 메일 보내기",
    pw_reset_sending: "발송 중...",
    pw_reset_back: "← 로그인으로 돌아가기",
    pw_reset_success_title: "메일을 발송했습니다",
    pw_reset_success_msg: "입력한 이메일의 받은편지함을 확인해주세요.<br>재설정 링크를 클릭하면 새 비밀번호를 설정할 수 있습니다.",
    pw_reset_close: "확인",
    pw_reset_err_empty: "이메일을 입력해주세요.",
    pw_reset_err_invalid: "올바른 이메일 형식이 아닙니다.",
    pw_reset_err_not_found: "등록되지 않은 이메일입니다.",
    pw_reset_err_generic: "메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.",
    select_year: "연도",
    select_month: "월",
    select_day: "일",
    year_suffix: "년",
    month_suffix: "월",
    day_suffix: "일"
  },
  en: {
    langBtn: "한국어",
    menu_home: "Home",
    menu_newyear: "New Year",
    menu_monthly: "Monthly",
    menu_love: "Love/Match",
    menu_worry: "Love Trouble",
    menu_meeting: "Meeting",
    menu_tenyear: "10 Years",
    nav_login: "Login",
    nav_logout: "Logout",
    nav_username: "User",
    form_name: "Name",
    form_name_placeholder: "Enter your name",
    form_gender: "Gender",
    form_male: "Male",
    form_female: "Female",
    form_birth: "Birth Date",
    form_calendar: "Calendar",
    form_solar: "Solar",
    form_lunar: "Lunar",
    form_leap: "Leap",
    form_time: "Birth Time",
    form_time_unknown: "Unknown",
    form_partner_info: "Partner Info",
    form_partner_name: "Partner Name",
    form_partner_name_placeholder: "Enter partner's name",
    form_partner_gender: "Partner Gender",
    form_partner_birth: "Partner Birth",
    form_partner_calendar: "Partner Cal",
    form_partner_time: "Partner Time",
    btn_confirm: "Check Fortune",
    loading_tarot: "🃏 Carefully shuffling tarot cards...",
    loading_astrology: "⭐ Analyzing astrological energy...",
    loading_saju: "🔮 Reading heavenly secrets to untangle destiny...",
    loading_default: "🔮 Reading destiny...",
    tab_total: "Total",
    tab_wealth: "Wealth",
    tab_love: "Love",
    tab_career: "Career",
    tab_health: "Health",
    btn_save_image: "📥 Save as Image",
    alert_input_required: "Please provide your name and birth date correctly.",
    alert_invalid_date: "is not a valid date. Please check again.",
    alert_save_fail: "Failed to save image. Please try again.",
    tarot_instruction: "✨ Think of the person you desire<br>and choose one destiny card",
    auth_title: "🔮 Heaven's Secret",
    auth_subtitle: "Please identify yourself to peek into destiny",
    auth_tab_login: "Login",
    auth_tab_register: "Sign Up",
    auth_label_email: "Email",
    auth_placeholder_email: "Enter email",
    auth_label_password: "Password",
    auth_placeholder_password: "Enter password",
    auth_remember: "Remember me",
    auth_divider: "Or with Google account",
    auth_google: "Login with Google",
    auth_label_name: "Name",
    auth_placeholder_name: "Enter your name",
    auth_label_password_confirm: "Confirm Password",
    auth_placeholder_password_confirm: "Enter password again",
    auth_skip: "Continue as Guest →",
    auth_error_required: "Please fill in all fields.",
    auth_error_email: "Invalid email format.",
    auth_error_pw_short: "Password must be at least 6 characters.",
    auth_error_pw_mismatch: "Passwords do not match.",
    btn_login: "Login",
    btn_register: "Sign Up",
    login_loading: "Logging in...",
    register_loading: "Registering...",
    google_loading: "Logging in with Google...",
    auth_forgot_password: "Forgot your password?",
    auth_popup_closed: "Popup closed. Please try again.",
    auth_file_protocol_error: "⚠️ Google login is only available on deployed URLs.",
    auth_reset_sent: "Password reset email sent. Please check your inbox.",
    auth_reset_error: "Failed to send reset email. Please check your email address.",
    pw_reset_logo: "🔑 Reset Password",
    pw_reset_subtitle: "We'll send a reset link to your registered email",
    pw_reset_email_label: "Email",
    pw_reset_email_placeholder: "Enter your registered email",
    pw_reset_submit: "Send Reset Email",
    pw_reset_sending: "Sending...",
    pw_reset_back: "← Back to Login",
    pw_reset_success_title: "Email Sent",
    pw_reset_success_msg: "Please check your inbox.<br>Click the reset link to set a new password.",
    pw_reset_close: "OK",
    pw_reset_err_empty: "Please enter your email.",
    pw_reset_err_invalid: "Invalid email format.",
    pw_reset_err_not_found: "This email is not registered.",
    pw_reset_err_generic: "Failed to send email. Please try again later.",
    select_year: "Year",
    select_month: "Month",
    select_day: "Day",
    year_suffix: "",
    month_suffix: "",
    day_suffix: "",
    time_names: ["00:00 (Rat)", "01:00", "02:00 (Ox)", "03:00", "04:00 (Tiger)", "05:00", "06:00 (Rabbit)", "07:00", "08:00 (Dragon)", "09:00", "10:00 (Snake)", "11:00", "12:00 (Horse)", "13:00", "14:00 (Goat)", "15:00", "16:00 (Monkey)", "17:00", "18:00 (Rooster)", "19:00", "20:00 (Dog)", "21:00", "22:00 (Pig)", "23:00"]
  }
};

const pageConfigs = {
  ko: {
    home: { h1: '천기누설(오늘의 점괘)', sub: '사주한잔(四柱一盞)', doc: '천기누설 | 오늘의 점괘', btn: '운세 확인하기' },
    newyear: { h1: '신년운세', sub: '한 해의 흐름을 짚다', doc: '천기누설 | 신년운세', btn: '신년 사주 확인' },
    monthly: { h1: '월간운세', sub: '이달의 기운 변화', doc: '천기누설 | 월간운세', btn: '월간 운세 확인' },
    love: { h1: '연애/궁합', sub: '인연의 끈을 찾아서', doc: '천기누설 | 연애/궁합', btn: '인연 궁합 확인' },
    worry: { h1: '연애고민', sub: '답답한 마음을 풀다', doc: '천기누설 | 연애고민', btn: '마음 처방받기' },
    meeting: { h1: '만남/인연', sub: '새로운 만남의 기운', doc: '천기누설 | 만남', btn: '만남운 확인하기' },
    tenyear: { h1: '십년후운세', sub: '10년 후의 나를 읽다', doc: '천기누설 | 십년후운세', btn: '10년 후 확인하기' }
  },
  en: {
    home: { h1: "Heaven's Secret", sub: 'A Cup of Destiny', doc: "Heaven's Secret | Fortune", btn: 'Check Fortune' },
    newyear: { h1: 'New Year Fortune', sub: "Reading the year's flow", doc: "Heaven's Secret | New Year", btn: 'Check New Year Saju' },
    monthly: { h1: 'Monthly Fortune', sub: 'Monthly energy changes', doc: "Heaven's Secret | Monthly", btn: 'Check Monthly Fortune' },
    love: { h1: 'Love/Match', sub: "In search of fate's thread", doc: "Heaven's Secret | Love/Match", btn: 'Check Compatibility' },
    worry: { h1: 'Love Trouble', sub: 'Relieving a heavy heart', doc: "Heaven's Secret | Love Trouble", btn: 'Get Prescription' },
    meeting: { h1: 'Meeting/Fate', sub: 'Energy of new encounters', doc: "Heaven's Secret | Meeting", btn: 'Check Meeting Fortune' },
    tenyear: { h1: '10 Years Later', sub: 'Reading myself in 10 years', doc: "Heaven's Secret | 10 Years Later", btn: 'Check 10 Years Later' }
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('chunggi_lang', currentLang);
  localStorage.setItem('cheonki_lang', currentLang);
  applyLanguage();
  updateSelectOptions();
  showPage(currentCategory); 
}

function applyLanguage() {
  const t = i18n[currentLang];
  document.documentElement.lang = currentLang;
  
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = t.langBtn;

  const logo = document.querySelector('.logo');
  if (logo) logo.textContent = currentLang === 'ko' ? '천기누설' : "Heaven's Secret";

  const menuItems = ['home', 'newyear', 'monthly', 'love', 'worry', 'meeting', 'tenyear'];
  menuItems.forEach(item => {
    const el = document.getElementById(`menu-${item}`);
    if (el) el.textContent = t[`menu_${item}`];
  });
  
  const loginBtn = document.getElementById('nav-login-btn');
  if (loginBtn) loginBtn.textContent = t.nav_login;

  const logoutBtn = document.querySelector('.nav-logout-btn');
  if (logoutBtn) logoutBtn.textContent = t.nav_logout;
  
  const _lbl = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  _lbl('lbl-name',             t.form_name);
  _lbl('lbl-gender',           t.form_gender);
  _lbl('lbl-birth',            t.form_birth);
  _lbl('lbl-calendar',         t.form_calendar);
  _lbl('lbl-time',             t.form_time);
  _lbl('lbl-partner-name',     t.form_partner_name);
  _lbl('lbl-partner-gender',   t.form_partner_gender);
  _lbl('lbl-partner-birth',    t.form_partner_birth);
  _lbl('lbl-partner-calendar', t.form_partner_calendar);
  _lbl('lbl-partner-time',     t.form_partner_time);

  const userNameInput = document.getElementById('userName');
  if (userNameInput) userNameInput.placeholder = t.form_name_placeholder;
  
  const maleLabel = document.querySelector('label[for="male"]');
  const femaleLabel = document.querySelector('label[for="female"]');
  if (maleLabel) maleLabel.textContent = t.form_male;
  if (femaleLabel) femaleLabel.textContent = t.form_female;

  const solarLabel = document.querySelector('label[for="solar"]');
  const lunarLabel = document.querySelector('label[for="lunar"]');
  const leapLabel = document.querySelector('label[for="leap"]');
  if (solarLabel) solarLabel.textContent = t.form_solar;
  if (lunarLabel) lunarLabel.textContent = t.form_lunar;
  if (leapLabel) leapLabel.textContent = t.form_leap;

  const updateTimeOptions = (id) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.options[0].textContent = t.form_time_unknown;
    for (let i = 1; i <= 24; i++) {
      if (sel.options[i]) {
        if (currentLang === 'en' && t.time_names) {
          sel.options[i].textContent = t.time_names[i-1];
        } else {
          const hours = (i-1).toString().padStart(2, '0');
          const zhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'][Math.floor(((i-1)+1)%24/2)];
          const zhiName = ZHI_ANIMAL.ko[zhi];
          sel.options[i].textContent = `${hours}시` + ( (i-1)%2 === 0 ? ` (${zhiName}시)` : '' );
        }
      }
    }
  };
  updateTimeOptions('birthTime');
  updateTimeOptions('partnerTime');

  const partnerForm = document.getElementById('partner-form');
  if (partnerForm) {
    const partnerSubTitle = partnerForm.querySelector('.sub-title');
    if (partnerSubTitle) partnerSubTitle.textContent = t.form_partner_info;

    const partnerNameInput = document.getElementById('partnerName');
    if (partnerNameInput) partnerNameInput.placeholder = t.form_partner_name_placeholder;

    const pMaleLabel = document.querySelector('label[for="p-male"]');
    const pFemaleLabel = document.querySelector('label[for="p-female"]');
    if (pMaleLabel) pMaleLabel.textContent = t.form_male;
    if (pFemaleLabel) pFemaleLabel.textContent = t.form_female;

    const pSolarLabel = document.querySelector('label[for="p-solar"]');
    const pLunarLabel = document.querySelector('label[for="p-lunar"]');
    const pLeapLabel = document.querySelector('label[for="p-leap"]');
    if (pSolarLabel) pSolarLabel.textContent = t.form_solar;
    if (pLunarLabel) pLunarLabel.textContent = t.form_lunar;
    if (pLeapLabel) pLeapLabel.textContent = t.form_leap;
  }

  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) submitBtn.textContent = t.btn_confirm;

  const pageConfig = pageConfigs[currentLang][currentCategory];
  if (pageConfig) {
    const title = document.getElementById('page-title');
    const subtitle = document.getElementById('page-subtitle');
    if (title) title.textContent = pageConfig.h1;
    if (subtitle) subtitle.textContent = pageConfig.sub;
    document.title = pageConfig.doc;
    if (submitBtn) submitBtn.textContent = pageConfig.btn;
  }

  const sajuTab = document.getElementById('type-saju');
  const astroTab = document.getElementById('type-astrology');
  const tarotTab = document.getElementById('type-tarot');
  if (sajuTab) sajuTab.textContent = '🔮 ' + (currentLang === 'ko' ? '사주' : 'Saju');
  if (astroTab) astroTab.textContent = '⭐ ' + (currentLang === 'ko' ? '점성술' : 'Astrology');
  if (tarotTab) tarotTab.textContent = '🃏 ' + (currentLang === 'ko' ? '타로' : 'Tarot');
  
  const tabItems = document.querySelectorAll('.tab-item');
  if (tabItems.length >= 5) {
    tabItems[0].textContent = t.tab_total;
    tabItems[1].textContent = t.tab_wealth;
    tabItems[2].textContent = t.tab_love;
    tabItems[3].textContent = t.tab_career;
    tabItems[4].textContent = t.tab_health;
  }

  const authLogo = document.querySelector('.auth-logo');
  const authSubtitle = document.querySelector('.auth-subtitle');
  if (authLogo) authLogo.textContent = t.auth_title;
  if (authSubtitle) authSubtitle.textContent = t.auth_subtitle;

  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  if (tabLogin) tabLogin.textContent = t.auth_tab_login;
  if (tabRegister) tabRegister.textContent = t.auth_tab_register;
  
  const loginForm = document.getElementById('auth-login-form');
  if (loginForm) {
    _lbl('auth-lbl-email-login',    t.auth_label_email);
    _lbl('auth-lbl-password-login', t.auth_label_password);
    _lbl('auth-lbl-remember',       t.auth_remember);

    const loginEmailInput = document.getElementById('login-email');
    if (loginEmailInput) loginEmailInput.placeholder = t.auth_placeholder_email;
    const loginPasswordInput = document.getElementById('login-password');
    if (loginPasswordInput) loginPasswordInput.placeholder = t.auth_placeholder_password;

    const forgotPw = document.getElementById('forgot-pw');
    if (forgotPw) forgotPw.textContent = t.auth_forgot_password;

    const loginAuthBtn = loginForm.querySelector('.auth-btn');
    if (loginAuthBtn) loginAuthBtn.textContent = t.btn_login;

    const authDividerSpan = loginForm.querySelector('.auth-divider span');
    if (authDividerSpan) authDividerSpan.textContent = t.auth_divider;

    const authGoogleBtn = loginForm.querySelector('.auth-social-btn.auth-google');
    if (authGoogleBtn && authGoogleBtn.lastChild) authGoogleBtn.lastChild.textContent = ' ' + t.auth_google;
  }

  const registerForm = document.getElementById('auth-register-form');
  if (registerForm) {
    _lbl('auth-lbl-name',          t.auth_label_name);
    _lbl('auth-lbl-email-register', t.auth_label_email);
    _lbl('auth-lbl-pw-register',   t.auth_label_password);
    _lbl('auth-lbl-pw-confirm',    t.auth_label_password_confirm);

    const registerNameInput = document.getElementById('register-name');
    if (registerNameInput) registerNameInput.placeholder = t.auth_placeholder_name;
    const registerEmailInput = document.getElementById('register-email');
    if (registerEmailInput) registerEmailInput.placeholder = t.auth_placeholder_email;
    const registerPasswordInput = document.getElementById('register-password');
    if (registerPasswordInput) registerPasswordInput.placeholder = t.auth_error_pw_short;
    const registerPassword2Input = document.getElementById('register-password2');
    if (registerPassword2Input) registerPassword2Input.placeholder = t.auth_placeholder_password_confirm;

    const registerAuthBtn = registerForm.querySelector('.auth-btn');
    if (registerAuthBtn) registerAuthBtn.textContent = t.btn_register;
  }
  
  const authSkipLink = document.querySelector('.auth-skip a');
  if (authSkipLink) authSkipLink.textContent = t.auth_skip;

  // 비밀번호 재설정 팝업 텍스트 동기화
  if (t.pw_reset_logo) {
    _el('pw-reset-logo',          t.pw_reset_logo);
    _el('pw-reset-subtitle',      t.pw_reset_subtitle);
    _el('pw-reset-email-label',   t.pw_reset_email_label);
    _el('pw-reset-back',          t.pw_reset_back);
    _el('pw-reset-success-title', t.pw_reset_success_title);
    _el('pw-reset-close-btn',     t.pw_reset_close);
    const pwResetInput = document.getElementById('pw-reset-email');
    if (pwResetInput) pwResetInput.placeholder = t.pw_reset_email_placeholder;
    const pwResetBtn = document.getElementById('pw-reset-submit-btn');
    if (pwResetBtn && !pwResetBtn.disabled) pwResetBtn.textContent = t.pw_reset_submit;
    const successMsg = document.getElementById('pw-reset-success-msg');
    if (successMsg) successMsg.innerHTML = t.pw_reset_success_msg;
  }

  // data-ko / data-en 속성 기반 자동 번역
  document.querySelectorAll('[data-ko]').forEach(el => {
    const ko = el.getAttribute('data-ko');
    const en = el.getAttribute('data-en');
    if (el.children.length === 0) el.textContent = currentLang === 'en' && en ? en : ko;
  });

  _updateNavAuth();
  document.body.style.visibility = 'visible';
}

function updateSelectOptions() {
  const t = i18n[currentLang];
  const yearSelects = [document.getElementById('birthYear'), document.getElementById('partnerYear')];
  const monthSelects = [document.getElementById('birthMonth'), document.getElementById('partnerMonth')];
  const daySelects = [document.getElementById('birthDay'), document.getElementById('partnerDay')];

  yearSelects.forEach(s => { if(s && s.options[0]) s.options[0].textContent = t.select_year; });
  monthSelects.forEach(s => { if(s && s.options[0]) s.options[0].textContent = t.select_month; });
  daySelects.forEach(s => { if(s && s.options[0]) s.options[0].textContent = t.select_day; });

  for (let i = 1; i <= 100; i++) {
    yearSelects.forEach(s => { if(s && s.options[i]) {
      const val = s.options[i].value;
      s.options[i].textContent = val + t.year_suffix;
    }});
  }
  for (let i = 1; i <= 12; i++) {
    monthSelects.forEach(s => { if(s && s.options[i]) {
      const val = s.options[i].value;
      s.options[i].textContent = val + t.month_suffix;
    }});
  }
  for (let i = 1; i <= 31; i++) {
    daySelects.forEach(s => { if(s && s.options[i]) {
      const val = s.options[i].value;
      s.options[i].textContent = val + t.day_suffix;
    }});
  }
}

/* ============================================================
   인증(Auth) 모듈 — Firebase Authentication + Firestore
   ============================================================ */

const GOOGLE_CLIENT_ID = '5735067888-lurdekg2gnkv5qqvl7dia391ofk765eo.apps.googleusercontent.com';
let _currentUser = null;

function initAuth() {
  auth.onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      _currentUser = {
        uid:      firebaseUser.uid,
        name:     firebaseUser.displayName || firebaseUser.email.split('@')[0],
        email:    firebaseUser.email,
        picture:  firebaseUser.photoURL  || null,
        provider: (firebaseUser.providerData[0] || {}).providerId || 'password'
      };
      _updateNavAuth();
      hideAuthModal();
      _saveUserToFirestore(firebaseUser);
    } else {
      _currentUser = null;
      _updateNavAuth();
      showAuthModal();
    }
  });
}

function handleSocialLogin(provider) {
  if (provider === 'google') handleGoogleLogin();
}

function handlePasswordReset() {
  const t = i18n[currentLang];
  // 로그인 입력창에 이메일이 있으면 팝업에 자동 채워넣기
  const loginEmail = (document.getElementById('login-email').value || '').trim();
  const resetInput = document.getElementById('pw-reset-email');
  if (resetInput && loginEmail) resetInput.value = loginEmail;

  // 팝업 초기 상태로 리셋
  _pwResetShowForm();
  _showPwResetError('');
  if (resetInput && !loginEmail) resetInput.value = '';

  // 텍스트 업데이트
  _el('pw-reset-logo',         t.pw_reset_logo);
  _el('pw-reset-subtitle',     t.pw_reset_subtitle);
  _el('pw-reset-email-label',  t.pw_reset_email_label);
  _el('pw-reset-back',         t.pw_reset_back);
  _el('pw-reset-success-title',t.pw_reset_success_title);
  _el('pw-reset-close-btn',    t.pw_reset_close);
  if (resetInput) resetInput.placeholder = t.pw_reset_email_placeholder;
  const submitBtn = document.getElementById('pw-reset-submit-btn');
  if (submitBtn) submitBtn.textContent = t.pw_reset_submit;
  const successMsg = document.getElementById('pw-reset-success-msg');
  if (successMsg) successMsg.innerHTML = t.pw_reset_success_msg;

  document.getElementById('pw-reset-overlay').style.display = 'flex';
  setTimeout(() => { if (resetInput) resetInput.focus(); }, 80);
}

function submitPasswordReset() {
  const t     = i18n[currentLang];
  const email = (document.getElementById('pw-reset-email').value || '').trim();
  _showPwResetError('');

  if (!email) { _showPwResetError(t.pw_reset_err_empty); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { _showPwResetError(t.pw_reset_err_invalid); return; }

  const btn = document.getElementById('pw-reset-submit-btn');
  if (btn) { btn.textContent = t.pw_reset_sending; btn.disabled = true; }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      _pwResetShowSuccess();
    })
    .catch(err => {
      if (btn) { btn.textContent = t.pw_reset_submit; btn.disabled = false; }
      const notFound = err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential';
      const invalid  = err.code === 'auth/invalid-email';
      if (notFound)     _showPwResetError(t.pw_reset_err_not_found);
      else if (invalid) _showPwResetError(t.pw_reset_err_invalid);
      else              _showPwResetError(t.pw_reset_err_generic);
    });
}

function hidePasswordResetModal(e) {
  if (e) e.preventDefault();
  document.getElementById('pw-reset-overlay').style.display = 'none';
  _pwResetShowForm();
  _showPwResetError('');
  const resetInput = document.getElementById('pw-reset-email');
  if (resetInput) resetInput.value = '';
  const btn = document.getElementById('pw-reset-submit-btn');
  if (btn) { btn.textContent = i18n[currentLang].pw_reset_submit; btn.disabled = false; }
}

function _pwResetShowForm() {
  const fv = document.getElementById('pw-reset-form-view');
  const sv = document.getElementById('pw-reset-success-view');
  if (fv) fv.style.display = 'block';
  if (sv) sv.style.display = 'none';
}

function _pwResetShowSuccess() {
  const fv = document.getElementById('pw-reset-form-view');
  const sv = document.getElementById('pw-reset-success-view');
  if (fv) fv.style.display = 'none';
  if (sv) sv.style.display = 'block';
}

function _showPwResetError(msg) {
  const el = document.getElementById('pw-reset-error');
  if (!el) return;
  if (msg) { el.textContent = msg; el.style.display = 'block'; }
  else { el.textContent = ''; el.style.display = 'none'; }
}

function _el(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function handleLogin() {
  const email    = (document.getElementById('login-email').value    || '').trim();
  const password = (document.getElementById('login-password').value || '').trim();
  _showAuthError('login-error', '');
  if (!email || !password) {
    _showAuthError('login-error', currentLang === 'ko' ? '이메일과 비밀번호를 모두 입력해주세요.' : 'Please enter both email and password.');
    return;
  }
  const btn = document.querySelector('#auth-login-form .auth-btn');
  _setBtnLoading(btn, i18n[currentLang].login_loading, true);
  const remember = document.getElementById('remember-me').checked;
  const persist  = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
  
  auth.setPersistence(persist)
    .then(() => auth.signInWithEmailAndPassword(email, password))
    .then(() => {
      hideAuthModal();
      _setBtnLoading(btn, i18n[currentLang].btn_login, false);
    })
    .catch(err => {
      console.error("Login error:", err);
      _showAuthError('login-error', _firebaseErrorMsg(err.code));
      _setBtnLoading(btn, i18n[currentLang].btn_login, false);
    });
}

function handleRegister() {
  const t = i18n[currentLang];
  const name = (document.getElementById('register-name').value || '').trim();
  const email = (document.getElementById('register-email').value || '').trim();
  const pw1   = (document.getElementById('register-password').value || '').trim();
  const pw2   = (document.getElementById('register-password2').value|| '').trim();
  _showAuthError('register-error', '');
  if (!name || !email || !pw1 || !pw2) { _showAuthError('register-error', t.auth_error_required); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { _showAuthError('register-error', t.auth_error_email); return; }
  if (pw1.length < 6) { _showAuthError('register-error', t.auth_error_pw_short); return; }
  if (pw1 !== pw2) { _showAuthError('register-error', t.auth_error_pw_mismatch); return; }
  const btn = document.querySelector('#auth-register-form .auth-btn');
  _setBtnLoading(btn, t.register_loading, true);
  auth.createUserWithEmailAndPassword(email, pw1)
    .then(result => result.user.updateProfile({ displayName: name }))
    .then(() => {
      hideAuthModal();
      _setBtnLoading(btn, t.btn_register, false);
    })
    .catch(err => {
      console.error("Register error:", err);
      _showAuthError('register-error', _firebaseErrorMsg(err.code));
      _setBtnLoading(btn, t.btn_register, false);
    });
}

function handleGoogleLogin() {
  if (window.location.protocol === 'file:') { alert(i18n[currentLang].auth_file_protocol_error); return; }
  const btn = document.querySelector('.auth-social-btn.auth-google');
  _showAuthError('login-error', '');
  _setBtnLoading(btn, i18n[currentLang].google_loading, true);
  auth.signInWithPopup(googleProvider)
    .then(() => {
      hideAuthModal();
      _setBtnLoading(btn, i18n[currentLang].auth_google, false);
    })
    .catch(err => {
      if (err.code === 'auth/popup-closed-by-user') _showAuthError('login-error', i18n[currentLang].auth_popup_closed);
      else _showAuthError('login-error', _firebaseErrorMsg(err.code));
      _setBtnLoading(btn, i18n[currentLang].auth_google, false);
    });
}

function handleLogout() { auth.signOut(); }
function skipAuth(e) { if (e) e.preventDefault(); hideAuthModal(); }
function showAuthModal() { const ov = document.getElementById('auth-overlay'); if (ov) ov.style.display = 'flex'; }
function hideAuthModal() { const ov = document.getElementById('auth-overlay'); if (ov) ov.style.display = 'none'; }
function switchAuthTab(tab) {
  document.getElementById('auth-login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  _showAuthError('login-error', '');
  _showAuthError('register-error', '');
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🔓'; // 보일 때는 열린 자물쇠
  } else {
    input.type = 'password';
    btn.textContent = '👁️'; // 숨겨져 있을 때는 눈 아이콘
  }
}

function _saveUserToFirestore(firebaseUser) {
  const userRef = db.collection('users').doc(firebaseUser.uid);
  userRef.get().then(doc => {
    const now = firebase.firestore.FieldValue.serverTimestamp();
    if (!doc.exists) return userRef.set({ uid: firebaseUser.uid, name: firebaseUser.displayName || firebaseUser.email.split('@')[0], email: firebaseUser.email, picture: firebaseUser.photoURL || null, provider: (firebaseUser.providerData[0] || {}).providerId || 'password', createdAt: now, lastLoginAt: now });
    else return userRef.update({ lastLoginAt: now });
  }).catch(e => console.warn('Firestore error:', e));
}

function _updateNavAuth() {
  const loginBtn = document.getElementById('nav-login-btn');
  const userInfo = document.getElementById('nav-user-info');
  const usernameEl = document.getElementById('nav-username');
  if (!loginBtn || !userInfo) return;
  if (_currentUser) {
    loginBtn.style.display = 'none'; userInfo.style.display = 'flex';
    if (usernameEl) usernameEl.textContent = _currentUser.name + (currentLang === 'ko' ? '님' : '');
    const nameInput = document.getElementById('userName');
    if (nameInput && !nameInput.value) nameInput.value = _currentUser.name;
    // 관리자 링크
    const existingAdminLink = document.getElementById('nav-admin-link');
    if (_currentUser.email === 'a85330549@gmail.com') {
      if (!existingAdminLink) {
        const adminLink = document.createElement('a');
        adminLink.id = 'nav-admin-link';
        adminLink.href = 'admin.html';
        adminLink.textContent = '관리자';
        adminLink.style.cssText = 'font-size:0.78rem;color:#c5a059;background:rgba(197,160,89,0.12);border:1px solid rgba(197,160,89,0.3);border-radius:5px;padding:4px 10px;text-decoration:none;margin-right:4px;white-space:nowrap;';
        userInfo.insertBefore(adminLink, userInfo.firstChild);
      }
    } else if (existingAdminLink) {
      existingAdminLink.remove();
    }
  } else {
    loginBtn.style.display = 'block'; userInfo.style.display = 'none';
    const al = document.getElementById('nav-admin-link');
    if (al) al.remove();
  }
}

function _firebaseErrorMsg(code) {
  const map = {
    'auth/user-not-found': currentLang === 'ko' ? '이메일 또는 비밀번호가 올바르지 않습니다.' : 'Invalid email or password.',
    'auth/wrong-password': currentLang === 'ko' ? '이메일 또는 비밀번호가 올바르지 않습니다.' : 'Invalid email or password.',
    'auth/invalid-credential': currentLang === 'ko' ? '이메일 또는 비밀번호가 올바르지 않습니다.' : 'Invalid email or password.',
    'auth/email-already-in-use': currentLang === 'ko' ? '이미 사용 중인 이메일입니다.' : 'Email already in use.',
    'auth/invalid-email': currentLang === 'ko' ? '올바른 이메일 형식이 아닙니다.' : 'Invalid email.',
    'auth/weak-password': currentLang === 'ko' ? '비밀번호가 너무 약합니다 (6자 이상).' : 'Weak password.',
  };
  return map[code] || (currentLang === 'ko' ? '오류가 발생했습니다.' : 'An error occurred.');
}

function _setBtnLoading(btn, text, disabled) { if (btn) { btn.textContent = text; btn.disabled = disabled; } }
function _showAuthError(id, msg) { const el = document.getElementById(id); if (el) { if (msg) { el.textContent = msg; el.style.display = 'block'; } else { el.textContent = ''; el.style.display = 'none'; } } }

/* ============================================================ */

let currentCategory = 'home';
let cachedFortune = null;
let meetingType = 'saju';
let _tarotSession = null;
let _birthHour = 'unknown';

function seededRandom(seed) { const x = Math.sin(seed++) * 10000; return x - Math.floor(x); }

function showPage(pageId) {
  currentCategory = pageId;
  const title = document.getElementById('page-title');
  const subtitle = document.getElementById('page-subtitle');
  const partnerForm = document.getElementById('partner-form');
  const resultTabs = document.getElementById('result-tabs');
  const resultArea = document.getElementById('result');
  const submitBtn = document.getElementById('submit-btn');
  const mainBanner = document.querySelector('.main-banner');
  const bannerImg = mainBanner ? mainBanner.querySelector('img') : null;

  if (mainBanner && bannerImg) {
    const banners = { home: './img/메인베너.png', newyear: './img/신년운세.png', monthly: './img/월간운세.png', love: './img/연애 궁합.png', worry: './img/연애 고민.png', meeting: './img/만남.png', tenyear: './img/십년후운세.png' };
    if (banners[pageId]) { mainBanner.style.display = 'block'; bannerImg.src = banners[pageId]; }
    else mainBanner.style.display = 'none';
  }

  document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
  const activeMenu = document.getElementById(`menu-${pageId}`);
  if (activeMenu) activeMenu.classList.add('active');

  resultArea.innerHTML = '';
  resultTabs.style.display = 'none';

  const config = pageConfigs[currentLang][pageId];
  if (config) { title.innerText = config.h1; subtitle.innerText = config.sub; document.title = config.doc; submitBtn.innerText = config.btn; }

  if (partnerForm) partnerForm.style.display = (pageId === 'love') ? 'block' : 'none';
  const fortuneTypeSelector = document.getElementById('fortune-type-selector');
  if (fortuneTypeSelector) fortuneTypeSelector.style.display = (pageId === 'meeting') ? 'block' : 'none';
  meetingType = 'saju';
  document.querySelectorAll('.fortune-type-tab').forEach(t => t.classList.remove('active'));
  const sajuTab = document.getElementById('type-saju');
  if (sajuTab) sajuTab.classList.add('active');
  const tarotArea = document.getElementById('tarot-cards-area');
  if (tarotArea) tarotArea.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  _trackPageView(pageId);
}

function _trackPageView(pageId) {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const docId  = `${today}_${pageId}`;
    db.collection('pageViews').doc(docId).set(
      { date: today, page: pageId, count: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    ).catch(() => {});
  } catch(e) {}
}

function switchTab(tabId, el) {
  if (!cachedFortune) return;
  document.querySelectorAll('.tab-item').forEach(tab => tab.classList.remove('active'));
  if (el) el.classList.add('active');
  const contentArea = document.querySelector('.fortune-card .content-body');
  const scoreFill   = document.querySelector('.progress-bar-fill');
  const scoreValue  = document.querySelector('.score-value');
  const scoreBadge  = document.querySelector('.score-badge');
  const scoreChg    = document.querySelector('.score-change');
  const data = cachedFortune.tabs[tabId];
  if (!data) return;
  if (contentArea) contentArea.innerHTML = `<p class="content">${data.text}</p>`;
  const s = data.score;
  const color = getScoreColor(s);
  if (scoreValue) { scoreValue.textContent = `${s}${currentLang==='ko'?'점':'pts'}`; scoreValue.style.color = color; }
  if (scoreBadge) { scoreBadge.textContent = getScoreLabel(s); scoreBadge.style.background = color; }
  if (scoreFill)  { scoreFill.style.background = color; scoreFill.style.width='0%'; setTimeout(()=>{ scoreFill.style.width=`${s}%`; },100); }
  if (scoreChg && data.scoreChange !== undefined) {
    const d = data.scoreChange;
    scoreChg.textContent = d>0?`▲+${d}`:d<0?`▼${d}`:'━0';
    scoreChg.className = 'score-change'+(d>0?' sc-up':d<0?' sc-down':'');
  }
  const cmt = document.querySelector('.score-comment');
  if (cmt) cmt.textContent = getScoreComment(s, tabId, currentLang);
}

function getFortune() {
  const name = document.getElementById('userName').value.trim();
  const year = parseInt(document.getElementById('birthYear').value);
  const month = parseInt(document.getElementById('birthMonth').value);
  const day = parseInt(document.getElementById('birthDay').value);
  _birthHour = document.getElementById('birthTime').value;
  const t = i18n[currentLang];
  if (!name || !year || !month || !day) { alert(t.alert_input_required); return; }
  const testDate = new Date(year, month - 1, day);
  if (testDate.getFullYear() !== year || testDate.getMonth() !== month - 1 || testDate.getDate() !== day) {
    alert(`${month}${currentLang === 'ko' ? '월' : '/'} ${day}${currentLang === 'ko' ? '일' : ''} ${t.alert_invalid_date}`);
    return;
  }
  try { localStorage.setItem('chunggi_name', name); localStorage.setItem('chunggi_year', year); localStorage.setItem('chunggi_month', month); localStorage.setItem('chunggi_day', day); } catch(e) {}
  const loading = document.getElementById('loading');
  const result = document.getElementById('result');
  const resultTabs = document.getElementById('result-tabs');
  loading.style.display = 'block';
  loading.textContent = meetingType === 'tarot' ? t.loading_tarot : meetingType === 'astrology' ? t.loading_astrology : t.loading_saju;
  result.innerHTML = '';
  resultTabs.style.display = 'none';
  const tarotArea = document.getElementById('tarot-cards-area');
  if (tarotArea) tarotArea.style.display = 'none';

  setTimeout(() => {
    loading.style.display = 'none';
    let fortuneData;
    if (meetingType === 'tarot') { showTarotCards(name, year, month, day); return; }
    else if (meetingType === 'astrology') fortuneData = generateAstrologyFortune(name, year, month, day);
    else {
      const generators = { newyear: generateNewYearFortune, love: generateLoveFortune, worry: generateWorryFortune, meeting: generateMeetingFortune, monthly: generateMonthlyFortune, tenyear: generateTenYearFortune };
      fortuneData = (generators[currentCategory] || generateFortune)(name, year, month, day, currentCategory);
    }
    cachedFortune = fortuneData;
    result.innerHTML = fortuneData.html;
    if (meetingType === 'astrology') {
      setTimeout(() => renderAstroChart(year, month, day, 'astro-chart-canvas'), 100);
    }
    const actionArea = document.createElement('div');
    actionArea.className = 'action-area'; actionArea.style.textAlign = 'center'; actionArea.style.marginTop = '25px';
    actionArea.innerHTML = `<button onclick="downloadFortuneImage()" class="save-btn">${t.btn_save_image}</button>`;
    result.appendChild(actionArea);
    resultTabs.style.display = 'flex';
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    const firstTab = document.querySelector('.tab-item');
    if (firstTab) firstTab.classList.add('active');
    setTimeout(() => { const fill = document.querySelector('.progress-bar-fill'); if (fill) { fill.style.background = getScoreColor(fortuneData.tabs.total.score); fill.style.width = `${fortuneData.tabs.total.score}%`; } }, 100);
    if (fortuneData.isSuperLucky) launchConfetti();
  }, 2000);
}

function downloadFortuneImage() {
  const card = document.querySelector('.fortune-card');
  const saveBtn = document.querySelector('.save-btn');
  if (!card || !saveBtn) return;
  saveBtn.style.opacity = '0';
  html2canvas(card, { backgroundColor: '#0a0e14', scale: 2, useCORS: true }).then(canvas => {
    const link = document.createElement('a');
    const date = new Date();
    const dateStr = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
    link.download = `Chunggi_Fortune_${dateStr}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => { console.error('Save failed:', err); alert(i18n[currentLang].alert_save_fail); }).finally(() => { saveBtn.style.opacity = '1'; });
}

function getZodiac(year) {
  const t_ko = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
  const t_en = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
  return currentLang === 'ko' ? t_ko[year % 12] : t_en[year % 12];
}

function getFiveElements(year) {
  const t_ko = ['금(金)', '수(水)', '목(木)', '화(火)', '토(土)'];
  const t_en = ['Metal', 'Water', 'Wood', 'Fire', 'Earth'];
  return currentLang === 'ko' ? t_ko[year % 5] : t_en[year % 5];
}

const GAN_KO   = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const ZHI_KO   = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const GAN_ELEM = {'甲':'목','乙':'목','丙':'화','丁':'화','戊':'토','己':'토','庚':'금','辛':'금','壬':'수','癸':'수'};
const ZHI_ELEM = {'子':'수','丑':'토','寅':'목','卯':'목','辰':'토','巳':'화','午':'화','未':'토','申':'금','酉':'금','戌':'토','亥':'수'};
const GAN_DESC = {
  ko: { '甲':'대나무처럼 곧고 우직한 양목(陽木)의 기운','乙':'유연하고 생명력 강한 음목(陰木)의 기운','丙':'태양처럼 뜨겁고 찬란한 양화(陽火)의 기운','丁':'촛불처럼 섬세하고 따뜻한 음화(陰火)의 기운','戊':'넓은 대지의 양토(陽土)의 기운','己':'비옥하고 유연한 음토(陰土)의 기운','庚':'단단한 바위의 양금(陽金)의 기운','辛':'정제된 보석의 음금(陰金)의 기운','壬':'큰 강의 양수(陽水)의 기운','癸':'이슬·안개의 음수(陰수)의 기운' },
  en: { '甲':'Yang Wood, persistent like bamboo','乙':'Yin Wood, flexible and strong','丙':'Yang Fire, brilliant like the sun','丁':'Yin Fire, delicate and warm','戊':'Yang Earth, vast like the earth','己':'Yin Earth, fertile and flexible','庚':'Yang Metal, hard like a rock','辛':'Yin Metal, refined like a gem','壬':'Yang Water, large like a river','癸':'Yin Water, like dew or mist' }
};
const ELEM_TRAIT = {
  ko: { 목:'목(木)은 봄의 기운, 생장(生長)의 에너지입니다.', 화:'화(火)는 여름의 기운, 표현(表現)의 에너지입니다.', 토:'토(土)는 환절기의 기운, 중재(仲裁)의 에너지입니다.', 금:'금(金)은 가을의 기운, 결단(決斷)의 에너지입니다.', 수:'수(水)는 겨울의 기운, 지혜(智慧)의 에너지입니다.' },
  en: { 목:'Wood is Spring, energy of growth.', 화:'Fire is Summer, energy of expression.', 토:'Earth is transition, energy of mediation.', 금:'Metal is Autumn, energy of decision.', 수:'Water is Winter, energy of wisdom.' }
};
const ELEM_WEALTH = {
  ko: { 목:'목(木) 일간은 창의적 아이디어에서 재물이 열립니다.', 화:'화(火) 일간은 적극적인 표현에서 재물 기회가 옵니다.', 토:'토(土) 일간은 안정적인 재물 축적이 유리합니다.', 금:'금(金) 일간은 원칙적인 판단에서 재물이 열립니다.', 수:'수(水) 일간은 지식과 유통에서 재물이 확장됩니다.' },
  en: { 목:'Wood masters find wealth in creative ideas.', 화:'Fire masters find wealth in expression.', 토:'Earth masters benefit from stable accumulation.', 금:'Metal masters find wealth in principled judgment.', 수:'Water masters expand wealth in knowledge and flow.' }
};
const ELEM_HEALTH = {
  ko: { 목:'목(木)은 간담·근육·눈과 연결됩니다.', 화:'화(火)는 심장·혈맥과 연결됩니다.', 토:'토(土)는 비위·소화기와 연결됩니다.', 금:'금(金)은 폐·피부·코와 연결됩니다.', 수:'수(水)는 신장·뼈·귀와 연결됩니다.' },
  en: { 목:'Wood is linked to liver and eyes.', 화:'Fire is linked to heart and blood.', 토:'Earth is linked to stomach and digestion.', 금:'Metal is linked to lungs and skin.', 수:'Water is linked to kidneys and bones.' }
};
const ZHI_ANIMAL = {
  ko: {'子':'쥐','丑':'소','寅':'호랑이','卯':'토끼','辰':'용','巳':'뱀','午':'말','未':'양','申':'원숭이','酉':'닭','戌':'개','亥':'돼지'},
  en: {'子':'Rat','丑':'Ox','寅':'Tiger','卯':'Rabbit','辰':'Dragon','巳':'Snake','午':'Horse','未':'Goat','申':'Monkey','酉':'Rooster','戌':'Dog','亥':'Pig'}
};
const ZHI_SEASON = {
  ko: {'子':'겨울','丑':'겨울','寅':'봄','卯':'봄','辰':'봄','巳':'여름','午':'여름','未':'여름','申':'가을','酉':'가을','戌':'가을','亥':'겨울'},
  en: {'子':'Winter','丑':'Winter','寅':'Spring','卯':'Spring','辰':'Spring','巳':'Summer','午':'Summer','未':'Summer','申':'Autumn','酉':'Autumn','戌':'Autumn','亥':'Winter'}
};
const ELEM_LOVE = {
  ko: { 목:'목(木) 일간은 따뜻하고 부드러운 인연이 어울립니다.', 화:'화(火) 일간은 열정적이고 밝은 연애를 선호합니다.', 토:'토(토) 일간은 신뢰와 안정을 바탕으로 한 만남이 좋습니다.', 금:'금(金) 일간은 절도 있고 깔끔한 관계를 지향합니다.', 수:'수(水) 일간은 깊은 이해와 교감이 중요합니다.' },
  en: { 목:'Wood masters suit warm and gentle partners.', 화:'Fire masters prefer passionate and bright romance.', 토:'Earth masters value trust and stability in relationships.', 금:'Metal masters seek disciplined and clear connections.', 수:'Water masters value deep understanding and communion.' }
};
const ELEM_CAREER = {
  ko: { 목:'목(木) 기운은 기획, 교육, 창작 분야에서 빛이 납니다.', 화:'화(火) 기운은 마케팅, 홍보, 예술 분야가 어울립니다.', 토:'토(토) 기운은 부동산, 중개, 관리 업무에 강점이 있습니다.', 금:'금(金) 기운은 기술, 금융, 법조계에서 성과가 큽니다.', 수:'수(水) 기운은 유통, 서비스, 기획 분야가 유리합니다.' },
  en: { 목:'Wood energy shines in planning, education, and creation.', 화:'Fire energy suits marketing, PR, and arts.', 토:'Earth energy has strengths in real estate, mediation, and management.', 금:'Metal energy performs well in tech, finance, and law.', 수:'Water energy excels in distribution, service, and planning.' }
};

/* ============================================================
   정통 명리학 분석 모듈 (Classic Saju Analysis Module)
   ============================================================ */
const GAN_YINYANG = {'甲':'양','乙':'음','丙':'양','丁':'음','戊':'양','己':'음','庚':'양','辛':'음','壬':'양','癸':'음'};
const ZHI_YINYANG = {'子':'양','丑':'음','寅':'양','卯':'음','辰':'양','巳':'음','午':'양','未':'음','申':'양','酉':'음','戌':'양','亥':'음'};
const GAN_HANGUL  = {
  ko: {'甲':'갑목(甲木)','乙':'을목(乙木)','丙':'병화(丙火)','丁':'정화(丁火)','戊':'무토(戊土)','己':'기토(己土)','庚':'경금(庚金)','辛':'신금(辛金)','壬':'임수(壬水)','癸':'계수(癸水)'},
  en: {'甲':'JiaMu(甲木)','乙':'YiMu(乙木)','丙':'BingHuo(丙火)','丁':'DingHuo(丁火)','戊':'WuTu(戊土)','己':'JiTu(己土)','庚':'GengJin(庚金)','辛':'XinJin(辛金)','壬':'RenShui(壬水)','癸':'GuiShui(癸水)'}
};
const ZHI_HANGUL  = {
  ko: {'子':'자수(子水)','丑':'축토(丑土)','寅':'인목(寅木)','卯':'묘목(卯木)','辰':'진토(辰土)','巳':'사화(巳火)','午':'오화(午火)','未':'미토(未土)','申':'신금(申金)','酉':'유금(酉金)','戌':'술토(戌土)','亥':'해수(亥水)'},
  en: {'子':'ZiShui(子水)','丑':'ChouTu(丑土)','寅':'YinMu(寅木)','卯':'MaoMu(卯木)','辰':'ChenTu(辰土)','巳':'SiHuo(巳火)','午':'WuHuo(午火)','未':'WeiTu(未土)','申':'ShenJin(申金)','酉':'YouJin(酉金)','戌':'XuTu(戌土)','亥':'HaiShui(亥水)'}
};
const ELEM_GEN    = {'목':'화','화':'토','토':'금','금':'수','수':'목'};
const ELEM_CTRL   = {'목':'토','화':'금','토':'수','금':'목','수':'화'};
const ELEM_CLRS   = {'목':'#3a7d44','화':'#c0392b','토':'#c5a059','금':'#a09060','수':'#1a6090'};
const ELEM_ATTRS  = {
  ko: {
    목:{colorKo:'청색·녹색',colorHex:'#3a7d44',direction:'동쪽(東)',numbers:'3, 8'},
    화:{colorKo:'빨간색·주황색',colorHex:'#c0392b',direction:'남쪽(南)',numbers:'2, 7'},
    토:{colorKo:'황색·갈색',colorHex:'#c5a059',direction:'중앙(中)',numbers:'5, 10'},
    금:{colorKo:'흰색·금색',colorHex:'#a09060',direction:'서쪽(西)',numbers:'4, 9'},
    수:{colorKo:'검정·파랑',colorHex:'#1a6090',direction:'북쪽(北)',numbers:'1, 6'}
  },
  en: {
    목:{colorKo:'Blue/Green',colorHex:'#3a7d44',direction:'East (東)',numbers:'3, 8'},
    화:{colorKo:'Red/Orange',colorHex:'#c0392b',direction:'South (南)',numbers:'2, 7'},
    토:{colorKo:'Yellow/Brown',colorHex:'#c5a059',direction:'Center (中)',numbers:'5, 10'},
    금:{colorKo:'White/Gold',colorHex:'#a09060',direction:'West (西)',numbers:'4, 9'},
    수:{colorKo:'Black/Blue',colorHex:'#1a6090',direction:'North (北)',numbers:'1, 6'}
  }
};
const DAYMASTER_ANALYSIS = {
  ko: {
    목:{character:'인자하고 따뜻한 마음을 가졌으며 봄의 나무처럼 성장을 추구합니다. 강한 추진력과 직진하는 기질, 타인을 돕고자 하는 박애 정신이 강점입니다.',aptitude:'교육·의료·기획·환경·NGO·교사·의사·사회복지',wealth:'창의성과 기획력이 재물의 원천. 부동산·토지 관련 투자가 유리합니다.',health:'간(肝)·담낭·눈·근육에 주의. 봄철과 동쪽 방향이 건강에 유리합니다.',strength:'강한 의지력, 창의성, 리더십, 인내심',weakness:'고집이 강해 융통성 부족, 분노 조절에 주의'},
    화:{character:'열정적이고 화려한 에너지. 뛰어난 직관력과 표현력으로 사람들을 이끄는 카리스마가 있습니다.',aptitude:'방송·예술·마케팅·홍보·교육·철학·문화 콘텐츠',wealth:'화려한 표현력이 재물을 끌어옵니다. 금융·보석·기계 관련이 유리합니다.',health:'심장·혈관·소장·눈(시력)에 주의. 지나친 흥분과 스트레스에 취약합니다.',strength:'열정, 창의성, 카리스마, 직관력',weakness:'감정 기복이 크고 충동적 결정에 주의'},
    토:{character:'신뢰할 수 있는 인품의 소유자. 인내심이 강하고 현실적이며 모든 것을 포용하는 따뜻함이 있습니다.',aptitude:'부동산·건설·농업·중개업·행정·공무원·요식업',wealth:'안정적 재물 축적에 뛰어납니다. 수(水) 관련 유통·금융 업종이 유리합니다.',health:'비장·위장·소화기·입에 주의. 과식과 습기에 취약합니다.',strength:'포용력, 인내심, 신뢰감, 현실적 판단',weakness:'우유부단하고 고집스러울 수 있음'},
    금:{character:'결단력과 의리를 중시하는 성품. 원칙적이고 법도를 따르며 한번 결심하면 끝까지 밀어붙입니다.',aptitude:'법조·금융·군·경찰·IT·기술·제조업·회계',wealth:'목(木) 관련 교육·문화·나무 업종이 유리합니다. 원칙적 투자 성향.',health:'폐·대장·피부·코에 주의. 호흡기가 약할 수 있습니다.',strength:'결단력, 의리, 원칙주의, 추진력',weakness:'너무 완고하고 냉정할 수 있어 인간관계에 주의'},
    수:{character:'깊은 지혜와 유연한 적응력, 뛰어난 지적 능력. 물처럼 어떤 상황에도 스며드는 재치가 있습니다.',aptitude:'연구·철학·출판·여행·유통·IT·상담·의학',wealth:'화(火) 관련 에너지·문화·엔터테인먼트가 유리합니다. 정보와 지식이 재물의 통로.',health:'신장·방광·뼈·척추·귀에 주의. 한랭한 기운에 약합니다.',strength:'지혜, 적응력, 통찰력, 유연성',weakness:'결단력 부족, 과도한 걱정·불안에 주의'}
  },
  en: {
    목:{character:'Kind and warm-hearted, pursuing growth like a tree in spring. Strong drive, a straightforward nature, and a generous spirit of helping others are your strengths.',aptitude:'Education, healthcare, planning, environment, NGOs, teaching, medicine, social welfare',wealth:'Creativity and planning ability are your source of wealth. Real estate and land-related investments are favorable.',health:'Watch your liver, gallbladder, eyes, and muscles. Spring and the eastern direction are favorable for your health.',strength:'Strong willpower, creativity, leadership, patience',weakness:'Strong stubbornness can limit flexibility; watch your temper'},
    화:{character:'Passionate and radiant energy. Sharp intuition and expressive power give you the charisma to lead others.',aptitude:'Broadcasting, arts, marketing, PR, education, philosophy, cultural content',wealth:'Vivid expressiveness draws wealth toward you. Finance, jewelry, and machinery-related fields are favorable.',health:'Watch your heart, blood vessels, small intestine, and eyesight. Vulnerable to excessive excitement and stress.',strength:'Passion, creativity, charisma, intuition',weakness:'Prone to mood swings; watch for impulsive decisions'},
    토:{character:'A trustworthy character. Patient and practical, with a warm capacity to embrace everything.',aptitude:'Real estate, construction, agriculture, brokerage, administration, civil service, food service',wealth:'Excels at steady wealth accumulation. Water-related distribution and finance industries are favorable.',health:'Watch your spleen, stomach, digestion, and mouth. Vulnerable to overeating and dampness.',strength:'Inclusiveness, patience, trustworthiness, practical judgment',weakness:'Can be indecisive yet stubborn at the same time'},
    금:{character:'A character that values decisiveness and loyalty. Principled and rule-abiding, you push through to the end once decided.',aptitude:'Law, finance, military, police, IT, technology, manufacturing, accounting',wealth:'Wood-related education, culture, and timber industries are favorable. Your investment style is principled.',health:'Watch your lungs, large intestine, skin, and nose. Your respiratory system may be weak.',strength:'Decisiveness, loyalty, principle, drive',weakness:'Can be overly rigid and cold; mind your relationships'},
    수:{character:'Deep wisdom, flexible adaptability, and sharp intellect. Like water, you have the wit to flow into any situation.',aptitude:'Research, philosophy, publishing, travel, distribution, IT, counseling, medicine',wealth:'Fire-related energy, culture, and entertainment fields are favorable. Information and knowledge are your channel to wealth.',health:'Watch your kidneys, bladder, bones, spine, and ears. Vulnerable to cold energy.',strength:'Wisdom, adaptability, insight, flexibility',weakness:'Can lack decisiveness; watch excessive worry and anxiety'}
  }
};
const SEUN_2026 = {
  ko: {
    목:{total:'목(木) 일간이 병오(丙午)년을 맞습니다. 목생화(木生火)로 식상(食傷)의 해입니다. 창의력과 표현력이 폭발하고 외부 활동이 왕성해집니다.',wealth:'식상이 재성을 생하므로 기술·능력으로 재물이 들어옵니다. 프리랜서·창업·부업이 유리합니다.',love:'표현력이 강해져 연애에 유리한 해. 새 인연은 다이나믹하고 열정적인 상대를 만납니다.',career:'능력을 인정받고 새로운 프로젝트 기회가 생깁니다. 부서 이동이나 새 포지션 가능성 있음.',health:'지나친 활동으로 과로 주의. 화(火) 과다로 심장·혈압 체크 필요.'},
    화:{total:'화(火) 일간이 병오(丙午)년을 맞습니다. 화(火) 비겁(比劫)의 해로 경쟁과 자존심이 강해집니다. 독립심과 리더십이 두드러집니다.',wealth:'비겁년은 재물이 분산되기 쉽습니다. 무리한 투자나 보증은 금물. 착실한 본업이 최선.',love:'자존심이 강해져 연애에서 충돌 주의. 양보와 배려를 의식적으로 연습하세요.',career:'경쟁이 치열해지는 해. 실력으로 승부해야 하며 인간관계 관리가 중요합니다.',health:'심장·혈압·소장 건강에 주의. 화(火) 과다로 열성 질환, 안구 질환 주의.'},
    토:{total:'토(土) 일간이 병오(丙午)년을 맞습니다. 화생토(火生土)로 인성(印星)의 해입니다. 학업·자격증·문서·계약 등에 유리한 흐름.',wealth:'인성년은 당장의 재물보다 역량 축적의 해. 학습·자격증 투자가 장기적 재물로 연결됩니다.',love:'인성의 기운으로 안정적인 인연이 만들어집니다. 상대에게 의지하려는 마음이 강해집니다.',career:'학습과 연수, 자격증 취득에 유리합니다. 상사·선배의 도움을 많이 받는 시기.',health:'비장·위장 관리 필요. 과식과 과로로 인한 소화기 장애 주의.'},
    금:{total:'금(金) 일간이 병오(丙午)년을 맞습니다. 화극금(火克金)으로 관성(官星)의 해입니다. 사회적 책임이 커지고 명예와 직위가 올라가는 흐름.',wealth:'관성년은 직장 소득이 안정되나 지출도 증가. 사회적 체면에 맞는 지출 절제 필요.',love:'관성의 기운으로 결혼·결실의 인연이 강해집니다. 책임 있는 안정된 관계 지향.',career:'승진·이직·새 직장의 기운이 강합니다. 조직 내 역할이 커지고 책임이 증가합니다.',health:'폐·대장·피부 건강 주의. 업무 스트레스로 인한 면역 저하 경계.'},
    수:{total:'수(水) 일간이 병오(丙午)년을 맞습니다. 병오년의 화(火)는 수(水) 일간에게 재성(財星)입니다. 재물 활동이 활발해지고 적극적인 투자가 유리한 해.',wealth:'재성년으로 수입이 늘어나는 흐름. 부동산·주식·사업 투자가 결실을 맺을 수 있으나 과욕 금물.',love:'재성의 기운으로 이성 매력이 높아집니다. 적극적인 만남이 좋은 결과를 낳습니다.',career:'새로운 사업·프로젝트·외주 기회가 생깁니다. 재물과 연결된 직종에서 성과가 납니다.',health:'신장·방광·뼈 건강 관리. 수분 보충과 냉기 예방이 중요합니다.'}
  },
  en: {
    목:{total:'As a Wood Day Master, you enter the Year of Byeong-o (丙午). Wood generates Fire, making this an Output (食傷) year. Creativity and expression flourish, and outward activity becomes vigorous.',wealth:'As the Output element generates Wealth, income comes through skills and abilities. Freelancing, starting a business, or a side job are favorable.',love:'Your expressiveness grows stronger, making this a favorable year for love. New connections bring dynamic and passionate partners.',career:'Your abilities are recognized and new project opportunities arise. A department change or new position is possible.',health:'Watch for fatigue from excessive activity. Excess Fire calls for checking your heart and blood pressure.'},
    화:{total:'As a Fire Day Master, you enter the Year of Byeong-o (丙午). This is a Fire Companion (比劫) year, intensifying competition and pride. Independence and leadership stand out.',wealth:'In a Companion year, wealth tends to scatter. Avoid reckless investments or guarantees — steady focus on your main work is best.',love:'Heightened pride can cause conflict in love. Consciously practice yielding and consideration.',career:'Competition intensifies this year. You must prove yourself through skill, and managing relationships is important.',health:'Watch your heart, blood pressure, and small intestine. Excess Fire raises the risk of feverish conditions and eye trouble.'},
    토:{total:'As an Earth Day Master, you enter the Year of Byeong-o (丙午). Fire generates Earth, making this a Resource (印星) year. A favorable flow for study, certifications, documents, and contracts.',wealth:'A Resource year favors building capability over immediate wealth. Investing in study and certifications connects to long-term wealth.',love:'Resource energy fosters stable relationships. You may feel a stronger urge to rely on your partner.',career:'Favorable for study, training, and earning certifications. A period when you receive much help from superiors and mentors.',health:'Take care of your spleen and stomach. Watch for digestive trouble from overeating and overwork.'},
    금:{total:'As a Metal Day Master, you enter the Year of Byeong-o (丙午). Fire overcomes Metal, making this an Authority (官星) year. Social responsibility grows, and your reputation and rank tend to rise.',wealth:'In an Authority year, income from work stabilizes but spending also increases. Restrain expenses to match your social standing.',love:'Authority energy strengthens marriage-bound connections. You lean toward responsible, stable relationships.',career:'Strong energy for promotion, job change, or a new workplace. Your role within the organization grows along with your responsibilities.',health:'Watch your lungs, large intestine, and skin. Be wary of weakened immunity from work stress.'},
    수:{total:'As a Water Day Master, you enter the Year of Byeong-o (丙午). The Fire of this year is your Wealth (財星) element. Financial activity grows active, making bold investment favorable this year.',wealth:'A Wealth year brings rising income. Real estate, stocks, and business investments can bear fruit — but avoid greed.',love:'Wealth energy heightens your romantic appeal. Proactive encounters lead to good results.',career:'New business, project, or outsourcing opportunities arise. Wealth-related fields bring strong results.',health:'Take care of your kidneys, bladder, and bones. Staying hydrated and avoiding cold is important.'}
  }
};
const JEOLGI_APPROX = [{month:1,day:6},{month:2,day:4},{month:3,day:6},{month:4,day:5},{month:5,day:6},{month:6,day:6},{month:7,day:7},{month:8,day:8},{month:9,day:8},{month:10,day:8},{month:11,day:7},{month:12,day:7}];

let _todaySajuCache = null;
function getTodaySaju() {
  if (_todaySajuCache) return _todaySajuCache;
  try {
    const t = new Date();
    if (typeof Manseryeok !== 'undefined' && Manseryeok.calculateSaju) {
      const r = Manseryeok.calculateSaju(t.getFullYear(), t.getMonth()+1, t.getDate(), 12, 0);
      _todaySajuCache = {yG:r.yearPillarHanja[0],yZ:r.yearPillarHanja[1],mG:r.monthPillarHanja[0],mZ:r.monthPillarHanja[1],dG:r.dayPillarHanja[0],dZ:r.dayPillarHanja[1]};
    }
  } catch(e) {}
  return _todaySajuCache;
}

function advancePillar(gan, zhi, steps) {
  const g = ((GAN_KO.indexOf(gan) + steps) % 10 + 10) % 10;
  const z = ((ZHI_KO.indexOf(zhi) + steps) % 12 + 12) % 12;
  return {gan:GAN_KO[g], zhi:ZHI_KO[z]};
}

function calcElemCounts(saju, useHour) {
  const counts = {목:0,화:0,토:0,금:0,수:0};
  const chars = [saju.yG,saju.yZ,saju.mG,saju.mZ,saju.dG,saju.dZ];
  if (useHour && saju.hG) chars.push(saju.hG, saju.hZ);
  chars.forEach(c => { const e = GAN_ELEM[c]||ZHI_ELEM[c]; if(e && counts[e]!==undefined) counts[e]++; });
  return counts;
}

function calcDaeunStartAge(bYear, bMonth, bDay, isForward) {
  let dates = [];
  try {
    if (typeof Manseryeok !== 'undefined' && Manseryeok.getSolarTermsByYear) {
      for (let dy=-1; dy<=1; dy++) {
        const terms = Manseryeok.getSolarTermsByYear(bYear+dy) || [];
        terms.filter(t => t.type==='jeolgi' || ['소한','입춘','경칩','청명','입하','망종','소서','입추','백로','한로','입동','대설'].includes(t.name))
             .forEach(t => dates.push(new Date(bYear+dy, (t.month||1)-1, t.day||6)));
      }
    }
  } catch(e) {}
  if (!dates.length) {
    for (let dy=-1; dy<=1; dy++) JEOLGI_APPROX.forEach(j => dates.push(new Date(bYear+dy, j.month-1, j.day)));
  }
  const birth = new Date(bYear, bMonth-1, bDay);
  let minMs = Infinity;
  dates.forEach(d => { const diff = isForward ? d-birth : birth-d; if(diff>0&&diff<minMs) minMs=diff; });
  if (minMs===Infinity) return 3;
  return Math.max(1, Math.round(minMs/86400000/3));
}

function calcDaeun(saju, bYear, bMonth, bDay, gender) {
  const isYang = (GAN_YINYANG[saju.yG]||'양')==='양';
  const isForward = (gender==='male'&&isYang)||(gender==='female'&&!isYang);
  const startAge = calcDaeunStartAge(bYear, bMonth, bDay, isForward);
  const list = [];
  for (let i=0;i<8;i++) {
    const step = isForward ? i+1 : -(i+1);
    const p = advancePillar(saju.mG, saju.mZ, step);
    list.push({gan:p.gan, zhi:p.zhi, ganElem:GAN_ELEM[p.gan]||'토', zhiElem:ZHI_ELEM[p.zhi]||'토', startAge:startAge+i*10, endAge:startAge+i*10+9});
  }
  return {startAge, isForward, list};
}

function calcYongsin(dayElem, counts) {
  const inseong = Object.keys(ELEM_GEN).find(k=>ELEM_GEN[k]===dayElem)||'수';
  const support = (counts[dayElem]||0)+(counts[inseong]||0);
  const total   = Object.values(counts).reduce((a,b)=>a+b,0);
  const isStrong = support > total/2;
  const yongsinElem = isStrong ? (Object.keys(ELEM_CTRL).find(k=>ELEM_CTRL[k]===dayElem)||dayElem) : inseong;
  return {yongsinElem, isStrong};
}

/* ── 점수 시스템 ── */
function getScoreColor(score) {
  if (score>=90) return '#e8474c';
  if (score>=75) return '#e89020';
  if (score>=65) return '#c8c020';
  if (score>=55) return '#3a80c0';
  return '#707080';
}
function getScoreLabel(score) {
  if (score>=90) return currentLang==='ko'?'최고운 🔴':'Peak 🔴';
  if (score>=75) return currentLang==='ko'?'좋은운 🟠':'Good 🟠';
  if (score>=65) return currentLang==='ko'?'보통운 🟡':'Fair 🟡';
  if (score>=55) return currentLang==='ko'?'주의운 🔵':'Caution 🔵';
  return currentLang==='ko'?'나쁜운 ⚫':'Poor ⚫';
}
function getScoreComment(score, tab, lang) {
  const T = {
    wealth:{90:{ko:'재물이 넘쳐흐르는 최고의 날! 투자 기회를 잡으세요',en:'Wealth overflows! Seize investment opportunities'},75:{ko:'재물운 상승 중! 계획적인 소비로 더 늘려보세요',en:'Wealth rising! Grow it with smart spending'},65:{ko:'수입과 지출이 균형을 이루는 평온한 날',en:'Income and spending in balance today'},55:{ko:'불필요한 지출을 줄이고 절약하세요',en:'Cut unnecessary spending and save'},50:{ko:'큰 지출·투자는 피하고 현상 유지에 집중하세요',en:'Avoid major expenses; maintain current situation'}},
    love:  {90:{ko:'운명적인 만남이 기다립니다. 적극적으로 나서세요',en:'A fateful meeting awaits. Be proactive!'},75:{ko:'사랑이 깊어지는 따뜻한 시기입니다',en:'A warm period of deepening love'},65:{ko:'안정적인 관계가 유지되는 평화로운 시기',en:'Peaceful period of stable relationships'},55:{ko:'오해가 생길 수 있으니 대화가 필요합니다',en:'Misunderstandings possible; communicate more'},50:{ko:'충동적 행동을 피하고 냉정하게 생각하세요',en:'Avoid impulsive actions; think clearly'}},
    career:{90:{ko:'승진·인정받는 최고의 시기! 중요한 제안이 올 수 있어요',en:'Peak time for promotion! Important offers may come'},75:{ko:'노력이 결실을 맺는 좋은 시기입니다',en:'Efforts bear fruit — a good period'},65:{ko:'꾸준히 노력하면 성과가 나타납니다',en:'Steady effort will show results'},55:{ko:'실수하지 않도록 신중하게 행동하세요',en:'Act carefully to avoid mistakes'},50:{ko:'중요한 결정은 미루고 때를 기다리세요',en:'Delay major decisions; wait for better timing'}},
    health:{90:{ko:'최상의 컨디션! 새로운 운동을 시작하기 좋은 날',en:'Peak condition! Great day to start new exercise'},75:{ko:'활력 넘치는 하루! 가벼운 운동을 추천해요',en:'Energetic day! Light exercise recommended'},65:{ko:'무리하지 않고 컨디션을 유지하세요',en:'Maintain condition without overexerting'},55:{ko:'피로가 쌓일 수 있으니 충분히 쉬세요',en:'Fatigue may accumulate; rest well'},50:{ko:'몸 상태가 좋지 않으니 건강관리에 집중하세요',en:'Poor condition; focus on health care'}}
  };
  const t = T[tab]||T.wealth;
  const k = score>=90?90:score>=75?75:score>=65?65:score>=55?55:50;
  return (lang==='ko'?t[k].ko:t[k].en)||'';
}

function calcSajuScore(saju, category, bYear, bMonth, bDay, tabSeed, targetDate) {
  const dayElem = GAN_ELEM[saju.dG]||'토';
  const d = targetDate||new Date();
  const bSeed = bYear*1000+bMonth*100+bDay;
  const dSeed = d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
  const rand = n => seededRandom(bSeed*7+dSeed*3+(tabSeed||0)*13+n*97);
  let mod = Math.round(rand(0)*10-5);
  let periodElem = null;
  if (category==='newyear') {
    periodElem = '화';
  } else {
    const ts = getTodaySaju();
    if (ts) { periodElem = category==='monthly'?(GAN_ELEM[ts.mG]||null):(GAN_ELEM[ts.dG]||null); }
    if (category==='tenyear' && ts) {
      const ye = GAN_ELEM[ts.yG]||null;
      if (ye) {
        if (ELEM_GEN[ye]===dayElem)    mod += Math.round(3+rand(10)*7);
        else if (ELEM_CTRL[ye]===dayElem) mod -= Math.round(3+rand(11)*7);
      }
    }
  }
  if (periodElem) {
    if      (ELEM_GEN[periodElem]===dayElem)  mod += Math.round(10+rand(1)*15);
    else if (ELEM_GEN[dayElem]===periodElem)  mod += Math.round(5+rand(2)*10);
    else if (ELEM_CTRL[dayElem]===periodElem) mod += Math.round(5+rand(3)*10);
    else if (ELEM_CTRL[periodElem]===dayElem) mod -= Math.round(10+rand(4)*15);
    else                                       mod += Math.round(rand(5)*10-5);
  }
  const counts = calcElemCounts(saju, _birthHour!=='unknown');
  const total  = Object.values(counts).reduce((a,b)=>a+b,0);
  const cnt    = counts[dayElem]||0;
  if (cnt>total*0.35)   mod += Math.round(3+rand(6)*7);
  else if (cnt===0)     mod -= Math.round(3+rand(7)*7);
  if (['love','meeting','worry'].includes(category)) {
    if (['子','卯','午','酉'].includes(saju.yZ)||['子','卯','午','酉'].includes(saju.dZ)) mod += Math.round(rand(8)*8);
  }
  if (['meeting','tenyear'].includes(category)) {
    if (['寅','申','巳','亥'].includes(saju.yZ)||['寅','申','巳','亥'].includes(saju.dZ)) mod += Math.round(rand(9)*5);
  }
  return Math.min(100, Math.max(50, 75+Math.round(mod)));
}

/* ── 클래식 사주 HTML ── */
function buildClassicSajuHTML(name, saju, bYear, bMonth, bDay, gender, lang) {
  const isEn   = lang === 'en';
  const dayElem = GAN_ELEM[saju.dG]||'토';
  const hasHour = _birthHour!=='unknown';
  const curYear = new Date().getFullYear();
  const curAge  = curYear - bYear;
  const counts  = calcElemCounts(saju, hasHour);
  const maxCnt  = Math.max(...Object.values(counts),1);
  const daeun   = calcDaeun(saju, bYear, bMonth, bDay, gender);
  const yongsin = calcYongsin(dayElem, counts);
  const dmInfo  = (DAYMASTER_ANALYSIS[lang]||DAYMASTER_ANALYSIS.ko)[dayElem]||(DAYMASTER_ANALYSIS[lang]||DAYMASTER_ANALYSIS.ko)['토'];
  const seun    = (SEUN_2026[lang]||SEUN_2026.ko)[dayElem]||(SEUN_2026[lang]||SEUN_2026.ko)['토'];
  const ELEMS   = ['목','화','토','금','수'];
  const HJ      = {목:'木',화:'火',토:'土',금:'金',수:'水'};
  const ELEM_NAME_EN = {목:'Wood',화:'Fire',토:'Earth',금:'Metal',수:'Water'};
  const curDIdx = daeun.list.findIndex(d=>curAge>=d.startAge&&curAge<=d.endAge);
  const weakEs  = ELEMS.filter(e=>counts[e]===0);
  const yAttr   = (ELEM_ATTRS[lang]||ELEM_ATTRS.ko)[yongsin.yongsinElem]||(ELEM_ATTRS[lang]||ELEM_ATTRS.ko)['토'];
  const yClr    = ELEM_CLRS[yongsin.yongsinElem]||'#c5a059';
  const elemLbl = e => isEn ? `${ELEM_NAME_EN[e]} (${HJ[e]})` : `${e}(${HJ[e]})`;

  const charCell = (ch, isGan) => {
    const e  = isGan?(GAN_ELEM[ch]||'토'):(ZHI_ELEM[ch]||'토');
    const yy = isGan?(GAN_YINYANG[ch]||'양'):(ZHI_YINYANG[ch]||'양');
    const hn = isGan?(GAN_HANGUL[lang][ch]||ch):(ZHI_HANGUL[lang][ch]||ch);
    const c  = ELEM_CLRS[e]||'#c5a059';
    const yyLbl = isEn ? (yy==='양'?'Yang':'Yin') : yy;
    return `<div class="csj-cell"><div class="csj-hanja" style="color:${c}">${ch}</div><div class="csj-meta"><span class="csj-e" style="color:${c}">${HJ[e]}</span><span class="csj-yy ${yy==='양'?'csj-yang':'csj-yin'}">${yyLbl}</span></div><div class="csj-ko">${hn}</div></div>`;
  };

  const bars = ELEMS.map(e=>{
    const w = Math.round((counts[e]||0)/maxCnt*100);
    return `<div class="csj-bar-row"><div class="csj-bar-lbl" style="color:${ELEM_CLRS[e]}">${elemLbl(e)}</div><div class="csj-bar-bg"><div class="csj-bar-fill" style="width:${w}%;background:${ELEM_CLRS[e]}"></div></div><div class="csj-bar-cnt" style="color:${ELEM_CLRS[e]}">${counts[e]||0}${isEn?'':'개'}</div></div>`;
  }).join('');

  const daeunRows = daeun.list.map((d,i)=>{
    const isCur = i===curDIdx;
    const gc=ELEM_CLRS[d.ganElem]||'#c5a059', zc=ELEM_CLRS[d.zhiElem]||'#c5a059';
    const ageLbl = isEn ? `${d.startAge}-${d.endAge} yrs` : `${d.startAge}~${d.endAge}세`;
    return `<div class="csj-daeun-item${isCur?' csj-daeun-cur':''}">${isCur?`<div class="csj-cur-badge">${isEn?'Current':'지금'}</div>`:''}<div class="csj-daeun-age">${ageLbl}</div><div class="csj-daeun-p"><span style="color:${gc}">${d.gan}</span><span style="color:${zc}">${d.zhi}</span></div><div class="csj-daeun-e"><span style="color:${gc}">${d.ganElem}</span>·<span style="color:${zc}">${d.zhiElem}</span></div></div>`;
  }).join('');

  if (isEn) {
    return `<div class="csj-wrapper">
  <div class="csj-sec"><div class="csj-sec-title">📊 Four Pillars (四柱八字)</div>
    <div class="csj-pillars">
      <div class="csj-pillar${!hasHour?' csj-dim':''}"><div class="csj-plabel">Hour Pillar (時柱)</div>${hasHour?charCell(saju.hG,true)+''+charCell(saju.hZ,false):'<div class="csj-cell csj-empty">?<br><small>Not Entered</small></div><div class="csj-cell csj-empty">?</div>'}</div>
      <div class="csj-pillar csj-day-pillar"><div class="csj-plabel">Day Pillar (日柱) <span class="csj-me">Me</span></div>${charCell(saju.dG,true)}${charCell(saju.dZ,false)}</div>
      <div class="csj-pillar"><div class="csj-plabel">Month Pillar (月柱)</div>${charCell(saju.mG,true)}${charCell(saju.mZ,false)}</div>
      <div class="csj-pillar"><div class="csj-plabel">Year Pillar (年柱)</div>${charCell(saju.yG,true)}${charCell(saju.yZ,false)}</div>
    </div>
    <div class="csj-note"><span style="color:#e8c47a">■</span> Yang (陽) &nbsp;<span style="color:#9b8ae0">■</span> Yin (陰) &nbsp;<strong style="color:${ELEM_CLRS[dayElem]}">${saju.dG}(${GAN_HANGUL.en[saju.dG]||dayElem})</strong> Day Master represents you</div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">🔥 Five Elements Analysis (五行分析)</div>
    <div class="csj-bars">${bars}</div>
    ${weakEs.length?`<div class="csj-weak-row"><span class="csj-weak-lbl">⚠ Weak Elements:</span>${weakEs.map(e=>`<span class="csj-weak-badge" style="color:${ELEM_CLRS[e]};border-color:${ELEM_CLRS[e]}">${elemLbl(e)}</span>`).join('')}<span class="csj-weak-tip">Strengthening these improves balance</span></div>`:'<div class="csj-weak-row" style="color:#6dbf67">✓ All five elements are balanced</div>'}
    <div class="csj-shengke"><div class="csj-sk-title">⚡ Generation &amp; Restriction</div><div class="csj-sk-row"><span style="color:#3a7d44">木</span>→<span style="color:#c0392b">火</span>→<span style="color:#c5a059">土</span>→<span style="color:#a09060">金</span>→<span style="color:#1a6090">水</span>→<span style="color:#3a7d44">木</span> <small>(Generation 生)</small></div><div class="csj-sk-row"><span style="color:#3a7d44">木</span>克<span style="color:#c5a059">土</span> · <span style="color:#c5a059">土</span>克<span style="color:#1a6090">水</span> · <span style="color:#1a6090">水</span>克<span style="color:#c0392b">火</span> · <span style="color:#c0392b">火</span>克<span style="color:#a09060">金</span> · <span style="color:#a09060">金</span>克<span style="color:#3a7d44">木</span> <small>(Restriction 克)</small></div></div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">☯ Day Master Analysis — ${saju.dG}(${GAN_HANGUL.en[saju.dG]||dayElem})</div>
    <div class="csj-dm-grid">
      <div class="csj-dm-item"><div class="csj-dm-lbl">Personality &amp; Temperament</div><div>${dmInfo.character}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">Aptitude &amp; Career</div><div>${dmInfo.aptitude}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">Wealth Fortune</div><div>${dmInfo.wealth}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">Health</div><div>${dmInfo.health}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl" style="color:#6dbf67">Strengths</div><div style="color:#6dbf67">${dmInfo.strength}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl" style="color:#e8856a">Weaknesses</div><div style="color:#e8856a">${dmInfo.weakness}</div></div>
    </div>
    <div class="csj-str-row">Day Master Strength: <span class="csj-str-badge csj-str-${yongsin.isStrong?'strong':'weak'}">${yongsin.isStrong?'Strong (身强) — Strong will and drive':'Weak (身弱) — Sensitive and cooperation-oriented'}</span></div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">🌊 Major Fortune (大運) — 10-Year Flow</div>
    <div class="csj-daeun-info"><span>${daeun.isForward?'Direct (順行) ▶':'Retrograde (逆行) ◀'}</span><span>Fortune Begins: <strong>${daeun.startAge} yrs</strong></span></div>
    <div class="csj-daeun-grid">${daeunRows}</div>
  </div>
  <div class="csj-sec csj-seun"><div class="csj-sec-title">📅 2026 Annual Fortune (歲運) — 丙午Year</div>
    <div class="csj-seun-hdr"><span class="csj-seun-ch" style="color:#c0392b">丙</span><span class="csj-seun-ch" style="color:#c0392b">午</span><span class="csj-seun-sub">Byeong-o Year · Fire (火) Element · Yang (陽)</span></div>
    <div class="csj-seun-total">${seun.total}</div>
    <div class="csj-seun-grid">
      <div class="csj-seun-item"><div class="csj-seun-lbl">💰 Wealth</div><div>${seun.wealth}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">💑 Love</div><div>${seun.love}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">💼 Career</div><div>${seun.career}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">🌿 Health</div><div>${seun.health}</div></div>
    </div>
  </div>
  <div class="csj-sec csj-yongsin"><div class="csj-sec-title">✨ Favorable Element (用神) — Your Essential Element</div>
    <div class="csj-ys-main" style="border-color:${yClr}">
      <div class="csj-ys-elem" style="color:${yClr}">${HJ[yongsin.yongsinElem]}<br><small>${ELEM_NAME_EN[yongsin.yongsinElem]}</small></div>
      <div class="csj-ys-desc">
        <div class="csj-ys-reason">Since the Day Master is <strong>${yongsin.isStrong?'Strong':'Weak'}</strong>, the element that ${yongsin.isStrong?'restrains':'supports'} it — <strong style="color:${yClr}">${elemLbl(yongsin.yongsinElem)}</strong> — is your Favorable Element.</div>
        <div class="csj-ys-attrs"><span class="csj-ys-attr"><b>Lucky Color</b> <span style="color:${yAttr.colorHex}">● ${yAttr.colorKo}</span></span><span class="csj-ys-attr"><b>Lucky Direction</b> ${yAttr.direction}</span><span class="csj-ys-attr"><b>Lucky Number</b> ${yAttr.numbers}</span></div>
      </div>
    </div>
    <div class="csj-ys-tip">💡 Wearing or using <span style="color:${yAttr.colorHex}">${yAttr.colorKo}</span> tones, and moving toward or sitting facing <span>${yAttr.direction}</span>, will boost your fortune.</div>
  </div>
</div>`;
  }

  return `<div class="csj-wrapper">
  <div class="csj-sec"><div class="csj-sec-title">📊 사주원국(四柱八字)</div>
    <div class="csj-pillars">
      <div class="csj-pillar${!hasHour?' csj-dim':''}"><div class="csj-plabel">時柱</div>${hasHour?charCell(saju.hG,true)+''+charCell(saju.hZ,false):'<div class="csj-cell csj-empty">?<br><small>미입력</small></div><div class="csj-cell csj-empty">?</div>'}</div>
      <div class="csj-pillar csj-day-pillar"><div class="csj-plabel">日柱 <span class="csj-me">나</span></div>${charCell(saju.dG,true)}${charCell(saju.dZ,false)}</div>
      <div class="csj-pillar"><div class="csj-plabel">月柱</div>${charCell(saju.mG,true)}${charCell(saju.mZ,false)}</div>
      <div class="csj-pillar"><div class="csj-plabel">年柱</div>${charCell(saju.yG,true)}${charCell(saju.yZ,false)}</div>
    </div>
    <div class="csj-note"><span style="color:#e8c47a">■</span> 양(陽) &nbsp;<span style="color:#9b8ae0">■</span> 음(陰) &nbsp;일간 <strong style="color:${ELEM_CLRS[dayElem]}">${saju.dG}(${GAN_HANGUL.ko[saju.dG]||dayElem})</strong>이 당신을 대표합니다</div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">🔥 오행 분석(五行分析)</div>
    <div class="csj-bars">${bars}</div>
    ${weakEs.length?`<div class="csj-weak-row"><span class="csj-weak-lbl">⚠ 부족 오행:</span>${weakEs.map(e=>`<span class="csj-weak-badge" style="color:${ELEM_CLRS[e]};border-color:${ELEM_CLRS[e]}">${elemLbl(e)}</span>`).join('')}<span class="csj-weak-tip">보완하면 균형이 향상됩니다</span></div>`:'<div class="csj-weak-row" style="color:#6dbf67">✓ 모든 오행이 균형 잡혀 있습니다</div>'}
    <div class="csj-shengke"><div class="csj-sk-title">⚡ 상생·상극</div><div class="csj-sk-row"><span style="color:#3a7d44">木</span>→<span style="color:#c0392b">火</span>→<span style="color:#c5a059">土</span>→<span style="color:#a09060">金</span>→<span style="color:#1a6090">水</span>→<span style="color:#3a7d44">木</span> <small>(상생生)</small></div><div class="csj-sk-row"><span style="color:#3a7d44">木</span>克<span style="color:#c5a059">土</span> · <span style="color:#c5a059">土</span>克<span style="color:#1a6090">水</span> · <span style="color:#1a6090">水</span>克<span style="color:#c0392b">火</span> · <span style="color:#c0392b">火</span>克<span style="color:#a09060">金</span> · <span style="color:#a09060">金</span>克<span style="color:#3a7d44">木</span> <small>(상극克)</small></div></div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">☯ 일간 분석 — ${saju.dG}(${GAN_HANGUL.ko[saju.dG]||dayElem}) 일간</div>
    <div class="csj-dm-grid">
      <div class="csj-dm-item"><div class="csj-dm-lbl">성격·기질</div><div>${dmInfo.character}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">적성·직업</div><div>${dmInfo.aptitude}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">재물운</div><div>${dmInfo.wealth}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl">건강</div><div>${dmInfo.health}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl" style="color:#6dbf67">강점</div><div style="color:#6dbf67">${dmInfo.strength}</div></div>
      <div class="csj-dm-item"><div class="csj-dm-lbl" style="color:#e8856a">약점</div><div style="color:#e8856a">${dmInfo.weakness}</div></div>
    </div>
    <div class="csj-str-row">일간 강도: <span class="csj-str-badge csj-str-${yongsin.isStrong?'strong':'weak'}">${yongsin.isStrong?'신강(身强) — 의지와 추진력이 강함':'신약(身弱) — 섬세하고 협력 지향적'}</span></div>
  </div>
  <div class="csj-sec"><div class="csj-sec-title">🌊 대운(大運) — 10년 운세 흐름</div>
    <div class="csj-daeun-info"><span>${daeun.isForward?'순행(順行) ▶':'역행(逆行) ◀'}</span><span>대운 시작: <strong>${daeun.startAge}세</strong></span></div>
    <div class="csj-daeun-grid">${daeunRows}</div>
  </div>
  <div class="csj-sec csj-seun"><div class="csj-sec-title">📅 2026년 세운(歲運) — 丙午年</div>
    <div class="csj-seun-hdr"><span class="csj-seun-ch" style="color:#c0392b">丙</span><span class="csj-seun-ch" style="color:#c0392b">午</span><span class="csj-seun-sub">병오년 · 화(火) 오행 · 양(陽)</span></div>
    <div class="csj-seun-total">${seun.total}</div>
    <div class="csj-seun-grid">
      <div class="csj-seun-item"><div class="csj-seun-lbl">💰 금전</div><div>${seun.wealth}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">💑 애정</div><div>${seun.love}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">💼 직장</div><div>${seun.career}</div></div>
      <div class="csj-seun-item"><div class="csj-seun-lbl">🌿 건강</div><div>${seun.health}</div></div>
    </div>
  </div>
  <div class="csj-sec csj-yongsin"><div class="csj-sec-title">✨ 용신(用神) — 나에게 필요한 오행</div>
    <div class="csj-ys-main" style="border-color:${yClr}">
      <div class="csj-ys-elem" style="color:${yClr}">${HJ[yongsin.yongsinElem]}<br><small>${yongsin.yongsinElem}</small></div>
      <div class="csj-ys-desc">
        <div class="csj-ys-reason">일간이 <strong>${yongsin.isStrong?'신강':'신약'}</strong>하므로 ${yongsin.isStrong?'억제':'보강'}하는 <strong style="color:${yClr}">${yongsin.yongsinElem}(${HJ[yongsin.yongsinElem]})</strong>이 용신입니다.</div>
        <div class="csj-ys-attrs"><span class="csj-ys-attr"><b>행운 색상</b> <span style="color:${yAttr.colorHex}">● ${yAttr.colorKo}</span></span><span class="csj-ys-attr"><b>행운 방향</b> ${yAttr.direction}</span><span class="csj-ys-attr"><b>행운 숫자</b> ${yAttr.numbers}</span></div>
      </div>
    </div>
    <div class="csj-ys-tip">💡 옷이나 소품에 <span style="color:${yAttr.colorHex}">${yAttr.colorKo}</span> 계열을, <span>${yAttr.direction}</span> 방향으로 이동하거나 앉으면 운이 상승합니다.</div>
  </div>
</div>`;
}

function calcSaju(year, month, day) {
  try {
    if (typeof Manseryeok !== 'undefined' && Manseryeok.calculateSaju) {
      const h = (_birthHour === 'unknown' || _birthHour === '' || _birthHour === null) ? 0 : parseInt(_birthHour);
      const r = Manseryeok.calculateSaju(parseInt(year), parseInt(month), parseInt(day), h, 0);
      const yH = r.yearPillarHanja, mH = r.monthPillarHanja, dH = r.dayPillarHanja, hH = r.hourPillarHanja;
      return {
        yG: yH[0], yZ: yH[1], mG: mH[0], mZ: mH[1], dG: dH[0], dZ: dH[1], hG: hH[0], hZ: hH[1],
        ko: { year: r.yearPillar, month: r.monthPillar, day: r.dayPillar, hour: r.hourPillar },
        hj: { year: yH, month: mH, day: dH, hour: hH }
      };
    }
  } catch(e) { console.warn('manseryeok calcSaju error:', e); }
  // fallback
  return {
    yG:'甲', yZ:'子', mG:'丙', mZ:'寅', dG:'戊', dZ:'辰', hG:'庚', hZ:'子',
    ko: { year:'갑자', month:'병인', day:'무진', hour:'경자' },
    hj: { year:'甲子', month:'丙寅', day:'戊辰', hour:'庚子' }
  };
}

const GAN_NAME = {
  ko: {'甲':'갑','乙':'을','丙':'병','丁':'정','戊':'무','己':'기','庚':'경','辛':'신','壬':'임','癸':'계'},
  en: {'甲':'Jia','乙':'Yi','丙':'Bing','丁':'Ding','戊':'Wu','己':'Ji','庚':'Geng','辛':'Xin','壬':'Ren','癸':'Gui'}
};

const ZHI_NAME = {
  ko: {'子':'자','丑':'축','寅':'인','卯':'묘','辰':'진','巳':'사','午':'오','未':'미','申':'신','酉':'유','戌':'술','亥':'해'},
  en: {'子':'Rat','丑':'Ox','寅':'Tiger','卯':'Rabbit','辰':'Dragon','巳':'Snake','午':'Horse','未':'Goat','申':'Monkey','酉':'Rooster','戌':'Dog','亥':'Pig'}
};

function buildSajuTotalText(name, saju, curYear, curMonth, category) {
  const { yG, yZ, mG, mZ, dG, dZ, hG = '庚', hZ = '子' } = saju;
  const dayElem = GAN_ELEM[dG] || '토';
  if (currentLang === 'ko') {
    const gn = GAN_NAME.ko, zn = ZHI_NAME.ko, za = ZHI_ANIMAL.ko, zs = ZHI_SEASON.ko;
    return [
      `【 사주팔자(四柱八字) 구성 】\n${name}님의 사주 팔자는 ${gn[yG]}${zn[yZ]}년(年柱) · ${gn[mG]}${zn[mZ]}월(月柱) · ${gn[dG]}${zn[dZ]}일(日柱) · ${gn[hG] || hG}${zn[hZ] || hZ}시(時柱)의 여덟 글자로 이루어진 운명 설계도입니다. 사주(四柱)란 태어난 연·월·일의 기둥을 천간(天干)과 지지(地支)로 표현한 것으로, 하늘의 기운과 땅의 기운이 조화를 이루며 한 인간의 고유한 에너지 지도를 형성합니다. 이 여섯 글자는 타고난 성품과 재능, 인간관계의 흐름, 건강, 재물운 등 삶의 전반적인 흐름을 담고 있습니다. 한 사람의 사주는 세상에 오직 하나뿐인 고유한 운명의 코드이며, 이를 올바르게 이해하면 삶의 중요한 순간마다 현명한 선택을 할 수 있습니다.`,

      `【 연주(年柱) — 뿌리의 기운 】\n연간(年干) ${yG}(${gn[yG]})는 ${GAN_DESC.ko[yG]}입니다. 이 기운은 조상으로부터 이어진 유전적 자질과 유년기 환경, 그리고 ${name}님이 세상에 처음 선보이는 타고난 자질을 상징합니다. 연지(年支) ${yZ}(${za[yZ]}띠)는 ${zs[yZ]}의 계절 에너지를 담고 있으며, 가문의 흐름과 어린 시절의 기운이 지금의 삶에 어떻게 영향을 미치는지를 보여줍니다. 연주가 균형 잡혀 있을수록 선천적인 재능과 기질이 뚜렷하게 나타나며, 오랜 뿌리와 전통에서 힘을 얻는 경향이 강합니다. 오늘의 운세에서 연주의 기운이 특히 강하게 작용한다면, 과거의 경험에서 지혜를 구하는 것이 큰 도움이 됩니다.`,

      `【 월주(月柱) — 성장의 기운 】\n월간(月干) ${mG}(${gn[mG]})는 ${GAN_DESC.ko[mG]}입니다. 월주는 부모·형제와의 인연 및 청년기의 사회적 첫 발걸음을 나타내는 중요한 기둥입니다. 월지(月支) ${mZ}(${za[mZ]})의 에너지는 성장기의 환경과 현실적 삶의 토대를 형성하며, 직업 선택과 사회적 활동 영역과 깊이 연결되어 있습니다. 이 기둥이 균형 잡혀 있을수록 현실 적응력과 추진력이 강하며, 사회에서 자신의 역할을 명확히 인식하고 이행하는 힘이 생깁니다. 월주의 기운이 오늘 활성화된다면, 새로운 인연과의 만남이나 현실적인 기회를 포착하는 데 집중하는 것이 유리합니다.`,

      `【 일주(日柱) — 나 자신의 기운 】\n일간(日干) ${dG}(${gn[dG]})는 ${GAN_DESC.ko[dG]}입니다. 일간은 사주의 네 기둥 중 가장 중요한 축으로, 바로 '나 자신'의 본질적 에너지를 나타냅니다. ${ELEM_TRAIT.ko[dayElem]} 일지(日支) ${dZ}(${za[dZ]})는 배우자운과 내면의 욕구를 가장 직접적으로 반영하는 글자로, 내면의 균형과 외부 관계의 조화를 상징합니다. 일간의 기운은 오늘 하루의 핵심 에너지로, 매일 가장 직접적으로 삶에 영향을 미칩니다. 오늘은 일간 ${dG}의 기운이 가장 활발하게 발현되는 날이므로, 자신의 본래 기질을 최대한 발휘하시기 바랍니다.`,

      `【 오행(五行) 기운 분석 】\n${ELEM_WEALTH.ko[dayElem]} ${ELEM_LOVE.ko[dayElem]} ${ELEM_CAREER.ko[dayElem]} ${ELEM_HEALTH.ko[dayElem]} 오행(五行)의 흐름을 이해하면 자신의 강점을 극대화하고 약점을 보완하는 실질적인 삶의 전략을 세울 수 있습니다. 부족한 오행을 보완하는 방향으로 선택하면 삶이 더욱 균형 잡히고 풍요로워집니다. 자신의 오행을 알고 활용하는 것은 고대 동양 철학이 현대인에게 선물하는 삶의 지혜입니다.`,

      `【 올해의 운세 흐름 】\n${name}님의 일간 ${dG} 에너지가 올해의 운세 기운과 만나는 흐름을 살펴봅니다. 현재의 대운(大運) 흐름 속에서 자신의 강점을 발견하고, 시기에 맞는 선택을 하면 더욱 큰 성과를 기대할 수 있습니다. 자신의 사주 기운을 알고 행동하는 것만으로도 삶의 질이 크게 달라집니다. 운명은 정해진 것이 아니라 매 순간의 선택이 쌓여 만들어지는 것임을 기억하세요.`,

      `【 오늘의 종합 메시지 】\n${name}님, 오늘은 하늘과 땅의 기운이 당신의 선택을 응원하는 날입니다. 이미 지나간 것에 미련을 두지 말고, 지금 이 순간에 온전히 집중하십시오. 작은 실천 하나가 미래를 바꾸는 씨앗이 됩니다. 자신의 중심을 잃지 말고 흔들림 없이 나아가세요. 하루를 시작할 때 깊게 숨을 들이쉬고, 오늘 이루고자 하는 한 가지를 마음속에 새기세요. 천기(天機)를 아는 자는 변화를 두려워하지 않습니다. 준비된 자에게 하늘이 길을 열어줍니다.`
    ].join('\n\n');
  } else {
    const gne = GAN_NAME.en, zne = ZHI_NAME.en, zae = ZHI_ANIMAL.en;
    return [
      `【 Four Pillars (四柱八字) Overview 】\n${name}'s Eight Characters: Year ${gne[yG]}-${zne[yZ]}, Month ${gne[mG]}-${zne[mZ]}, Day ${gne[dG]}-${zne[dZ]}, Hour ${gne[hG] || hG}-${zne[hZ] || hZ}. The Four Pillars (四柱八字, Saju) express the year, month, day, and hour of birth through Heavenly Stems (天干) and Earthly Branches (地支), forming a unique energy blueprint where the forces of Heaven and Earth converge. These eight characters encode your innate character, talents, relationship patterns, health tendencies, and financial flow. Each person's Four Pillars form a one-of-a-kind destiny code; understanding it deeply empowers you to make wiser choices at every turning point in life.`,

      `【 Year Pillar — Your Roots 】\nThe Year Stem ${yG} (${gne[yG]}) embodies ${GAN_DESC.en[yG]}. This energy reflects inherited qualities, early-childhood environment, and the natural gifts ${name} brings into the world. The Year Branch ${yZ} (${zae[yZ]}) carries the energy of ${ZHI_SEASON.en[yZ]}, showing how family lineage and early-life experience continue to shape your present path. When the Year Pillar is well-balanced, innate talent and character are vivid, and strength is drawn from deep roots. If this pillar's energy feels especially strong today, seeking wisdom from past experiences will serve you well.`,

      `【 Month Pillar — Growth Energy 】\nThe Month Stem ${mG} (${gne[mG]}) embodies ${GAN_DESC.en[mG]}. The Month Pillar governs bonds with parents and siblings and your earliest social steps. The Month Branch ${mZ} (${zae[mZ]}) shapes your practical life foundation, linking directly to career choices and social engagement. A balanced Month Pillar signals strong adaptability and drive; you clearly understand your role in society and have the strength to fulfill it. When Month Pillar energy is activated today, focus on seizing new connections and real-world opportunities.`,

      `【 Day Pillar — Your True Self 】\nThe Day Stem ${dG} (${gne[dG]}) — ${GAN_DESC.en[dG]} — is the most important pillar: it represents you. ${ELEM_TRAIT.en[dayElem]} The Day Branch ${dZ} (${zae[dZ]}) most directly reflects inner desires and relationship energy, symbolizing the balance between your inner world and outer relationships. The Day Stem energy is your core daily force, influencing life most directly each and every day. Today, ${dG}'s energy flows most actively — embrace your authentic nature to the fullest.`,

      `【 Five Elements Analysis 】\n${ELEM_WEALTH.en[dayElem]} ${ELEM_LOVE.en[dayElem]} ${ELEM_CAREER.en[dayElem]} ${ELEM_HEALTH.en[dayElem]} Understanding the Five Elements helps you maximize strengths and address weaknesses in a practical life strategy. Choices that compensate for lacking elements bring greater balance and abundance. Knowing and applying your elemental nature is a gift of ancient Eastern wisdom to the modern person.`,

      `【 This Year's Fortune Flow 】\nExamining how ${name}'s Day Master ${dG} energy meets this year's cosmic flow reveals opportunities for growth. Within your current Major Fortune cycle (大運), discovering your strengths and making season-aligned choices leads to greater achievements. Simply knowing your Saju energy and acting in harmony with it dramatically improves quality of life. Remember: destiny is not fixed — it is shaped by the accumulation of choices made at each and every moment.`,

      `【 Today's Overall Message 】\n${name}, the forces of Heaven and Earth are cheering for your choices today. Release attachment to what has passed and focus fully on this very moment. A single small action becomes the seed that transforms your future. Hold your center steady and move forward without wavering. As you begin your day, breathe deeply and fix one intention clearly in your heart. Those who understand the heavenly secrets do not fear change. The path opens for those who are prepared.`
    ].join('\n\n');
  }
}

function buildWealthDetailText(name, saju) {
  const { dG } = saju;
  const dayElem = GAN_ELEM[dG] || '토';
  if (currentLang === 'ko') {
    return `\n\n▶ 사주로 보는 재물 분석\n일간 ${dG}(${GAN_NAME.ko[dG]})의 ${dayElem} 기운은 재물을 다루는 방식에 직접적인 영향을 미칩니다. ${ELEM_WEALTH.ko[dayElem]} ${GAN_DESC.ko[dG]}의 특성을 재물에 적용하면, 자신만의 독특한 수익 방식을 발견할 수 있습니다. 재물운은 마음가짐에서 시작됩니다. 풍요로운 의식이 풍요로운 현실을 끌어당깁니다. 오늘의 재물 흐름은 작은 결정에서 비롯되는 경우가 많습니다. 지출보다 수입에 집중하고, 금전 관련 서류나 계약은 꼼꼼히 검토하세요. 재물은 한 번에 쌓이지 않습니다. 작은 습관의 변화가 장기적으로 큰 차이를 만들어 냅니다.`;
  } else {
    return `\n\n▶ Wealth Analysis from Saju\nYour Day Stem ${dG} (${GAN_NAME.en[dG]}) ${dayElem} energy directly shapes your relationship with money. ${ELEM_WEALTH.en[dayElem]} Applying the nature of ${GAN_DESC.en[dG]} to finances helps you discover your own unique path to earning. Abundance begins with mindset — a consciousness of plenty attracts a reality of plenty. Today's financial flow often stems from small decisions. Focus on income over spending, and review any financial documents carefully. Wealth is not built in a day; small habit changes create the greatest long-term differences.`;
  }
}

function buildLoveDetailText(name, saju) {
  const { dG } = saju;
  const dayElem = GAN_ELEM[dG] || '토';
  if (currentLang === 'ko') {
    return `\n\n▶ 사주로 보는 애정 분석\n일간 ${dG}(${GAN_NAME.ko[dG]})의 ${dayElem} 기운은 인연을 맺고 사랑을 표현하는 방식에 깊이 영향을 미칩니다. ${ELEM_LOVE.ko[dayElem]} ${GAN_DESC.ko[dG]}의 성품은 인간관계에서 뚜렷한 매력이 됩니다. 진심 어린 소통이 모든 관계의 핵심입니다. 오늘은 소중한 사람에게 먼저 다가가는 용기를 내어보세요. 감정을 솔직하게 표현할수록 상대방의 마음도 열립니다. 인연은 우연처럼 보이지만, 사실은 서로의 기운이 이끌어 내는 필연입니다.`;
  } else {
    return `\n\n▶ Love Analysis from Saju\nYour Day Stem ${dG} (${GAN_NAME.en[dG]}) ${dayElem} energy deeply shapes how you form bonds and express love. ${ELEM_LOVE.en[dayElem]} The character of ${GAN_DESC.en[dG]} becomes a distinct attraction in relationships. Sincere communication is the heart of every connection. Today, have the courage to reach out first to someone you cherish. The more honestly you express your feelings, the more the other person's heart opens. Connections may seem like coincidence, but they are actually the inevitable pull of matching energies.`;
  }
}

function buildCareerDetailText(name, saju) {
  const { dG } = saju;
  const dayElem = GAN_ELEM[dG] || '토';
  if (currentLang === 'ko') {
    return `\n\n▶ 사주로 보는 직업·직장 분석\n일간 ${dG}(${GAN_NAME.ko[dG]})의 ${dayElem} 기운은 직업적 방향과 직장 내 역할에 직접적인 영향을 미칩니다. ${ELEM_CAREER.ko[dayElem]} ${GAN_DESC.ko[dG]}의 특성은 업무 스타일과 리더십 방식을 결정짓는 핵심 요소입니다. 오늘은 자신의 역량을 적극적으로 표현하기 좋은 날입니다. 팀과의 협력과 소통에 집중하면 더 큰 성과를 거둘 수 있습니다. 성공은 혼자 이루는 것이 아니라 주변과의 조화 속에서 완성됩니다.`;
  } else {
    return `\n\n▶ Career Analysis from Saju\nYour Day Stem ${dG} (${GAN_NAME.en[dG]}) ${dayElem} energy directly influences your professional direction and workplace role. ${ELEM_CAREER.en[dayElem]} The nature of ${GAN_DESC.en[dG]} is a core factor shaping your work style and leadership approach. Today is a good day to actively express your capabilities. Focusing on collaboration and communication with your team leads to greater results. Success is not achieved alone — it is completed in harmony with those around you.`;
  }
}

function buildHealthDetailText(name, saju) {
  const { dG } = saju;
  const dayElem = GAN_ELEM[dG] || '토';
  if (currentLang === 'ko') {
    return `\n\n▶ 사주로 보는 건강 분석\n일간 ${dG}(${GAN_NAME.ko[dG]})의 ${dayElem} 기운은 신체적·정신적 건강 패턴과 밀접하게 연결되어 있습니다. ${ELEM_HEALTH.ko[dayElem]} ${GAN_DESC.ko[dG]}의 기운이 강한 날에는 에너지가 넘치지만, 무리하지 않도록 주의가 필요합니다. 충분한 수면과 규칙적인 식사가 오늘 건강운의 기반입니다. 몸의 작은 신호에도 귀를 기울이세요. 건강은 한 번 잃으면 회복하기 어렵습니다. 지금의 작은 관리가 미래의 큰 건강을 만듭니다.`;
  } else {
    return `\n\n▶ Health Analysis from Saju\nYour Day Stem ${dG} (${GAN_NAME.en[dG]}) ${dayElem} energy is closely linked to physical and mental health patterns. ${ELEM_HEALTH.en[dayElem]} Days when ${GAN_DESC.en[dG]} energy is strong bring overflowing vitality — but be careful not to overdo it. Sufficient sleep and regular meals are the foundation of today's health fortune. Listen to even the smallest signals from your body. Health, once lost, is difficult to recover. Small acts of care today build the great health of tomorrow.`;
  }
}

function launchConfetti() {
  const duration = 3000; const animationEnd = Date.now() + duration;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now(); if (timeLeft <= 0) return clearInterval(interval);
    confetti({ particleCount: 50 * (timeLeft / duration), origin: { x: Math.random(), y: Math.random() - 0.2 }, colors: ['#c5a059', '#ffffff', '#ffd700'] });
  }, 250);
}

const FORTUNE_TEXTS = {
  home: {
    total: {
      ko: [
        "오늘은 사주의 기운이 고르게 펼쳐지는 날입니다. 주변 사람들과의 조화를 이루며 긍정적인 에너지를 발산하세요. 작은 친절이 큰 행운으로 돌아옵니다.",
        "새로운 기회의 씨앗이 오늘 심어집니다. 망설임 없이 직관을 따르면 뜻밖의 좋은 결과가 기다리고 있습니다.",
        "오늘 하루는 차분하게 내면을 돌아보는 시간이 필요합니다. 작은 것에 감사하는 마음이 행운의 문을 열어줍니다.",
        "주변의 변화에 유연하게 대처하면 뜻밖의 좋은 결과가 따라옵니다. 오늘은 고집보다 융통성이 미덕입니다.",
        "오랜 노력이 오늘 빛을 발하기 시작합니다. 자신감을 갖고 앞으로 나아가세요. 하늘의 기운이 당신 편입니다."
      ],
      en: [
        "Today your destiny energy spreads evenly. Create harmony with those around you and radiate positive energy. Small acts of kindness return as great fortune.",
        "Seeds of new opportunity are planted today. Trusting your intuition without hesitation leads to unexpected good results.",
        "Today calls for quiet reflection. A heart of gratitude for small things opens the door to good luck.",
        "Flexibility in the face of change brings unexpected good outcomes. Today, adaptability is more virtuous than stubbornness.",
        "Long efforts begin to shine today. Move forward with confidence. The heavens are on your side."
      ]
    },
    wealth: {
      ko: [
        "작은 투자나 저축 결정이 미래의 큰 이익으로 이어질 수 있습니다. 충동적인 지출은 삼가는 것이 현명합니다.",
        "예상치 못한 수입이 들어올 가능성이 있는 날입니다. 금전적인 기회에 눈과 귀를 열어두세요.",
        "재물운이 안정적인 하루입니다. 큰 욕심보다 꾸준함이 재물을 지켜주는 날입니다.",
        "금전 거래 시 서류와 계약 내용을 꼼꼼히 확인하세요. 작은 실수가 큰 손실로 이어질 수 있습니다.",
        "절약이 곧 수익입니다. 오늘 지출 목록을 점검하면 숨겨진 낭비를 발견할 수 있습니다."
      ],
      en: [
        "A small investment or saving today may lead to great gains in the future. It is wise to avoid impulsive spending.",
        "There's a chance of unexpected income today. Keep your eyes and ears open to financial opportunities.",
        "Wealth energy is stable today. Consistency rather than greed will protect your finances.",
        "Carefully check documents and contracts in financial dealings. Small mistakes can lead to significant loss.",
        "Saving is itself a gain. Reviewing your expenses today may reveal hidden waste."
      ]
    },
    love: {
      ko: [
        "애정운이 따뜻하게 빛나는 하루입니다. 소중한 사람에게 진심을 표현하면 관계가 더욱 깊어집니다.",
        "연인 혹은 가까운 사람과의 소통이 중요한 날입니다. 먼저 다가가는 용기가 인연을 꽃피웁니다.",
        "혼자만의 시간을 통해 진정 원하는 인연의 모습을 그려보세요. 명확한 마음이 좋은 인연을 끌어당깁니다.",
        "오랫동안 연락이 없던 사람에게서 반가운 소식이 들려올 수 있습니다. 마음을 열고 기다려보세요.",
        "감정을 솔직하게 표현하는 것이 좋은 날입니다. 표현이 관계를 한 단계 발전시킵니다."
      ],
      en: [
        "Love energy shines warmly today. Expressing genuine feelings to someone special will deepen your connection.",
        "Communication with a partner or close person is important today. The courage to reach out first will help love bloom.",
        "Spend time alone envisioning the ideal relationship you want. A clear heart attracts the right person.",
        "Good news may arrive from someone you haven't heard from in a while. Keep an open heart.",
        "Today is a good day to be honest about your emotions. Expression advances relationships to the next level."
      ]
    },
    career: {
      ko: [
        "직장에서 리더십을 발휘할 기회가 주어질 수 있습니다. 자신의 의견을 자신감 있게 표현하세요.",
        "팀워크가 중요한 날입니다. 혼자 해결하려 하기보다 동료와 협력하면 더 좋은 결과가 나옵니다.",
        "새로운 프로젝트나 업무에 도전해 보기 좋은 날입니다. 적극적인 자세가 인정받는 기회가 됩니다.",
        "세부 사항에 집중하는 것이 좋은 날입니다. 꼼꼼한 마무리가 신뢰를 쌓아줍니다.",
        "직장 내 갈등이 있다면 오늘 대화로 풀 수 있는 기회가 생깁니다. 상대를 먼저 이해하려고 노력하세요."
      ],
      en: [
        "An opportunity to show leadership may arise at work today. Express your opinions confidently.",
        "Teamwork is key today. Collaborating with colleagues rather than working alone yields better results.",
        "A good day to take on a new project or challenge. A proactive attitude creates recognition opportunities.",
        "Focus on the details today. A thorough finish builds trust and credibility.",
        "If there's workplace conflict, an opportunity to resolve it through conversation may arise. Try to understand the other party first."
      ]
    },
    health: {
      ko: [
        "충분한 수면과 규칙적인 식사가 오늘 건강운을 지켜줍니다. 무리한 일정은 피하는 것이 좋습니다.",
        "가벼운 산책이나 스트레칭으로 몸의 기운을 활성화하세요. 규칙적인 움직임이 건강을 만듭니다.",
        "소화기 계통에 주의가 필요합니다. 자극적인 음식보다 따뜻하고 순한 음식을 드세요.",
        "정신적인 피로가 쌓이기 쉬운 날입니다. 잠깐의 명상이나 휴식으로 마음의 충전을 하세요.",
        "체력이 회복되는 시기입니다. 꾸준한 운동 루틴을 만들기 좋은 날입니다."
      ],
      en: [
        "Sufficient sleep and regular meals will protect your health today. Avoid overscheduling.",
        "Activate your body's energy with light walking or stretching. Regular movement creates health.",
        "Pay attention to your digestive system. Choose warm, gentle foods over spicy or stimulating ones.",
        "Mental fatigue may accumulate easily today. Recharge your mind with a brief meditation or rest.",
        "Your physical strength is in recovery. Today is a great day to establish a consistent exercise routine."
      ]
    }
  },
  newyear: {
    total: {
      ko: [
        "올해는 변화와 성장의 기운이 강하게 흐릅니다. 그동안 준비해온 것들이 결실을 맺는 해가 될 것입니다. 두려움을 내려놓고 새로운 도전을 향해 나아가세요.",
        "새해의 기운은 안정과 풍요를 가져다줍니다. 건강과 가족의 화목이 모든 성취의 바탕이 되는 한 해입니다.",
        "올해는 인간관계가 크게 확장됩니다. 새로운 인연들이 당신의 삶을 풍요롭게 만들어 줄 것입니다.",
        "창의성과 표현력이 빛나는 한 해입니다. 그동안 숨겨온 재능을 세상에 드러낼 절호의 시기입니다.",
        "올 한 해는 내실을 다지는 해입니다. 화려함보다 단단함을 추구할 때 시간이 지날수록 더욱 빛이 납니다."
      ],
      en: [
        "This year carries strong energy of change and growth. Things you've been preparing will come to fruition. Let go of fear and move toward new challenges.",
        "The new year brings stability and abundance. Health and family harmony are the foundations of all achievement this year.",
        "Your interpersonal connections will expand greatly this year. New relationships will enrich every aspect of your life.",
        "This will be a year where creativity and expression shine brilliantly. It's the perfect time to reveal your long-hidden talents to the world.",
        "This year is about building inner strength. Pursuing solidity over glamour will make you shine more as time goes on."
      ]
    },
    wealth: {
      ko: [
        "올해 재물운은 꾸준한 노력에 정직하게 비례합니다. 단기 이익보다 장기 재정 계획을 세우는 것이 현명합니다.",
        "상반기에 지출이 많더라도 하반기에 보상이 따라옵니다. 지금의 투자가 내년의 수익이 됩니다.",
        "부동산이나 자산 관련 중요한 결정을 내리기 좋은 흐름입니다. 전문가의 조언을 충분히 참고하세요.",
        "올 중반기에 예상치 못한 재물 기회가 열립니다. 주변의 이야기에 귀를 열어두세요.",
        "절약과 저축이 올해의 재물운 키워드입니다. 소비 습관을 점검하면 여유 자금이 생깁니다."
      ],
      en: [
        "This year's wealth luck is directly proportional to consistent effort. Planning long-term finances is wiser than chasing short-term gains.",
        "Even if spending is heavy in the first half, rewards will follow in the second half. Today's investment becomes next year's profit.",
        "This is a favorable year for making important decisions about real estate or assets. Seek professional advice thoroughly.",
        "An unexpected wealth opportunity opens mid-year. Keep your ears open to conversations around you.",
        "Saving and frugality are this year's financial keywords. Reviewing spending habits will reveal extra funds."
      ]
    },
    love: {
      ko: [
        "올해 애정운은 진심과 신뢰를 바탕으로 깊어집니다. 관계에 투자하는 시간과 노력이 풍성한 결실을 맺습니다.",
        "싱글이라면 올해 하반기에 의미 있는 인연을 만날 가능성이 높습니다. 마음의 문을 활짝 열어두세요.",
        "기존 연인과의 관계가 한 단계 성숙하는 해입니다. 소통과 이해가 관계의 깊이를 더해줍니다.",
        "올해는 자기 자신을 먼저 사랑하는 해입니다. 내면의 충만함이 좋은 인연을 자연스럽게 끌어당깁니다.",
        "가족 간의 유대가 강해지는 해입니다. 사랑하는 사람들과 함께하는 시간을 소중히 여기세요."
      ],
      en: [
        "This year's love energy deepens through sincerity and trust. Time and effort invested in relationships bring rich rewards.",
        "If you're single, there's a strong possibility of meeting a meaningful connection in the second half of the year. Keep your heart wide open.",
        "An existing relationship matures to the next level this year. Communication and understanding deepen your bond.",
        "This year is first about loving yourself. Inner fullness naturally attracts the right partner to you.",
        "Family bonds strengthen this year. Treasure the time you spend with those you love."
      ]
    },
    career: {
      ko: [
        "올해 직업운은 준비된 자에게 기회가 주어지는 흐름입니다. 실력을 꾸준히 갈고닦으면 반드시 빛을 발하는 때가 옵니다.",
        "새로운 직장이나 사업을 시작하기에 좋은 기운이 흐릅니다. 용기 있는 첫 발이 새로운 미래를 엽니다.",
        "현재 직장에서 승진이나 인정받을 기회가 올 수 있습니다. 자신의 성과를 적극적으로 어필하세요.",
        "올해는 인맥이 커리어의 핵심이 됩니다. 다양한 사람들과의 네트워킹에 시간을 투자하세요.",
        "변화의 바람이 직업 환경에 불어옵니다. 저항하기보다 유연하게 적응하면 오히려 기회가 됩니다."
      ],
      en: [
        "This year's career energy rewards those who are prepared. Consistently honing your skills will ensure a time when you shine.",
        "Favorable energy flows for starting a new job or business. A courageous first step opens a new future.",
        "An opportunity for promotion or recognition may come at your current workplace. Actively showcase your achievements.",
        "This year, relationships are the key to your career. Invest time in networking with diverse people.",
        "Winds of change blow through your professional environment. Adapting flexibly rather than resisting creates opportunities."
      ]
    },
    health: {
      ko: [
        "올해 건강운은 규칙적인 생활 습관이 핵심입니다. 수면, 식사, 운동의 균형을 잘 유지하세요.",
        "상반기에는 과로에 주의가 필요합니다. 쉬는 것도 실력임을 기억하세요.",
        "올해 체력이 크게 향상됩니다. 꾸준한 운동 루틴이 몸과 마음을 함께 강하게 만듭니다.",
        "스트레스 관리가 올해 건강의 핵심입니다. 명상, 요가, 취미 활동으로 마음의 여유를 만드세요.",
        "정기적인 건강 검진을 받는 것이 좋습니다. 작은 이상 신호를 무시하지 말고 전문가를 찾아보세요."
      ],
      en: [
        "Regular lifestyle habits are the key to health this year. Maintain a good balance of sleep, meals, and exercise.",
        "Beware of overwork in the first half of the year. Remember that rest is also a skill.",
        "Your physical strength improves greatly this year. A consistent exercise routine strengthens both body and mind.",
        "Stress management is the core of your health this year. Create mental space through meditation, yoga, or hobbies.",
        "It's a good year to get regular health checkups. Don't ignore small warning signs; consult a professional."
      ]
    }
  },
  monthly: {
    total: {
      ko: [
        "이달은 변화의 기운이 충만합니다. 월초에 세운 계획을 꾸준히 밀어붙이면 월말에 뚜렷한 성과가 나타납니다.",
        "이달의 기운은 새로운 시작에 유리합니다. 미뤄왔던 일들을 이달 안에 시작해보세요.",
        "이달은 관계와 소통이 중요한 달입니다. 주변 사람들과 적극적으로 교류하면 예상치 못한 도움을 받습니다.",
        "이달은 결실의 달입니다. 그동안의 노력이 이달 중에 가시적인 형태로 나타나기 시작합니다.",
        "이달은 내면을 정비하는 달입니다. 바쁜 일상에서 잠시 멈추고 방향을 점검하는 것이 좋습니다."
      ],
      en: [
        "This month is full of changing energy. Steadily pushing through plans made at the start of the month will yield clear results by month's end.",
        "This month's energy is favorable for new beginnings. Start things you've been putting off within this month.",
        "Relationships and communication are important this month. Active interaction with those around you brings unexpected help.",
        "This is a month of fruition. The efforts you've made will begin to take visible shape during this month.",
        "This month is for inner reorganization. Pausing from the busy daily routine to check your direction is beneficial."
      ]
    },
    wealth: {
      ko: [
        "이달 재물운은 중순 이후 상승합니다. 월초에는 불필요한 지출을 줄이고 중순부터 기회를 잡으세요.",
        "예산을 세우고 계획적으로 지출하면 이달 재물운이 안정됩니다. 충동 구매를 특히 주의하세요.",
        "이달 중 뜻밖의 수입이나 보너스 가능성이 있습니다. 들어온 돈의 일부는 반드시 저축하세요.",
        "이달은 투자보다 절약이 현명한 선택입니다. 안정된 기반을 다지는 달로 삼으세요.",
        "금전 관련 서류나 계약은 꼼꼼히 검토하세요. 이달은 세심한 확인이 손실을 막아줍니다."
      ],
      en: [
        "This month's wealth luck rises after mid-month. Reduce unnecessary spending early on and seize opportunities from mid-month.",
        "Setting a budget and spending deliberately stabilizes this month's wealth luck. Be especially cautious of impulse purchases.",
        "There's a chance of unexpected income or a bonus during this month. Save a portion of whatever comes in.",
        "This month, saving is wiser than investing. Treat this month as a time to build a stable foundation.",
        "Carefully review financial documents or contracts. Detailed checking this month will prevent losses."
      ]
    },
    love: {
      ko: [
        "이달 애정운은 따뜻한 교류가 핵심입니다. 연인이나 가까운 이에게 작은 관심과 배려를 표현하세요.",
        "싱글이라면 이달 중순 이후 새로운 만남의 기운이 강해집니다. 사교적인 자리에 적극적으로 참여하세요.",
        "기존 관계에서 오해가 생길 수 있습니다. 먼저 진심으로 대화를 나누면 금방 해소됩니다.",
        "가족과의 시간이 이달 애정운에 중요합니다. 소중한 사람들과 따뜻한 추억을 만드세요.",
        "이달은 자기 자신을 아끼고 돌보는 것이 좋은 달입니다. 자기 사랑이 타인을 사랑하는 힘을 키워줍니다."
      ],
      en: [
        "Warm exchanges are the core of love energy this month. Show small care and attention to your partner or loved ones.",
        "If you're single, the energy for new encounters strengthens after mid-month. Participate actively in social gatherings.",
        "Misunderstandings may arise in existing relationships. A sincere conversation initiated first will resolve things quickly.",
        "Family time is important for love energy this month. Create warm memories with those you cherish.",
        "This month is good for cherishing and caring for yourself. Self-love builds the strength to love others."
      ]
    },
    career: {
      ko: [
        "이달 직업운은 적극성이 핵심입니다. 먼저 손들고 도전하는 자세가 이달 최고의 전략입니다.",
        "업무량이 많아지는 달입니다. 우선순위를 명확히 하고 중요한 것부터 처리하세요.",
        "이달은 협업과 소통이 성과를 만드는 달입니다. 혼자보다 함께할 때 더 큰 결과가 나옵니다.",
        "창의적인 아이디어가 빛을 발하는 달입니다. 아이디어를 적극적으로 표현하고 제안하세요.",
        "이달 중 이직이나 새로운 기회에 대한 소식이 들릴 수 있습니다. 신중하게 검토 후 결정하세요."
      ],
      en: [
        "Proactivity is the key to career energy this month. Being the first to raise your hand and take on challenges is this month's best strategy.",
        "Workload increases this month. Clearly prioritize and handle the most important tasks first.",
        "Collaboration and communication produce results this month. Working together yields bigger outcomes than working alone.",
        "Creative ideas shine this month. Actively express and propose your ideas.",
        "News of a job change or new opportunity may come during this month. Review carefully before deciding."
      ]
    },
    health: {
      ko: [
        "이달은 불규칙한 생활 패턴에 주의하세요. 수면 시간을 일정하게 유지하는 것이 이달 건강의 핵심입니다.",
        "운동량을 조금씩 늘려가면 이달 내에 체력 향상이 느껴집니다. 꾸준함이 최고의 건강 비결입니다.",
        "이달은 피부와 호흡기 건강에 신경 쓰세요. 수분 보충과 환기를 잊지 마세요.",
        "스트레스가 쌓이기 쉬운 달입니다. 좋아하는 활동으로 기분 전환을 자주 하세요.",
        "식단 관리를 시작하기 좋은 달입니다. 균형 잡힌 영양 섭취가 이달 건강운을 높여줍니다."
      ],
      en: [
        "Beware of irregular lifestyle patterns this month. Maintaining a consistent sleep schedule is the key to health this month.",
        "Gradually increasing your exercise will result in noticeable fitness improvement within this month. Consistency is the best health secret.",
        "Pay attention to skin and respiratory health this month. Don't forget to stay hydrated and ventilate your space.",
        "Stress tends to accumulate this month. Frequently change your mood with activities you enjoy.",
        "This is a good month to start managing your diet. Balanced nutrition boosts this month's health energy."
      ]
    }
  },
  love: {
    total: {
      ko: [
        "두 사람의 사주가 서로를 보완하는 기운을 지니고 있습니다. 서로의 다름을 인정하고 존중할 때 더욱 강한 인연으로 발전합니다.",
        "이 인연에는 깊은 감정적 교류의 가능성이 내재되어 있습니다. 진심을 다한 소통이 관계의 깊이를 만들어줍니다.",
        "두 사람의 궁합은 서로의 장점이 빛을 발하는 구조입니다. 상대의 강점을 칭찬하고 지지해주세요.",
        "처음에는 낯설 수 있지만 시간이 지날수록 단단해지는 인연입니다. 조급함 없이 천천히 쌓아가세요.",
        "이 인연은 서로를 성장시키는 특별한 에너지를 품고 있습니다. 함께하면 각자보다 더 빛나게 됩니다."
      ],
      en: [
        "The two destinies carry energies that complement each other. Accepting and respecting your differences develops a stronger bond.",
        "This connection has deep emotional exchange potential within it. Sincere communication creates the depth of your relationship.",
        "Your compatibility is structured so each other's strengths shine. Praise and support each other's best qualities.",
        "It may feel unfamiliar at first, but this is a bond that grows stronger with time. Build it slowly without rushing.",
        "This connection holds special energy that helps both of you grow. Together you shine brighter than apart."
      ]
    },
    wealth: {
      ko: [
        "두 사람이 재정적으로 협력하면 각자보다 훨씬 큰 성과를 낼 수 있습니다. 공동 목표를 설정해 보세요.",
        "금전 문제에서 솔직한 소통이 관계를 더욱 굳건히 합니다. 돈에 관한 이야기를 터놓고 나누세요.",
        "한 사람이 절약 성향이라면 다른 사람의 지출 성향을 이해하고 균형을 찾는 것이 중요합니다.",
        "공동의 저축 목표나 여행 계획 등 함께하는 재정 목표가 관계를 더욱 단단하게 만듭니다.",
        "재물 면에서 서로 다른 강점을 가지고 있습니다. 각자의 강점을 살리면 더 풍요로운 삶이 됩니다."
      ],
      en: [
        "Financial cooperation between you two can produce results far greater than each alone. Set a shared goal together.",
        "Honest communication about money strengthens your relationship. Have open conversations about finances.",
        "If one tends to save and the other to spend, finding balance through understanding is important.",
        "Shared financial goals like savings targets or travel plans make the relationship stronger.",
        "You each have different strengths in finances. Leveraging each other's strengths creates a more abundant life together."
      ]
    },
    love: {
      ko: [
        "두 사람 사이의 설렘이 깊은 애정으로 발전하는 흐름입니다. 작은 배려와 표현이 사랑을 키워줍니다.",
        "서로에 대한 기대치를 조율하는 것이 중요합니다. 상대를 있는 그대로 받아들이는 연습을 해보세요.",
        "갈등이 생기더라도 피하지 말고 함께 해결하려는 자세가 관계를 한 단계 성장시킵니다.",
        "작은 이벤트나 데이트가 두 사람의 감정을 더욱 풍요롭게 해줍니다. 특별한 추억을 만들어 보세요.",
        "두 사람이 함께하는 취미나 활동을 찾아보세요. 공유된 경험이 깊은 유대감을 형성합니다."
      ],
      en: [
        "The excitement between you two is developing into deep affection. Small acts of care and expression nurture love.",
        "Aligning expectations of each other is important. Practice accepting your partner as they are.",
        "Even when conflicts arise, facing them together rather than avoiding them grows the relationship to the next level.",
        "Small events or dates enrich both your feelings. Create special memories together.",
        "Find hobbies or activities you enjoy together. Shared experiences form deep bonds."
      ]
    },
    career: {
      ko: [
        "두 사람의 커리어 방향이 서로를 응원하는 방향으로 맞춰지면 시너지가 납니다. 서로의 꿈을 지지해 주세요.",
        "파트너의 직업적 고민을 들어주고 조언해 주는 것이 관계를 더욱 깊게 합니다.",
        "두 사람이 같은 업종이라면 협력할 기회를 찾아보세요. 시너지가 큰 조합입니다.",
        "커리어 때문에 시간이 부족하더라도 작은 관심과 연락이 관계를 유지하는 힘이 됩니다.",
        "서로 다른 분야의 전문성을 가졌다면 그 차이가 오히려 서로에게 큰 자원이 됩니다."
      ],
      en: [
        "When your career directions align to support each other, great synergy is created. Support each other's dreams.",
        "Listening to and advising your partner's career concerns deepens your relationship.",
        "If you're in the same field, look for opportunities to collaborate. This is a combination with great synergy.",
        "Even when careers leave little time, small attention and communication maintains the strength of the relationship.",
        "If you have expertise in different fields, those differences become great resources for each other."
      ]
    },
    health: {
      ko: [
        "두 사람이 함께 건강한 생활 습관을 만들어 가면 서로에게 동기부여가 됩니다.",
        "상대방의 건강을 챙겨주는 작은 행동들이 사랑을 더욱 깊게 만들어 줍니다.",
        "함께하는 운동이나 건강한 식사가 두 사람의 유대를 강화합니다. 오늘 함께 가벼운 운동을 해보세요.",
        "정서적 건강도 중요합니다. 서로의 감정을 존중하고 편안하게 표현할 수 있는 분위기를 만드세요.",
        "상대가 힘들 때 곁에 있어주는 것이 가장 큰 건강의 선물입니다."
      ],
      en: [
        "Building healthy lifestyle habits together becomes mutual motivation for both of you.",
        "Small actions that look after each other's health deepen love further.",
        "Exercising together or sharing healthy meals strengthens your bond. Try a light workout together today.",
        "Emotional health matters too. Create an environment where you can express feelings comfortably and respectfully.",
        "Being present when the other is struggling is the greatest gift of health you can give."
      ]
    }
  },
  worry: {
    total: {
      ko: [
        "지금의 갈등은 두 사람의 관계가 한 단계 성숙해지기 위한 과정입니다. 피하지 말고 진심으로 마주하세요.",
        "상대방의 입장에서 한 번 더 생각해보는 것이 고민 해결의 실마리가 됩니다. 공감이 먼저입니다.",
        "관계의 답은 내 안에 있습니다. 내가 진정으로 원하는 것이 무엇인지 먼저 파악하세요.",
        "지금 힘든 시간은 더 강한 관계를 위한 밑거름입니다. 포기하지 말고 진심으로 대화해 보세요.",
        "혼자 끙끙 앓기보다 믿을 수 있는 사람에게 털어놓는 것이 때로는 큰 도움이 됩니다."
      ],
      en: [
        "Current tensions are a process for your relationship to mature to the next level. Face them sincerely rather than avoiding.",
        "Thinking once more from the other person's perspective is the key to resolving concerns. Empathy comes first.",
        "The answer to relationship issues lies within yourself. First understand what you truly want.",
        "The difficult time now is a foundation for a stronger relationship. Don't give up; try an honest conversation.",
        "Rather than struggling alone, confiding in someone you trust can sometimes be a great help."
      ]
    },
    wealth: {
      ko: [
        "연애 고민으로 인한 정신적 소모가 재정 관리 소홀로 이어질 수 있습니다. 지출을 점검하세요.",
        "감정적으로 힘들 때 충동 소비를 하게 되기 쉽습니다. 구매 전 하루 더 생각해보세요.",
        "연애 문제와 별개로 재정적 독립성을 유지하는 것이 장기적으로 현명합니다.",
        "상대와의 금전적인 갈등이 있다면 각자의 경제 관념 차이를 인정하고 조율점을 찾으세요.",
        "마음이 안정될수록 재물 관리도 자연스럽게 안정됩니다. 마음 챙기는 것이 먼저입니다."
      ],
      en: [
        "Mental drain from love worries may lead to neglecting financial management. Review your spending.",
        "Impulse spending is easy when emotions run high. Think one more day before purchasing.",
        "Regardless of relationship issues, maintaining financial independence is wise in the long run.",
        "If there's financial conflict with a partner, acknowledge differing economic values and find a compromise.",
        "As your mind stabilizes, financial management naturally stabilizes too. Caring for your mind comes first."
      ]
    },
    love: {
      ko: [
        "지금의 갈등은 두 사람이 서로를 더 깊이 이해하기 위한 과정입니다. 진심 어린 대화가 해결책입니다.",
        "상대에게 섭섭한 마음이 있다면 비난이 아닌 자신의 감정을 중심으로 표현해 보세요.",
        "멀어진 것처럼 느껴져도 마음속에 아직 따뜻함이 있다면 다시 시작할 수 있습니다.",
        "때로는 충분한 거리를 두고 각자의 시간을 갖는 것이 관계를 리셋하는 최선의 방법입니다.",
        "상대가 변하길 기다리기보다 내가 먼저 변하는 용기가 관계를 새롭게 합니다."
      ],
      en: [
        "Current tensions are a process for understanding each other more deeply. Sincere conversation is the solution.",
        "If you feel hurt by your partner, express it focused on your own feelings rather than accusations.",
        "Even if it feels like you've grown apart, if warmth remains in your heart, you can start again.",
        "Sometimes the best way to reset a relationship is taking sufficient distance and having time to yourselves.",
        "Rather than waiting for the other to change, the courage to change yourself first renews the relationship."
      ]
    },
    career: {
      ko: [
        "연애 고민이 업무 집중력에 영향을 미칠 수 있습니다. 일과 감정을 분리하는 연습이 필요합니다.",
        "힘든 감정을 창의적인 업무 에너지로 전환해 보세요. 고통이 때로는 최고의 동기부여가 됩니다.",
        "직장 동료에게 사생활 고민을 너무 많이 공유하는 것은 주의가 필요합니다.",
        "이 시간을 자기 개발에 투자하세요. 마음이 힘들수록 성장에 집중하는 것이 현명합니다.",
        "연애 문제를 잘 해결하면 그 경험이 직장에서도 관계 능력으로 발휘됩니다."
      ],
      en: [
        "Love worries may affect workplace concentration. Practice separating work from emotions.",
        "Try channeling difficult emotions into creative work energy. Pain can sometimes be the greatest motivation.",
        "Be careful about sharing too many personal concerns with work colleagues.",
        "Invest this time in self-development. When the heart is troubled, focusing on growth is wise.",
        "Resolving love issues well builds relationship skills that also manifest in the workplace."
      ]
    },
    health: {
      ko: [
        "감정적인 스트레스가 신체 건강에 영향을 줄 수 있습니다. 충분한 수면과 영양 섭취가 중요합니다.",
        "마음이 힘들수록 몸을 더 잘 챙겨야 합니다. 가벼운 운동이 감정 안정에 큰 도움이 됩니다.",
        "가슴이 답답할 때는 자연 속에서 산책하거나 좋아하는 음악을 들어보세요. 기분이 한결 나아집니다.",
        "감정을 혼자 억누르기보다 일기 쓰기나 그림 그리기 등으로 표현해 보세요.",
        "지금 이 시간도 지나갑니다. 자신을 사랑하고 아껴주는 것이 가장 좋은 치유입니다."
      ],
      en: [
        "Emotional stress can affect physical health. Adequate sleep and nutrition are especially important now.",
        "The harder your heart works, the more you need to care for your body. Light exercise greatly helps emotional stability.",
        "When feeling emotionally tight, take a walk in nature or listen to music you love. Your mood will lift noticeably.",
        "Rather than suppressing emotions alone, express them through journaling, drawing, or other creative outlets.",
        "This time too shall pass. Loving and cherishing yourself is the best healing of all."
      ]
    }
  },
  meeting: {
    total: {
      ko: [
        "새로운 인연을 만날 기운이 강하게 흐릅니다. 일상적인 공간에서 예상치 못한 만남이 기다리고 있습니다.",
        "좋은 인연은 마음의 준비가 되어있을 때 찾아옵니다. 자신을 먼저 사랑하고 가꾸세요.",
        "인연의 기운이 주변에 충만합니다. 새로운 모임이나 활동에 적극적으로 참여해 보세요.",
        "지금 가까이에 있는 사람 중에 귀한 인연이 숨어있을 수 있습니다. 주변을 다시 한번 살펴보세요.",
        "운명적인 만남은 예고 없이 찾아옵니다. 매 순간 최선의 모습을 유지하고 마음을 열어두세요."
      ],
      en: [
        "Strong energy flows for meeting new connections. An unexpected encounter awaits in familiar everyday spaces.",
        "A good connection arrives when you're mentally prepared. First love and care for yourself.",
        "Energy of connection is abundant around you. Actively participate in new gatherings or activities.",
        "A precious connection may be hiding among people already close to you. Take another look around.",
        "Fateful encounters come without announcement. Maintain your best self at every moment and keep your heart open."
      ]
    },
    wealth: {
      ko: [
        "새로운 만남을 통해 비즈니스 기회나 재정적 도움이 올 수 있습니다. 인맥이 곧 재물입니다.",
        "만남을 위한 자기 관리 투자가 장기적으로 큰 수익을 가져다 줍니다.",
        "모임이나 행사 참여 비용을 아끼지 마세요. 그 자리에서 귀한 인연이 맺어질 수 있습니다.",
        "새로운 사람들과의 교류에서 좋은 정보와 기회를 얻을 수 있습니다.",
        "지금은 재정적 투자보다 인간관계 투자가 더 큰 결실을 맺는 시기입니다."
      ],
      en: [
        "Business opportunities or financial help may come through new encounters. Connections are wealth.",
        "Investing in self-care for meeting new people brings great returns in the long run.",
        "Don't skimp on gatherings or event costs. A precious connection may be made there.",
        "Good information and opportunities can be gained from exchanges with new people.",
        "Currently, investing in relationships yields greater fruit than financial investment."
      ]
    },
    love: {
      ko: [
        "지금이 바로 새로운 인연과 만날 최고의 타이밍입니다. 주변의 소개나 모임에 적극적으로 나가세요.",
        "첫인상이 중요한 시기입니다. 자신감 있는 미소와 진심 어린 태도가 좋은 인연을 불러옵니다.",
        "오랫동안 알고 지내던 사람이 특별한 인연으로 발전할 가능성이 있습니다.",
        "이상형에 너무 집착하기보다 열린 마음으로 다양한 사람을 만나보세요.",
        "만남의 기운이 충만한 시기입니다. 마음에 여유를 갖고 자연스럽게 행동하세요."
      ],
      en: [
        "Now is the best timing to meet a new connection. Actively go out to introductions or gatherings around you.",
        "First impressions are important during this period. A confident smile and sincere attitude attracts good connections.",
        "Someone you've known for a long time may develop into a special connection.",
        "Rather than being too attached to an ideal type, meet various people with an open mind.",
        "The energy of encounters is abundant now. Act naturally with ease in your heart."
      ]
    },
    career: {
      ko: [
        "새로운 만남을 통해 커리어에 도움이 되는 귀한 인연을 만날 수 있습니다. 자신의 분야를 적극 소개하세요.",
        "업계 모임이나 세미나 참석이 새로운 기회를 열어줍니다. 적극적인 네트워킹이 핵심입니다.",
        "첫 만남에서 좋은 인상을 남기면 커리어의 새로운 문이 열립니다. 자신을 잘 소개하세요.",
        "다양한 분야의 사람들과 교류하면 시야가 넓어지고 새로운 아이디어를 얻을 수 있습니다.",
        "오늘 만나는 사람이 내일의 파트너나 동료가 될 수 있습니다. 모든 만남에 성의를 다하세요."
      ],
      en: [
        "You may meet precious connections that help your career through new encounters. Actively introduce your field.",
        "Attending industry gatherings or seminars opens new opportunities. Active networking is key.",
        "Leaving a good impression at first meetings opens new career doors. Present yourself well.",
        "Exchanging with people in diverse fields broadens your perspective and brings new ideas.",
        "The person you meet today could be tomorrow's partner or colleague. Give sincerity to every encounter."
      ]
    },
    health: {
      ko: [
        "새로운 만남을 위한 자기 관리는 외모를 넘어 내면의 건강도 포함됩니다.",
        "활발한 사회 활동이 정신 건강에 매우 긍정적입니다. 사람들과의 교류 자체가 활력소입니다.",
        "만남을 앞두고 긴장된다면 충분한 수면과 가벼운 운동으로 컨디션을 최상으로 유지하세요.",
        "새로운 환경과 사람들이 스트레스를 주기도 합니다. 자신만의 회복 루틴을 만들어두세요.",
        "건강하고 밝은 에너지가 좋은 인연을 끌어당깁니다. 몸과 마음을 함께 가꾸세요."
      ],
      en: [
        "Self-care for new meetings goes beyond appearance to include inner health.",
        "Active social activities are very positive for mental health. Social exchange itself is a source of vitality.",
        "If nervous ahead of a meeting, maintain peak condition with sufficient sleep and light exercise.",
        "New environments and people can also cause stress. Create a personal recovery routine.",
        "Healthy, bright energy attracts good connections. Care for both body and mind."
      ]
    }
  },
  tenyear: {
    total: {
      ko: [
        "향후 10년은 지금 내리는 결단이 만들어 가는 시간입니다. 두려움보다 확신을 갖고 첫 발을 내딛으세요. 10년 후의 당신은 오늘의 용기에 감사할 것입니다.",
        "10년이라는 시간은 어떤 꿈도 이룰 수 있는 충분한 기간입니다. 하루하루 작은 실천이 쌓여 거대한 변화를 만들어 냅니다.",
        "앞으로의 10년은 인간관계가 당신 인생의 방향을 결정하는 시기입니다. 좋은 사람들과 함께하는 환경을 만드세요.",
        "지금 시작하는 배움과 성장이 10년 후 당신을 전혀 다른 차원의 사람으로 만들어 줍니다. 포기하지 마세요.",
        "10년 후를 내다볼 때 가장 중요한 것은 건강과 관계입니다. 이 두 가지를 가장 소중히 여기는 삶을 설계하세요."
      ],
      en: [
        "The next 10 years are shaped by the decisions you make today. Step forward with conviction rather than fear. Your future self will be grateful for today's courage.",
        "Ten years is more than enough time to achieve any dream. Small daily practices accumulate to create enormous change.",
        "The coming 10 years are a time when relationships determine your life's direction. Build an environment surrounded by good people.",
        "Learning and growth starting now will transform you into an entirely different person 10 years from now. Don't give up.",
        "When looking 10 years ahead, health and relationships are the most important things. Design a life that treasures these two above all."
      ]
    },
    wealth: {
      ko: [
        "10년 후의 재정적 자유는 지금의 작은 저축 습관에서 시작됩니다. 복리의 마법을 믿고 꾸준히 투자하세요.",
        "앞으로 10년간 꾸준한 자기 개발이 가장 확실한 재테크입니다. 내 가치를 높이는 것이 최고의 투자입니다.",
        "10년 내에 확실한 수익 모델 하나를 만들어 두는 것을 목표로 하세요. 지금이 시작의 때입니다.",
        "부동산, 주식, 사업 중 자신의 성향에 맞는 장기 재무 전략을 세우고 흔들리지 않게 실천하세요.",
        "10년 후 재정적으로 풍요로운 삶을 위해 지금 당장 월 지출 습관부터 정비하세요."
      ],
      en: [
        "Financial freedom in 10 years begins with small saving habits now. Trust the magic of compound interest and invest consistently.",
        "Consistent self-development over the next 10 years is the surest financial strategy. Increasing your own value is the best investment.",
        "Set a goal to build at least one reliable income model within 10 years. Now is the time to start.",
        "Establish a long-term financial strategy suited to your personality — real estate, stocks, or business — and execute it without wavering.",
        "To live financially abundant in 10 years, reorganize your monthly spending habits starting right now."
      ]
    },
    love: {
      ko: [
        "10년 후 사랑하는 사람과 함께하는 삶을 그린다면 지금부터 관계에 성실히 투자하세요. 사랑은 가꾸는 만큼 자랍니다.",
        "앞으로의 10년은 진정한 인연을 깊게 가꾸는 시간입니다. 많은 사람보다 소중한 한 사람이 더 의미 있습니다.",
        "지금의 연애나 결혼 생활이 10년 후에도 지속되려면 매일의 작은 배려와 감사가 핵심입니다.",
        "10년 후를 함께할 사람을 고를 때 가장 중요한 것은 가치관의 일치입니다. 겉모습보다 내면을 보세요.",
        "사랑하는 관계는 노력하지 않으면 서서히 식어갑니다. 관계에 소홀하다면 오늘부터 변화를 시작하세요."
      ],
      en: [
        "If you envision living with someone you love in 10 years, invest sincerely in relationships starting now. Love grows as much as it's nurtured.",
        "The next 10 years is a time for deepening true connections. One precious person means more than many.",
        "For a current relationship or marriage to last 10 years, small daily care and gratitude are the key.",
        "When choosing someone to be with 10 years from now, matching values are most important. Look at character over appearance.",
        "A loving relationship slowly cools without effort. If you've been neglecting your relationship, start changing today."
      ]
    },
    career: {
      ko: [
        "10년 후 당신이 원하는 커리어의 모습을 지금 명확히 그려보세요. 명확한 목표가 있는 사람만이 도달합니다.",
        "앞으로 10년은 전문성이 당신의 가장 큰 자산이 됩니다. 한 분야를 깊이 파고드는 노력을 아끼지 마세요.",
        "10년 후를 바라보면 지금의 직장이 목적지가 아닌 과정임을 알게 됩니다. 두려움 없이 도전하세요.",
        "다가오는 10년은 변화와 혁신의 시대입니다. 변화에 민감하게 반응하고 새로운 기술을 배우는 자세가 중요합니다.",
        "꾸준한 사람이 결국 이깁니다. 10년간의 일관된 노력이 어떤 재능보다 강력한 무기가 됩니다."
      ],
      en: [
        "Clearly envision now what your ideal career looks like 10 years from now. Only those with clear goals arrive there.",
        "Over the next 10 years, expertise becomes your greatest asset. Don't spare effort in going deep into one field.",
        "Looking 10 years ahead, you realize your current job is a process, not a destination. Challenge without fear.",
        "The coming 10 years is an era of change and innovation. Sensitivity to change and willingness to learn new skills are important.",
        "The consistent person ultimately wins. Ten years of consistent effort is more powerful than any talent."
      ]
    },
    health: {
      ko: [
        "10년 후의 건강은 지금의 생활 습관이 결정합니다. 오늘 하루의 건강한 선택이 10년 후의 삶의 질을 만듭니다.",
        "운동을 지금 시작하지 않으면 10년 후 큰 건강 대가를 치를 수 있습니다. 오늘이 최선의 시작점입니다.",
        "10년 후 활기차고 건강한 삶을 위해 지금 당장 나쁜 습관 하나를 버리고 좋은 습관 하나를 시작하세요.",
        "정신 건강 역시 10년을 좌우합니다. 스트레스 관리, 긍정적 사고, 양질의 인간관계가 장수의 비결입니다.",
        "규칙적인 건강 검진과 예방의학이 10년 후 삶의 질을 결정합니다. 지금부터 건강 관리를 투자로 여기세요."
      ],
      en: [
        "Your health in 10 years is determined by your lifestyle habits today. Today's healthy choices create the quality of life 10 years from now.",
        "If you don't start exercising now, you may pay a great health price 10 years later. Today is the best starting point.",
        "For a vibrant, healthy life 10 years from now, drop one bad habit and start one good habit right now.",
        "Mental health also shapes the next 10 years. Stress management, positive thinking, and quality relationships are the secrets to longevity.",
        "Regular health checkups and preventive medicine determine quality of life in 10 years. Treat health management as an investment starting now."
      ]
    }
  }
};

function generateFortune(name, year, month, day, category) {
  let seed = year * 7 + month * 31 + day * 13 + new Date().getDate() * 97;
  const nextRand = () => seededRandom(seed++);
  const pick = (arr) => arr[Math.floor(nextRand() * arr.length)];

  const saju    = calcSaju(year, month, day);
  const dayElem = GAN_ELEM[saju.dG] || '토';
  const lang    = currentLang;
  const gender  = (document.querySelector('input[name="gender"]:checked')||{value:'male'}).value;

  const catTexts = FORTUNE_TEXTS[category] || FORTUNE_TEXTS.home;

  /* ── 사주 기반 점수 계산 ── */
  const today = new Date();
  const yest  = new Date(today); yest.setDate(today.getDate()-1);
  const bSeed = year*1000+month*100+day;

  function weekBest() {
    let best=-1, bestDate='';
    for(let i=0;i<7;i++) { const d=new Date(today); d.setDate(today.getDate()-today.getDay()+i); const s=calcSajuScore(saju,category,year,month,day,1,d); if(s>best){best=s;bestDate=`${d.getMonth()+1}/${d.getDate()}`;} }
    return bestDate;
  }

  const totalScore  = calcSajuScore(saju, category, year, month, day, 1, today);
  const wealthScore = calcSajuScore(saju, category, year, month, day, 2, today);
  const loveScore   = calcSajuScore(saju, category, year, month, day, 3, today);
  const careerScore = calcSajuScore(saju, category, year, month, day, 4, today);
  const healthScore = calcSajuScore(saju, category, year, month, day, 5, today);

  const totalYest   = calcSajuScore(saju, category, year, month, day, 1, yest);
  const wealthYest  = calcSajuScore(saju, category, year, month, day, 2, yest);
  const loveYest    = calcSajuScore(saju, category, year, month, day, 3, yest);
  const careerYest  = calcSajuScore(saju, category, year, month, day, 4, yest);
  const healthYest  = calcSajuScore(saju, category, year, month, day, 5, yest);

  const wkBest = weekBest();

  const totalText  = pick(catTexts.total[lang])  + '\n\n' + buildSajuTotalText(name, saju, 0, 0, category);
  const wealthText = pick(catTexts.wealth[lang]) + buildWealthDetailText(name, saju);
  const loveText   = pick(catTexts.love[lang])   + buildLoveDetailText(name, saju);
  const careerText = pick(catTexts.career[lang]) + buildCareerDetailText(name, saju);
  const healthText = pick(catTexts.health[lang]) + buildHealthDetailText(name, saju);

  const categoryConfigs = {
    ko: {
      home:    { title: "오늘의 종합 운세",   label: "띠의 기운" },
      newyear: { title: "신년 종합 운세",     label: "올해의 기운" },
      monthly: { title: "이달의 종합 운세",   label: "이달의 기운" },
      love:    { title: "연애/궁합 운세",     label: "인연의 기운" },
      worry:   { title: "연애 고민 해결",     label: "마음의 기운" },
      meeting: { title: "새로운 만남 운세",   label: "만남의 기운" },
      tenyear: { title: "10년 대운 분석",     label: "장기적 흐름" }
    },
    en: {
      home:    { title: "Daily Fortune Index",      label: "'s Energy" },
      newyear: { title: "New Year Fortune",         label: "'s Year Energy" },
      monthly: { title: "Monthly Fortune",          label: "'s Month Energy" },
      love:    { title: "Love & Compatibility",     label: "'s Love Energy" },
      worry:   { title: "Love Trouble Guidance",    label: "'s Inner Energy" },
      meeting: { title: "Meeting & Fate",           label: "'s Meeting Energy" },
      tenyear: { title: "10-Year Destiny Analysis", label: "'s Long-term Flow" }
    }
  };

  const config   = categoryConfigs[lang][category] || categoryConfigs[lang].home;
  const zodiac   = getZodiac(year);
  const fiveElem = getFiveElements(year);
  const initColor= getScoreColor(totalScore);
  const initLabel= getScoreLabel(totalScore);
  const initChg  = totalScore - totalYest;
  const classicHTML = buildClassicSajuHTML(name, saju, year, month, day, gender, lang);

  return {
    isSuperLucky: totalScore >= 90,
    tabs: {
      total:  { score: totalScore,  scoreChange: totalScore-totalYest,   text: totalText  },
      wealth: { score: wealthScore, scoreChange: wealthScore-wealthYest, text: wealthText },
      love:   { score: loveScore,   scoreChange: loveScore-loveYest,     text: loveText   },
      career: { score: careerScore, scoreChange: careerScore-careerYest, text: careerText },
      health: { score: healthScore, scoreChange: healthScore-healthYest, text: healthText }
    },
    html: `
      <div class="fortune-card">
        <div class="score-section">
          <div class="score-header">
            <span>${config.title}</span>
            <div class="score-right">
              <span class="score-badge" style="background:${initColor}">${initLabel}</span>
              <span class="score-value" style="color:${initColor}">${totalScore}${lang==='ko'?'점':'pts'}</span>
              <span class="score-change${initChg>0?' sc-up':initChg<0?' sc-down':''}">${initChg>0?'▲+'+initChg:initChg<0?'▼'+initChg:'━0'}</span>
            </div>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="background:${initColor};width:${totalScore}%"></div>
          </div>
          <div class="score-meta">
            <span class="score-comment">${getScoreComment(totalScore,'total',lang)}</span>
            <span class="score-week">${lang==='ko'?'이번주 최고':'Week best'}: <strong>${wkBest}</strong></span>
          </div>
        </div>
        <div class="analysis-section">
          <span class="label">${zodiac}${config.label}</span>
          <div class="content-body">
            <p class="content">${totalText}</p>
          </div>
        </div>
        <div class="extra-info">
          <div class="info-grid">
            <div class="info-item">
              <strong>${lang==='ko'?'🐾 띠':'🐾 Zodiac'}</strong>
              <span>${zodiac}</span>
            </div>
            <div class="info-item">
              <strong>${lang==='ko'?'🔥 오행':'🔥 Element'}</strong>
              <span>${fiveElem}</span>
            </div>
          </div>
        </div>
        ${classicHTML}
      </div>
    `
  };
}

function generateNewYearFortune(name, year, month, day) {
  return generateFortune(name, year, month, day, 'newyear');
}
function generateLoveFortune(n, y, m, d) { return generateFortune(n, y, m, d, 'love'); }
function generateWorryFortune(n, y, m, d) { return generateFortune(n, y, m, d, 'worry'); }
function generateMeetingFortune(n, y, m, d) { return generateFortune(n, y, m, d, 'meeting'); }
function generateMonthlyFortune(n, y, m, d) { return generateFortune(n, y, m, d, 'monthly'); }
function generateTenYearFortune(n, y, m, d) { return generateFortune(n, y, m, d, 'tenyear'); }
/* ── 별자리 데이터 ── */
const ZODIAC_LIST = [
  { ko:"염소자리", en:"Capricorn", symbol:"♑", range:[12,22,1,19] },
  { ko:"물병자리", en:"Aquarius",  symbol:"♒", range:[1,20,2,18] },
  { ko:"물고기자리",en:"Pisces",   symbol:"♓", range:[2,19,3,20] },
  { ko:"양자리",   en:"Aries",     symbol:"♈", range:[3,21,4,19] },
  { ko:"황소자리", en:"Taurus",    symbol:"♉", range:[4,20,5,20] },
  { ko:"쌍둥이자리",en:"Gemini",   symbol:"♊", range:[5,21,6,20] },
  { ko:"게자리",   en:"Cancer",    symbol:"♋", range:[6,21,7,22] },
  { ko:"사자자리", en:"Leo",       symbol:"♌", range:[7,23,8,22] },
  { ko:"처녀자리", en:"Virgo",     symbol:"♍", range:[8,23,9,22] },
  { ko:"천칭자리", en:"Libra",     symbol:"♎", range:[9,23,10,22] },
  { ko:"전갈자리", en:"Scorpio",   symbol:"♏", range:[10,23,11,21] },
  { ko:"사수자리", en:"Sagittarius",symbol:"♐", range:[11,22,12,21] }
];

const ZODIAC_INFO = {
  "염소자리": {
    ko:{ element:"흙(土)", quality:"활동형", ruler:"토성(♄)", trait:"인내와 야망의 지배자",
      total_insight:"염소자리는 토성(♄)의 지배 아래 흙의 원소 에너지를 품고 있습니다. 인내심과 책임감, 현실적 판단력이 뛰어나며, 어떤 목표도 포기하지 않는 불굴의 의지를 지녔습니다. 오늘은 토성의 기운이 당신의 체계적인 면을 더욱 강화시켜 줍니다. 작은 한 걸음이 큰 성취로 이어지는 날입니다.",
      wealth:"토성의 인내 에너지가 장기 재물 축적에 유리합니다. 충동적 투자를 피하고 안정적인 계획 중심의 접근이 효과적입니다. 오늘 재물 결정은 장기적 시각으로 신중하게 내리세요.",
      love:"신중한 성품이 깊고 지속적인 인연을 만듭니다. 감정을 조금 더 열어 표현하면 관계가 한 단계 발전합니다. 오늘 진심을 전하는 용기를 내보세요.",
      career:"목표 지향적 에너지가 오늘 빛납니다. 장기 계획을 점검하고 단계별로 실행하는 전략이 성과를 만듭니다. 꾸준함이 가장 강력한 무기입니다.",
      health:"무릎과 골격계를 주의하세요. 규칙적인 스트레칭과 충분한 수면이 오늘의 건강 에너지를 지켜줍니다." },
    en:{ element:"Earth", quality:"Cardinal", ruler:"Saturn (♄)", trait:"Master of Patience & Ambition",
      total_insight:"Capricorn is governed by Saturn (♄) and carries Earth energy. You possess remarkable patience, responsibility, and realistic judgment, with an iron will that never abandons a goal. Today, Saturn's energy amplifies your systematic nature. A single small step today leads to great achievement.",
      wealth:"Saturn's patient energy favors long-term wealth accumulation. Avoid impulsive investments and focus on stable, planned approaches. Make today's financial decisions with a long-term perspective.",
      love:"Your careful nature creates deep and lasting bonds. Opening up emotionally just a bit more will advance the relationship. Have the courage to express your sincerity today.",
      career:"Goal-oriented energy shines today. Step-by-step execution of long-term plans yields results. Consistency is your most powerful weapon.",
      health:"Pay attention to knees and skeletal health. Regular stretching and sufficient sleep protect today's energy." }
  },
  "물병자리": {
    ko:{ element:"바람(風)", quality:"고정형", ruler:"천왕성(♅)", trait:"혁신과 자유의 선각자",
      total_insight:"물병자리는 천왕성(♅)의 지배 아래 바람의 원소 에너지를 품고 있습니다. 독창적 사고와 인류애, 강한 독립심이 특징이며, 시대를 앞서가는 혁신적 아이디어로 주변을 이끕니다. 오늘은 천왕성의 번개 같은 통찰이 새로운 가능성의 문을 열어줍니다.",
      wealth:"독창적인 아이디어가 뜻밖의 수익 기회로 이어질 수 있습니다. 네트워크를 활용한 협력 투자가 유리합니다. 정보의 흐름을 잘 읽는 것이 재물의 열쇠입니다.",
      love:"자유를 존중하는 관계가 가장 잘 맞습니다. 상대의 독립성을 인정하면 더욱 깊은 연결이 생깁니다. 오늘은 진심 어린 대화로 거리를 좁혀보세요.",
      career:"혁신적 아이디어를 제안하기 좋은 날입니다. 팀 내 특별한 역할이 빛을 발할 수 있습니다. 새로운 관점을 두려워하지 마세요.",
      health:"순환계와 발목 건강에 신경 쓰세요. 규칙적인 유산소 운동이 활력을 높여줍니다." },
    en:{ element:"Air", quality:"Fixed", ruler:"Uranus (♅)", trait:"Visionary of Innovation & Freedom",
      total_insight:"Aquarius is governed by Uranus (♅) and carries Air energy. Original thinking, humanitarian spirit, and strong independence define you, as you lead those around you with innovative ideas ahead of the times. Today, Uranus' lightning insight opens new possibilities.",
      wealth:"Original ideas can lead to unexpected income opportunities. Collaborative investments leveraging your network are favorable.",
      love:"Relationships that respect freedom suit you best. Acknowledging a partner's independence creates a deeper connection.",
      career:"A great day to propose innovative ideas. A unique role within your team can shine brilliantly.",
      health:"Attend to circulation and ankle health. Regular aerobic exercise boosts vitality." }
  },
  "물고기자리": {
    ko:{ element:"물(水)", quality:"변동형", ruler:"해왕성(♆)", trait:"꿈과 직관의 몽상가",
      total_insight:"물고기자리는 해왕성(♆)의 지배 아래 물의 원소 에너지를 품고 있습니다. 뛰어난 직관력과 공감 능력, 풍부한 상상력이 특징입니다. 경계를 넘나드는 유연한 에너지로 예술과 영성 분야에서 특별한 재능을 발휘합니다. 오늘 내면의 목소리에 귀를 기울이면 놀라운 통찰을 얻게 됩니다.",
      wealth:"직관에 따른 투자 결정이 오늘 유효할 수 있습니다. 단, 충분한 정보 수집 후 신중하게 판단하세요.",
      love:"공감 능력이 탁월해 상대의 마음을 자연스럽게 이해합니다. 경계를 명확히 하는 것이 관계를 건강하게 유지하는 비결입니다.",
      career:"창의적인 접근이 오늘 강점입니다. 직관을 믿고 새로운 아이디어를 두려워하지 마세요.",
      health:"발과 면역계 건강에 주의하세요. 충분한 수분 섭취와 숙면이 에너지를 회복시켜 줍니다." },
    en:{ element:"Water", quality:"Mutable", ruler:"Neptune (♆)", trait:"Dreamer of Intuition & Vision",
      total_insight:"Pisces is governed by Neptune (♆) and carries Water energy. Outstanding intuition, deep empathy, and rich imagination define you. Your fluid energy brings special talent in art and spirituality. Today, listening to your inner voice brings remarkable insight.",
      wealth:"Intuition-driven decisions may be valid today — but gather sufficient information before deciding.",
      love:"Your exceptional empathy naturally understands others. Setting clear boundaries keeps relationships healthy.",
      career:"Creative approaches are your strength today. Trust your intuition and embrace new ideas.",
      health:"Attend to foot and immune system health. Adequate hydration and deep sleep restore your energy." }
  },
  "양자리": {
    ko:{ element:"불(火)", quality:"활동형", ruler:"화성(♂)", trait:"열정과 용기의 선봉장",
      total_insight:"양자리는 화성(♂)의 지배 아래 불의 원소 에너지를 품고 있습니다. 넘치는 열정과 용기, 선구자적 기질이 특징입니다. 누구보다 먼저 도전에 나서는 활기찬 에너지로 주변에 활력을 불어넣습니다. 오늘 화성의 강렬한 기운이 새로운 시작을 강력하게 지지합니다.",
      wealth:"빠른 판단력이 기회 포착에 도움이 됩니다. 단, 성급한 결정보다 잠시 검토하는 여유가 손실을 막아줍니다.",
      love:"열정적인 구애가 매력입니다. 상대의 속도에 맞춰주는 여유가 더 깊은 관계를 만듭니다.",
      career:"선도적 역할을 맡기에 좋은 날입니다. 팀을 이끄는 리더십이 빛을 발합니다.",
      health:"두부와 얼굴 부위에 주의하세요. 활동적인 운동이 에너지를 건강하게 발산시켜 줍니다." },
    en:{ element:"Fire", quality:"Cardinal", ruler:"Mars (♂)", trait:"Pioneer of Passion & Courage",
      total_insight:"Aries is governed by Mars (♂) and carries Fire energy. Overflowing passion, courage, and a pioneering spirit define you. Your vibrant energy breathes vitality into those around you. Today, Mars' intense power strongly supports new beginnings.",
      wealth:"Quick judgment helps seize opportunities. Pausing briefly for review prevents impulsive losses.",
      love:"Passionate pursuit is your charm. Matching your partner's pace creates a deeper connection.",
      career:"A great day to take on a leading role. Leadership that drives the team shines.",
      health:"Be mindful of head and face. Active exercise channels excess energy in a healthy direction." }
  },
  "황소자리": {
    ko:{ element:"흙(土)", quality:"고정형", ruler:"금성(♀)", trait:"안정과 풍요의 수호자",
      total_insight:"황소자리는 금성(♀)의 지배 아래 흙의 원소 에너지를 품고 있습니다. 안정감, 감각적 풍요, 끈기 있는 실행력이 특징입니다. 아름다움과 쾌적함을 사랑하며, 한 번 결심한 것은 반드시 이루어내는 강한 의지를 가지고 있습니다. 오늘 금성의 기운이 재물과 인연 모두에 풍요로운 에너지를 보내줍니다.",
      wealth:"금성의 풍요 에너지가 오늘 재물운에 긍정적으로 작용합니다. 아름다움과 가치에 투자하는 것이 장기적으로 유리합니다.",
      love:"안정과 헌신을 가장 중요하게 여깁니다. 작은 배려와 감각적 표현이 사랑을 깊게 합니다.",
      career:"꾸준하고 믿음직한 성품이 신뢰를 쌓습니다. 완성도 높은 결과물을 만드는 데 집중하세요.",
      health:"목과 갑상선 건강에 신경 쓰세요. 자연 속 산책이 오늘의 활력을 높여줍니다." },
    en:{ element:"Earth", quality:"Fixed", ruler:"Venus (♀)", trait:"Guardian of Stability & Abundance",
      total_insight:"Taurus is governed by Venus (♀) and carries Earth energy. Stability, sensory abundance, and persistent execution define you. You love beauty and comfort, and have a strong will to see every decision through. Today, Venus' energy sends abundant energy to both wealth and relationships.",
      wealth:"Venus' abundance energy positively influences your finances today. Investing in beauty and value proves advantageous long-term.",
      love:"You prize stability and devotion. Small acts of care and sensory expression deepen love.",
      career:"Your steady, reliable nature builds trust. Focus on creating high-quality results with patience.",
      health:"Pay attention to neck and thyroid health. A nature walk boosts today's vitality." }
  },
  "쌍둥이자리": {
    ko:{ element:"바람(風)", quality:"변동형", ruler:"수성(☿)", trait:"소통과 지성의 언어사",
      total_insight:"쌍둥이자리는 수성(☿)의 지배 아래 바람의 원소 에너지를 품고 있습니다. 뛰어난 언어 능력과 호기심, 다재다능함이 특징입니다. 두 가지 상반된 면을 동시에 품은 복잡한 매력으로 어떤 상황에서도 적응력을 발휘합니다. 오늘 수성의 명석한 기운이 커뮤니케이션과 학습 모든 면에서 빛을 발합니다.",
      wealth:"정보 수집과 네트워킹에서 재물 기회가 열립니다. 여러 옵션을 비교한 후 결정하세요.",
      love:"대화와 지적 교감이 가장 강한 연결 고리입니다. 상대방의 이야기에 진심으로 귀 기울여보세요.",
      career:"아이디어를 공유하고 협력하기에 최적의 날입니다. 다양한 프로젝트를 동시에 진행하는 멀티태스킹이 강점입니다.",
      health:"폐와 팔, 신경계 건강에 주의하세요. 깊은 호흡 운동이 마음과 몸을 함께 충전시켜 줍니다." },
    en:{ element:"Air", quality:"Mutable", ruler:"Mercury (☿)", trait:"Communicator of Intellect & Language",
      total_insight:"Gemini is governed by Mercury (☿) and carries Air energy. Outstanding communication, curiosity, and versatility define you. Your complex dual nature brings adaptability to any situation. Today, Mercury's sharp energy shines in communication and learning.",
      wealth:"Financial opportunities open through information gathering and networking. Compare multiple options before deciding.",
      love:"Conversation and intellectual connection are your strongest bond. Genuinely listen to your partner.",
      career:"The optimal day for sharing ideas and collaborating. Multitasking across various projects is your strength.",
      health:"Attend to lung, arm, and nervous system health. Deep breathing recharges both mind and body." }
  },
  "게자리": {
    ko:{ element:"물(水)", quality:"활동형", ruler:"달(☽)", trait:"감성과 보살핌의 수호자",
      total_insight:"게자리는 달(☽)의 지배 아래 물의 원소 에너지를 품고 있습니다. 깊은 감수성과 모성적 돌봄, 강한 직관력이 특징입니다. 가족과 친밀한 사람들에 대한 헌신이 남다르며, 감정의 조류를 섬세하게 읽어냅니다. 오늘 달의 기운이 감정적 연결과 내면의 성장을 깊게 지지합니다.",
      wealth:"가정과 부동산 관련 투자가 유리한 에너지입니다. 감정적 판단보다 실질적 가치를 중심으로 결정하세요.",
      love:"깊은 공감과 따뜻한 배려가 인연의 씨앗을 심습니다. 가까운 사람에게 먼저 마음을 열어보세요.",
      career:"팀의 감성적 분위기를 이끄는 역할이 어울립니다. 동료를 돌보는 행동이 신뢰를 쌓습니다.",
      health:"위장과 소화계 건강에 신경 쓰세요. 따뜻한 음식과 정서적 안정이 건강의 기반입니다." },
    en:{ element:"Water", quality:"Cardinal", ruler:"Moon (☽)", trait:"Guardian of Emotion & Nurturing",
      total_insight:"Cancer is governed by the Moon (☽) and carries Water energy. Deep sensitivity, maternal care, and strong intuition define you. Your devotion to family is unmatched, and you read emotional currents delicately. Today, the Moon's energy deeply supports emotional connection and inner growth.",
      wealth:"Home and real estate investments carry favorable energy. Make decisions based on practical value rather than emotion.",
      love:"Deep empathy and warm care plant seeds of connection. Try opening your heart first to someone close.",
      career:"You naturally lead the team's emotional atmosphere. Caring for colleagues builds deep trust.",
      health:"Attend to stomach and digestive health. Warm food and emotional stability form the basis of health." }
  },
  "사자자리": {
    ko:{ element:"불(火)", quality:"고정형", ruler:"태양(☉)", trait:"창조와 리더십의 왕",
      total_insight:"사자자리는 태양(☉)의 지배 아래 불의 원소 에너지를 품고 있습니다. 넘치는 자신감과 창의력, 타고난 리더십이 특징입니다. 무대 위에서 빛나는 존재감으로 주변을 밝히며, 아낌없는 관대함으로 사람들의 마음을 얻습니다. 오늘 태양의 찬란한 기운이 당신의 모든 표현을 더욱 빛나게 합니다.",
      wealth:"창의적인 프로젝트와 개인 브랜드에서 재물 기회가 열립니다. 자신의 재능을 수익화하는 방향을 모색하세요.",
      love:"열정적이고 관대한 사랑이 상대의 마음을 사로잡습니다. 진심 어린 칭찬과 관심이 관계를 풍요롭게 합니다.",
      career:"리더십을 발휘하기에 최적의 에너지입니다. 자신의 비전을 당당하게 표현하고 팀에 영감을 주세요.",
      health:"심장과 등 건강에 신경 쓰세요. 햇빛 아래 활동적인 운동이 생명력을 최대로 끌어올립니다." },
    en:{ element:"Fire", quality:"Fixed", ruler:"Sun (☉)", trait:"King of Creativity & Leadership",
      total_insight:"Leo is governed by the Sun (☉) and carries Fire energy. Overflowing confidence, creativity, and innate leadership define you. You illuminate those around you with radiant presence and win hearts with boundless generosity. Today, the Sun's brilliant energy makes every expression shine even more.",
      wealth:"Financial opportunities open through creative projects and personal branding. Explore ways to monetize your talents.",
      love:"Passionate and generous love captures hearts. Sincere compliments and attention enrich the relationship.",
      career:"The optimal energy for exercising leadership. Express your vision boldly and inspire the team.",
      health:"Attend to heart and back health. Active outdoor exercise under sunlight maximizes vitality." }
  },
  "처녀자리": {
    ko:{ element:"흙(土)", quality:"변동형", ruler:"수성(☿)", trait:"분석과 완벽의 장인",
      total_insight:"처녀자리는 수성(☿)의 지배 아래 흙의 원소 에너지를 품고 있습니다. 세밀한 분석력과 완벽주의, 실용적 문제 해결 능력이 특징입니다. 작은 디테일도 놓치지 않는 예리한 관찰력으로 어디서든 꼭 필요한 존재가 됩니다. 오늘 수성의 분석적 에너지가 복잡한 문제를 명쾌하게 풀어줍니다.",
      wealth:"꼼꼼한 재무 관리와 체계적인 예산 계획이 재물을 지켜줍니다. 작은 절약 습관이 큰 차이를 만듭니다.",
      love:"진심 어린 봉사와 세심한 배려가 사랑의 언어입니다. 완벽함에 대한 기대를 조금 낮추면 관계가 편안해집니다.",
      career:"분석과 정리, 개선 작업에서 빛을 발하는 날입니다. 세부 사항 집중이 신뢰와 인정을 만듭니다.",
      health:"소화기계와 장 건강에 특별히 신경 쓰세요. 규칙적인 식사와 식이섬유 섭취가 건강 에너지의 핵심입니다." },
    en:{ element:"Earth", quality:"Mutable", ruler:"Mercury (☿)", trait:"Craftsman of Analysis & Perfection",
      total_insight:"Virgo is governed by Mercury (☿) and carries Earth energy. Meticulous analysis, perfectionism, and practical problem-solving define you. Your sharp observation makes you indispensable everywhere. Today, Mercury's analytical energy clarifies complex problems with precision.",
      wealth:"Careful financial management and systematic budgeting protect your wealth. Small savings habits make the biggest difference.",
      love:"Sincere service and attentive care are your love language. Lowering perfectionism slightly makes relationships more comfortable.",
      career:"A day when analysis, organization, and improvement work shine. Focus on details to build trust.",
      health:"Pay special attention to digestive and intestinal health. Regular meals and fiber intake are essential." }
  },
  "천칭자리": {
    ko:{ element:"바람(風)", quality:"활동형", ruler:"금성(♀)", trait:"균형과 조화의 외교관",
      total_insight:"천칭자리는 금성(♀)의 지배 아래 바람의 원소 에너지를 품고 있습니다. 균형감각과 미적 감수성, 뛰어난 외교력이 특징입니다. 공정함과 조화를 추구하며, 어떤 갈등도 우아하게 중재합니다. 오늘 금성의 조화로운 기운이 인간관계와 창의적 활동 모두에 아름다운 에너지를 보내줍니다.",
      wealth:"파트너십과 협력 기반의 재물 창출이 유리합니다. 공정한 거래와 신뢰 관계가 장기적 재물의 기반입니다.",
      love:"아름다운 환경과 세련된 배려가 인연을 끌어당깁니다. 결정을 미루지 말고 마음을 솔직히 표현해보세요.",
      career:"협상과 중재에서 탁월한 능력이 발휘됩니다. 팀의 조화를 이끄는 역할이 높은 평가를 받습니다.",
      health:"신장과 허리 건강에 신경 쓰세요. 균형 잡힌 식단과 충분한 수분 섭취가 건강 에너지를 지켜줍니다." },
    en:{ element:"Air", quality:"Cardinal", ruler:"Venus (♀)", trait:"Diplomat of Balance & Harmony",
      total_insight:"Libra is governed by Venus (♀) and carries Air energy. A sense of balance, aesthetic sensibility, and outstanding diplomacy define you. You seek fairness and harmony, mediating any conflict gracefully. Today, Venus' harmonious energy sends beautiful energy to both relationships and creative activities.",
      wealth:"Wealth creation through partnerships and collaboration is favorable. Fair dealings and trust form the foundation of lasting wealth.",
      love:"Beautiful surroundings and refined care attract the right partner. Don't delay — express your feelings honestly.",
      career:"A day when exceptional negotiation and mediation ability shines. Leading team harmony earns high regard.",
      health:"Pay attention to kidney and lower back health. A balanced diet and hydration protect today's energy." }
  },
  "전갈자리": {
    ko:{ element:"물(水)", quality:"고정형", ruler:"명왕성(♇)", trait:"변환과 심층의 연금술사",
      total_insight:"전갈자리는 명왕성(♇)의 지배 아래 물의 원소 에너지를 품고 있습니다. 강렬한 집중력과 깊은 통찰력, 변혁을 이끄는 힘이 특징입니다. 표면 아래 숨겨진 진실을 꿰뚫어 보는 능력과 한 번 결심하면 끝까지 가는 의지력이 남다릅니다. 오늘 명왕성의 변혁 에너지가 깊은 곳에서 새로운 변화를 이끌어냅니다.",
      wealth:"깊은 조사와 분석을 통한 투자가 강점입니다. 숨겨진 가치를 발견하는 통찰력이 재물 기회를 만들어냅니다.",
      love:"강렬한 감정의 연결을 추구합니다. 신뢰를 쌓는 데 시간이 걸리지만, 형성된 유대는 매우 깊습니다.",
      career:"탐구와 연구, 위기 관리 분야에서 탁월함을 발휘합니다. 숨겨진 문제를 찾아내고 해결하는 데 집중하세요.",
      health:"생식기와 배설 기관 건강에 신경 쓰세요. 감정의 정화와 해독이 신체 건강과 직결됩니다." },
    en:{ element:"Water", quality:"Fixed", ruler:"Pluto (♇)", trait:"Alchemist of Transformation & Depth",
      total_insight:"Scorpio is governed by Pluto (♇) and carries Water energy. Intense focus, deep insight, and transformative power define you. Your ability to pierce hidden truths and iron will are extraordinary. Today, Pluto's transformative energy draws new changes from deep within.",
      wealth:"Investment through deep research and analysis is your strength. Insight to discover hidden value creates financial opportunities.",
      love:"You seek intensely emotional connections. Trust takes time, but once formed the bond is profoundly deep.",
      career:"You excel in research, investigation, and crisis management. Focus on uncovering and resolving hidden problems.",
      health:"Attend to reproductive and excretory organ health. Emotional purging connects directly to physical well-being." }
  },
  "사수자리": {
    ko:{ element:"불(火)", quality:"변동형", ruler:"목성(♃)", trait:"자유와 탐험의 철학자",
      total_insight:"사수자리는 목성(♃)의 지배 아래 불의 원소 에너지를 품고 있습니다. 넘치는 낙천주의와 모험심, 철학적 사고가 특징입니다. 경계를 넘어 더 넓은 세계를 탐험하려는 열망이 끊임없이 성장하게 만듭니다. 오늘 목성의 풍요로운 기운이 행운과 기회의 문을 활짝 열어줍니다.",
      wealth:"목성의 확장 에너지가 오늘 재물운에 긍정적으로 작용합니다. 해외나 교육, 출판 관련 기회에 주목하세요.",
      love:"모험적이고 자유로운 사랑을 추구합니다. 함께 새로운 경험을 나누는 것이 관계를 풍요롭게 합니다.",
      career:"교육, 출판, 해외 관련 분야에서 특별한 기회가 열립니다. 큰 그림을 그리고 비전을 공유하세요.",
      health:"허벅지와 간 건강에 주의하세요. 야외 활동과 스포츠가 과잉 에너지를 건강하게 발산시켜 줍니다." },
    en:{ element:"Fire", quality:"Mutable", ruler:"Jupiter (♃)", trait:"Philosopher of Freedom & Exploration",
      total_insight:"Sagittarius is governed by Jupiter (♃) and carries Fire energy. Overflowing optimism, adventurousness, and philosophical thinking define you. A longing to explore beyond limits keeps you growing endlessly. Today, Jupiter's abundant energy swings wide the doors of luck and opportunity.",
      wealth:"Jupiter's expansive energy positively influences your finances today. Pay attention to opportunities in overseas, education, or publishing.",
      love:"You seek adventurous, free-spirited love. Sharing new experiences together makes the relationship richer.",
      career:"Special opportunities open in education, publishing, and international fields. Paint the big picture and share your vision.",
      health:"Attend to thigh and liver health. Outdoor activities and sports healthily discharge excess energy." }
  }
};

/* ── 타로 카드 데이터 ── */
const TAROT_CARDS_RICH = [
  { name:{ ko:"태양 (The Sun)", en:"The Sun" }, emoji:"☀️",
    ko:{ total:`【 태양(The Sun) 카드의 상징 】\n태양 카드는 타로 메이저 아르카나 19번 카드로, 가장 밝고 긍정적인 에너지를 상징합니다. 빛나는 태양 아래 기쁘게 춤추는 어린이의 이미지는 순수한 기쁨, 성공, 삶의 긍정적 힘을 나타냅니다.\n\n【 핵심 의미 】\n태양 카드가 나타날 때는 어둠 뒤에 찾아오는 빛의 시간입니다. 지금까지 노력해온 것들이 결실을 맺고, 숨겨져 있던 재능과 가능성이 환하게 드러납니다. 진실이 밝혀지고, 의심이 사라지며, 자신감이 충만해집니다.\n\n【 오늘 당신에게 전하는 메시지 】\n오늘은 태양의 찬란한 에너지가 당신의 삶 모든 영역에 빛을 비추는 날입니다. 두려움 없이 자신을 표현하고, 자신만의 빛으로 세상을 밝히세요. 성공과 인정이 자연스럽게 따라옵니다.\n\n【 영역별 태양 카드의 메시지 】\n재물: 노력한 만큼의 보상이 가시화되는 시기입니다. 재물 흐름이 밝아지고 있습니다.\n애정: 따뜻하고 밝은 사랑 에너지가 넘칩니다. 솔직한 마음 표현이 좋은 결과로 이어집니다.\n직업: 능력을 인정받고 성과가 빛나는 날입니다. 자신 있게 나아가세요.\n건강: 생명력이 충만한 시기입니다. 야외 활동이 건강 에너지를 최대로 높여줍니다.\n\n【 태양 카드의 최종 메시지 】\n당신은 충분히 빛날 자격이 있습니다. 오늘 하루, 태양처럼 당당하게 빛나세요.`,
      wealth:"태양 카드의 밝은 에너지가 재물 흐름에 긍정적으로 작용합니다. 오랫동안 기다려온 수익이나 보상이 가시화될 수 있습니다. 자신의 능력을 믿고 적극적으로 기회를 잡으세요.",
      love:"태양 카드는 사랑에서도 가장 밝은 메시지를 전합니다. 솔직하고 따뜻한 마음 표현이 관계를 밝게 만듭니다. 새로운 만남이라면 서로의 빛나는 면이 강하게 끌립니다.",
      career:"오늘 직업적 성취와 인정이 빛나는 날입니다. 숨겨진 재능이 드러나고 준비해온 것이 빛을 발합니다. 자신 있게 능력을 어필하세요.",
      health:"태양 카드는 생명력과 활력이 넘치는 건강 에너지를 상징합니다. 햇빛 아래 야외 활동이 에너지를 충전시켜 줍니다. 긍정적인 마음이 곧 건강입니다." },
    en:{ total:`【 The Sun Card Symbolism 】\nThe Sun is Major Arcana card 19 — the brightest, most positive energy in the tarot. The image of a child dancing joyfully represents pure joy, success, and the positive force of life.\n\n【 Core Meaning 】\nWhen The Sun appears, light arrives after darkness. What you have worked toward is bearing fruit, and hidden talents shine clearly. Truth is revealed, doubt disappears, and confidence overflows.\n\n【 Today's Message for You 】\nToday, the Sun's brilliant energy shines on every area of your life. Express yourself fearlessly and illuminate the world with your unique light. Success and recognition follow naturally.\n\n【 The Sun's Message by Domain 】\nWealth: A period when efforts are rewarded. Financial flow is brightening.\nLove: Warm, bright love energy overflows. Honest expression leads to good outcomes.\nCareer: A day when ability is recognized and results shine.\nHealth: A period of overflowing vitality. Outdoor activities maximize health energy.\n\n【 The Sun's Final Message 】\nYou are worthy of shining. Today, shine as boldly as the Sun.`,
      wealth:"The Sun's bright energy acts positively on financial flow. Income or rewards long awaited may materialize. Trust your abilities and actively seize opportunities.",
      love:"The Sun brings the brightest love message. Honest and warm expression brightens the relationship further. For new connections, each other's radiant qualities attract powerfully.",
      career:"A day when professional achievement and recognition shine. Hidden talents emerge and long-prepared work comes to light. Confidently showcase your abilities.",
      health:"The Sun symbolizes overflowing vitality. Outdoor activities under sunlight recharge your energy. A positive mindset is health itself." }
  },
  { name:{ ko:"달 (The Moon)", en:"The Moon" }, emoji:"🌙",
    ko:{ total:`【 달(The Moon) 카드의 상징 】\n달 카드는 타로 메이저 아르카나 18번 카드로, 신비와 직관, 무의식의 세계를 상징합니다. 어둠 속에서 빛나는 달빛과 두 마리 개, 가재의 이미지는 우리가 아직 인식하지 못한 감정과 두려움, 직관적 지혜를 나타냅니다.\n\n【 핵심 의미 】\n달 카드가 나타날 때는 겉으로 드러나지 않는 것들에 주의를 기울여야 할 시간입니다. 혼란스럽거나 불확실하게 느껴질 수 있지만, 그 안에 중요한 직관적 메시지가 담겨 있습니다.\n\n【 오늘 당신에게 전하는 메시지 】\n오늘은 달의 신비로운 에너지가 당신의 직관을 예리하게 깨워주는 날입니다. 논리보다 직감을 믿어보세요. 꿈과 내면의 이미지에 의미 있는 메시지가 담겨 있을 수 있습니다.\n\n【 영역별 달 카드의 메시지 】\n재물: 성급한 결정을 피하세요. 충분한 정보 수집 후 신중하게 판단하세요.\n애정: 상대방이 표현하지 못한 감정에 주목하세요. 공감과 이해가 관계를 깊게 합니다.\n직업: 아직 드러나지 않은 상황에 주의하세요. 충분한 관찰이 유리합니다.\n건강: 수면과 꿈의 질에 신경 쓰세요. 감정적 스트레스가 신체에 영향을 줄 수 있습니다.\n\n【 달 카드의 최종 메시지 】\n어둠 속에서도 달은 빛납니다. 지금의 혼란은 더 깊은 지혜로 가는 통로입니다.`,
      wealth:"달 카드는 재물에서 신중함을 요청합니다. 큰 결정보다 정보를 수집하고 상황을 관찰하는 것이 유리합니다. 직관적 신호에 귀를 기울이되, 검증을 잊지 마세요.",
      love:"달 카드는 감정의 깊은 층을 탐구하는 메시지입니다. 상대의 말 뒤에 담긴 감정을 읽어보세요. 솔직한 대화가 오해를 풀어줍니다.",
      career:"숨겨진 정보나 드러나지 않은 상황에 주의를 기울이세요. 충분한 정보를 바탕으로 신중하게 판단하는 것이 유리합니다.",
      health:"수면과 심리적 건강에 집중하세요. 불안이나 두려움을 억누르지 말고 감정을 건강하게 표현하고 해소하세요." },
    en:{ total:`【 The Moon Card Symbolism 】\nThe Moon is Major Arcana card 18, symbolizing mystery, intuition, and the unconscious world. The moonlight, two dogs, and a crayfish represent emotions, fears, and intuitive wisdom not yet recognized.\n\n【 Core Meaning 】\nWhen The Moon appears, pay attention to what is not visible. Things may feel confusing, but important intuitive messages are contained within. Listening to your inner voice is more important than ever.\n\n【 Today's Message for You 】\nToday, the Moon's mysterious energy sharpens your intuition. Trust instincts over logic. Dreams and inner images may carry meaningful messages.\n\n【 The Moon's Message by Domain 】\nWealth: Avoid hasty decisions. Gather sufficient information before making careful judgments.\nLove: Pay attention to unexpressed emotions. Empathy and understanding deepen the relationship.\nCareer: Be alert to unrevealed situations. Sufficient observation is better than hasty decisions.\nHealth: Mind sleep quality. Emotional stress may impact physical well-being.\n\n【 The Moon's Final Message 】\nEven in darkness, the moon shines. Current confusion is a passage toward deeper wisdom.`,
      wealth:"The Moon calls for caution in finances. Gathering information and observing the situation is more favorable than big decisions now.",
      love:"The Moon carries a message of exploring deeper emotional layers. Read the feelings beneath your partner's words.",
      career:"Be alert to hidden information or unrevealed situations. Careful judgments based on sufficient information are favorable.",
      health:"Focus on sleep and psychological health. Express and release emotions healthily rather than suppressing anxiety." }
  },
  { name:{ ko:"별 (The Star)", en:"The Star" }, emoji:"⭐",
    ko:{ total:`【 별(The Star) 카드의 상징 】\n별 카드는 타로 메이저 아르카나 17번 카드로, 희망과 영감, 치유와 갱신을 상징합니다. 밤하늘의 빛나는 별 아래 물을 붓는 여인의 이미지는 우주적 연결과 내면의 풍요, 미래에 대한 밝은 기대를 나타냅니다.\n\n【 핵심 의미 】\n별 카드가 나타날 때는 어둠 뒤에 희망의 빛이 찾아오는 시간입니다. 힘든 시간이 지나고 치유와 회복이 시작되거나, 꿈과 영감이 현실로 이어지는 기운이 강해집니다.\n\n【 오늘 당신에게 전하는 메시지 】\n오늘은 별빛의 순수한 에너지가 당신의 꿈과 희망을 응원합니다. 포기하지 말고 믿어보세요. 하늘이 당신의 기도를 듣고 있습니다.\n\n【 영역별 별 카드의 메시지 】\n재물: 지금의 어려움이 지나면 더 나은 재물 상황이 펼쳐집니다. 희망을 잃지 마세요.\n애정: 진심 어린 바람이 이루어지는 시기입니다. 있는 그대로의 자신을 사랑하면 좋은 인연이 옵니다.\n직업: 창의적 영감과 직관이 빛나는 날입니다. 꿈꿔온 목표를 향해 한 걸음 더 나아가세요.\n건강: 치유와 회복의 에너지가 흐르고 있습니다. 자연과의 연결이 몸과 마음을 회복시킵니다.\n\n【 별 카드의 최종 메시지 】\n당신의 꿈은 유효합니다. 별빛은 언제나 어둠 속에서 더욱 빛납니다.`,
      wealth:"별 카드는 희망과 회복의 메시지입니다. 장기적인 방향을 믿으세요. 꾸준한 노력이 빛을 발하는 시기가 가까워지고 있습니다.",
      love:"진심 어린 소원이 이루어지는 사랑의 에너지입니다. 있는 그대로의 자신을 사랑하고 표현하면 자연스럽게 좋은 인연이 찾아옵니다.",
      career:"창의적 영감이 직업적 기회로 이어지는 시기입니다. 꿈꿔온 방향으로 작은 걸음을 내딛으면 하늘이 더 큰 도움을 보내줍니다.",
      health:"치유 에너지가 몸과 마음의 회복을 돕습니다. 자연 속에서 시간을 보내고 좋아하는 것들로 삶을 채워 건강 에너지를 충전하세요." },
    en:{ total:`【 The Star Card Symbolism 】\nThe Star is Major Arcana card 17, symbolizing hope, inspiration, healing, and renewal. The woman pouring water under shining stars represents cosmic connection, inner abundance, and bright hope for the future.\n\n【 Core Meaning 】\nWhen The Star appears, hope's light arrives after darkness. Healing and recovery begin, or the energy connecting dreams to reality grows stronger. The universe is cheering for your wishes.\n\n【 Today's Message for You 】\nToday, pure starlight energy cheers for your dreams. Don't give up — keep believing. Heaven is listening to your prayers.\n\n【 The Star's Message by Domain 】\nWealth: After current difficulties, a better financial situation unfolds. Don't lose hope.\nLove: A period when heartfelt wishes come true. Loving yourself as you are brings the right person.\nCareer: A day when creative inspiration and intuition shine. Take one more step toward your goals.\nHealth: Healing and recovery energy flows. Connection with nature restores body and mind.\n\n【 The Star's Final Message 】\nYour dreams are valid. Starlight always shines brightest in the darkness.`,
      wealth:"The Star brings hope and recovery in finances. Trust the long-term direction. The time when steady effort shines is drawing near.",
      love:"The energy of heartfelt wishes coming true. Love and express yourself as you are, and the right partner will naturally come.",
      career:"A period when creative inspiration leads to professional opportunities. Taking a small step toward your dreams brings greater help.",
      health:"Healing energy supports physical and mental recovery. Spend time in nature and fill your life with things you love." }
  },
  { name:{ ko:"세계 (The World)", en:"The World" }, emoji:"🌍",
    ko:{ total:`【 세계(The World) 카드의 상징 】\n세계 카드는 타로 메이저 아르카나 21번 카드로, 완성과 통합, 성취와 새로운 시작을 상징합니다. 월계관 화환 안에서 춤추는 인물의 이미지는 사이클의 완성, 모든 것의 조화로운 통합을 나타냅니다.\n\n【 핵심 의미 】\n세계 카드가 나타날 때는 하나의 중요한 사이클이 완성되는 시간입니다. 오랫동안 추구해온 목표가 이루어지거나, 인생의 중요한 챕터가 아름답게 마무리됩니다. 동시에 새로운 가능성의 문이 열리는 전환점입니다.\n\n【 오늘 당신에게 전하는 메시지 】\n오늘은 세계 카드의 완성 에너지가 당신의 삶에 흐르고 있습니다. 이루어낸 것들을 충분히 음미하고 기뻐하세요. 그리고 더 큰 세계로 나아갈 준비를 하세요.\n\n【 영역별 세계 카드의 메시지 】\n재물: 재물 목표가 이루어지거나 중요한 재정적 사이클이 마무리됩니다.\n애정: 관계에서 아름다운 완성의 에너지가 흐릅니다. 더 깊은 단계로 나아갈 준비를 하세요.\n직업: 직업적 성취와 인정의 시간입니다. 중요한 목표 달성이 가까워지고 있습니다.\n건강: 전반적인 웰빙과 균형이 이루어지는 시기입니다.\n\n【 세계 카드의 최종 메시지 】\n완성은 끝이 아니라 더 큰 시작입니다. 당신의 세계는 계속 확장되고 있습니다.`,
      wealth:"세계 카드는 재물에서 완성과 성취의 메시지입니다. 오랫동안 이루고자 했던 재물 목표가 가시화되는 시기입니다. 성과를 축하하고 다음 단계를 설정하세요.",
      love:"세계 카드는 관계의 완성과 통합을 상징합니다. 함께해온 시간이 아름다운 결실을 맺는 시기입니다. 다음 단계로 나아갈 준비를 하세요.",
      career:"직업적 완성과 성취의 에너지가 강합니다. 오랫동안 준비해온 프로젝트나 목표가 이루어지는 시기입니다.",
      health:"몸과 마음의 조화로운 통합을 상징합니다. 전반적인 건강 상태가 균형을 이루는 시기입니다. 건강한 습관을 유지하세요." },
    en:{ total:`【 The World Card Symbolism 】\nThe World is Major Arcana card 21, symbolizing completion, integration, achievement, and new beginnings. The dancing figure inside a laurel wreath represents the completion of a cycle and the harmonious integration of all things.\n\n【 Core Meaning 】\nWhen The World appears, an important cycle is reaching completion. A long-sought goal is being achieved, or a significant chapter concludes beautifully. A perfect turning point where new possibilities open.\n\n【 Today's Message for You 】\nToday, The World's completion energy flows through your life. Savor and celebrate what you have achieved. Then prepare to step into an even greater world.\n\n【 The World's Message by Domain 】\nWealth: A financial goal is being realized or an important cycle concludes.\nLove: Beautiful completion energy flows. Prepare to move to a deeper level.\nCareer: A time of professional achievement. An important goal is drawing near.\nHealth: A period of overall well-being and balance.\n\n【 The World's Final Message 】\nCompletion is not the end but a greater beginning. Your world keeps expanding.`,
      wealth:"The World brings completion and achievement in finances. A long-sought financial goal is becoming visible. Celebrate and set an even greater goal.",
      love:"The World symbolizes completion and integration in relationships. Time together is bearing beautiful fruit. Prepare to move to the next step.",
      career:"Strong energy of professional completion. A long-prepared project or goal is being realized. Accept recognition with confidence.",
      health:"Symbolizes harmonious integration of body and mind. Overall health is achieving balance. Maintain healthy habits." }
  },
  { name:{ ko:"운명의 수레바퀴 (Wheel of Fortune)", en:"Wheel of Fortune" }, emoji:"🎡",
    ko:{ total:`【 운명의 수레바퀴(Wheel of Fortune) 카드의 상징 】\n운명의 수레바퀴 카드는 타로 메이저 아르카나 10번 카드로, 변화와 순환, 운명의 전환점을 상징합니다. 영원히 돌아가는 바퀴와 그 위의 다양한 상징들은 삶의 끊임없는 변화와 우주적 흐름, 그 안에서의 기회를 나타냅니다.\n\n【 핵심 의미 】\n운명의 수레바퀴 카드가 나타날 때는 삶에 중요한 변화의 흐름이 움직이고 있습니다. 예상치 못한 기회가 찾아오거나, 상황이 갑자기 더 좋은 방향으로 전환될 수 있습니다. 변화에 유연하게 대처하는 것이 핵심입니다.\n\n【 오늘 당신에게 전하는 메시지 】\n오늘은 운명의 바퀴가 당신에게 유리한 방향으로 돌고 있습니다. 변화를 두려워하지 말고 기회로 받아들이세요. 우주의 흐름을 타고 나아가는 것이 최선의 전략입니다.\n\n【 영역별 운명의 수레바퀴 메시지 】\n재물: 예상치 못한 재물 기회나 상황 반전이 일어날 수 있습니다. 변화에 빠르게 대응하세요.\n애정: 인연의 흐름이 변화하는 시기입니다. 새로운 만남이나 기존 관계의 전환점이 올 수 있습니다.\n직업: 직업 상황에 중요한 변화가 올 수 있습니다. 기회를 놓치지 말고 유연하게 대응하세요.\n건강: 긍정적인 생활 습관의 변화를 시작하기 좋은 시기입니다.\n\n【 운명의 수레바퀴 최종 메시지 】\n바퀴는 항상 돌고 있습니다. 지금 이 순간, 흐름을 읽고 기회를 잡으세요.`,
      wealth:"예상치 못한 변화와 기회를 상징합니다. 좋은 방향의 전환이 올 수 있으니 기회에 빠르게 대응하세요. 변화를 거부하지 말고 유연하게 받아들이세요.",
      love:"인연의 흐름이 변화하는 에너지입니다. 새로운 만남이나 기존 관계의 중요한 전환이 올 수 있습니다. 변화를 받아들이면 더 좋은 관계의 문이 열립니다.",
      career:"직업적 상황에 중요한 변화의 기운이 흐릅니다. 예상치 못한 기회나 반전이 올 수 있으니 준비하고 있으세요.",
      health:"오랫동안 미뤄온 건강 관리를 시작하기 좋은 시기입니다. 긍정적인 생활 습관의 변화가 큰 건강 향상으로 이어집니다." },
    en:{ total:`【 Wheel of Fortune Card Symbolism 】\nThe Wheel of Fortune is Major Arcana card 10, symbolizing change, cycles, and turning points of fate. The eternally spinning wheel represents the constant change of life, cosmic flow, and opportunities within.\n\n【 Core Meaning 】\nWhen the Wheel of Fortune appears, an important current of change is moving through your life. Unexpected opportunities may arrive, or situations may suddenly turn better. Responding flexibly is key.\n\n【 Today's Message for You 】\nToday, the Wheel is spinning in a favorable direction. Don't fear change — embrace it as opportunity. Riding the cosmic flow is the best strategy.\n\n【 Wheel of Fortune's Message by Domain 】\nWealth: Unexpected financial opportunities or reversals may occur. Respond quickly.\nLove: A period when connection flows are changing. A new meeting or turning point may come.\nCareer: Important changes may come professionally. Don't miss the opportunity — respond flexibly.\nHealth: A great time to begin positive lifestyle changes.\n\n【 Wheel of Fortune's Final Message 】\nThe wheel is always turning. At this very moment, read the flow and seize the opportunity.`,
      wealth:"Symbolizes unexpected changes and opportunities. A favorable turn may come — respond quickly. Embrace change flexibly rather than resisting.",
      love:"The energy of changing connection flows. A new meeting or important turn in an existing relationship may come.",
      career:"Important transformative energy flows professionally. Unexpected opportunities or reversals may come, so be ready.",
      health:"A great time to start long-delayed health management. Positive lifestyle changes lead to great improvements." }
  }
];

/* ── 별자리 차트 헬퍼 ── */
function calcSunLongitude(year, month, day) {
  const isLeap = (year%4===0&&year%100!==0)||year%400===0;
  const dim=[0,31,isLeap?29:28,31,30,31,30,31,31,30,31,30,31];
  let doy=day; for(let i=1;i<month;i++) doy+=dim[i];
  return ((doy-80)*(360/365.25)+360)%360;
}

function renderAstroChart(year, month, day, containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof astrochart === 'undefined') return;
  const seed = year*1000+month*100+day;
  const sr = n => { const x=Math.sin(seed+n*7.3)*10000; return x-Math.floor(x); };
  const sunLon = calcSunLongitude(year, month, day);
  const planets = {
    Sun:     [sunLon],
    Moon:    [sr(1)*360],
    Mercury: [(sunLon+sr(2)*56-28+360)%360],
    Venus:   [(sunLon+sr(3)*90-45+360)%360],
    Mars:    [sr(4)*360],
    Jupiter: [sr(5)*360],
    Saturn:  [sr(6)*360],
    Uranus:  [sr(7)*360],
    Neptune: [sr(8)*360],
    Pluto:   [sr(9)*360],
    Chiron:  [sr(10)*360],
    NNode:   [sr(11)*360]
  };
  const h = (_birthHour!=='unknown'&&_birthHour!=='') ? parseInt(_birthHour) : Math.floor(sr(12)*24);
  const ascLon = (h*15+sr(13)*10-5+360)%360;
  const cusps = Array.from({length:12},(_,i)=>(ascLon+i*30)%360);
  container.innerHTML='';
  const size = Math.min(container.offsetWidth||360, 400);
  const chart = new astrochart.Chart(containerId, size, size, {
    SYMBOL_SCALE:0.65,
    COLOR_BACKGROUND:'transparent',
    CIRCLE_COLOR:'rgba(197,160,89,0.5)',
    LINE_COLOR:'rgba(197,160,89,0.25)',
    SIGNS_COLOR:'#c5a059',
    POINTS_COLOR:'#f0d080',
    POINTS_TEXT_SIZE:8,
    POINTS_STROKE:1.4,
    SIGNS_STROKE:1.2,
    SYMBOL_AXIS_FONT_COLOR:'#f0d080',
    CUSPS_FONT_COLOR:'rgba(197,160,89,0.6)',
    CUSPS_STROKE:0.7
  });
  const radix = chart.radix({planets, cusps});
  radix.aspects();
}

function generateAstrologyFortune(name, year, month, day) {
  const getSign = (m, d) => {
    for (const z of ZODIAC_LIST) {
      const [m1,d1,m2,d2]=z.range;
      if((m===m1&&d>=d1)||(m===m2&&d<=d2)) return z;
    }
    return ZODIAC_LIST[0];
  };
  const sign = getSign(month, day);
  const signKo = sign.ko;
  const info = ZODIAC_INFO[signKo] || ZODIAC_INFO["염소자리"];
  const d = currentLang==='ko' ? info.ko : info.en;
  const signLabel = currentLang==='ko' ? signKo : sign.en;
  const score = Math.floor(65+Math.random()*30);
  const lang = currentLang;

  const totalText = d.total_insight + '\n\n' + [
    `【 ${signLabel} ${sign.symbol} ${lang==='ko'?'기본 정보':'Overview'} 】\n${name}${lang==='ko'?'님은':'은/는'} ${signLabel}(${d.element} ${lang==='ko'?'원소':'element'}, ${d.quality}, ${lang==='ko'?'지배 행성':'ruling planet'}: ${d.ruler})${lang==='ko'?'의 기운을 타고나셨습니다.':'.'} ${lang==='ko'?'별자리란 태어난 순간 하늘의 행성 배치가 개인의 에너지 지도에 각인된 우주적 서명입니다.':'A birth chart is the cosmic signature imprinted on your energy map at the moment of birth.'}`,
    `【 ${lang==='ko'?`${signLabel}의 핵심 에너지`:`Core Energy of ${signLabel}`} 】\n${name}${lang==='ko'?'님은':''}${lang==='ko'?` "${d.trait}"의 기운을 타고난 분입니다. 이 기운은 삶의 모든 영역에서 독특한 방식으로 발현되며, 강점을 알고 활용할 때 운명이 가장 강력하게 열립니다.`:` embodies "${d.trait}." This energy manifests uniquely across all areas of life — knowing and utilizing your strengths is when destiny opens most powerfully.`}`,
    `【 ${lang==='ko'?'지배 행성 메시지':'Ruling Planet Message'} 】\n${d.ruler}${lang==='ko'?`의 영향을 받는 ${signLabel}는 이 행성의 특성을 삶 전반에 강하게 반영합니다. 오늘 이 행성의 우주적 메시지에 귀를 기울여보세요.`:`influences ${signLabel}, reflecting this planet's characteristics across all of life. Listen to this planet's cosmic message today.`}`,
    `【 ${lang==='ko'?'오늘의 별자리 종합 메시지':`Today's Overall Message`} 】\n${name}${lang==='ko'?'님, 오늘 하늘의 별자리 에너지가 당신을 응원하고 있습니다. 자신의 고유한 강점을 믿고 두려움 없이 나아가세요. 우주는 준비된 자의 편에서 문을 열어줍니다.':`, the celestial energy is cheering you on today. Trust in your unique strengths and move forward fearlessly. The universe opens the door for those who are ready.`}`
  ].join('\n\n');

  const t = {
    ko:{ title:"별자리 운세 분석", label:"우주의 기운" },
    en:{ title:"Astrological Reading", label:"Cosmic Energy" }
  }[lang];

  return {
    isSuperLucky: score>90,
    tabs:{
      total:  { score, text: totalText },
      wealth: { score:Math.floor(60+Math.random()*35), text: d.wealth },
      love:   { score:Math.floor(60+Math.random()*35), text: d.love },
      career: { score:Math.floor(60+Math.random()*35), text: d.career },
      health: { score:Math.floor(60+Math.random()*35), text: d.health }
    },
    html:`
      <div class="fortune-card">
        <div class="score-section">
          <div class="score-header"><span>${t.title}</span><span class="score-value">${score}${lang==='ko'?'점':'pts'}</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill"></div></div>
        </div>
        <div class="analysis-section">
          <div class="zodiac-header">
            <span class="zodiac-symbol">${sign.symbol}</span>
            <div><strong class="zodiac-name">${signLabel}</strong><div class="zodiac-sub">${t.label} — ${d.trait}</div></div>
          </div>
          <div class="content-body"><p class="content">${totalText}</p></div>
        </div>
        <div class="astro-chart-wrap">
          <div class="astro-chart-title">${lang==='ko'?'🌌 별자리 출생 차트':'🌌 Birth Chart'}</div>
          <div id="astro-chart-canvas" class="astro-chart-canvas"></div>
          <p class="astro-chart-note">${lang==='ko'?'* 천체 위치는 생년월일 기반 근사치입니다':'* Planetary positions are approximate based on birth date'}</p>
        </div>
      </div>
    `
  };
}

function generateTarotFortune(name) {
  const card = TAROT_CARDS_RICH[Math.floor(Math.random()*TAROT_CARDS_RICH.length)];
  const score = Math.floor(70+Math.random()*25);
  const lang = currentLang;
  const d = card[lang];
  const t = { ko:{title:"타로 카드 분석",label:"카드의 메시지"}, en:{title:"Tarot Card Reading",label:"Card's Message"} }[lang];
  return {
    isSuperLucky: score>90,
    tabs:{
      total:  { score, text: d.total },
      wealth: { score:Math.floor(60+Math.random()*35), text: d.wealth },
      love:   { score:Math.floor(60+Math.random()*35), text: d.love },
      career: { score:Math.floor(60+Math.random()*35), text: d.career },
      health: { score:Math.floor(60+Math.random()*35), text: d.health }
    },
    html:`
      <div class="fortune-card">
        <div class="score-section">
          <div class="score-header"><span>${t.title}</span><span class="score-value">${score}${lang==='ko'?'점':'pts'}</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill"></div></div>
        </div>
        <div class="analysis-section">
          <div class="tarot-result-header">
            <span class="tarot-big-emoji">${card.emoji}</span>
            <div><strong class="tarot-result-name">${card.name[lang]}</strong><div class="tarot-result-en">${t.label}</div></div>
          </div>
          <div class="content-body"><p class="content">${d.total}</p></div>
        </div>
      </div>
    `
  };
}

function showTarotCards(name, year, month, day) {
  const t = i18n[currentLang];
  const tarotArea = document.getElementById('tarot-cards-area');
  if (!tarotArea) return;
  const mysteries = ['🌟','🔮','✨','🌙','⚡','💫','🌀'];
  let html = `<p class="tarot-instruction">${t.tarot_instruction}</p><div class="tarot-cards-grid">`;
  for (let i = 0; i < 7; i++) {
    html += `
      <div class="tarot-card-wrap" onclick="selectTarotCard(${i})">
        <div class="tarot-card">
          <div class="tarot-card-inner">
            <div class="tarot-front">
              <span class="tarot-mystery">${mysteries[i]}</span>
              <span class="tarot-num">${i + 1}</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  html += '</div>';
  tarotArea.innerHTML = html;
  tarotArea.style.display = 'block';
}

function selectTarotCard(i) {
  const t = i18n[currentLang];
  const name = document.getElementById('userName').value.trim() || (currentLang === 'ko' ? '사용자' : 'Guest');
  document.getElementById('loading').style.display = 'block';
  document.getElementById('loading').textContent = t.loading_tarot;
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    const res = generateTarotFortune(name);
    document.getElementById('result').innerHTML = res.html;
    document.getElementById('result-tabs').style.display = 'flex';
    cachedFortune = res;
    window.scrollTo({ top: document.getElementById('result').offsetTop - 100, behavior: 'smooth' });
    if (res.isSuperLucky) launchConfetti();
  }, 1500);
}

/* ============================================================
   공지사항 배너
   ============================================================ */

function loadNoticeBanner() {
  db.collection('notices')
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get()
    .then(snap => {
      if (snap.empty) return;
      const doc  = snap.docs[0];
      const data = doc.data();
      const id   = doc.id;

      // 이미 닫은 공지면 표시 안 함
      try {
        const dismissed = JSON.parse(sessionStorage.getItem('dismissed_notices') || '[]');
        if (dismissed.includes(id)) return;
      } catch(e) {}

      const banner   = document.getElementById('notice-banner');
      const textEl   = document.getElementById('notice-banner-text');
      if (!banner || !textEl) return;

      const priorityPrefix = data.priority === 'urgent'    ? '[긴급] '
                           : data.priority === 'important' ? '[중요] '
                           : '';
      textEl.textContent = priorityPrefix + (data.title || '');
      banner.dataset.noticeId = id;
      banner.style.display = 'flex';
      document.body.classList.add('has-notice-banner');
    })
    .catch(() => {});
}

function dismissNoticeBanner() {
  const banner = document.getElementById('notice-banner');
  if (!banner) return;
  const id = banner.dataset.noticeId;
  if (id) {
    try {
      const dismissed = JSON.parse(sessionStorage.getItem('dismissed_notices') || '[]');
      if (!dismissed.includes(id)) dismissed.push(id);
      sessionStorage.setItem('dismissed_notices', JSON.stringify(dismissed));
    } catch(e) {}
  }
  banner.style.animation = 'none';
  banner.style.transition = 'opacity 0.25s, transform 0.25s';
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(-100%)';
  setTimeout(() => {
    banner.style.display = 'none';
    banner.style.opacity = '';
    banner.style.transform = '';
    banner.style.transition = '';
    document.body.classList.remove('has-notice-banner');
  }, 260);
}

document.addEventListener('DOMContentLoaded', function() {
  applyLanguage();
  initAuth();
  loadNoticeBanner();
  const yearSelect = document.getElementById('birthYear');
  const monthSelect = document.getElementById('birthMonth');
  const daySelect = document.getElementById('birthDay');
  const partnerYear = document.getElementById('partnerYear');
  const partnerMonth = document.getElementById('partnerMonth');
  const partnerDay = document.getElementById('partnerDay');
  const currentYear = new Date().getFullYear();
  const t = i18n[currentLang];

  const addOpts = (sel, def, start, end, suffix) => {
    if(!sel) return;
    const opt = document.createElement('option'); opt.value = ''; opt.textContent = def; sel.appendChild(opt);
    for(let i=start; i<=end; i++) { const o = document.createElement('option'); o.value = i; o.textContent = i + suffix; sel.appendChild(o); }
    if(start > end) { for(let i=start; i>=end; i--) { const o = document.createElement('option'); o.value = i; o.textContent = i + suffix; sel.appendChild(o); } }
  };

  addOpts(yearSelect, t.select_year, currentYear, 1940, t.year_suffix);
  addOpts(monthSelect, t.select_month, 1, 12, t.month_suffix);
  addOpts(daySelect, t.select_day, 1, 31, t.day_suffix);
  addOpts(partnerYear, t.select_year, currentYear, 1940, t.year_suffix);
  addOpts(partnerMonth, t.select_month, 1, 12, t.month_suffix);
  addOpts(partnerDay, t.select_day, 1, 31, t.day_suffix);

  try {
    const sn = localStorage.getItem('chunggi_name'); if(sn) document.getElementById('userName').value = sn;
    const sy = localStorage.getItem('chunggi_year'); if(sy) document.getElementById('birthYear').value = sy;
  } catch(e) {}
});

function selectMeetingType(type) {
  meetingType = type;
  document.querySelectorAll('.fortune-type-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('type-' + type).classList.add('active');
  const labels = { 
    saju: i18n[currentLang].btn_confirm, 
    astrology: currentLang === 'ko' ? '⭐ 점성술 확인' : '⭐ Check Astrology', 
    tarot: currentLang === 'ko' ? '🃏 타로 선택' : '🃏 Select Tarot' 
  };
  document.getElementById('submit-btn').textContent = labels[type];
}
