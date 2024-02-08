import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import { employeeColumnsData } from 'views/admin/dataTables/variables/columnsData';

export default function Settings() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/employee')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid>
        <ColumnsTable columnsData={employeeColumnsData} tableData={employees} />
      </SimpleGrid>
    </Box>
  );
}
