import { PropTypes } from "prop-types";
import { useRef } from "react";

const ProjectDetail = ({ project }) => {
    // const innerWrapRef = useRef(null);
    
    // function calculateHeight() {
    //     const wrap = innerWrapRef.current.offsetHeight;
    //     console.log(wrap);
    //     return (`${wrap * .9}px`);
    // }
    
    return (
        <div className="projInnerWrapper">
            <article className="projectCell">
                <h2 className="projectName">{project.name}</h2>
                <img className="projectImage" src={project.pic[0] !== 'null' && project.pic[0]} alt={`${project.name} preview`} />
                <p>Tech Stack: {project.stack}</p>
            </article>  
            <article className="projectCell">
                <span className="projectDescription">
                    <p>{project.description}</p>
                </span>
                <span className="button-container">
                    <button onClick={() => window.location.href=`${project.source}`}>Source Code</button>
                    {project.demo !== 'null' &&
                        <button onClick={() => window.location.href=`${project.demo}`}>Demo</button>
                    }
                </span>
            </article>
        </div>
    );
};

ProjectDetail.propTypes = {
    project: PropTypes.object,
};

export default ProjectDetail;