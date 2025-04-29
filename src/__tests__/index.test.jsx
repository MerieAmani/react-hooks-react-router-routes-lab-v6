import React from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";
import Movie from "../pages/Movie";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
];

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Home Page")).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Actors Page")).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Directors Page")).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/movie/1"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Inception")).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/bad-route"],
  });

  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Oops! Looks like something went wrong.")).toBeInTheDocument();
});
