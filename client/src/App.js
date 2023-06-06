import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes";

const SignIn = lazy(() => import("./pages/signin"));
const OrderList = lazy(() => import("./pages/orderlist"));
const NewOrder = lazy(() => import("./pages/newOrder"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading....</p>}>
        <Routes>
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.ORDERLIST} element={<OrderList />} />
          <Route path={ROUTES.NEWORDER} element={<NewOrder />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
