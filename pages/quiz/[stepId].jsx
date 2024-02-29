import { useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import QuizNavbar from "@/components/ui/QuizNavbar";
import ProgressBar from "@/components/modules/ProgresBar/ProgressBar";

const StepAddEdit = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { stepId } = router.query;

  const dynamicStep = useMemo(() => {
    switch (stepId) {
      case "1":
        return <FirstStep />;
      case "2":
        return <SecondStep />;
      case "3":
        return <ThirdStep />;
      default:
        return null;
    }
  }, [stepId]);

  return (
    <main className="min-h-screen">
      <QuizNavbar />
      {dynamicStep}
    </main>
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
