import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ShowcasePage } from './pages/ShowcasePage';
import { PricingPage } from './pages/PricingPage';
import { BriefingPage } from './pages/BriefingPage';

// Service Pages
import { WebDevelopment } from './pages/services/WebDevelopment';
import { GraphicDesign } from './pages/services/GraphicDesign';
import { SEOAnalytics } from './pages/services/SEOAnalytics';
import { VideoMotion } from './pages/services/VideoMotion';
import { AppDevelopment } from './pages/services/AppDevelopment';
import { AutomationSystems } from './pages/services/AutomationSystems';
import { ScrollToTop } from './components/ScrollToTop';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const } },
};

// Top loading bar — teal accent line at top of screen during navigation
function LoadingBar({ locationKey }: { locationKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey + '-bar'}
        className="fixed top-0 left-0 z-[999] h-[2.5px] bg-accent pointer-events-none"
        initial={{ width: '0%', opacity: 1 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ width: { duration: 0.38, ease: 'easeOut' }, opacity: { delay: 0.1, duration: 0.25 } }}
      />
    </AnimatePresence>
  );
}

// Animated pages wrapper — must be inside BrowserRouter
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <LoadingBar locationKey={location.key} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="solutions" element={<SolutionsPage />} />
              <Route path="showcase" element={<ShowcasePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="briefing" element={<BriefingPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="product" element={<ProductPage />} />

              {/* Service Routes */}
              <Route path="services/web-development"   element={<WebDevelopment />} />
              <Route path="services/graphic-design"    element={<GraphicDesign />} />
              <Route path="services/seo-analytics"     element={<SEOAnalytics />} />
              <Route path="services/video-motion"      element={<VideoMotion />} />
              <Route path="services/app-development"   element={<AppDevelopment />} />
              <Route path="services/automation-systems" element={<AutomationSystems />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
