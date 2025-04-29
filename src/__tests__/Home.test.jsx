import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

test("renders 'Home Page' inside of an <h1>", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Home Page")).toBeInTheDocument();
});