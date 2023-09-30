import { useEffect, useState } from 'react';
import { retrieveProjects } from './RetireveData';
import ProjectWrapper from './PojectWrapper';

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

    return (
        <section className="about-section" id="projects">
            <h2 className="section-header">
                Projects
            </h2>
            {loading ?
                <h2>LOADING...</h2>
            :
                <ProjectWrapper 
                    projects={projects}
                />
            } 
        </section>
    )
}

export default Projects;