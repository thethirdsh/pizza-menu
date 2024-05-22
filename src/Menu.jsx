import Pizza from "./Pizza";
import pizzaData from "./pizzaData"; 

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-48">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {pizzaData.map((pizza) => {
          return (
            <div>
              <Pizza
                imgSrc={pizza.photoName}
                pizzaName={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;