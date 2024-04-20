import React, { useState } from 'react';
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

export default function ClientModal(props) {
    const { action, isOpen, currentRecord, onClose, setClientData } = props;

    const createClient = (payload) => {
        console.log('payload');
        console.log(payload);
        if (props.action === 'create') {
            fetch('https://kms-backend.azurewebsites.net/api/client', {
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
                    props.onClose();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            const url = `https://kms-backend.azurewebsites.net/api/client?id=${payload.id}`;

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
                        <ModalHeader>UPDATE CLIENT</ModalHeader> :
                        <ModalHeader>CREATE NEW CLIENT</ModalHeader>
                }
                <ModalCloseButton />
                <ModalBody>
                    {
                        <Formik
                            initialValues={props}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    createClient(values)
                                    actions.setSubmitting(false)
                                }, 1000)
                            }}
                        >
                            {(props) => (
                                <Form style={{ paddingRight: 10, paddingLeft: 10 }}>
                                    <Field name='Name'>
                                        {({ field, form }) => (
                                            field.value = field.value === undefined ? (props.values.row ? props.values.row.Name : '') : field.value,
                                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                <FormLabel>Name</FormLabel>
                                                <Input {...field} placeholder='Client Name' />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='Description'>
                                        {({ field, form }) => (
                                            field.value = field.value === undefined ? (props.values.row ? props.values.row.Description : '') : field.value,
                                            <FormControl isInvalid={form.errors.description && form.touched.description}>
                                                <FormLabel>Description</FormLabel>
                                                <Input {...field} placeholder='Client Description' />
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='IndustryId'>
                                        {({ field, form }) => (
                                            field.value = field.value === undefined ? (props.values.row ? props.values.row.IndustryId : '') : field.value,
                                            <FormControl isInvalid={form.errors.industry && form.touched.industry}>
                                                <FormLabel>Industry</FormLabel>
                                                <Input {...field} placeholder='Client Industry' />
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
                        </Formik>}
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
