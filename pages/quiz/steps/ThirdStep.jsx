import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE } from "@/helpers/constants";
import Card from "@/components/ui/Card";

const ThirdStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { quiz } = useQuiz();
  const currentStep = quiz.thirdStep;
  const storageItem = storage.getItem(STORAGE_STATE.AGE);

  const handleSelect = (age) => {
    storage.setItem(STORAGE_STATE.AGE, {
      order: router.query.stepId,
      title: currentStep.title.value,
      type: currentStep.selectType,
      answer: age,
    });
    handleNextStep();
  };
  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">{currentStep.title.label}</div>
      </div>

      <div className="grid gap-y-3 mb-5">
        {currentStep.variants.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el.value)}
            label={el.label}
            key={i}
            selected={storageItem && storageItem.answer === el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdStep;
