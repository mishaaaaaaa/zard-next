import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { validateEmail } from "@/helpers/utils";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE } from "@/helpers/constants";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Email = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { quiz } = useQuiz();
  const currentStep = quiz.emailStep;

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = () => {
    storage.setItem(STORAGE_STATE.EMAIL, {
      order: currentStep.order,
      title: currentStep.title.value,
      type: currentStep.selectType,
      answer: email,
    });

    router.replace("/answers");
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-32">
        <div className="text-center">
          <div className="text-3xl font-semibold mb-6">{t("emailSubmit.title")}</div>
          <div className="mb-10 text-zinc-400">{t("emailSubmit.subtitle")}</div>
        </div>
        <div>
          <div>
            <Input
              value={email}
              handleChange={handleChange}
              isValid={isValidEmail}
              placeholder={t("emailSubmit.emailPlaceholder")}
              errorMessage={t("emailSubmit.invalidEmail")}
            />
          </div>
          <div className="mt-10">
            <span className="text-zinc-400">{t("emailSubmit.policyAndTerms")} </span>
            <a className="text-[#EB2F9A]">{t("emailSubmit.privacyPolicy")} </a>
            <span className="text-zinc-400">{t("emailSubmit.and")} </span>
            <a className="text-[#EB2F9A]">{t("emailSubmit.terms")} </a>
          </div>
        </div>
      </div>
      <Button disabled={!isValidEmail} onClick={handleSubmit}>
        Next
      </Button>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Email;
