import Link from 'next/link';

const categories = [
  { icon: '✨', name: 'Digital Articles', desc: 'In-depth guides and premium knowledge' },
  { icon: '▶', name: 'Video Learning', desc: 'Expert tutorials and masterclasses' },
  { icon: '☕', name: 'Recipes', desc: 'Curated meal plans and cooking guides' },
  { icon: '₿', name: 'Forex', desc: 'Market strategies and trading insights' },
  { icon: '🏠', name: 'Real Estate', desc: 'Property investment guides' },
  { icon: '♦', name: 'Wellness', desc: 'Lifestyle and mindfulness resources' },
];

const products = [
  {
    id: 1,
    name: 'Luxury Property Blueprint',
    category: 'Real Estate',
    price: 149,
    badge: 'Best Seller',
    desc: 'Complete guide to evaluating high-value real estate opportunities.',
  },
  {
    id: 2,
    name: 'Forex Master Signals Pack',
    category: 'Forex',
    price: 89,
    badge: 'Trending',
    desc: 'Smart market strategy resources and execution frameworks.',
  },
  {
    id: 3,
    name: "Chef's 7-Day Recipe Vault",
    category: 'Recipes',
    price: 64,
    badge: 'New',
    desc: 'Chef-level meals, prep guides, and easy gourmet recipes.',
  },
  {
    id: 4,
    name: 'Business Growth Journal',
    category: 'Articles',
    price: 49,
    badge: "Editor's Pick",
    desc: 'A practical journal for creators, founders, and strategists.',
  },
  {
    id: 5,
    name: 'Digital Marketing Mastery',
    category: 'Articles',
    price: 79,
    badge: 'Popular',
    desc: 'Complete guide to modern digital marketing strategies.',
  },
  {
    id: 6,
    name: 'Video Production Essentials',
    category: 'Video Learning',
    price: 99,
    badge: 'Best Value',
    desc: 'Learn professional video production from the ground up.',
  },
];

const features = [
  {
    title: 'Curated excellence',
    desc: 'Every item is reviewed for quality, trust, and relevance.',
  },
  {
    title: 'Secure checkout',
    desc: 'Fast and safe transactions designed for effortless buying.',
  },
  {
    title: 'Global access',
    desc: 'Access premium digital products from anywhere in the world.',
  },
];

const testimonials = [
  {
    quote: 'The experience feels premium from start to finish. Clean, simple, and genuinely inspiring.',
    author: 'Aisha M.',
    role: 'Creative Founder',
  },
  {
    quote: 'I found exactly what I needed in minutes. The catalog feels carefully curated, not cluttered.',
    author: 'Daniel K.',
    role: 'Investor',
  },
  {
    quote: 'The design and trust signals make shopping feel seamless and elevated.',
    author: 'Nia T.',
    role: 'Lifestyle Brand',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          <div className="logo">
            <div className="logo-mark">V</div>
            <div className="logo-text">
              <div className="logo-name">Veloura</div>
              <div className="logo-tag">Market</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#categories">Categories</a>
            <a href="#featured">Featured</a>
            <a href="#stories">Stories</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-ghost">Log in</button>
            <Link href="/cart" className="btn btn-primary">Cart</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ gridColumn: '1 / -1' }}>
          <div className="hero" style={{ gridColumn: 'unset' }}>
            <div className="hero-copy">
              <span className="eyebrow">Premium discovery</span>
              <h1>Buy the things that shape your next chapter.</h1>
              <p>
                Discover boutique articles, video lessons, recipe experiences, forex guidance,
                real-estate resources, and wellness tools—all in one elevated marketplace.
              </p>

              <div className="hero-actions">
                <Link href="#featured" className="btn btn-primary btn-lg">Explore catalog</Link>
                <a href="#featured" className="btn btn-secondary btn-lg">View best sellers</a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-value">12k+</div>
                  <div className="stat-label">happy shoppers</div>
                </div>
                <div className="stat">
                  <div className="stat-value">240+</div>
                  <div className="stat-label">curated products</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4.9/5</div>
                  <div className="stat-label">average rating</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-tag">✨ Top pick</div>
                <h3>Property Growth Kit</h3>
                <p>Actionable insights for smart property investments and market opportunities.</p>
                <div className="hero-card-action">
                  <div className="hero-card-price">$129</div>
                  <button className="hero-card-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Shop by category</span>
            <h2>Curated just for your next move.</h2>
          </div>

          <div className="grid grid-3">
            {categories.map((cat, i) => (
              <div key={i} className="category-card">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <a href="#featured">Browse →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" id="featured">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Featured picks</span>
            <h2>Most loved this week.</h2>
          </div>

          <div className="grid grid-4">
            {products.map((prod) => (
              <div key={prod.id} className="card">
                <div style={{ height: '200px', borderRadius: '18px', background: `linear-gradient(135deg, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2), rgba(20, 28, 36, 0.9))`, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  {prod.icon || '🎁'}
                </div>
                <span className="badge badge-gold" style={{ marginBottom: '12px' }}>{prod.badge}</span>
                <span className="card-category">{prod.category}</span>
                <h3 className="card-title">{prod.name}</h3>
                <p className="card-desc">{prod.desc}</p>
                <div className="card-footer">
                  <div className="card-price">${prod.price}</div>
                  <button className="card-action">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-title" style={{ maxWidth: '600px', marginBottom: '60px' }}>
            <span className="eyebrow">Why Veloura</span>
            <h2>Built for modern shopping, without the clutter.</h2>
          </div>

          <div className="grid grid-3">
            {features.map((feat, i) => (
              <div key={i} className="feature-card">
                <div className="feature-dot"></div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="stories">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">Customer stories</span>
            <h2>People shop with clarity and confidence.</h2>
          </div>

          <div className="grid grid-3">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>"{item.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container-small">
          <div style={{
            background: 'linear-gradient(135deg, rgba(214, 176, 109, 0.1), rgba(121, 215, 212, 0.08))',
            border: '1px solid var(--card-border)',
            borderRadius: '28px',
            padding: '40px',
            textAlign: 'center',
          }}>
            <span className="eyebrow">Stay inspired</span>
            <h2 style={{ marginBottom: '24px' }}>Get fresh drops and curated finds in your inbox.</h2>
            <form style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '14px 16px',
                  borderRadius: '999px',
                  border: '1px solid var(--card-border)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  color: 'var(--text)',
                }}
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <div className="logo-mark">V</div>
              <div className="logo-text">
                <div className="logo-name">Veloura</div>
                <div className="logo-tag">Market</div>
              </div>
            </div>

            <div className="footer-links">
              <a href="#">Support</a>
              <a href="#">Shipping</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-copyright">
              © 2024 Veloura Market. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
