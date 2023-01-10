import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import MasterLayout from "./Layouts/MasterLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import Careers, { careersLoader } from "./Pages/Careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./Pages/Careers/CareerDetails";
import CareersError from "./Pages/Careers/CareersError";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
