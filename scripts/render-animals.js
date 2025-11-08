// simple renderer for emoji row and type-grid on index page
const ANIMALS = [
  {key:'lion',name:'狮子',emoji:'🦁'},
  {key:'fox',name:'狐狸',emoji:'🦊'},
  {key:'parrot',name:'鹦鹉',emoji:'🦜'},
  {key:'cat',name:'猫',emoji:'🐱'},
  {key:'dog',name:'狗',emoji:'🐶'},
  {key:'panda',name:'熊猫',emoji:'🐼'},
  {key:'rabbit',name:'兔子',emoji:'🐰'},
  {key:'tiger',name:'老虎',emoji:'🐯'},
  {key:'owl',name:'猫头鹰',emoji:'🦉'},
  {key:'dolphin',name:'海豚',emoji:'🐬'},
  {key:'elephant',name:'大象',emoji:'🐘'},
  {key:'bear',name:'熊',emoji:'🐻'},
  {key:'horse',name:'马',emoji:'🐴'},
  {key:'sheep',name:'绵羊',emoji:'🐑'},
  {key:'monkey',name:'猴子',emoji:'🐵'},
  {key:'swan',name:'天鹅',emoji:'🦢'},
  {key:'wolf',name:'狼',emoji:'🐺'},
  {key:'koala',name:'树袋熊',emoji:'🐨'},
  {key:'elephant2',name:'象（变体）',emoji:'🐘'},
  {key:'penguin',name:'企鹅',emoji:'🐧'}
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
