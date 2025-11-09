// simple renderer for emoji row and type-grid on index page
const ANIMALS = [
  {key:'dog',name:'狗',emoji:'🐶'},
  {key:'cat',name:'猫',emoji:'🐱'},
  {key:'wolf',name:'狼',emoji:'🐺'},
  {key:'fox',name:'狐',emoji:'🦊'},
  {key:'lion',name:'狮',emoji:'🦁'},
  {key:'bear',name:'熊',emoji:'🐻'},
  {key:'rabbit',name:'兔',emoji:'🐰'},
  {key:'hamster',name:'仓鼠',emoji:'🐹'},
  {key:'swan',name:'天鹅',emoji:'🦢'},
  {key:'deer',name:'鹿',emoji:'🦌'},
  {key:'eagle',name:'鹰',emoji:'🦅'},
  {key:'crow',name:'乌鸦',emoji:'🐦‍⬛'},
  {key:'capybara',name:'水豚',emoji:'🦫'},
  {key:'whale',name:'鲸',emoji:'🐋'},
  {key:'parrot',name:'鹦鹉',emoji:'🦜'},
  {key:'octopus',name:'章鱼',emoji:'🐙'},
  {key:'shark',name:'鲨鱼',emoji:'🦈'},
  {key:'dolphin',name:'海豚',emoji:'🐬'},
  {key:'raccoon',name:'浣熊',emoji:'🦝'},
  {key:'meerkat',name:'猫鼬',emoji:'🦡'}
];

function renderEmojiRow(){
  const row = document.getElementById('emoji-row');
  if(!row) return;
  row.innerHTML = ANIMALS.slice(0,8).map(a=>`<div class="emoji-card" title="${a.name}" style="font-size:26px;padding:6px 8px;background:rgba(255,255,255,0.02);border-radius:10px">${a.emoji}</div>`).join('');
}

function renderTypeGrid(){
  const grid = document.getElementById('type-grid');
  if(!grid) return;
  grid.innerHTML = ANIMALS.map(a=>`
    <div class="type-card">
      <div class="animal-emoji" style="font-size:28px">${a.emoji}</div>
      <div class="animal-name">${a.name}</div>
      <div class="animal-tag" style="font-size:12px;color:rgba(230,238,248,0.7)">样例标签</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderEmojiRow();
  renderTypeGrid();
});



