import React, { useState, useEffect } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { clientColumnsData } from './components/variables/columnsData';
import clientData  from './components/variables/tableDataColumns.json';
import ClientTable from "./components/ClientTable";
import {AddIcon} from "@chakra-ui/icons";
import ClientModal from "./components/ClientModal";

export default function Client() {
    const [client, setClient] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        fetch('https://kms-backend.azurewebsites.net/api/client')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setClient(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div style={{ marginTop: 80 }}>
            <IconButton
                onClick={onOpen}
                aria-label='Add to friends' icon={<AddIcon />}
                style={{ marginBottom: 20, marginRight: 20, float: 'right', padding: 30 }}
            />
            <ClientTable columnsData={clientColumnsData} tableData={clientData} />
            <ClientModal action={'create'} isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
