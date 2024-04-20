import React, { useState, useEffect } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { projectColumnsData } from './components/variables/columnsData';
import projectData  from './components/variables/tableDataColumns.json';
import ProjectTable from "./components/ProjectTable";
import {AddIcon} from "@chakra-ui/icons";
import ProjectModal from "./components/ProjectModal";

export default function Project() {
    const [project, setProject] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        fetch('https://kms-backend.azurewebsites.net/api/project')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProject(data);
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
            <ProjectTable columnsData={projectColumnsData} tableData={projectData} />
            <ProjectModal action={'create'} isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
