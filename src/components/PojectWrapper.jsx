import { useState } from "react";
import { PropTypes } from "prop-types";
import ProjectDetail from "./ProjectDetail";

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
            <ProjectDetail 
                project={projects[projIndex]}
            />
            <button onPointerDown={advanceRight}> Right </button>
        </div>
    )
}

ProjectWrapper.propTypes = {
    projects: PropTypes.array,
};

export default ProjectWrapper;