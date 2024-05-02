import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [cartView, setCartView] = useState(false);

  const pageContent = cartView ? <Cart /> : <ProductList />;

  const Content = (
    <>
      <Header cartView={cartView} setCartView={setCartView} />
      {pageContent}
      <Footer cartView={cartView} />
    </>
  );
  return Content;
}

export default App;
