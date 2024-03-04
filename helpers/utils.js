export const storage = {
  setItem: (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key) => {
    if (typeof window !== "undefined") {
      const result = window.localStorage.getItem(key);
      return JSON.parse(result);
    }
    return null;
  },
  removeItem: (key) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  },
};

export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// const changeLanguageAction = (lang) => {
//     const langCode = lang === "uk" ? "ua" : lang;
//     if (getToken) {
//       dispatch(updateUserData({ lang: langCode }));
//     }
//     router.push({ pathname, query }, asPath, { locale: lang });
//     localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lang);
//   };
