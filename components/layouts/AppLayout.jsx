import React from "react";
import QuizLayout from "./QuizLayout";
import { useRouter } from "next/router";
const AppLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {router.pathname.startsWith("/quiz") ? <QuizLayout>{children}</QuizLayout> : children}
    </div>
  );
};

export default AppLayout;
