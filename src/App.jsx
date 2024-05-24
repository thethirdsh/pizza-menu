import Header from "./Header";
import Footer from "./Footer";
import MenuLine from "./MenuLine";
import Menu from "./Menu";

const App = () => {
  return (
    <div className="flex flex-col gap-40">
      <Header />
      <MenuLine />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;