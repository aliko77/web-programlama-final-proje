import ReactDOM from "react-dom/client";
import App from "./components/App";
import RouterProvider from "./providers/RouterProvider";
import { DataProvider } from "./providers/DataProvider";
import "./index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <main className="w-full h-screen">
        <RouterProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </RouterProvider>
      </main>
    </StrictMode>
  </>
);
