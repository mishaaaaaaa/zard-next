import { useTranslation } from "react-i18next";

export const STORAGE_STATE = {
  I18N_LANGUAGE: "I18N_LANGUAGE",
  GENDER: "GENDER",
  AGE: "AGE",
  HATE_LIST: "HATE_LIST",
  FAV_LIST: "FAV_LIST",
};

export const langNames = {
  en: "English",
  de: "German",
  es: "Spanish",
  fr: "French",
};

export const selectTypes = {
  single: "single-select",
  singleWithImage: "single-select-image",
  multi: "multiple-select",
  buble: "buble",
  email: "email",
};

export const totalQuizSteps = 5;

// export const quiz = {
//   firstStep: {
//     title: {
//       label: "What is your preferred language?",
//       value: "What is your preferred language?",
//     },
//     subtitle: "Choose language",
//     selectType: selectTypes.single,
//     variants: [
//       {
//         label: "English",
//         value: "en",
//       },
//       {
//         label: "French",
//         value: "fr",
//       },
//       {
//         label: "German",
//         value: "de",
//       },
//       {
//         label: "Spanish",
//         value: "es",
//       },
//     ],
//   },
//   secondStep: [
//     { label: "Female", emoji: "👩" },
//     { label: "Male", emoji: "👨" },
//     { label: "Other", emoji: "😉" },
//   ],
//   thirdStep: ["18-29 years", "30-39 years", "40-49 years", "50+"],
//   fourthStep: ["Lack of logic", "A slow speed", "Lack of humor", "Way too generic ending"],
//   fifthStep: [
//     { label: "Werewolf", emoji: "🐺" },
//     { label: "Action", emoji: "💃" },
//     { label: "Royal Obsession", emoji: "👑" },
//     { label: "Billionaire", emoji: "🤑" },
//     { label: "Romance", emoji: "🥰" },
//     { label: "Young Adult", emoji: "💁‍♀️" },
//     { label: "Bad Boy", emoji: "🤠 " },
//   ],
// };
