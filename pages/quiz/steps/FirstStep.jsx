import Link from "next/link";
import Card from "@/components/ui/Card";
import { useRouter } from "next/router";
import { storage, STORAGE_STATE } from "@/helpers/utils";
import { quizVariants } from "@/helpers/utils";

const FirstStep = ({ handleNextStep }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleSelect = async (lang) => {
    await router.push({ pathname, query }, asPath, { locale: lang });
    await handleNextStep();
    storage.setItem(STORAGE_STATE.I18N_LANGUAGE, lang);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">What is your preferred language?</div>
        <div className="mb-6 text-zinc-400">Choose language</div>
      </div>

      <div className="grid gap-y-3 mb-5">
        {quizVariants.firstStep.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el.value)}
            label={el.label}
            key={i}
            selected={storage.getItem(STORAGE_STATE.I18N_LANGUAGE) === el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
