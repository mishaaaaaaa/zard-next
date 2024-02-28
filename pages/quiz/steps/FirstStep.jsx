import Link from "next/link";
import Card from "@/components/ui/Card";

const FirstStep = () => {
  const handleProcedd = () => {};

  const variants = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "French",
      value: "fr", // ?
    },
    {
      label: "German",
      value: "ger", // ?
    },
    {
      label: "Spanish",
      value: "sp", //?
    },
  ];

  const handleSelect = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="text-center mt-3">
        <div className="text-3xl font-semibold">What is your preferred language?</div>
        <div className="mt-3 text-zinc-400">Choose language</div>
      </div>
      <Link href="/quiz/2">Link to second page</Link>

      <div>
        {variants.map((el, i) => (
          <Card onSelect={() => handleSelect(el.value)} label={el.label} value={el.value} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
