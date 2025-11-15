// Quiz configuration - easy to switch between different types
window.QuizConfig = {
  // Current configuration
  current: 'gems',
  
  // Available configurations
  configs: {
    animals: {
      dataFile: 'animals.json',
      questionsFile: 'questions.json',
      fallbackData: 'FALLBACK_ANIMALS',
      resultKey: 'animalResult',
      typeLabel: '宝石性格类型',
      scoringMethod: 'nearestAnimal'
    },
    gems: {
      dataFile: 'gems.json', 
      questionsFile: 'gem_questions.json',
      fallbackData: 'FALLBACK_GEMS',
      resultKey: 'gemResult',
      typeLabel: '宝石性格类型',
      scoringMethod: 'nearestGem'
    }
  },
  
  // Get current config
  get() {
    return this.configs[this.current];
  },
  
  // Switch configuration
  switchTo(type) {
    if (this.configs[type]) {
      this.current = type;
      return true;
    }
    return false;
  }
};