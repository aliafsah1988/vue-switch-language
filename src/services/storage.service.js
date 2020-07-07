const LANGUAGE_KEY = "language";

const LanguageService = {
  getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY);
  },

  saveLanguage(language) {
    localStorage.setItem(LANGUAGE_KEY, language);
  },

  removeLanguage() {
    localStorage.removeItem(LANGUAGE_KEY);
  }
};

export { LanguageService };
export default LanguageService;
