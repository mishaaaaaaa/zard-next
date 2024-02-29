import Link from "next/link";
import Card from "@/components/ui/Card";
import { useRouter } from "next/router";
import { storage } from "@/helpers/utils";
import { quizVariants } from "@/helpers/utils";

const FirstStep = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const variants = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "German",
      value: "de",
    },
    {
      label: "Spanish",
      value: "es",
    },
  ];

  const handleSelect = async (lang) => {
    await router.push({ pathname, query }, asPath, { locale: lang });
    await router.replace("/quiz/2");
    storage.setItem("I18N_LANGUAGE", lang);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">What is your preferred language?</div>
        <div className="mb-6 text-zinc-400">Choose language</div>
      </div>

      <div className="grid gap-y-3 mb-5">
        {quizVariants.firstStep.map((el, i) => (
          <Card onSelect={() => handleSelect(el.value)} label={el.label} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
