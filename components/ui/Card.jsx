import classNames from "classnames";

const Card = (props) => {
  const { label, value, onSelect, customClass, emoji } = props;

  const cardClassNames = classNames("bg-[#36173D] rounded-xl p-4", customClass);
  return (
    <div onClick={onSelect} className={cardClassNames}>
      {emoji && <div className="text-5xl mb-3">{emoji}</div>}
      <span> {label}</span>
    </div>
  );
};

export default Card;
