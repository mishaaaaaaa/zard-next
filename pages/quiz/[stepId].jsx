import { useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";
import QuizNavbar from "@/components/ui/QuizNavbar";
import FifthStep from "./steps/FifthStep";

const StepAddEdit = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { stepId } = router.query;

  const nextStep = () => {
    router.replace(`/quiz/${parseInt(stepId) + 1}`);
  };

  const dynamicStep = useMemo(() => {
    switch (stepId) {
      case "1":
        return <FirstStep handleNextStep={nextStep} />;
      case "2":
        return <SecondStep handleNextStep={nextStep} />;
      case "3":
        return <ThirdStep handleNextStep={nextStep} />;
      case "4":
        return <FourthStep handleNextStep={nextStep} />;
      case "5":
        return <FifthStep handleNextStep={nextStep} />;
      default:
        return null;
    }
  }, [stepId]);

  return (
    <div className="min-w-full">
      <QuizNavbar />
      {dynamicStep}
    </div>
  );
};

export async function getServerSideProps(context) {
  const stepId = context.query.stepId;

  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
      stepId,
    },
  };
}

export default StepAddEdit;
