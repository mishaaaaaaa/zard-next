import { quizVariants } from "@/helpers/utils";
import { useRouter } from "next/router";
import { storage, STORAGE_STATE } from "@/helpers/utils";
import Card from "@/components/ui/Card";

const ThirdStep = () => {
  const router = useRouter();

  const handleSelect = (age) => {
    storage.setItem(STORAGE_STATE.AGE, age);
    router.replace("/quiz/4");
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-3xl font-semibold mb-6">What is your age?</div>
      </div>

      <div className="grid gap-y-3 mb-5">
        {quizVariants.thirdStep.map((el, i) => (
          <Card
            onSelect={() => handleSelect(el)}
            label={el}
            key={i}
            selected={storage.getItem(STORAGE_STATE.AGE) === el}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdStep;
