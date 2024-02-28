import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import ProgressBar from "@/components/modules/ProgresBar/ProgressBar";

const StepAddEdit = () => {
  const { t } = useTranslation("translation");
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
    <main className="min-h-screen border">
      <ProgressBar />
      {dynamicStep}
    </main>
  );
};

export default StepAddEdit;
