import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
} from "react-icons/md";

// Admin Imports
import DataTables from "views/admin/dataTables";
import Industry from "./views/industry";
import Client from "./views/client";

const routes = [
  {
    name: "Employees",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Industry",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/industry",
    component: Industry,
  },
  {
    name: "Client",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/client",
    component: Client,
  }
];

export default routes;
