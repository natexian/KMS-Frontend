import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
} from "react-icons/md";

// Admin Imports
import DataTables from "views/admin/dataTables";
import ProjectCategory from "./views/project-category";

const routes = [
  {
    name: "Employees",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Project Category",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/project-category",
    component: ProjectCategory,
  }
];

export default routes;
