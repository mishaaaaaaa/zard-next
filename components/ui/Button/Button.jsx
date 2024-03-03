import classNames from "classnames";

const Button = (props) => {
  const { children, onClick, customClass, disabled = false } = props;

  const btnClassNames = classNames(
    "w-full text-center py-4 rounded-3xl",
    {
      "bg-[#E4229C]": !disabled,
      "bg-[#6E0D58] text-gray-400 cursor-not-allowed": disabled,
    },
    customClass
  );

  return (
    <button className={btnClassNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

// расписать почему использую фолдеры для компонентов
