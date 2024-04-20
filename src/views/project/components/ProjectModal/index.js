import React from 'react';
import {
    Button, FormControl, FormLabel, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import './styles.css';

export default function ProjectModal(props) {

    const createProject = (payload) => {
        console.log('payload');
        console.log(payload);
        if (props.action === 'create') {
            fetch('https://kms-backend.azurewebsites.net/api/project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            const url = `https://kms-backend.azurewebsites.net/api/project?id=${payload.id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    console.log('--props----');
    console.log(props);

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                {
                    props.action === 'edit' ?
                        <ModalHeader>UPDATE PROJECT</ModalHeader> :
                        <ModalHeader>CREATE NEW PROJECT</ModalHeader>
                }
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{ name: props.row? props.row.name : '', status: props.row? props.row.status : '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                createProject(values)
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        {(props) => (
                            <Form style={{ paddingRight: 10, paddingLeft: 10 }}>
                                <Field name='name'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel>Name</FormLabel>
                                            <Input {...field} placeholder='Project Name' />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='description'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.description && form.touched.description}>
                                            <FormLabel>Description</FormLabel>
                                            <Input {...field} placeholder='Project Description' />
                                        </FormControl>
                                    )}
                                </Field>
                               
                                <Field name='status'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.status && form.touched.status}>
                                            <FormLabel>Status</FormLabel>
                                            <Select placeholder='Select status'>
                                                <option>Active</option>
                                                <option>In active</option>
                                            </Select>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='client'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.industry && form.touched.industry}>
                                            <FormLabel>Client</FormLabel>
                                            <Input {...field} placeholder='Project Industry' />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='projectCategory'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.industry && form.touched.industry}>
                                            <FormLabel>Project Category</FormLabel>
                                            <Input {...field} placeholder='Project Industry' />
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
    );
}
