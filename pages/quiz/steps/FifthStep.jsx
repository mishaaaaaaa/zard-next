import { quizVariants } from "@/helpers/utils";
import { useRouter } from "next/router";
import { storage, STORAGE_STATE } from "@/helpers/utils";
import Card from "@/components/ui/Card";
import { useState } from "react";

const FifthStep = () => {
  const router = useRouter();
  // const storageHateList = storage.getItem(STORAGE_STATE.HATE_LIST);
  // const [hateItems, setHateItems] = useState(() => (storageHateList ? storageHateList : []));

  // useEffect(() => {
  //   storage.setItem(STORAGE_STATE.HATE_LIST, hateItems);
  // }, [hateItems]);

  // const handleSelect = (hateItem) => {
  //   const isUnSelectAction = hateItems.some((el) => el === hateItem);
  //   if (isUnSelectAction) {
  //     const newHateItems = hateItems.filter((el) => el !== hateItem);
  //     setHateItems(newHateItems);
  //   } else setHateItems((state) => [...state, hateItem]);
  // };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center">
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">What are your favorite topics?</div>
        <div className="mb-6 text-zinc-400">Choose up to 3 topics you like</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {quizVariants.fifthStep.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el.label)}
            label={el.label}
            emoji={el.emoji}
            key={i}
            customClass="text-center pt-6 pb-6"
            // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
          />
        ))}
      </div>

      {/* <Button onClick={handleNextStep} disabled={hateItems.length === 0}>
        Next
      </Button> */}
    </div>
  );
};

export default FifthStep;
