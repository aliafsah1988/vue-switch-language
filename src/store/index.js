import Vue from "vue";
import Vuex from "vuex";
import { LanguageService } from "../services/storage.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRightToLeft: false
  },
  getters: {
    language: () => {
      const language = LanguageService.getLanguage();
      if (!language) {
        return "en";
      }
      return language;
    },
    isRightToLeft: () => {
      let language = LanguageService.getLanguage();
      if (language === "fa") {
        return true;
      } else return false;
    }
  },
  mutations: {
    setLanguage(state, language) {
      LanguageService.saveLanguage(language);
    }
  },
  actions: {
    setLanguage({ commit }, Language) {
      commit(`setLanguage`, Language);
    }
  }
});
