import './globals.css';

export const metadata = {
  title: 'GIOVAVVY Inc | Luxury Digital Marketplace',
  description: 'Discover premium articles, videos, forex insight, property strategy, and elevated lifestyle resources from GIOVAVVY Inc.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
