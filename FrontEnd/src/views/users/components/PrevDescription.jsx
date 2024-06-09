const PrevDescription = ({descriptions}) => {
    console.log(descriptions)
  return (
    <div>
        {descriptions.map((des, idx) => (
            <p key={idx}>{des.description}</p>
        ))}
    </div>
  );
};
export default PrevDescription