const Pizza = (props) => {
  const imgSrc = props.imgSrc;
  const pizzaName = props.pizzaName;
  const ingredients = props.ingredients;
  const price = props.price;
  const soldOut = props.soldOut;

  return (
    <div className="">
      <img
        className={`w-[98%] h-[98%] ${soldOut ? "grayscale" : ""}`}
        src={imgSrc}
        alt="Pizza"
      />
      <p className="text-2xl font-extrabold">{pizzaName}</p>
      <p className="text-lg">{ingredients}</p>
      <p className="text-lg">{price}</p>
      <p className="text-lg">{soldOut ? "Sold out" : "Available"}</p>
    </div>
  );
};

export default Pizza;
