import { useEffect } from "react";
import { quizVariants, STORAGE_STATE } from "@/helpers/constants";
import { useRouter } from "next/router";
import { storage } from "@/helpers/utils";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useState } from "react";

const FifthStep = () => {
  const router = useRouter();
  const storageFavList = storage.getItem(STORAGE_STATE.FAV_LIST);
  const [favItems, setFavItems] = useState(() => (storageFavList ? storageFavList : []));

  useEffect(() => {
    storage.setItem(STORAGE_STATE.FAV_LIST, favItems);
  }, [favItems]);

  const handleSelect = (favItemLabel) => {
    const isUnSelectAction = favItems.some((el) => el === favItemLabel);

    if (isUnSelectAction) {
      const newFavItems = favItems.filter((el) => el !== favItemLabel);
      setFavItems(newFavItems);
    } else setFavItems((state) => [...state, favItemLabel]);
  };
  // };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center">
      <div className="text-center ">
        <div className="text-3xl font-semibold mb-6">What are your favorite topics?</div>
        <div className="mb-10 text-zinc-400">Choose up to 3 topics you like</div>

        <div className="grid grid-cols-4 gap-y-2 gap-x-16 overflow-x-scroll">
          <>
            {quizVariants.fifthStep.map((el, i) => (
              <Card
                label={el.label}
                emoji={el.emoji}
                key={i}
                customClass="flex flex-col justify-center text-center  rounded-full w-[90px] h-[90px]"
                count={i}
                selected={favItems.includes(el.label)}
                onSelect={() => handleSelect(el.label)}
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
