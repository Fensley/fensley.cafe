import "../style/About.css";
import aboutImge from "../data/about.jpg";
export default function About() {
  return (
    <>
      <Details />
      <Adress />
    </>
  );
}
function Details() {
  return (
    <div className="shop-about">
      <img src={aboutImge} alt="shop" className="shopimage" />

      <div className="shop-about-data">
        <p>
          Welcome to Fensley brew, your cozy corner in the heart of New York
          City. Nestled at 123 Elm Street, we have been a beloved gathering spot
          for coffee enthusiasts and casual sippers alike for the past five
          years.
        </p>
        <p className="second-para-about">
          {" "}
          Since opening our doors in 2019, Fensley brew has been dedicated to
          providing a warm and inviting atmosphere where you can enjoy
          exceptional coffee, delicious pastries, and a friendly smile. Our
          baristas are passionate about their craft and committed to creating
          the perfect cup of coffee just for you. From a rich, velvety espresso
          to a refreshing iced latte, we have something to satisfy every palate.
        </p>

        <p>
          But we're more than just great coffee. We believe in community and
          strive to be a place where friends can meet, ideas can spark, and
          everyone feels at home. Our menu features locally sourced ingredients
          and freshly baked goods, ensuring that every visit to Brew & Bloom
          Café is a delightful experience.
        </p>

        <p>
          {" "}
          Thank you for being a part of our journey. Whether you're stopping by
          for your morning pick-me-up, a midday break, or an afternoon treat,
          we're here to make your day a little brighter. Come visit us at 123
          Elm Street, New York, NY, and discover why Fensley brew Café has been
          a cherished part of the neighborhood for the last five years.
        </p>
      </div>
    </div>
  );
}
function Adress() {
  return (
    <div className="adress">
      <p>Visit us @</p>
      <p className="elm">123 Elm Street, New York, NY 10001</p>
    </div>
  );
}
