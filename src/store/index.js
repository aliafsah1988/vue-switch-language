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
        return {
          title: "en",
          flag: "gb"
        };
      }
      return JSON.parse(language);
    },
    isRightToLeft: () => {
      let language = JSON.parse(LanguageService.getLanguage());
      if (language && language.title === "fa") {
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
