import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes/FrontendRoutes";
import Loader from "../../ui/loader/Loader";
import PageNotFound from "../../ui/404/PageNotFound";

const BlankLayout = () => {
  return (
    <>
      <h3>Header component</h3>
      <Suspense fallback={<Loader />}>
        <Routes>
          {Array.isArray(routes) &&
            routes.map((route, i) => {
              return (
                <Route
                  key={route?.path + i}
                  path={`${route?.path}`}
                  element={route?.component}
                />
              );
            })}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
      <h3>Footer component</h3>
    </>
  );
};

export default BlankLayout;
