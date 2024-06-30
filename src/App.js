export default function App() {
  return <Box />;
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
        <div>
          <p>Main</p>
        </div>

        <div className="about-sec">
          <p id="menu">Menu </p>
          <p>Shop</p>
          <p className="press">Press</p>
        </div>

        <div className="deli-sec">
          <p className="delivery">Delivery</p>
          <p> Cart (5)</p>
        </div>
      </div>
    </nav>
  );
}

function Forimg() {
  return (
    <div className="img-center">
      <p className="serenity"> Fensley brew</p>
      <img
        src="https://images.unsplash.com/photo-1536914629078-6fda32a00cd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="model"
        height="100"
      />
    </div>
  );
}
function Discover() {
  return (
    <div className="discover-ctn">
      <div className="disc-child1">
        <p className="cozy">- Cozy -</p>
        <h1 className="discover">
          Discover Our Charming Café <br /> Experience
        </h1>
        <p className="welcome">
          Welcome to our cozy café shop, where you can relax, enjoy delicious
          food and drinks, and connect with friends. With our free Wi-Fi,
          pet-friendly environment, and outdoor seating, we offer the perfect
          setting for a memorable café experience.
        </p>
      </div>
      {/*  */}
      <div className="disco-second-child">
        <div className="one-d">
          <i className="fa-solid fa-wifi"></i>
          <h2 className="thish2"> Free Wi-Fi</h2>
          <p>Stay connected with our complimentary Wi-Fi service.</p>
        </div>

        <div className="one-d">
          <i className="fa-solid fa-cat"></i>
          <h2 className="thish2"> Pet-friendly</h2>
          <p>
            Bring your furry friends along and enjoy our pet-friendly
            atmosphere.
          </p>
        </div>

        <div className="one-d">
          <i className="fa-solid fa-couch"></i>
          <h2 className="thish2">Outdoor Seating</h2>
          <p>
            Relax and soak up the sun in our comfortable outdoor seating area.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="discover-action">
        <button className="btn1">Learn More</button>
        <button className="btn2">
          Order <i class="fa-solid fa-chevron-right"></i>{" "}
        </button>
      </div>
    </div>
  );
}
function Menu() {
  return <h1 className="our">Our Menu</h1>;
}
function MenuItem() {
  return (
    <div className="menu">
      <div className="menu-drinks">
        <p>Coffee(8) / </p>
        <p>Tea(5) /</p>
        <p>Cocoa(8) / </p>
        <p>Summer(12)</p>
      </div>
      {/*  */}
      <div className="menu-items">
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
            <span className="latte-span">45/60/90 ml</span> {"..."}
          </p>
          <p>Doppio</p>
        </div>
        <LongBar />
      </div>
    </div>
  );
}
function LongBar() {
  return <div className="long-bar"></div>;
}
function Footer() {
  return (
    <footer>
      <div className="forall">
        <div className="main1 main2">
          <div>
            <p className="fensco">Fens.co</p>
          </div>

          <div className="about-sec">
            <p>About Us </p>
            <p>Contact Us</p>
            <p>Event</p>
          </div>

          <div className="deli-sec">
            <i className="fa-brands fa-instagram"></i>
            <i class="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="last">
          <p>© 2024 Fensley Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
