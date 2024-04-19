import React, { useState, useEffect } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { industryColumnsData } from './components/variables/columnsData';
import industryData  from './components/variables/tableDataColumns.json';
import IndustryTable from "./components/IndustryTable";
import {AddIcon} from "@chakra-ui/icons";
import IndustryModal from "./components/IndustryModal";

export default function Industry() {
    const [industry, setIndustry] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        fetch('https://kms-backend.azurewebsites.net/api/industry')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIndustry(data);
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
            <IndustryTable columnsData={industryColumnsData} tableData={industryData} />
            <IndustryModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
