// 授权码生成和管理工具
class AuthCodeManager {
  constructor() {
    this.usedCodes = new Set();
    this.loadUsedCodes();
  }

  // 生成随机授权码
  generateCode(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    
    do {
      code = '';
      for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    } while (this.usedCodes.has(code));
    
    return code;
  }

  // 批量生成授权码
  generateBatch(count = 10) {
    const codes = [];
    for (let i = 0; i < count; i++) {
      codes.push(this.generateCode());
    }
    return codes;
  }

  // 标记授权码为已使用
  markAsUsed(code) {
    this.usedCodes.add(code.toUpperCase());
    this.saveUsedCodes();
  }

  // 验证授权码
  validateCode(code, validCodes) {
    const upperCode = code.toUpperCase();
    return validCodes.map(c => c.toUpperCase()).includes(upperCode);
  }

  // 保存已使用的授权码到localStorage
  saveUsedCodes() {
    localStorage.setItem('usedAuthCodes', JSON.stringify([...this.usedCodes]));
  }

  // 从localStorage加载已使用的授权码
  loadUsedCodes() {
    const saved = localStorage.getItem('usedAuthCodes');
    if (saved) {
      this.usedCodes = new Set(JSON.parse(saved));
    }
  }
}

window.AuthCodeManager = AuthCodeManager;