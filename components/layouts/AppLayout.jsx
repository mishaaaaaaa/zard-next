import React from "react";
import QuizLayout from "./QuizLayout";
import { useRouter } from "next/router";
const AppLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto min-h-screen">
      <QuizLayout>{children}</QuizLayout>
    </div>
  );
};

export default AppLayout;
