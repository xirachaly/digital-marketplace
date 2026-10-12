import './globals.css';

export const metadata = {
  title: 'Veloura Market - Premium Digital Marketplace',
  description: 'Discover premium articles, videos, recipes, forex guides, and real estate resources',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
