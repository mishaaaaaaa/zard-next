import { quizVariants } from "@/helpers/utils";
import { useRouter } from "next/router";
import Card from "@/components/ui/Card";

const SecondStep = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleSelect = async (lang) => {
    await router.push({ pathname, query }, asPath, { locale: lang });
    await router.replace("/quiz/2");
    storage.setItem("I18N_LANGUAGE", lang);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">What gender do you identify with?</div>
        <div className="mb-6 text-zinc-400">Please share how do you identify yourself</div>
      </div>
      {/* <Link href="/quiz/2">Link to second page</Link> */}

      <div className="grid grid-cols-3 gap-4">
        {quizVariants.secondStep.map((el, i) => (
          <Card onSelect={handleSelect} label={el.label} emoji={el.emoji} key={i} customClass="text-center" />
        ))}
      </div>
    </div>
  );
};

export default SecondStep;
