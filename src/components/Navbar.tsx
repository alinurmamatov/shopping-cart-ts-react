import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import { ReactComponent as CartIcon } from "../assets/svg/shopping-cart.svg";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <NavbarBS sticky="top" className="bg-white shadow-sm mb-4 mt-1 pb-2">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-secondary"
            style={{
              position: "relative",
              width: "4rem",
              height: "3rem",
              textAlign: "center",
            }}
            onClick={openCart}
          >
            {/* <CartIcon /> */}
            Cart
            {cartQuantity > 0 && (
              <span
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  transform: "translate(45%, -30%)",
                }}
              >
                {cartQuantity}
              </span>
            )}
          </Button>
        </Container>
      </NavbarBS>
    </>
  );
}

export default Navbar;
