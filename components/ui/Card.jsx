const Card = (props) => {
  const { label, value, onSelect } = props;
  return <div onClick={onSelect}>{label}</div>;
};

export default Card;
