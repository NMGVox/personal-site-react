import { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import { CSSTransition } from "react-transition-group";
import ProjectDetail from "./ProjectDetail";
import ArrowRight from '../img/right-arrow.svg';
import ArrowLeft from '../img/left-arrow.svg';

const ProjectWrapper = ({ projects }) => {
    const [projIndex, setProjIndex] = useState(7);
    const [isEnter, setIsEnter] = useState(true);
    const [slideRight, setslideRight] = useState(true);
    const nodeRef = useRef(null); 

    async function advanceLeft(){
        setslideRight(false);
        setIsEnter(false);
        await new Promise(resolve => setTimeout(resolve, 250));
        if(projIndex === 0) {
            setProjIndex(projects.length - 1);
        }else{
            setProjIndex((prevIndex) => (prevIndex - 1));
        }
        setIsEnter(true);
    }

    async function advanceRight() {
        setslideRight(true);
        setIsEnter(false);
        await new Promise(resolve => setTimeout(resolve, 250));
        if(projIndex === projects.length-1) {
            setProjIndex(0);
        }else{
            setProjIndex((prevIndex) => (prevIndex + 1));
        }
        setIsEnter(true);
    }

    return (
        <div className="generic-flex">
            <button className="advanceSlide" onPointerDown={advanceLeft}>
                <img className="arrows" src={ArrowLeft} />
            </button>
            <div className="projOuterWrapper">
                <CSSTransition
                    in={isEnter}
                    timeout={500}
                    classNames={slideRight ? 'swipeRight' : 'swipeLeft'}
                    nodeRef={nodeRef}
                >
                        <div ref={nodeRef}>
                            <ProjectDetail
                                key={projects[projIndex].name}
                                project={projects[projIndex]}
                            />
                        </div>
                </CSSTransition>
            </div>
            <button className="advanceSlide" onPointerDown={advanceRight}>
                <img className="arrows" src={ArrowRight} />
            </button>
        </div>
    )
}

ProjectWrapper.propTypes = {
    projects: PropTypes.array,
};

export default ProjectWrapper;