import { useEffect, useState } from "react";
import { quizVariants } from "@/helpers/utils";
import { storage, STORAGE_STATE } from "@/helpers/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const FourthStep = ({ handleNextStep }) => {
  const storageHateList = storage.getItem(STORAGE_STATE.HATE_LIST);
  const [hateItems, setHateItems] = useState(() => (storageHateList ? storageHateList : []));

  useEffect(() => {
    storage.setItem(STORAGE_STATE.HATE_LIST, hateItems);
  }, [hateItems]);

  const handleSelect = (hateItem) => {
    const isUnSelectAction = hateItems.some((el) => el === hateItem);
    if (isUnSelectAction) {
      const newHateItems = hateItems.filter((el) => el !== hateItem);
      setHateItems(newHateItems);
    } else setHateItems((state) => [...state, hateItem]);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center">
      <div>
        <div className="text-center mb-6">
          <div className="text-3xl font-semibold mb-6">What do you hate the most in a book?</div>
        </div>

        <div className="grid gap-y-3 mb-5">
          {quizVariants.fourthStep.map((el, i) => (
            <Card
              onSelect={() => handleSelect(el)}
              label={el}
              key={i}
              selected={hateItems.includes(el)}
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
