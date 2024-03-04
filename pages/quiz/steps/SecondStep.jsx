import { useRouter } from "next/router";
import { storage } from "@/helpers/utils";
import { quizVariants, STORAGE_STATE } from "@/helpers/constants";
import Card from "@/components/ui/Card";

const SecondStep = () => {
  const router = useRouter();

  const handleSelect = (gender) => {
    storage.setItem(STORAGE_STATE.GENDER, gender);
    router.replace("/quiz/3");
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
          <Card
            onSelect={() => handleSelect(el.label)}
            label={el.label}
            emoji={el.emoji}
            key={i}
            customClass="text-center pt-6 pb-6"
            selected={storage.getItem(STORAGE_STATE.GENDER) === el.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondStep;
