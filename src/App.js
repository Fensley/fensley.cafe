import { Routes, Route, Link } from "react-router-dom";
import Cart from "./compoment/Cart";
import Delivery from "./compoment/Delivery";
import Press from "./compoment/Press";
import About from "./compoment/About";
import imag from "./data/fenscafe.avif";
import { useState } from "react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Box />} />

      <Route
        path="/menu"
        element={
          <>
            <section>
              <Main />
              <div className="sectwo">
                <Menu />
                <MenuItem />
                <div className="Menu-img">
                  <img
                    src="https://images.unsplash.com/photo-1657313666513-70770d329ef4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="coffe"
                    className="twocoffe"
                  />
                </div>
              </div>
              <Footer />
            </section>
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <section>
              <Main />
              <About />
              <Footer />
            </section>
          </>
        }
      />

      <Route
        path="/press"
        element={
          <>
            <section>
              <Main />
              <Press />
              <Footer />
            </section>
          </>
        }
      />

      <Route
        path="/delivery"
        element={
          <>
            <section>
              <Main />
              <Delivery />
              <Footer />
            </section>
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <section>
              <Main />
              <Cart />
              <Footer />
            </section>
          </>
        }
      />
    </Routes>
  );
}

function Box() {
  return (
    <section>
      <Main />
      <Forimg />
      <Discover />
      <Menu />
      <MenuItem />
      <Footer />
    </section>
  );
}

function Main() {
  return (
    <nav>
      <div className="main1">
        <div className="main">
          <p>
            <Link to={"/"}>Main</Link>
          </p>
        </div>

        <div className="about-sec">
          <p>
            <Link to={"/menu"}>Menu</Link>
          </p>
          <p>
            <Link to={"/about"}>Shop</Link>
          </p>

          <p className="press">
            <Link to={"/press"}>Press</Link>
          </p>
        </div>

        <div className="deli-sec">
          <p className="delivery">
            <Link to={"/delivery"}>Delivery</Link>
          </p>
          <p>
            <Link to={"/cart"}>Cart (3)</Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

function Forimg() {
  return (
    <div className="img-center">
      <p className="serenity"> Touché Brew</p>
      <img src={imag} alt="model" height="100" />
    </div>
  );
}

function Discover() {
  return (
    <div className="discover-ctn">
      <Welcome />
      <DiscoverData />
      <DiscoverButton />
    </div>
  );
}

function Welcome() {
  return (
    <div className="disc-child1">
      <p className="cozy">- Cozy -</p>
      <h1 className="discover">
        Discover Our Charming Café <br /> Experience
      </h1>
      <p className="welcome">
        Welcome to our cozy café shop, where you can relax, enjoy delicious food
        and drinks, and connect with friends. With our free Wi-Fi, pet-friendly
        environment, and outdoor seating, we offer the perfect setting for a
        memorable café experience.
      </p>
    </div>
  );
}

function DiscoverData() {
  return (
    <div className="disco-second-child">
      <DataOne />
      <DataTwo />
      <DataTwee />
    </div>
  );
}

function DataOne() {
  return (
    <div className="one-d">
      <i className="fa-solid fa-wifi"></i>
      <h2 className="thish2"> Free Wi-Fi</h2>
      <p> Stay connected with our complimentary Wi-Fi service.</p>
    </div>
  );
}

function DataTwo() {
  return (
    <div className="one-d">
      <i className="fa-solid fa-cat"></i>
      <h2 className="thish2">Pet-friendly</h2>
      <p>
        Bring your furry friends along and enjoy our pet-friendly atmosphere.
      </p>
    </div>
  );
}

function DataTwee() {
  return (
    <div className="one-d">
      <i className="fa-solid fa-couch"></i>
      <h2 className="thish2">Outdoor Seating</h2>
      <p>Relax and soak up the sun in our comfortable outdoor seating area.</p>
    </div>
  );
}

function DiscoverButton() {
  return (
    <div className="discover-action">
      <button className="btn1">Learn More</button>
      <button className="btn2">
        Order <i className="fa-solid fa-chevron-right"></i>{" "}
      </button>
    </div>
  );
}

function Menu() {
  return (
    <h1 className="our" id="menu">
      Our Menu
    </h1>
  );
}

function MenuItem() {
  const [first, setFirst] = useState("coffee");

  function handlefirst() {
    setFirst("coffee");
  }
  function handlesecond() {
    setFirst("tea");
  }

  function handlethird() {
    setFirst("cocoa");
  }

  function handlefouth() {
    setFirst("summer");
  }

  return (
    <div className="menu">
      <MenuDrink
        handlefirst={handlefirst}
        handlesecond={handlesecond}
        handlethird={handlethird}
        handlefouth={handlefouth}
      />
      <MenuName first={first} />
    </div>
  );
}

function MenuDrink({ handlefirst, handlesecond, handlethird, handlefouth }) {
  return (
    <div className="menu-drinks">
      <p onClick={handlefirst}>Coffee(8) / </p>
      <p onClick={handlesecond}>Tea(5) /</p>
      <p onClick={handlethird}>Cocoa(8) / </p>
      <p onClick={handlefouth}>Summer(12)</p>
    </div>
  );
}

function MenuName({ first }) {
  return (
    <div className="menu-items">
      {(first === "coffee" && <CoffeeList />) ||
        (first === "tea" && <TeaList />) ||
        (first === "cocoa" && <Cocoa />) ||
        (first === "summer" && <Summer />)}
    </div>
  );
}

function CoffeeList() {
  return (
    <>
      <LongBar />
      <div className="drinkname">
        <p>Filter coffee {"..."}</p>
        <p>Macchiato</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Americano {"..."}</p>
        <p>Mocco</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Capuccino {"..."}</p>
        <p>Chocolate </p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p className="latte">
          Latte
          <span className="latte-span">45/60/90 ml</span>
        </p>
        <p>Doppio</p>
      </div>
      <LongBar />
    </>
  );
}

function TeaList() {
  return (
    <>
      <LongBar />
      <div className="drinkname">
        <p>Earl Grey {"..."}</p>
        <p>Darjeeling</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Matcha {"..."}</p>
        <p>Jasmine Green tea</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Chamomile {"..."}</p>
        <p>Oolong </p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p className="latte">
          Rooibos
          <span className="latte-span">45/60/90 ml</span>
        </p>
        <p>Peppermint</p>
      </div>
      <LongBar />
    </>
  );
}

function Cocoa() {
  return (
    <>
      <LongBar />
      <div className="drinkname">
        <p>Criollo {"..."}</p>
        <p>Forastero</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Trinitario {"..."}</p>
        <p>Nacional</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Porcelana {"..."}</p>
        <p>Arriba</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p className="latte">
          Amelonado
          <span className="latte-span">45/60/90 ml</span>
        </p>
        <p>Ocumare</p>
      </div>
      <LongBar />
    </>
  );
}

function Summer() {
  return (
    <>
      <LongBar />
      <div className="drinkname">
        <p>Lemonade {"..."}</p>
        <p>Iced Tea</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Mojito {"..."}</p>
        <p>Pina Colada</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p>Watermelon Juice {"..."}</p>
      </div>
      <LongBar />
      <div className="drinkname">
        <p className="latte">
          Mango Lassi
          <span className="latte-span">45/60/90 ml</span>
        </p>
      </div>
      <LongBar />
    </>
  );
}

function LongBar() {
  return <div className="long-bar"></div>;
}
function Footer() {
  return (
    <footer>
      <div className="forall">
        <ForallData />
        <div className="last">
          <p>© 2024 Fensley Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ForallData() {
  return (
    <div className="main1 main2">
      <div>
        <p className="fensco">
          <Link to="/">Fens.co</Link>
        </p>
      </div>

      <div className="about-sec">
        <p>
          <Link to={"/about"}>About Us</Link>
        </p>
        <p>
          <Link to={"/"}>Contact Us</Link>
        </p>
        <p>
          <Link to={"/"}>Event</Link>
        </p>
      </div>

      <div className="deli-sec">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-solid fa-x"></i>
      </div>
    </div>
  );
}
