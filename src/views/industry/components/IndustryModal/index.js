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

    console.log('--props----');
    console.log(props);

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                {
                    props.action === 'edit' ?
                        <ModalHeader>UPDATE INDUSTRY</ModalHeader> :
                        <ModalHeader>CREATE NEW INDUSTRY</ModalHeader>
                }
                <ModalCloseButton />
                <ModalBody>
                    <Formik
                        initialValues={{ name: props.row? props.row.name : '', status: props.row? props.row.status : '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                createIndustry(values)
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        {(props) => (
                            <Form style={{ paddingRight: 10, paddingLeft: 10 }}>
                                <Field name='name'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel>Industry Name</FormLabel>
                                            <Input {...field} placeholder='Industry Name' />
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
