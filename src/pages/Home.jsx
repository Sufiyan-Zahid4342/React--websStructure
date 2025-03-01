import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Shop</h1>
        <p>Find the best deals here.</p>
        <button>Learn More</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div>
          <h3>📦 Free Shipping</h3>
          <p>On all orders above $50.</p>
        </div>
        <div>
          <h3>💳 Secure Payment</h3>
          <p>100% Secure Transactions.</p>
        </div>
        <div>
          <h3>⚡ Fast Delivery</h3>
          <p>Get products in 2 days.</p>
        </div>
        <div>
          <h3>📞 24/7 Support</h3>
          <p>We are here to help you.</p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="two-column-section">
        <div className="flex-1">
          <h2>Why Choose Us?</h2>
          <p>We provide the best quality products with great service.</p>
          <button>Learn More</button>
        </div>
        <div
          className="flex-1 bg-cover"
          style={{ backgroundImage: "url('/assets/about.jpg')" }}
        >
          <h2>Our Story</h2>
        </div>
      </section>

      {/* Product List */}
      <section className="product-list">
        <h2>Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button>View More</button>
      </section>
    </div>
  );
};

export default Home;