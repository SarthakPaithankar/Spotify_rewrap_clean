import About from './about/page';
import './globals.css';
import Navbar from './components/page';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>My Next.js App</title>
        </head>
        <body>
          <Navbar />
          {}
          {children}
        </body>
      </html>
    );
}