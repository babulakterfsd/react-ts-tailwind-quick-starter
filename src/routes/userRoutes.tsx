import { Route } from '@tanstack/react-router';
import About from '../pages/About';
import Counter from '../pages/Counter';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Ongoing from '../pages/Ongoing';
import { rootRoute } from './rootRoute';

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
});

const counterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/counter',
  component: () => <Counter />,
});

const ongoingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/ongoing',
  component: () => <Ongoing />,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <NotFound />,
});

const userRoutes = [
  indexRoute,
  aboutRoute,
  counterRoute,
  ongoingRoute,
  notFoundRoute,
];

export default userRoutes;
