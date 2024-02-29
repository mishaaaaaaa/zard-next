import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProgressBar from "@/components/modules/ProgresBar";
import { totalQuizSteps } from "@/helpers/utils";

const QuizNavbar = () => {
  const router = useRouter();
  const { stepId } = router.query;
  const [currentStep, setCurrentStep] = useState(() => stepId);

  useEffect(() => {
    setCurrentStep(stepId);
  }, [stepId]);

  return (
    <div className="text-center">
      <span>{`${currentStep}/${totalQuizSteps}`}</span>
      <ProgressBar
        visualParts={[
          {
            step: currentStep,
            color: "#E4229C",
          },
        ]}
      />
    </div>
  );
};

export default QuizNavbar;
