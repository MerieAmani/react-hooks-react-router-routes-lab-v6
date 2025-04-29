import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Actors from "../pages/Actors";

const routes = [
  {
    path: "/actors",
    element: <Actors />,
  },
];

test("renders 'Actors Page' inside of an <h1>", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Actors Page")).toBeInTheDocument();
});
