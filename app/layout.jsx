import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'The Linen House - Manufacturer & Supplier of Fabrics & Uniforms',
//   description: 'The Linen House is a distinguished manufacturer & supplier of a broad range of fabrics, hospital linen, corporate uniforms, industrial wears, and more with extensive customization options.',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}