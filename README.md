# vue-multilingual
![alt text](https://raw.githubusercontent.com/aliafsah1988/vue-multilingual/master/src/assets/screencapture-en.png)
![alt text](https://raw.githubusercontent.com/aliafsah1988/vue-multilingual/master/src/assets/screencapture-fa.png)

A simple example for multilingual website, created by vue.js. More like a playground to start your multilingual website.
- SEO best practices in routing:
    By using locale-specific URLs, so different languages will be appearing in different subdirectories. 
- Ability to easily switch between rtl and ltr. With two nested router-views and some configs in vue-router configs (See ./src/router/index.js).
- Ability to change language of contents (with vue-i18n)
- Couple of ready to use drop down components for selecting language.
- Keeps the last selected language in local storage for reloads.
- Ability to switch between right-to-left and left-to-right

## For running the application
1) Go to the root of application and install packages with:
```bash
npm install
```
2) Then run the application with
```bash
npm run serve
```
```bash
3) If you want to build it:
npm run build
```

## Dependencies
- vue.js            https://github.com/vuejs/vue
- vue-router        https://github.com/vuejs/vue-router
- vuex              https://github.com/vuejs/vuex
- vue-i18n          https://github.com/kazupon/vue-i18n
- vue-switch-lang   https://github.com/aliafsah1988/vue-switch-lang
