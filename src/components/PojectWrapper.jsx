import { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import { CSSTransition } from "react-transition-group";
import ProjectDetail from "./ProjectDetail";

const ProjectWrapper = ({ projects }) => {
    const [projIndex, setProjIndex] = useState(7);
    const [isEnter, setIsEnter] = useState(true);
    const nodeRef = useRef(null); 

    async function advanceLeft(){
        setIsEnter(false);
        await new Promise(resolve => setTimeout(resolve, 250));
        if(projIndex === 0) {
            setProjIndex(projects.length - 1);
            return
        }
        setProjIndex((prevIndex) => (prevIndex - 1));
        setIsEnter(true);
    }

    function advanceRight() {
        // if(projIndex === projects.length-1) {
        //     setProjIndex(0);
        //     return
        // }
        // setProjIndex((prevIndex) => (prevIndex + 1));
        setIsEnter(false);
    }

    return (
        <div className="projOuterWrapper">
            <button onPointerDown={advanceLeft}> Left </button>
            <CSSTransition
                in={isEnter}
                timeout={500}
                classNames="projInner"
                nodeRef={nodeRef}
            >
                <div ref={nodeRef}>
                    <ProjectDetail
                        project={projects[projIndex]}
                    />
                </div>
            </CSSTransition>
            <button onPointerDown={advanceRight}> Right </button>
        </div>
    )
}

ProjectWrapper.propTypes = {
    projects: PropTypes.array,
};

export default ProjectWrapper;