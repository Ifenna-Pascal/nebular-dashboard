import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/navbar';

export const metadata: Metadata = {
  title: 'Nebular',
  description: 'Dasboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-200 relative">
        <NavBar />
        <div className="absolute right-0 circle"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
