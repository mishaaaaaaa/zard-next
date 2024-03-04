import { useTranslation } from "react-i18next";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { validateEmail } from "@/helpers/utils";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Email = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-24">
        <div className="text-center">
          <div className="text-3xl font-semibold mb-6">Email</div>
          <div className="mb-6 text-zinc-400">Enter your email to get full access</div>
        </div>
        <div>
          <div>
            <Input
              value={email}
              handleChange={handleChange}
              isValid={isValidEmail}
              placeholder="your email"
              errorMessage="Invalid email"
            />
          </div>
          <span>By continuing I agree with Privacy policy and Terms of use.</span>
        </div>
      </div>
      <Button disabled={!isValidEmail}>Next</Button>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Email;
