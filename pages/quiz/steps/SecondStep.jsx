import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE } from "@/helpers/constants";
import Card from "@/components/ui/Card/Card";

const SecondStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { secondStep: currentStep } = useQuiz();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const storageItem = storage.getItem(STORAGE_STATE.GENDER);
    if (storageItem) {
      storage.removeItem(STORAGE_STATE.GENDER);
    }
  }, []);

  const handleSelect = (gender) => {
    setSelectedCard(gender);

    storage.setItem(STORAGE_STATE.GENDER, {
      order: router.query.stepId,
      title: currentStep.title.value,
      type: currentStep.selectType,
      answer: gender,
    });

    setTimeout(() => {
      handleNextStep();
    }, 200);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">{currentStep.title.label}</div>
        <div className="mb-6 text-zinc-400">{currentStep.subtitle}</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {currentStep.variants.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el.value)}
            label={el.label}
            emoji={el.emoji}
            key={i}
            customClass="text-center pt-6 pb-6"
            selected={selectedCard === el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondStep;
