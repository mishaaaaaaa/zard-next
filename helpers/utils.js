export const storage = {
  setItem: (key, value) => {
    window && window.localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    const result = window && window.localStorage.getItem(key);
    return JSON.parse(result);
  },
  removeItem: (key) => {
    window && window.localStorage.removeItem(key);
  },
};

// const changeLanguageAction = (lang) => {
//     const langCode = lang === "uk" ? "ua" : lang;
//     if (getToken) {
//       dispatch(updateUserData({ lang: langCode }));
//     }
//     router.push({ pathname, query }, asPath, { locale: lang });
//     localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lang);
//   };
