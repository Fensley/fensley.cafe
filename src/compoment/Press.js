import aboutImge from "../data/press.jpg";
import "../style/About.css";
export default function About() {
  return (
    <>
      <Hub />
      <Details />
      <Adress />
    </>
  );
} 
function Hub() {
  return (
    <div className="hub">
      <h1> ``Your Hub for Community and Connection``</h1>
    </div>
  );
}
function Details() {
  return (
    <div className="shop-about">
      <img src={aboutImge} alt="press" className="pressimage" />

      <div className="shop-about-data">
        <p>
          Every week, we host a variety of events designed to bring people
          together and inspire creativity. Our Brainshare and Network sessions
          are a highlight, offering a unique opportunity for patrons to engage
          in meaningful discussions, share ideas, and expand their professional
          and personal networks. Whether you're a local entrepreneur, a creative
          thinker, or someone looking to connect with like-minded individuals,
          our events provide the perfect platform to collaborate and grow.
        </p>
        <p className="second-para-about">
          {" "}
          We invite members of the press and the community to join us at our
          upcoming events and experience the vibrant atmosphere at Brew & Bloom
          Café. For event schedules and more information, please visit our
          website or contact us directly.
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
          Elm Street, New York, NY.
        </p>
      </div>
    </div>
  );
}
function Adress() {
  return (
    <div className="adress">
      <p>Join Us @</p>
      <p className="elm">123 Elm Street, New York, NY 10001</p>
    </div>
  );
}
