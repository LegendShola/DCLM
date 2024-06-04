class utils {

/**
 * Generates a random alphanumeric string of the specified length.
 * @param {number} length - The length of the string to generate.
 * @returns {string} - The generated alphanumeric string.
 */
  generateRandomAlphanumeric(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }

  /**
   * Gets a random company name from the predefined list.
   * @returns {string} - A random company name.
   */
    getRandomCompanyName() {
      const COMPANY_NAMES = [
        "Acme Inc.",
        "WonderTech Solutions",
        "SkyNet Systems",
        "Green Earth Industries",
        "CyberCore Robotics",
        "Starlight Logistics",
        "Quantum Leap Technologies",
        "Mystic Arts",
        "Olympus Labs",
        "Phoenix Enterprises",    
        "TechCorp",
        "Innovatech",
        "Alpha Solutions",
        "Beta Enterprises",
        "Gamma Tech",
        "Delta Innovations",
        "Epsilon Systems",
        "Zeta Solutions",
        "Theta Technologies",
        "Iota Industries"
      ];
      const randomIndex = Math.floor(Math.random() * COMPANY_NAMES.length);
      return COMPANY_NAMES[randomIndex];
    }

} 

module.exports = new utils
  