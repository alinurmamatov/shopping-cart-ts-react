import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import booksData from "../data/booksData.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useShoppingCart();
  const item = booksData.find((el) => el.id === id);

  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.imgUrl}
          alt={item.name}
          style={{
            height: "7rem",
            objectFit: "cover",
            border: "1px solid lightgrey",
            borderRadius: "3px",
            boxShadow: "3px 2px 6px lightgrey",
          }}
        />

        <div className="me-auto">
          <div>
            <span>{item.name}</span>
            {quantity > 1 && <span className="text-muted"> x{quantity}</span>}
          </div>
          <div className="text-muted">{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>
          &times;
        </Button>
      </Stack>
    </>
  );
}

export default CartItem;
