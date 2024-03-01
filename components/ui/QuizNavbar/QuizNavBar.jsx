import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProgressBar from "@/components/modules/ProgresBar";
import { totalQuizSteps } from "@/helpers/utils";
import { arrowBack } from "@/public/icons";

const QuizNavbar = () => {
  const router = useRouter();
  const { stepId } = router.query;
  const [currentStep, setCurrentStep] = useState(() => stepId);

  useEffect(() => {
    setCurrentStep(stepId);
  }, [stepId]);

  const handleNavBack = () => {
    if (stepId >= 2) {
      const backLink = `/quiz/${stepId - 1}`;
      router.replace(backLink);
    }
  };

  return (
    <div className="text-center font-semibold">
      <div className="flex items-center justify-between">
        <div onClick={handleNavBack}> {stepId >= 2 && arrowBack}</div>
        <div>
          <span className="text-[#E4229C] self-center">{currentStep}</span>
          <span>/{totalQuizSteps}</span>
        </div>
        <div></div>
      </div>

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
