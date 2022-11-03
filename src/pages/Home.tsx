import { Card } from "react-bootstrap";
import bookWallpaper from "../assets/jpg/home-books-wallpaper.jpg";

function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Card
          className="h-100"
          style={{
            boxShadow: "5px 8px 15px #e0e0e0",
            width: "50%",
            height: "50vh",
            overflow: "hidden",
          }}
        >
          <Card.Img
            src={bookWallpaper}
            variant="left"
            style={{
              objectFit: "cover",
              height: "50vh",
            }}
          />
        </Card>
        <Card
          style={{
            boxShadow: "5px 8px 15px #e0e0e0",
            width: "50%",
            height: "50vh",
          }}
        >
          <Card.Title className="text-center mt-5 fs-3">
            The best friend of People
          </Card.Title>
          <Card.Text className="p-5">
            Books are our best friends because they inspire us to do great
            things in life and overcome our failures. We learn a lot from good
            books just like a good friend. Books can be good or bad, but it is
            our responsibility to choose them wisely.
          </Card.Text>
        </Card>
      </div>
    </>
  );
}

export default Home;
