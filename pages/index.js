import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Проверяем, что код выполняется в клиентском браузере, а не на сервере
    if (typeof window !== "undefined") {
      router.push("/quiz");
    }
  }, [router]);

  return null; // Поскольку мы делаем редирект, нет необходимости возвращать какой-либо компонент
}
