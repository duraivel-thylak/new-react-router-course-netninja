import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

import Breadcrumbs from "../Components/Breadcrumbs";

export default function MasterLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>React Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
