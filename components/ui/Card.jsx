import classNames from "classnames";
import { useState } from "react";

const Card = (props) => {
  const { label, value, onSelect, customClass, emoji, selected = false } = props;

  const [isSelected, setIsSelected] = useState(() => selected);
  const handleSelect = () => {
    setIsSelected(true);
    setTimeout(() => {
      onSelect();
    }, 100);
  };

  const cardClassNames = classNames(
    "bg-[#36173D] rounded-xl p-4",
    { "bg-[#460741] border-2 border-[#E4229c]": isSelected },
    customClass
  );
  return (
    <div onClick={handleSelect} className={cardClassNames}>
      {emoji && <div className="text-5xl mb-3">{emoji}</div>}
      <span> {label}</span>
    </div>
  );
};

export default Card;
