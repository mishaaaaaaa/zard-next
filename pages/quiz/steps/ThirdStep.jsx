import { useState } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE } from "@/helpers/constants";
import Card from "@/components/ui/Card/Card";

const ThirdStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { quiz } = useQuiz();
  const currentStep = quiz.thirdStep;
  const storageItem = storage.getItem(STORAGE_STATE.AGE);
  const [selectedCard, setSelectedCard] = useState(storageItem ? storageItem.answer : "");

  const handleSelect = (age) => {
    setSelectedCard(age);

    storage.setItem(STORAGE_STATE.AGE, {
      order: router.query.stepId,
      title: currentStep.title.value,
      type: currentStep.selectType,
      answer: age,
    });
    handleNextStep();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">{currentStep.title.label}</div>
      </div>

      <div className="grid gap-y-3 w-full  lg:grid-cols-2 lg:gap-x-3 mb-5 lg:w-3/4">
        {currentStep.variants.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el.value)}
            label={el.label}
            key={i}
            selected={selectedCard === el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdStep;
