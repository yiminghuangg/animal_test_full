// Auth modal behaviour that relies on window.__appConfig
(function(){
  const startButton = document.getElementById('start');
  const authModal = document.getElementById('auth-modal');
  const closeModal = document.getElementById('close-modal');
  const codeInput = document.getElementById('code-input');
  const verifyButton = document.getElementById('verify-button');
  const platformButtonsContainer = document.querySelector('.platform-buttons');
  const errorMessage = document.getElementById('error-message');

  function renderPlatformButtons() {
    const cfg = window.__appConfig;
    if (!cfg) return;
    platformButtonsContainer.innerHTML = '';
    cfg.platforms.forEach(p => {
      const b = document.createElement('button');
      b.className = 'platform-btn';
      b.dataset.platform = p.name;
      b.dataset.url = p.url || '#';
      b.innerHTML = `<span class="platform-logo">${p.logo}</span>`;
      platformButtonsContainer.appendChild(b);
    });
    setupPlatformButtons();
  }

  function setupPlatformButtons() {
    platformButtonsContainer.querySelectorAll('.platform-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        if (url && url !== '#') {
          window.open(url, '_blank');
        } else {
          alert('请前往' + btn.dataset.platform + '获取授权码');
        }
      });
    });
  }

  async function init() {
    // wait for config to load
    let attempts = 0;
    while (!window.__appConfig && attempts < 10) {
      await new Promise(r => setTimeout(r, 200));
      attempts++;
    }
    if (!window.__appConfig) {
      console.error('配置未加载');
    } else {
      renderPlatformButtons();
      // update nav links if present
      if(window.__appConfig.navigation && window.__appConfig.navigation.xiaohongshuUrl){
        document.querySelectorAll('.nav__link').forEach(link=>{
          if(link.textContent.includes('小红书主页')){
            link.href = window.__appConfig.navigation.xiaohongshuUrl;
            link.target = '_blank';
            link.classList.add('external-link');
          }
        });
      }
    }
  }

  // UI events
  startButton.addEventListener('click', () => {
    authModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
  closeModal.addEventListener('click', () => {
    authModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    codeInput.value = '';
    errorMessage.textContent = '';
  });
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal.click();
  });

  verifyButton.addEventListener('click', () => {
    const cfg = window.__appConfig;
    if (!cfg) {
      errorMessage.textContent = '配置未加载，请刷新页面';
      return;
    }
    const code = (codeInput.value || '').trim().toUpperCase();
    if (!code) {
      errorMessage.textContent = '请输入授权码';
      return;
    }
    const valid = (cfg.auth && Array.isArray(cfg.auth.validCodes) && cfg.auth.validCodes.map(c=>c.toUpperCase()).includes(code));
    if (valid) {
      const expiryMinutes = (cfg.auth && cfg.auth.expiryMinutes) || 10;
      localStorage.setItem('quizAuthStatus','valid');
      localStorage.setItem('quizAuthTimestamp', Date.now().toString());
      localStorage.setItem('quizAuthExpiry', expiryMinutes.toString());
      window.location.href = 'quiz.html';
    } else {
      errorMessage.textContent = '授权码无效';
      codeInput.classList.add('error');
      setTimeout(()=>{ errorMessage.textContent=''; codeInput.classList.remove('error'); }, 2500);
    }
  });

  // Enter key
  codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyButton.click();
  });

  // initialize
  init();
})();
