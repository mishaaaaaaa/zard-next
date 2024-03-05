import { useTranslation } from "react-i18next";
import { selectTypes } from "@/helpers/constants";
import { langNames } from "@/helpers/constants";

const useQuiz = () => {
  const { t } = useTranslation();

  const quiz = {
    firstStep: {
      title: {
        label: "What is your preferred language?",
        value: "What is your preferred language?",
      },
      subtitle: "Choose language",
      selectType: selectTypes.single,
      variants: [
        {
          label: langNames.en,
          code: "en",
        },
        {
          label: langNames.fr,
          code: "fr",
        },
        {
          label: langNames.de,
          code: "de",
        },
        {
          label: langNames.es,
          code: "es",
        },
      ],
    },
    secondStep: {
      title: {
        label: t("secondStep.title"),
        value: "What gender do you identify with?",
      },
      subtitle: t("secondStep.subtitle"),
      selectType: selectTypes.singleWithImage,
      variants: [
        { label: t("secondStep.labelFemale"), value: "Female", emoji: "👩" },
        { label: t("secondStep.labelMale"), value: "Male", emoji: "👨" },
        { label: t("secondStep.labelOther"), value: "Other", emoji: "😉" },
      ],
    },
    thirdStep: {
      title: {
        label: t("secondStep.title"),
        value: "What gender do you identify with?",
      },
      variants: [
        { label: `18-29 ${t("thirdStep.years")}`, value: "18-29 years" },
        { label: `30-39 ${t("thirdStep.years")}`, value: "30-39  years" },
        { label: `40-49 ${t("thirdStep.years")}`, value: "40-49 years" },
        { label: `50+ ${t("thirdStep.years")}`, value: "50+" },
      ],
    },
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
  return { quiz };
};

export default useQuiz;
