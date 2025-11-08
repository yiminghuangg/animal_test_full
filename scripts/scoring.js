// scoring.js - renders quiz, enforces auth, computes results, stores to localStorage
(function(){
  function checkAuth(){
    const status = localStorage.getItem('quizAuthStatus');
    const ts = Number(localStorage.getItem('quizAuthTimestamp') || 0);
    const expiry = Number(localStorage.getItem('quizAuthExpiry') || 0);
    if(status === 'valid' && ts > 0 && expiry > 0){
      const now = Date.now();
      const expired = (now - ts) > expiry * 60 * 1000;
      if(!expired) return true;
      // expired - clear
      localStorage.removeItem('quizAuthStatus');
      localStorage.removeItem('quizAuthTimestamp');
      localStorage.removeItem('quizAuthExpiry');
      return false;
    }
    return false;
  }

  // render quiz only if authorized
  document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('quiz-root');
    const authCheck = document.getElementById('auth-check');
    if(!checkAuth()){
      authCheck.textContent = '未检测到有效授权，请返回首页获取授权码并激活';
      // disable controls by hiding area
      document.getElementById('quiz-area').innerHTML = '<p style="color:#f88">请先在首页点击「开始测试」并输入授权码。</p>';
      document.getElementById('prev-btn').disabled = true;
      document.getElementById('next-btn').disabled = true;
      document.getElementById('finish-btn').disabled = true;
      return;
    }

    // load questions and animals
    const QUESTIONS = window.__QUESTIONS || [];
    const ANIMALS = window.__ANIMALS || [];

    // keep track
    const answers = new Array(QUESTIONS.length).fill(null);
    let idx = 0;

    const quizArea = document.getElementById('quiz-area');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    function render(){
      const q = QUESTIONS[idx];
      quizArea.innerHTML = `
        <div class="question">
          <div style="font-weight:700">${idx+1}. ${q.text}</div>
          <div class="options">
            ${q.options.map((o,i)=>`<div class="opt ${answers[idx]===i?'selected':''}" data-i="${i}">${o.text}</div>`).join('')}
          </div>
        </div>
      `;
      // attach option listeners
      quizArea.querySelectorAll('.opt').forEach(el=>{
        el.addEventListener('click', ()=>{
          const i = Number(el.dataset.i);
          answers[idx]=i;
          // mark selected
          quizArea.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
          el.classList.add('selected');
        });
      });
    }

    function computeResult(){
      // accumulate scores
      const scores = {};
      for(const a of ANIMALS) scores[a.key]=0;
      for(let qi=0; qi<QUESTIONS.length; qi++){
        const sel = answers[qi];
        if(sel===null) continue;
        const weights = QUESTIONS[qi].options[sel].weights || {};
        for(const k of Object.keys(weights)){
          if(!(k in scores)) scores[k]=0;
          scores[k]+=weights[k];
        }
      }
      // find best
      const entries = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
      const top = entries[0];
      const second = entries[1];
      const result = { key: top[0], score: top[1], scores, topDiff: top[1] - (second?second[1]:0) };
      return result;
    }

    prevBtn.addEventListener('click', ()=>{
      if(idx>0) { idx--; render(); }
    });
    nextBtn.addEventListener('click', ()=>{
      if(idx < QUESTIONS.length-1) { idx++; render(); }
    });
    finishBtn.addEventListener('click', ()=>{
      // ensure all answered
      const unanswered = answers.findIndex(a=>a===null);
      if(unanswered !== -1){
        if(!confirm(`第 ${unanswered+1} 题未作答，是否仍要提交？`)) return;
      }
      const result = computeResult();
      // save to localStorage for result page
      localStorage.setItem('lastQuizResult', JSON.stringify({ result, timestamp:Date.now() }));
      // redirect to result page
      window.location.href = 'result.html';
    });

    render();
  });
})();
