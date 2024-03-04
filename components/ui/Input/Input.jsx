import classNames from "classnames";

const Input = (props) => {
  const { value, handleChange, isValid, placeholder, customClass, errorMessage = "Invalid field" } = props;

  const inputClasses = classNames(
    "bg-[#36173D] text-white rounded-lg py-4 px-4 w-full focus:outline-none  focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out",
    { "border-2 border-red-700": !isValid },
    customClass
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputClasses}
      />
      {!isValid && <span className="absolute top-full left-0 text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

export default Input;
