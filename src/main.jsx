import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./Components/Resume.jsx";
import Blogs from "./Components/Blogs.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Portpolio from "./Components/Portpolio.jsx";
const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/about", element: <About/> },
  { path: "/resume", element: <Resume /> },
  { path: "/portfolio", element: <Portpolio/> },
  { path: "/blog", element: <Blogs /> },
  { path: "/contact", element: <Contact/> },

  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
