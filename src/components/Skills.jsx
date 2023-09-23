import { useEffect, useState } from 'react';
import retrieveData from './RetireveData'

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const myData = async () => {
        const data = await retrieveData();
        setSkills(data);
        };

        myData();
    }, []);

    return (
        <section className="about-section" id="skills">
            <h2 className="section-header">
                My Skills
            </h2>
            <div className="skill-wrap">
                <article className="skill-cat">
                    <h3 className="skill-header">Languages</h3>
                    <div id="lang" className="skill-grid">

                    </div>
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Tools</h3>
                    <div id="tools" className="skill-grid"></div>
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Libraries</h3>
                    <div id="libraries" className="skill-grid"></div>
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Database Management</h3>
                    <div id="databases" className="skill-grid"></div>
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Platforms</h3>
                    <div id="platforms" className="skill-grid"></div>
                </article>
            </div>
        </section>
    )
}

export default Skills;