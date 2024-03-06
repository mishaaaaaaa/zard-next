import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE, quizVariants } from "@/helpers/constants";
import useQuiz from "@/hooks/useQuiz";
import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button";

const FourthStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { quiz } = useQuiz();
  const currentStep = quiz.fourthStep;

  const storageHateList = storage.getItem(STORAGE_STATE.HATE_LIST);
  const [hateItems, setHateItems] = useState(() => (storageHateList ? storageHateList.answer : []));

  useEffect(() => {
    if (hateItems.length > 0) {
      storage.setItem(STORAGE_STATE.HATE_LIST, {
        order: router.query.stepId,
        title: currentStep.title.value,
        type: currentStep.selectType,
        answer: hateItems,
      });
    } else {
    }
  }, [hateItems]);

  const handleSelect = (hateItem) => {
    const isUnSelectAction = hateItems.some((el) => el === hateItem);
    if (isUnSelectAction) {
      setHateItems((state) => state.filter((el) => el !== hateItem));
    } else setHateItems((state) => [...state, hateItem]);
  };

  return (
    <div className="min-h-[85%] flex flex-col justify-between items-between">
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
              selected={hateItems.includes(el.value)}
              withCheckbox={true}
              selectWithDelay={false}
            />
          ))}
        </div>
      </div>

      <Button onClick={handleNextStep} disabled={hateItems.length === 0}>
        Next
      </Button>
    </div>
  );
};

export default FourthStep;
