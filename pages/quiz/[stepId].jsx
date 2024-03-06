import { useMemo } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import QuizNavbar from "@/components/ui/QuizNavbar";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";
import FifthStep from "./steps/FifthStep";

const components = {
  1: FirstStep,
  2: SecondStep,
  3: ThirdStep,
  4: FourthStep,
  5: FifthStep,
};

const StepAddEdit = ({ stepId }) => {
  const router = useRouter();

  const nextStep = () => {
    router.replace(`/quiz/${parseInt(stepId) + 1}`);
  };

  const DynamicStep = useMemo(() => {
    const Component = components[stepId];
    return Component ? <Component handleNextStep={nextStep} /> : null;
  }, [stepId]);

  return (
    <div className="min-w-full">
      <QuizNavbar />
      {DynamicStep}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { stepId } = context.query;
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
      stepId,
    },
  };
}

export default StepAddEdit;
