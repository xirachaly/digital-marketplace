import Link from 'next/link';

const sampleItems = [
  {
    id: 1,
    name: 'Luxury Property Blueprint',
    category: 'Real Estate',
    price: 149,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Forex Master Signals Pack',
    category: 'Forex',
    price: 89,
    quantity: 2,
  },
];

const subtotal = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function CartPage() {
  return (
    <>
      <header className="header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
            <div className="logo-mark">V</div>
            <div className="logo-text">
              <div className="logo-name">Veloura</div>
              <div className="logo-tag">Market</div>
            </div>
          </Link>
          <div style={{ flex: 1 }} />
          <Link href="/" className="btn btn-secondary">← Continue shopping</Link>
        </div>
      </header>

      <main className="container-small" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <h1 style={{ marginBottom: '40px' }}>Your cart</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '30px',
        }}>
          {/* Cart Items */}
          <div>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '30px' }}>
              {sampleItems.map((item) => (
                <div key={item.id} className="card" style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 80px 120px 60px',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                }}>
                  <div style={{
                    width: '100px',
                    height: '80px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, rgba(214, 176, 109, 0.2), rgba(20, 28, 36, 0.9))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}>📦</div>
                  <div>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '1rem' }}>{item.name}</h3>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.category}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '999px',
                    padding: '6px 10px',
                  }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>−</button>
                    <span>{item.quantity}</span>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>+</button>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>${item.price * item.quantity}</div>
                  <button style={{ background: 'none', border: 'none', color: '#ffb1b1', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Order summary</h3>
            <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
              {sampleItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span>{item.name} ×{item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div style={{
              borderTop: '1px solid var(--card-border)',
              paddingTop: '16px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}>
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <Link href="/checkout" className="btn btn-primary btn-full" style={{ display: 'flex' }}>
              Proceed to checkout
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
