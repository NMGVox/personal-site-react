import { useState } from "react";
import { PropTypes } from "prop-types";

const ProjectWrapper = ({ projects }) => {
    const [projIndex, setProjIndex] = useState(7);

    function advanceLeft(){
        if(projIndex === 0) {
            setProjIndex(projects.length - 1);
            return
        }
        setProjIndex((prevIndex) => (prevIndex - 1));
    }

    function advanceRight() {
        if(projIndex === projects.length-1) {
            setProjIndex(0);
            return
        }
        setProjIndex((prevIndex) => (prevIndex + 1));
    }

    return (
        <div className="projOuterWrapper">
            <button onPointerDown={advanceLeft}> Left </button>
            <div>{projects[projIndex].name}</div>
            <button onPointerDown={advanceRight}> Right </button>
        </div>
    )
}

ProjectWrapper.propTypes = {
    projects: PropTypes.array,
};

export default ProjectWrapper;