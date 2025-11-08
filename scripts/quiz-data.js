// Minimal quiz dataset - 20 animals, 20 questions (sample)
// Animal keys should match scoring/results mapping
window.__ANIMALS = [
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

// Sample 20 questions - each option maps weights to animals (small dataset for demo)
window.__QUESTIONS = [
  {
    text: "周末更想做什么？",
    options:[
      {text:"组织朋友聚会", weights:{dog:2,monkey:1}},
      {text:"一个人看书放松", weights:{cat:2,owl:1}},
      {text:"户外运动探险", weights:{tiger:2,lion:1}},
      {text:"睡懒觉追剧", weights:{panda:2,koala:1}}
    ]
  },
  {
    text: "遇到紧急情况你通常？",
    options:[
      {text:"冲在第一线", weights:{lion:2,tiger:1}},
      {text:"冷静分析方案", weights:{owl:2,elephant:1}},
      {text:"找人商量", weights:{dog:2}},
      {text:"观察再行动", weights:{fox:2,owl:1}}
    ]
  },
  {
    text: "朋友夸你最像哪类性格？",
    options:[
      {text:"活泼外向", weights:{monkey:2,dolphin:1}},
      {text:"稳重可靠", weights:{elephant:2,bear:1}},
      {text:"温柔体贴", weights:{rabbit:2,sheep:1}},
      {text:"聪明机智", weights:{fox:2,owl:1}}
    ]
  },
  {
    text: "你做决定更依赖于？",
    options:[
      {text:"直觉", weights:{fox:2,monkey:1}},
      {text:"数据和事实", weights:{elephant:2,owl:1}},
      {text:"情感和关系", weights:{dog:2,rabbit:1}},
      {text:"先行动再调整", weights:{tiger:2,lion:1}}
    ]
  },
  {
    text: "假如要和朋友出游你更倾向？",
    options:[
      {text:"规划好路线", weights:{elephant:2,dolphin:1}},
      {text:"随遇而安", weights:{panda:2,koala:1}},
      {text:"寻找刺激活动", weights:{wolf:2,tiger:1}},
      {text:"负责带动气氛", weights:{monkey:2,dog:1}}
    ]
  },
  {
    text: "别人最容易被你吸引的点是？",
    options:[
      {text:"幽默风趣", weights:{monkey:2,dolphin:1}},
      {text:"稳重可靠", weights:{elephant:2,bear:1}},
      {text:"独特气质", weights:{owl:2,cat:1}},
      {text:"温暖亲切", weights:{dog:2,rabbit:1}}
    ]
  },
  {
    text: "工作中你通常是？",
    options:[
      {text:"带头冲锋的领导", weights:{lion:2,tiger:1}},
      {text:"擅长协调和沟通", weights:{dog:2,dolphin:1}},
      {text:"关注细节与质量", weights:{owl:2,elephant:1}},
      {text:"创意点子多", weights:{fox:2,monkey:1}}
    ]
  },
  {
    text: "休闲时更喜欢？",
    options:[
      {text:"与朋友聚会", weights:{dog:2,monkey:1}},
      {text:"安静的手工或阅读", weights:{cat:2,owl:1}},
      {text:"户外运动", weights:{horse:2,tiger:1}},
      {text:"美食和休息", weights:{panda:2,sheep:1}}
    ]
  },
  {
    text: "面对批评你会？",
    options:[
      {text:"认真听取并改进", weights:{elephant:2,owl:1}},
      {text:"直接辩解", weights:{lion:2,wolf:1}},
      {text:"内心难过但表面平静", weights:{rabbit:2,cat:1}},
      {text:"用幽默化解", weights:{monkey:2,fox:1}}
    ]
  },
  {
    text: "你喜欢哪种团队角色？",
    options:[
      {text:"决策者", weights:{lion:2,tiger:1}},
      {text:"执行者", weights:{horse:2,dog:1}},
      {text:"协调沟通", weights:{dog:2,elephant:1}},
      {text:"创意支持", weights:{fox:2,monkey:1}}
    ]
  },
  {
    text: "你理想的居住环境是？",
    options:[
      {text:"热闹的城市中心", weights:{monkey:2,dolphin:1}},
      {text:"安静的郊外小屋", weights:{panda:2,rabbit:1}},
      {text:"有文化气息的老街", weights:{cat:2,owl:1}},
      {text:"紧凑便利的公寓", weights:{fox:2,elephant:1}}
    ]
  },
  {
    text: "你对新鲜事物的态度？",
    options:[
      {text:"非常好奇并愿意尝试", weights:{fox:2,monkey:1}},
      {text:"谨慎选择再试", weights:{owl:2,elephant:1}},
      {text:"看心情，有时尝试", weights:{cat:2,panda:1}},
      {text:"喜欢稳定，不常变动", weights:{sheep:2,elephant:1}}
    ]
  },
  {
    text: "在团队冲突中你通常？",
    options:[
      {text:"调解、寻找共识", weights:{elephant:2,dolphin:1}},
      {text:"站队并支持一方", weights:{wolf:2,lion:1}},
      {text:"从旁观察", weights:{owl:2,cat:1}},
      {text:"推动解决方案", weights:{tiger:2,fox:1}}
    ]
  },
  {
    text: "你如何描述自己的幽默感？",
    options:[
      {text:"机智冷幽默", weights:{fox:2,owl:1}},
      {text:"夸张搞笑", weights:{monkey:2,dolphin:1}},
      {text:"温暖暖心", weights:{dog:2,rabbit:1}},
      {text:"不太善于幽默", weights:{elephant:2}}
    ]
  },
  {
    text: "你面对压力时会？",
    options:[
      {text:"制定清晰计划", weights:{elephant:2,owl:1}},
      {text:"找朋友倾诉", weights:{dog:2}},
      {text:"借助运动释放", weights:{horse:2,tiger:1}},
      {text:"选择逃避休息", weights:{panda:2,koala:1}}
    ]
  },
  {
    text: "你对待时间的态度是？",
    options:[
      {text:"严格计划", weights:{elephant:2,tiger:1}},
      {text:"弹性安排", weights:{monkey:2,cat:1}},
      {text:"随性而为", weights:{panda:2}},
      {text:"效率优先", weights:{wolf:2,horse:1}}
    ]
  },
  {
    text: "你做事时更注重？",
    options:[
      {text:"影响力与结果", weights:{lion:2,tiger:1}},
      {text:"稳定和安全", weights:{elephant:2,bear:1}},
      {text:"人际关系", weights:{dog:2,rabbit:1}},
      {text:"创意与新颖", weights:{fox:2,monkey:1}}
    ]
  },
  {
    text: "你最看重朋友的哪一点？",
    options:[
      {text:"忠诚可靠", weights:{dog:2,elephant:1}},
      {text:"有趣好玩", weights:{monkey:2}},
      {text:"聪明能干", weights:{owl:2,fox:1}},
      {text:"温柔体贴", weights:{rabbit:2,panda:1}}
    ]
  },
  {
    text: "你对未来的态度更偏向？",
    options:[
      {text:"乐观进取", weights:{lion:2,monkey:1}},
      {text:"稳扎稳打", weights:{elephant:2}},
      {text:"跟随内心", weights:{cat:2}},
      {text:"不断尝试新事物", weights:{fox:2,dolphin:1}}
    ]
  }
];
