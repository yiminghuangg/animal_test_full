// 评分与归类工具（维度数量自适应：支持5维或7维）
// 使用方式：window.Scoring.nearestGem(Tscores, gems)
// Tscores: {维度...} 的标准化分数（建议T分 0-100），gems: 从 gems.json 读取

(function(){
  function getKeysFrom(Tscores, gems){
    if(Tscores) return Object.keys(Tscores);
    if(gems && gems.length && gems[0].dims) return Object.keys(gems[0].dims);
    return ['O','C','E','A','N'];
  }

  function cosineSimilarity(a, b, keys){
    let dot=0, na=0, nb=0;
    for(const k of keys){ dot += (a[k]||0)*(b[k]||0); na += (a[k]||0)**2; nb += (b[k]||0)**2; }
    if(na===0 || nb===0) return 0;
    return dot / (Math.sqrt(na)*Math.sqrt(nb));
  }

  function nearestGem(Tscores, gems){
    const keys = getKeysFrom(Tscores, gems);
    let best = null, bestSim = -Infinity, second=null, secondSim=-Infinity;
    for(const item of gems){
      const sim = cosineSimilarity(Tscores, item.dims, keys);
      if(sim > bestSim){ second = best; secondSim = bestSim; best = item; bestSim = sim; }
      else if(sim > secondSim){ second = item; secondSim = sim; }
    }
    const mixed = (bestSim - secondSim) < 0.03 ? `${best?.name||''}-${second?.name||''}` : (best?.name||'');
    return {best, second, bestSim, secondSim, type: mixed};
  }

  // Keep the old function for backward compatibility
  function nearestAnimal(Tscores, animals) {
    return nearestGem(Tscores, animals);
  }

  function tScore(scores, norm){
    const res = {}; const keys = Object.keys(scores||{});
    for(const k of keys){
      const mean = norm?.mean?.[k] ?? 30; // 设置默认均值，假设大多数用户在该维度得分约为30
      const std = norm?.std?.[k] ?? 10;   // 设置默认标准差，允许合理的分数分布
      const z = ((scores[k]||0) - mean) / std;
      let t = 50 + 10 * z; // T-score
      // 确保分数在0-100范围内
      t = Math.max(0, Math.min(100, t));
      res[k] = Math.round(t); // 四舍五入到整数
    }
    return res;
  }

  window.Scoring = {
    cosineSimilarity,
    nearestGem,
    nearestAnimal, // backward compatibility
    tScore
  };
})();


