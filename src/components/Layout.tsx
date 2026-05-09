import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="bg-cream min-h-screen text-text-primary cursor-none selection:bg-accent/20 selection:text-dark-card relative font-sans">
      <ScrollToTop />
      <CustomCursor />
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
