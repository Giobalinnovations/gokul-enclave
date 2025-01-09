import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Gokul Enclave: Economical Housing Units with Modern Facilities.',
  description:
    'Welcome to Gokul Enclave, your gateway to affordable yet comfortable living. Explore thoughtfully designed homes, modern amenities, and a serene environment. Book your dream home today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
