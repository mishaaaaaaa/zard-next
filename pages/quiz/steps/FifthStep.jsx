import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { STORAGE_STATE } from "@/helpers/constants";
import { storage } from "@/helpers/utils";
import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button";

const FifthStep = () => {
  const { t } = useTranslation();
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

        <div className="grid grid-cols-4 gap-y-2 gap-x-16  overflow-x-scroll md:gap-y-4 md:gap-x-2 md:overflow-visible">
          <>
            {currentStep.variants.map((el, i) => (
              <Card
                label={el.label}
                emoji={el.emoji}
                key={i}
                customClass="flex flex-col justify-center text-center  !rounded-full w-[100px] h-[100px]"
                count={i}
                selected={favItems.includes(el.value)}
                onSelect={() => handleSelect(el.value)}
                selectWithDelay={false}
                limit={3}
                cardList={favItems}
              />
            ))}
          </>
        </div>
      </div>

      <Button onClick={() => router.replace("/analyzing")} disabled={favItems.length === 0}>
        {t("btn.nextLabel")}
      </Button>
    </div>
  );
};

export default FifthStep;
