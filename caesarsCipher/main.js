function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = alphabet.indexOf(char.toUpperCase());
      
      if (index === -1) {
        result += char;
      } else {
        const newIndex = (index + 13) % 26;
        const newChar = alphabet[newIndex];
        
        if (char === char.toUpperCase()) {
          result += newChar;
        } else {
          result += newChar.toLowerCase();
        }
      }
    }
    
    return result;
}
   
  
rot13("SERR PBQR PNZC");