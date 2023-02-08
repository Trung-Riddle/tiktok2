import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : (route.layout || DefaultLayout)
          const Page = route.component
          return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
