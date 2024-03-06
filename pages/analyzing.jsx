import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CircleProgress from "@/components/modules/CircleProgress";

const Analyzing = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const actionAfterLoading = () => {
    setTimeout(() => {
      router.replace("/email");
    }, 200);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <CircleProgress customClass="mb-5" afterAction={actionAfterLoading} />
      <span className="text-xl">{t("analyzing.title")}</span>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Analyzing;
