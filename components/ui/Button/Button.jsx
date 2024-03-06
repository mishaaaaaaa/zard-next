import classNames from "classnames";
import { useEffect, useState } from "react";

const Button = (props) => {
  const { children, onClick, customClass, disabled } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  const btnClassNames = classNames(
    "w-full md:w-auto px-48  text-center py-4 rounded-3xl hover:cursor-pointer",
    {
      "bg-[#E4229C]": !isDisabled,
      "bg-[#6E0D58] text-gray-400 cursor-not-allowed": isDisabled,
    },
    customClass
  );

  return (
    <button className={btnClassNames} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;

// расписать почему использую фолдеры для компонентов
