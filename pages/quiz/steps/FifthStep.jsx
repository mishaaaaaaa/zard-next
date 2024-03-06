import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { STORAGE_STATE } from "@/helpers/constants";

import { storage } from "@/helpers/utils";
import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button";

const FifthStep = () => {
  const router = useRouter();
  const { quiz } = useQuiz();
  const currentStep = quiz.fifthStep;

  const storageFavList = storage.getItem(STORAGE_STATE.FAV_LIST);
  const [favItems, setFavItems] = useState(() => (storageFavList ? storageFavList.answer : []));

  useEffect(() => {
    if (favItems.length > 0) {
      storage.setItem(STORAGE_STATE.FAV_LIST, {
        order: router.query.stepId,
        title: currentStep.title.value,
        type: currentStep.selectType,
        answer: favItems,
      });
    } else {
    }
  }, [favItems]);

  const handleSelect = (favItem) => {
    const isUnSelectAction = favItems.some((el) => el === favItem);
    if (isUnSelectAction) {
      setFavItems((state) => state.filter((el) => el !== favItem));
    } else setFavItems((state) => [...state, favItem]);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center">
      <div className="text-center ">
        <div className="text-3xl font-semibold mb-6">{currentStep.title.label}</div>
        <div className="mb-10 text-zinc-400">{currentStep.subtitle}</div>

        <div className="grid grid-cols-4 gap-y-2 gap-x-16 overflow-x-scroll">
          <>
            {currentStep.variants.map((el, i) => (
              <Card
                label={el.label}
                emoji={el.emoji}
                key={i}
                customClass="flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]"
                count={i}
                selected={favItems.includes(el.value)}
                onSelect={() => handleSelect(el.value)}
                selectWithDelay={false}
              />
            ))}
          </>
        </div>
      </div>

      <Button onClick={() => router.replace("/analyzing")} disabled={favItems.length === 0}>
        Next
      </Button>

      {/* <div className="ml-5 flex ">
        <div className="mt-1 mr-3">
          <div>
            <Card
              label={quizVariants.fifthStep[0].label}
              emoji={quizVariants.fifthStep[0].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
          <div>
            <Card
              label={quizVariants.fifthStep[1].label}
              emoji={quizVariants.fifthStep[1].emoji}
              customClass={`flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
        </div>
        <div>
          <div className="mt-6 mr-3">
            <Card
              label={quizVariants.fifthStep[2].label}
              emoji={quizVariants.fifthStep[2].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
          <div>
            <Card
              label={quizVariants.fifthStep[3].label}
              emoji={quizVariants.fifthStep[3].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
        </div>
        <div className="mr-3">
          <div>
            <Card
              label={quizVariants.fifthStep[4].label}
              emoji={quizVariants.fifthStep[4].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
          <div>
            <Card
              label={quizVariants.fifthStep[5].label}
              emoji={quizVariants.fifthStep[5].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
        </div>
        <div>
          <div>
            <Card
              label={quizVariants.fifthStep[6].label}
              emoji={quizVariants.fifthStep[6].emoji}
              customClass={`mb-3 flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]`}
              // selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FifthStep;

/* Section / 4 */
