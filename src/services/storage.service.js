const LANGUAGE_KEY = "language";

const LanguageService = {
  getLanguage() {
    return localStorage.getItem(LANGUAGE_KEY);
  },

  saveLanguage(accessToken) {
    localStorage.setItem(LANGUAGE_KEY, accessToken);
  },

  removeLanguage() {
    localStorage.removeItem(LANGUAGE_KEY);
  }
};

export { LanguageService };
export default LanguageService;
