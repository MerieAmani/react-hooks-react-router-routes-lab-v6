import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Movie from "../pages/Movie";

const routes = [
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];

test("renders the Movie component with the correct title", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Inception")).toBeInTheDocument();
});
