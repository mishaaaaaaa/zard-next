import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Quiz = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("test.test")}</h1>
      <p>{t("welcome")}</p>
    </main>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Quiz;
