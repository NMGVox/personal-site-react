import { useEffect, useState } from 'react';
import { retrieveSkills } from './RetireveData';
import SkillGrid from './SkillGrid';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myData = async () => {
        const data = await retrieveSkills();
        setSkills(data);
        setLoading(false);
        };
        myData();
    }, []);

    return (
        <section className="about-section" id="skills">
            <h2 className="section-header">
                My Skills
            </h2>
            <div className="skill-wrap">
                {loading ? <h1>Loading...</h1> : (<> <article className="skill-cat">
                    <h3 className="skill-header">Languages</h3>
                    <SkillGrid 
                        type="lang"
                        skillList={skills}
                    />
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Tools</h3>
                    <SkillGrid 
                        type="tools"
                        skillList={skills}
                    />
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Libraries</h3>
                    <SkillGrid 
                        type="libraries"
                        skillList={skills}
                    />
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Database Management</h3>
                    <SkillGrid 
                        type="databases"
                        skillList={skills}
                    />
                </article>
                <article className="skill-cat">
                    <h3 className="skill-header">Platforms</h3>
                    <SkillGrid 
                        type="platforms"
                        skillList={skills}
                    />
                </article> </>)}
            </div>
        </section>
    )
}

export default Skills;