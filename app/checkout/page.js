'use client';

import { useState } from 'react';
import Link from 'next/link';

const sampleItems = [
  {
    id: 1,
    name: 'Private Property Playbook',
    category: 'Real Estate',
    price: 149,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Forex Edge Blueprint',
    category: 'Forex',
    price: 89,
    quantity: 2,
  },
];

const subtotal = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <header className="header">
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
            <Link href="/" className="logo">
              <div className="logo-mark">G</div>
              <div className="logo-text">
                <div className="logo-name">GIOVAVVY</div>
                <div className="logo-tag">Inc</div>
              </div>
            </Link>
          </div>
        </header>

        <main className="container-small" style={{ paddingTop: '60px', paddingBottom: '80px', textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: '60px 42px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✓</div>
            <h1 style={{ marginBottom: '16px' }}>Your access is ready.</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
              Thank you, {formData.fullName}. Your premium order has been confirmed.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>
              Your digital collection is now available in your inbox at <strong>{formData.email}</strong>.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary">Explore more</Link>
              <button className="btn btn-secondary">Download assets</button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="header">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          <Link href="/" className="logo">
            <div className="logo-mark">G</div>
            <div className="logo-text">
              <div className="logo-name">GIOVAVVY</div>
              <div className="logo-tag">Inc</div>
            </div>
          </Link>
          <div style={{ flex: 1 }} />
          <span style={{ color: 'var(--text-muted)' }}>Private checkout</span>
        </div>
      </header>

      <main className="container-small" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <h1 style={{ marginBottom: '40px' }}>Secure checkout</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Street address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--card-border)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--card-border)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      color: 'var(--text)',
                      fontSize: '1rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--card-border)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      color: 'var(--text)',
                      fontSize: '1rem',
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '24px' }}>
                Complete payment → ${subtotal}
              </button>
            </form>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '24px' }}>Order summary</h3>
            <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
              {sampleItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span>{item.name} ×{item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700 }}>
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
