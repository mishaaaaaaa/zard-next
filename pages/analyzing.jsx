import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CircleProgress from "@/components/modules/CircleProgress";

const Analyzing = () => {
  const router = useRouter();

  const actionAfterLoading = () => {
    setTimeout(() => {
      router.replace("/email");
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <CircleProgress customClass="mb-5" afterAction={actionAfterLoading} />
      <span className="text-xl">Finding collections for you...</span>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Analyzing;
