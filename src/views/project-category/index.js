import React, { useState, useEffect } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { projectCategoryColumnsData } from './components/variables/columnsData';
import projectCategoryData  from './components/variables/tableDataColumns.json';
import ProjectCategoryTable from "./components/ProjectCategoryTable";
import {AddIcon} from "@chakra-ui/icons";
import ProjectCategoryModal from "./components/ProjectCategoryModal";

export default function ProjectCategory() {
    const [ setProjectCategory] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        fetch('https://kms-backend.azurewebsites.net/api/project-categories')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProjectCategory(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [setProjectCategory]);

    return (
        <div style={{ marginTop: 80 }}>
            <IconButton
                onClick={onOpen}
                aria-label='Add to friends' icon={<AddIcon />}
                style={{ marginBottom: 20, marginRight: 20, float: 'right', padding: 30 }}
            />
            <ProjectCategoryTable columnsData={projectCategoryColumnsData} tableData={projectCategoryData} />
            <ProjectCategoryModal action={'create'} isOpen={isOpen} onClose={onClose} />
        </div>
    );
}
