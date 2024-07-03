import "../style/Delivery.css";

export default function Delivery() {
  return (
    <div className="delivery-ctn">
      <div className="fensbrew">
        <div className="forbold">Fensley brew Café Delivery Service</div>
        <p className="enjoy">
          Enjoy the delightful flavors of Brew & Bloom Café from the comfort of
          your home or office! Located at 123 Elm Street, New York, NY 10001, we
          bring our delicious coffee, pastries, and more directly to your door.
        </p>
        <p className="howits forbold">How It Works ?</p>
      </div>
      <div className="delivery-item">
        <div className="first-row">
          <ol>
            <li>
              <span className="forbold"> Browse Our Menu:</span> Explore our
              full menu of freshly brewed coffees, handcrafted espresso drinks,
              and delectable pastries on our website.
            </li>
            <li>
              <span className="forbold"> Place Your Order:</span> Select your
              favorite items and place your order online or by phone at (555)
              123-4567. We offer convenient ordering options to suit your needs.
            </li>
            <li>
              <span className="forbold">Fast Delivery:</span> Our dedicated
              delivery team ensures your order arrives promptly and in perfect
              condition, so you can enjoy your fensley brew favorites without
              leaving your space.
            </li>
          </ol>

          <div>
            <p className="forbold deliveryhours">Delivery Hours</p>
            <ul>
              <li>Monday to Friday: 7:00 AM - 7:00 PM</li>
              <li>Saturday and Sunday: 8:00 AM - 5:00 PM</li>
            </ul>
          </div>

          <div>
            <p className="forbold deliveryarea">Delivery Areas</p>
            <p>
              We proudly serve the greater New York City area. Check our website
              for a detailed map of our delivery zones.
            </p>
          </div>
        </div>
        <div className="second-row">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cafe"
            className="deliveryimage"
          />
        </div>
      </div>
      <Special />
    </div>
  );
}

function Special() {
  return (
    <div className="special-delivery">
      <h1 className="offer"> Special Offers</h1>
      <p>
        Sign up for our newsletter and follow us on social media to stay updated
        on exclusive delivery discounts and promotions.
      </p>
      <div>
        <input placeholder="Enter your email" />

        <button className="delivery-btn">Sign up</button>
      </div>
    </div>
  );
}
