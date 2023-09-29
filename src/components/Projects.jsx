import { useEffect, useState } from 'react';
import { retrieveProjects } from './RetireveData';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myData = async () => {
            const data = await retrieveProjects();
            setProjects(data);
            setLoading(false);
        }
        myData();
    }, []);

    useEffect(() => {
        console.log(projects)
    }, [projects]);

    return (
        <section className="about-section" id="projects">
            <h2 className="section-header">
                Projects
            </h2>
            {loading &&
                
            }
        </section>
    )
}

export default Projects;