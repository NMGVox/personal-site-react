import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Skill from "./Skill";

const SkillGrid = ({ type, skillList }) => {
    const [filteredList, setFilteredList] = useState([]);
    
    useEffect(() => {
        const newList = skillList.filter((skill) => 
            skill.type === type
        );
        console.log(newList);
        setFilteredList(newList);
    }, []);

    return (
        <div className="skill-grid">
            {filteredList.map((skill) => (
                <Skill 
                    key={skill.skill}
                    icon={skill.image}
                    name={skill.skill}
                />
            ))}
        </div>
    )
}

SkillGrid.propTypes = {
    type : PropTypes.string,
    skillList: PropTypes.arrayOf(PropTypes.object),
};

export default SkillGrid;