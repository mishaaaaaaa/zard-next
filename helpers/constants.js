export const STORAGE_STATE = {
  I18N_LANGUAGE: "I18N_LANGUAGE",
  GENDER: "GENDER",
  AGE: "AGE",
  HATE_LIST: "HATE_LIST",
  FAV_LIST: "FAV_LIST",
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
  thirdStep: ["18-29 years", "30-39 years", "40-49 years", "50+"],
  fourthStep: ["Lack of logic", "A slow speed", "Lack of humor", "Way too generic ending"],
  fifthStep: [
    { label: "Werewolf", emoji: "🐺" },
    { label: "Action", emoji: "💃" },
    { label: "Royal Obsession", emoji: "👑" },
    { label: "Billionaire", emoji: "🤑" },
    { label: "Romance", emoji: "🥰" },
    { label: "Young Adult", emoji: "💁‍♀️" },
    { label: "Bad Boy", emoji: "🤠 " },
  ],
};
