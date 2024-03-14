import { useTranslation } from "next-i18next";
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
        label: t("thirdStep.title"),
        value: "What is your age?",
      },
      selectType: selectTypes.single,
      variants: [
        { label: `18-29 ${t("thirdStep.years")}`, value: "18-29 years" },
        { label: `30-39 ${t("thirdStep.years")}`, value: "30-39 years" },
        { label: `40-49 ${t("thirdStep.years")}`, value: "40-49 years" },
        { label: `50+ ${t("thirdStep.years")}`, value: "50+" },
      ],
    },
    fourthStep: {
      title: {
        label: (
          <span>
            {t("fourthStep.titleFirstPart")} <span className="text-[#EB2F9A]">{t("fourthStep.hate")}</span>{" "}
            {t("fourthStep.titleSecondPart")}
          </span>
        ),
        value: "What do you hate the most in a book?",
      },
      selectType: selectTypes.multi,
      variants: [
        { label: t("fourthStep.labelLackLogic"), value: "Lack of logic" },
        { label: t("fourthStep.labelSlowSpeed"), value: "A slow speed" },
        { label: t("fourthStep.labelLackHumor"), value: "Lack of humor" },
        { label: t("fourthStep.labelGenericEnding"), value: "Way too generic ending" },
      ],
    },
    fifthStep: {
      title: {
        label: t("fifthStep.title"),
        value: "What are your favorite topics?",
      },
      subtitle: t("fifthStep.subtitle"),
      selectType: selectTypes.buble,
      variants: [
        { value: "Werewolf", label: t("fifthStep.werewolf"), emoji: "🐺" },
        { value: "Action", label: t("fifthStep.action"), emoji: "💃" },
        { value: "Royal Obsession", label: t("fifthStep.royalObsession"), emoji: "👑" },
        { value: "Billionaire", label: t("fifthStep.billionaire"), emoji: "🤑" },
        { value: "Romance", label: t("fifthStep.romance"), emoji: "🥰" },
        { value: "Young Adult", label: t("fifthStep.youngAdult"), emoji: "💁‍♀️" },
        { value: "Bad Boy", label: t("fifthStep.badBoy"), emoji: "🤠 " },
      ],
    },
    emailStep: {
      title: {
        label: t("emailSubmit.title"),
        value: "Email",
      },
      subtitle: t("emailSubmit.subtitle"),
      selectType: selectTypes.email,
      order: "6",
    },
  };
  return quiz;
};

export default useQuiz;
