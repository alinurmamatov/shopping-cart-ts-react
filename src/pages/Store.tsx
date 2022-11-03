import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import booksData from "../data/booksData.json";

function Store() {
  return (
    <>
      <h1 className="text-center m-3">Book Store</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {booksData.map((book) => (
          <Col key={book.id}>
            <StoreItem {...book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
