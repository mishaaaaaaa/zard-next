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
    return null; // Либо вернуть что-то другое по умолчанию
  },
  removeItem: (key) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  },
};

export const STORAGE_STATE = {
  QUIZ_STEP: "QUIZ_STEP",
};

export const totalQuizSteps = 5;

export const quizVariants = {
  firstStep: [
    {
      label: "English",
      value: "en",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "German",
      value: "de",
    },
    {
      label: "Spanish",
      value: "es",
    },
  ],
  secondStep: [
    { label: "Female", emoji: "👩" },
    { label: "Male", emoji: "👨" },
    { label: "Other", emoji: "😉" },
  ],
};

// const changeLanguageAction = (lang) => {
//     const langCode = lang === "uk" ? "ua" : lang;
//     if (getToken) {
//       dispatch(updateUserData({ lang: langCode }));
//     }
//     router.push({ pathname, query }, asPath, { locale: lang });
//     localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lang);
//   };
