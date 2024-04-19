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

export default function IndustryModal(props) {

    const createIndustry = (payload) => {
        console.log('payload');
        console.log(payload);
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>CREATE NEW INDUSTRY</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                createIndustry(values)
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        {(props) => (
                            <Form style={{ paddingRight: 10, paddingLeft: 10 }}>
                                <Field name='firstName'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                            <FormLabel>Industry Name</FormLabel>
                                            <Input {...field} placeholder='Industry Name' />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='lastName'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                            <FormLabel>Status</FormLabel>
                                            <Select placeholder='Select status'>
                                                <option>Active</option>
                                                <option>In active</option>
                                            </Select>
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
