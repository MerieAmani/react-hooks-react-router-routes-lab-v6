import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Directors from "../pages/Directors";

const routes = [
  {
    path: "/directors",
    element: <Directors />,
  },
];

test("renders 'Directors Page' inside of an <h1>", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Directors Page")).toBeInTheDocument();
});
