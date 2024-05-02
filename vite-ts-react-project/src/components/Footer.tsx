import useCart from "../hooks/useCart";

type PropsType = {
  cartView: boolean;
};
export default function Footer({ cartView }: PropsType) {
  const { totalItems, totalPrice } = useCart();
  const year = new Date().getFullYear();
  const pageContent = cartView ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Prices: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  );
  const content = <footer>{pageContent}</footer>;

  return content;
}
