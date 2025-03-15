export default function Item({ optiondetail, optiontitle }) {
  return (
    <>
      <div className="option-container">
        <p>{optiondetail}</p>
        <p>{optiontitle}</p>
      </div>
    </>
  );
}
