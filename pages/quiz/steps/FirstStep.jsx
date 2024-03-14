import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useQuiz from "@/hooks/useQuiz";
import { storage } from "@/helpers/utils";
import { STORAGE_STATE, langNames } from "@/helpers/constants";
import Card from "@/components/ui/Card/Card";

const FirstStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { firstStep: currentStep } = useQuiz();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const storageItem = storage.getItem(STORAGE_STATE.I18N_LANGUAGE);
    if (storageItem) {
      storage.removeItem(STORAGE_STATE.I18N_LANGUAGE);
    }
  }, []);

  const handleSelect = async (lang, label) => {
    setSelectedCard(label);

    await router.push({ pathname, query }, asPath, { locale: lang });

    setTimeout(async () => {
      await handleNextStep();

      storage.setItem(STORAGE_STATE.I18N_LANGUAGE, {
        order: query.stepId,
        title: currentStep.title.value,
        type: currentStep.selectType,
        answer: langNames[lang],
      });
    }, 200);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">{currentStep.title.label}</div>
        <div className="mb-6 text-zinc-400">{currentStep.subtitle}</div>
      </div>

      <div className="grid gap-y-3 w-full  lg:grid-cols-2 lg:gap-x-3 mb-5 lg:w-3/4">
        {currentStep.variants.map(({ code, label }, i) => (
          <Card
            onSelect={() => handleSelect(code, label)}
            label={label}
            key={i}
            selected={selectedCard === label}
            selectWithDelay={false}
            c
          />
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
