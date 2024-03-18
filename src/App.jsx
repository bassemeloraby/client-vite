import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Calc,
  Cosmotics,
  Courses,
  Drugs,
  Error,
  HomeLayout,
  Insurance,
  Landing,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="/drugs/*" element={<Drugs />} />
          <Route path="/cosmtics" element={<Cosmotics />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/calc" element={<Calc />} />
        </Route>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
