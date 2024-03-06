import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CSVLink } from "react-csv";
import Button from "@/components/ui/Button";
import circle_check from "../public/images/circle_check.png";
import { downloadIcon } from "@/public/icons";
import { STORAGE_STATE } from "@/helpers/constants";
import { storage } from "@/helpers/utils";

const Email = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    for (let key in STORAGE_STATE) {
      if (STORAGE_STATE.hasOwnProperty(key)) {
        setAnswers((state) => [...state, storage.getItem(key)]);
      }
    }
  }, []);

  const headers = [
    { label: "Order", key: "order" },
    { label: "title", key: "title" },
    { label: "type", key: "type" },
    { label: "answer", key: "answer" },
  ];

  const handleRetakeQuiz = () => {
    for (let key in STORAGE_STATE) {
      if (STORAGE_STATE.hasOwnProperty(key)) {
        storage.removeItem(key);
      }
    }
    router.replace("/quiz/1");
  };

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="mt-24">
        <div className="text-center">
          <div className="text-3xl font-semibold mb-6">{t("finalStep.title")}</div>
          <div className="mb-6 text-zinc-400">{t("finalStep.subtitle")}</div>
        </div>
        <div className="flex justify-center mt-10">
          <img src={circle_check.src} width={150} alt="Complete image" />
        </div>
      </div>
      <div className="w-full text-center">
        <CSVLink
          data={answers}
          headers={headers}
          filename={"answers.csv"}
          className="flex gap-x-3 justify-center mb-7"
        >
          <span>{downloadIcon}</span>
          <span>{t("finalStep.dowloadAnswersBtn")}</span>
        </CSVLink>

        <Button onClick={handleRetakeQuiz}>{t("finalStep.retakeBtn")}</Button>
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
