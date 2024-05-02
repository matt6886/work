type PropsType = {
  cartView: boolean;
  setCartView: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({ cartView, setCartView }: PropsType) {
  const button = cartView ? (
    <button onClick={() => setCartView(false)}>View Products</button>
  ) : (
    <button onClick={() => setCartView(true)}>View Cart</button>
  );
  const content = <nav className="nav">{button}</nav>;
  return content;
}
