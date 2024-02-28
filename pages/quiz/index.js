import { useTranslation } from "next-i18next";

export default function Quiz() {
  const { t } = useTranslation("translation");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("asdfds")}</h1>
      <p>{t("welcome")}</p>
    </main>
  );
}
