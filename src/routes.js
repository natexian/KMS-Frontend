import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
} from "react-icons/md";

// Admin Imports
import DataTables from "views/admin/dataTables";

const routes = [
  {
    name: "Users",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  }
];

export default routes;
