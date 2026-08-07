import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "./components/CommonElement";
import { routes } from "./routes";
import "./App.css";

function App() {
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }

  return (
    <>
      <Suspense
        fallback={
          <div className="js-preloader">
            <div className="loading-animation tri-ring"></div>
          </div>
        }
      >
        <RouteLayout path={routes()} />
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
