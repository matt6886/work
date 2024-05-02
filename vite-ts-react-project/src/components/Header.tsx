import useCart from "../hooks/useCart";
import Nav from "./Nav";

type PropsType = {
  cartView: boolean;
  setCartView: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ cartView, setCartView }: PropsType) {
  const { totalItems, totalPrice } = useCart();
  const Content = (
    <header className="header">
      <div className="header__title-tag">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Item: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav cartView={cartView} setCartView={setCartView} />
    </header>
  );
  return Content;
}
