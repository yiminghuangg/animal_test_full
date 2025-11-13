// simple renderer for emoji row and type-grid on index page
const GEMS = [
  {key:'qingyu',name:'青玉',image:'images/qingyu.svg'},
  {key:'chijin',name:'赤金',image:'images/chijin.svg'},
  {key:'hupo',name:'琥珀',image:'images/hupo.svg'},
  {key:'baiyu',name:'白玉',image:'images/baiyu.svg'},
  {key:'xuantie',name:'玄铁',image:'images/xuantie.svg'},
  {key:'zijing',name:'紫晶',image:'images/zijing.svg'},
  {key:'moyu',name:'墨玉',image:'images/moyu.svg'},
  {key:'qingtong',name:'青铜',image:'images/qingtong.svg'},
  {key:'chijin2',name:'赤瑾',image:'images/chijin2.svg'},
  {key:'lantianshi',name:'蓝田石',image:'images/lantianshi.svg'},
  {key:'yaoshi',name:'曜石',image:'images/yaoshi.svg'},
  {key:'lingsha',name:'灵砂',image:'images/lingsha.svg'}
];

function renderEmojiRow(){
  const row = document.getElementById('emoji-row');
  if(!row) return;
  row.innerHTML = GEMS.map(g=>`<div class="emoji-card" title="${g.name}" style="padding:6px 8px;background:rgba(255,255,255,0.02);border-radius:10px"><img src="${g.image}" alt="${g.name}" style="width:32px;height:32px;object-fit:contain;"/></div>`).join('');
}

function renderTypeGrid(){
  const grid = document.getElementById('type-grid');
  if(!grid) return;
  grid.innerHTML = GEMS.map(g=>`
    <div class="type-card">
      <div class="animal-emoji" style="display:flex;justify-content:center;align-items:center;height:40px;"><img src="${g.image}" alt="${g.name}" style="width:36px;height:36px;object-fit:contain;"/></div>
      <div class="animal-name">${g.name}</div>
      <div class="animal-tag" style="font-size:12px;color:rgba(230,238,248,0.7)">宝石类型</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderEmojiRow();
  renderTypeGrid();
});






