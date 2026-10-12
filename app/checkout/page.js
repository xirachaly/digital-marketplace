import Link from 'next/link';

const categories = [
  { icon: '✦', name: 'Market Intel', desc: 'Sharp strategies and refined financial insight for high-value decisions.' },
  { icon: '▣', name: 'Video Mastery', desc: 'Elevated teaching designed for fast, focused growth and clarity.' },
  { icon: '✧', name: 'Private Recipes', desc: 'Curated culinary experiences for effortless luxury at home.' },
  { icon: '◌', name: 'Forex Edge', desc: 'Measured, informed market frameworks for confident execution.' },
  { icon: '⌂', name: 'Property Playbooks', desc: 'Precise property intel for smarter, higher-conviction buying.' },
  { icon: '◎', name: 'Wellness Rituals', desc: 'Intentional lifestyle tools that support balance and depth.' },
];

const products = [
  {
    id: 1,
    name: 'Private Property Playbook',
    category: 'Real Estate',
    price: 149,
    badge: 'Collector Pick',
    desc: 'A premium guide to evaluating high-value property opportunities with precision.',
    tone: 'linear-gradient(135deg, rgba(213,177,114,0.2), rgba(255,255,255,0.04))',
    glyph: '⌂',
  },
  {
    id: 2,
    name: 'Forex Edge Blueprint',
    category: 'Forex',
    price: 89,
    badge: 'Trending',
    desc: 'Smart frameworks for mastering market timing and strategy execution.',
    tone: 'linear-gradient(135deg, rgba(122,136,255,0.18), rgba(255,255,255,0.04))',
    glyph: '◌',
  },
  {
    id: 3,
    name: 'Maison Recipe Vault',
    category: 'Recipes',
    price: 64,
    badge: 'New',
    desc: 'Polished, chef-inspired recipes built for elevated daily living.',
    tone: 'linear-gradient(135deg, rgba(213,177,114,0.12), rgba(255,255,255,0.04))',
    glyph: '✧',
  },
  {
    id: 4,
    name: 'Brand Growth Journal',
    category: 'Articles',
    price: 49,
    badge: 'Editor’s Pick',
    desc: 'A practical system for founders and creators building intentional growth.',
    tone: 'linear-gradient(135deg, rgba(162,129,255,0.18), rgba(255,255,255,0.04))',
    glyph: '✦',
  },
  {
    id: 5,
    name: 'Digital Growth Framework',
    category: 'Articles',
    price: 79,
    badge: 'Popular',
    desc: 'A premium roadmap for modern strategy, content, and conversion systems.',
    tone: 'linear-gradient(135deg, rgba(120,226,193,0.14), rgba(255,255,255,0.04))',
    glyph: '▣',
  },
  {
    id: 6,
    name: 'Studio Production Kit',
    category: 'Video Learning',
    price: 99,
    badge: 'Best Value',
    desc: 'Learn to create polished, premium content with a clearer creative system.',
    tone: 'linear-gradient(135deg, rgba(255,160,120,0.14), rgba(255,255,255,0.04))',
    glyph: '▶',
  },
];

const features = [
  { title: 'Curated excellence', desc: 'Each release is selected for quality, trust, and true value.' },
  { title: 'Private checkout', desc: 'A clean, secure flow made for effortless purchases and instant access.' },
  { title: 'Worldwide access', desc: 'Luxury digital knowledge for buyers everywhere, without friction.' },
];

const testimonials = [
  { quote: 'It feels premium from the first click to the final download. That kind of polish is rare.', author: 'Aisha M.', role: 'Creative Founder' },
  { quote: 'The experience feels thoughtful, elevated, and genuinely made for people who value quality.', author: 'Daniel K.', role: 'Investor' },
  { quote: 'Everything feels curated. I found exactly what I needed without the usual clutter.', author: 'Nia T.', role: 'Lifestyle Brand' },
];

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          <div className="logo">
            <div className="logo-mark">G</div>
            <div className="logo-text">
              <div className="logo-name">GIOVANNY</div>
              <div className="logo-tag">Inc</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#categories">Collections</a>
            <a href="#featured">Featured</a>
            <a href="#stories">Journal</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-ghost">Private access</button>
            <Link href="/checkout" className="btn btn-primary">Cart</Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container" style={{ gridColumn: '1 / -1' }}>
          <div className="hero" style={{ gridColumn: 'unset' }}>
            <div className="hero-copy">
              <span className="eyebrow">Luxury digital marketplace</span>
              <h1>Elevated essentials for the life you’re building.</h1>
              <p>
                Discover premium articles, masterclasses, financial insight, property strategies,
                and lifestyle tools—carefully selected for a sharper, richer next chapter.
              </p>

              <div className="hero-actions">
                <Link href="#featured" className="btn btn-primary btn-lg">Explore collection</Link>
                <a href="#featured" className="btn btn-secondary btn-lg">View bestsellers</a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-value">12k+</div>
                  <div className="stat-label">private clients</div>
                </div>
                <div className="stat">
                  <div className="stat-value">240+</div>
                  <div className="stat-label">curated assets</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4.9/5</div>
                  <div className="stat-label">client rating</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-tag">✦ Curator’s pick</div>
                <h3>Property Growth Kit</h3>
                <p>Actionable guidance for sharper property decisions and high-conviction investments.</p>
                <div className="hero-card-action">
                  <div className="hero-card-price">$129</div>
                  <button className="hero-card-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Shop by focus</span>
            <h2>Thoughtful picks for your next move.</h2>
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

      <section className="section" id="featured">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Featured collection</span>
            <h2>Most loved this week.</h2>
          </div>

          <div className="grid grid-4">
            {products.map((prod) => (
              <div key={prod.id} className="card">
                <div
                  style={{
                    height: '200px',
                    borderRadius: '18px',
                    background: prod.tone,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.2rem',
                    marginBottom: '16px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {prod.glyph}
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

      <section className="section" id="about">
        <div className="container">
          <div className="section-title" style={{ maxWidth: '640px', marginBottom: '60px' }}>
            <span className="eyebrow">Why GIOVANNY</span>
            <h2>Luxury without the noise.</h2>
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

      <section className="section" id="stories">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">Client notes</span>
            <h2>People come for the value and stay for the experience.</h2>
          </div>

          <div className="grid grid-3">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-small">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(213, 177, 114, 0.12), rgba(255, 255, 255, 0.02))',
              border: '1px solid var(--card-border)',
              borderRadius: '28px',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <span className="eyebrow">Private updates</span>
            <h2 style={{ marginBottom: '24px' }}>Receive the next curated drop before everyone else.</h2>
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
              <button type="submit" className="btn btn-primary">Join list</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <div className="logo-mark">G</div>
              <div className="logo-text">
                <div className="logo-name">GIOVANNY</div>
                <div className="logo-tag">Inc</div>
              </div>
            </div>

            <div className="footer-links">
              <a href="#">Support</a>
              <a href="#">Shipping</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-copyright">© 2024 GIOVANNY Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
