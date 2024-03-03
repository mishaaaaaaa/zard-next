import classNames from "classnames";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const Card = (props) => {
  const {
    label,
    onSelect,
    customClass,
    emoji,
    selected,
    withCheckbox = false,
    selectWithDelay = true,
    cardCount,
  } = props;

  const [isSelected, setIsSelected] = useState(false);

  console.log(cardCount + 1, label);

  const handleSelect = () => {
    setIsSelected(true);

    selectWithDelay
      ? setTimeout(() => {
          onSelect();
        }, 100)
      : onSelect();
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleCheckboxChange = (isChecked) => {
    setIsSelected(isChecked);
    onSelect(isChecked);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    handleSelect();
  };

  const cardClassNames = classNames(
    "bg-[#36173D] rounded-xl p-4",
    { "bg-[#460741] border-2 border-[#E4229c]": isSelected },
    { "flex justify-between items-center": withCheckbox },
    customClass
  );

  return (
    <div onClick={handleClick} className={cardClassNames}>
      {emoji && <div className="text-5xl mb-3">{emoji}</div>}
      <span>{label}</span>
      {withCheckbox && (
        <Checkbox customClass="mb-3" selected={isSelected} onCheckboxChange={handleCheckboxChange} />
      )}
    </div>
  );
};

export default Card;
