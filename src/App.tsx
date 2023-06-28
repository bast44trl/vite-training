import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import { Select } from './components/Select/Select';
import './app.css';

const BeforeAfter = React.lazy(() => import('./components/BeforeAfter/BeforeAfter'));
const TestCSS = React.lazy(() => import('./components/testCss/TestCSS'));
const CalculateSalary = React.lazy(() => import('./components/CalculateSalary/CalculateSalary'));
const CssAnimations = React.lazy(() => import('./components/CssAnimations/CssAnimations'));
const Random = React.lazy(() => import('./components/Random/Random'));

// select options
const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="select"
          element={
            <React.Suspense fallback={<>...</>}>
              <Select options={options} value={value} onChange={(o) => setValue(o)} />
            </React.Suspense>
          }
        />
        <Route
          path="beforeAfter"
          element={
            <React.Suspense fallback={<>...</>}>
              <BeforeAfter />
            </React.Suspense>
          }
        />
        <Route
          path="testCss"
          element={
            <React.Suspense fallback={<>...</>}>
              <TestCSS />
            </React.Suspense>
          }
        />
        <Route
          path="calculateSalary"
          element={
            <React.Suspense fallback={<>...</>}>
              <CalculateSalary />
            </React.Suspense>
          }
        />
        <Route
          path="cssAnimations"
          element={
            <React.Suspense fallback={<>...</>}>
              <CssAnimations />
            </React.Suspense>
          }
        />
        <Route
          path="random"
          element={
            <React.Suspense fallback={<>...</>}>
              <Random />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="layout">
      <nav>
        <ul className="menu">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/select">
              Select
            </Link>
          </li>
          <li>
            <Link className="link" to="/testCSS">
              TestCSS
            </Link>
          </li>
          <li>
            <Link className="link" to="/beforeAfter">
              ::before/::after
            </Link>
          </li>
          <li>
            <Link className="link" to="/calculateSalary">
              Calculate Salary
            </Link>
          </li>
          <li>
            <Link className="link" to="/cssAnimations">
              CSS Animations
            </Link>
          </li>
          <li>
            <Link className="link" to="/random">
              Random stuff
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
