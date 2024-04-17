import React, { useState, useEffect } from 'react';
import {
    Button, FormControl, FormLabel,
    IconButton, Input, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import { employeeColumnsData } from 'views/admin/dataTables/variables/columnsData';
import mockData from 'views/admin/dataTables/variables/tableDataColumns.json';
import {AddIcon} from "@chakra-ui/icons";
import './styles.css';

export default function Settings() {
  const [employees, setEmployees] = useState([mockData]);
  const { isOpen, onOpen, onClose } = useDisclosure();

    console.log('mockData');
    console.log(mockData)

  useEffect(() => {
    fetch('https://kms-backend.azurewebsites.net/api/employee')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const createEmployee = (payload) => {
      console.log('payload');
      console.log(payload);
  }


  return (
    // <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
    //   <SimpleGrid>
          <div style={{ marginTop: 80 }}>
              <IconButton
                  onClick={onOpen}
                  aria-label='Add to friends' icon={<AddIcon />}
                  style={{ marginBottom: 20, marginRight: 20, float: 'right', padding: 30 }}
              />
              <ColumnsTable columnsData={employeeColumnsData} tableData={mockData} />
              <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                      <ModalHeader>CREATE A NEW EMPLOYEE</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                          <Formik
                              initialValues={{ firstName: '', lastName: '', email: '' }}
                              onSubmit={(values, actions) => {
                                  setTimeout(() => {
                                      createEmployee(values)
                                      actions.setSubmitting(false)
                                  }, 1000)
                              }}
                          >
                              {(props) => (
                                  <Form style={{ paddingRight: 10, paddingLeft: 10 }}>
                                      <Field name='firstName'>
                                          {({ field, form }) => (
                                              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                                  <FormLabel>First name</FormLabel>
                                                  <Input {...field} placeholder='First Name' />
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Field name='lastName'>
                                          {({ field, form }) => (
                                              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                                  <FormLabel>Last name</FormLabel>
                                                  <Input {...field} placeholder='Last Name' />
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Field name='email'>
                                          {({ field, form }) => (
                                              <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                  <FormLabel>Email</FormLabel>
                                                  <Input type='email' {...field} placeholder='Email' />
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Button
                                          mt={4}
                                          isLoading={props.isSubmitting}
                                          type='submit'
                                          style={{
                                              marginTop: 30,
                                              float: 'right',
                                              background: '#272776',
                                              color: 'white',
                                          }}
                                      >
                                          Submit
                                      </Button>
                                  </Form>
                              )}
                          </Formik>
                      </ModalBody>

                      <ModalFooter>
                      </ModalFooter>
                  </ModalContent>
              </Modal>
          </div>
    //   </SimpleGrid>
    // </Box>
  );
}
