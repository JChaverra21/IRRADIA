import { lazy, Suspense } from "react";

import Button from "./components/Button.jsx";
import CarouselServices from "./components/CarouselServices.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Page404 from "./pages/404.jsx";
import SearchPage from "./pages/Search.jsx";
import WhatsApp from "./components/WhatsApp.jsx";

import { Router } from "./components/Router.jsx";
import { Route } from "./components/Route.jsx";

const LazyHomePage = lazy(() => import("./pages/Home.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazyServicesPage = lazy(() => import("./pages/Service.jsx"));
const LazyProductsPage = lazy(() => import("./pages/Product.jsx"));

const appRoutes = [
  {
    path: "/:lang/about",
    Component: LazyAboutPage,
  },
  {
    path: "/:lang/services",
    Component: LazyServicesPage,
  },
  {
    path: "/:lang/products",
    Component: LazyProductsPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Navbar />

      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route
            path="/"
            Component={(props) => (
              <LazyHomePage
                {...props}
                carouselServices={<CarouselServices />}
                button={<Button />}
              />
            )}
          />
          <Route path="/services" Component={LazyServicesPage} />
          <Route path="/products" Component={LazyProductsPage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>

      <WhatsApp />
      <Footer />
    </main>
  );
}

export default App;
