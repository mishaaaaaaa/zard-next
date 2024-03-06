import classNames from "classnames";
import { useEffect, useState } from "react";
import Checkbox from "../Checkbox";

const Card = (props) => {
  const {
    label,
    onSelect,
    customClass,
    emoji,
    selected,
    withCheckbox = false,
    selectWithDelay = true,
    limit = 0,
    cardList,
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    setIsDisabled(false);

    selectWithDelay
      ? setTimeout(() => {
          onSelect();
        }, 100)
      : onSelect();
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  useEffect(() => {
    if (limit > 0) {
      setIsDisabled(cardList.length >= limit && !isSelected);
    }
  }, [cardList, isSelected, limit]);

  const handleCheckboxChange = (isChecked) => {
    setIsSelected(isChecked);
    onSelect(isChecked);
  };

  const handleClick = (event) => {
    if (!isDisabled) {
      event.stopPropagation();
      handleSelect();
    }
  };

  const cardClassNames = classNames(
    "bg-[#36173D] rounded-xl p-6 hover:cursor-pointer",
    { "bg-[#460741] border-2 border-[#E4229c]": isSelected },
    { "bg-[#3d2842] hover:cursor-default": isDisabled },
    { "flex justify-between items-center": withCheckbox },
    customClass
  );

  const labelClassNames = classNames({ "text-xs": emoji });

  return (
    <div onClick={handleClick} className={cardClassNames}>
      {emoji && <div className="text-2xl">{emoji}</div>}
      <span className={labelClassNames}>{label}</span>
      {withCheckbox && (
        <Checkbox customClass="mb-3" selected={isSelected} onCheckboxChange={handleCheckboxChange} />
      )}
    </div>
  );
};

export default Card;
