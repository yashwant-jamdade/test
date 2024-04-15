import { lazy } from "react";

const Dashboard = lazy(() => import("../features/admin/Dashboard"));

export default [
  {
    label: "Dashboard",
    component: <Dashboard />,
    path: "",
    showInMenu: false,
    showInSettings: false,
    roles: ["admin", "superAdmin"],
  },
];
