import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
} from "react-icons/md";

// Admin Imports
import DataTables from "views/admin/dataTables";
import EmployeeType from "views/employee-type";

const routes = [
  {
    name: "Employees",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Employee Types",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/employee-types",
    component: EmployeeType,
  }
];

export default routes;
