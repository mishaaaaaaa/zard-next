import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "@/components/ui/Button";
import circle_check from "../public/images/circle_check.png";
import { downloadIcon } from "@/public/icons";
import { CSVLink } from "react-csv";

const Email = () => {
  const { t } = useTranslation();

  const handleDownload = () => {};

  const handleRetakeQuiz = () => {};

  const headers = [
    { label: "Order", key: "order" },
    { label: "title", key: "title" },
    { label: "type", key: "type" },
    { label: "answer", key: "answer" },
  ];

  const data = [
    { firstname: "Misha", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Masha", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Bodya", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="mt-24">
        <div className="text-center">
          <div className="text-3xl font-semibold mb-6">Thank you</div>
          <div className="mb-6 text-zinc-400">for supporting us and passing quiz</div>
        </div>
        <div className="flex justify-center mt-10">
          <img src={circle_check.src} width={150} alt="Complete image" />
        </div>
      </div>
      <div className="w-full">
        <CSVLink data={data} headers={headers} filename={"answers.csv"}>
          Download me
        </CSVLink>
        ;
        <div onClick={handleDownload} className="flex gap-x-3 justify-center mb-7">
          <span>{downloadIcon}</span>
          <span>Download my answers</span>
        </div>
        <Button onClick={handleRetakeQuiz}>Retake quiz</Button>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Email;
