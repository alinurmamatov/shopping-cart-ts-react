import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, incrementQuantity, decrementQuantity, removeItem } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="h-100" style={{ boxShadow: "5px 5px 8px lightgrey" }}>
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{
            objectFit: "cover",
            height: "400px",
            borderBottom: "1px solid #e8e8e8",
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-5">{name}</span>
            <span className="fs-6 ms-2 text-muted">
              {formatCurrency(price)}
            </span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="d-block m-auto"
                variant="light"
                onClick={() => incrementQuantity(id)}
              >
                +Add to Cart
              </Button>
            ) : (
              <div
                className="d-flex flex-column align-items-center"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    variant="outline-secondary"
                    style={{ width: "2.3rem" }}
                    onClick={() => decrementQuantity(id)}
                  >
                    -
                  </Button>
                  <span className="fs-5">{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    style={{ width: "2.3rem" }}
                    onClick={() => incrementQuantity(id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default StoreItem;
