function telephoneCheck(str) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    
    return phoneRegex.test(str);
  }
  
  
telephoneCheck("555-555-5555");