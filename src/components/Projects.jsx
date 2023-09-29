import { useEffect, useState } from 'react';
import { retrieveProjects } from './RetireveData';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const myData = async () => {
            const data = await retrieveProjects();
            setProjects(data)
        }

        myData();
    }, []);

    useEffect(() => {
        console.log(projects)
    }, [projects]);
}

export default Projects;