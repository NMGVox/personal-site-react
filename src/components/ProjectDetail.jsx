import { PropTypes } from "prop-types";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

const ProjectDetail = ({ project }) => {
    const [currentPic, setCurrentPic] = useState(0);
    const [isEnter, setIsEnter] = useState(true);
    const nodeRef = useRef(null); 

    //Need an interval that controls which picture is displayed.
    useEffect(() => {
        const imageInterval = setInterval(async () => {
            if(project.pic.length === 1) {
                return;
            }
            setIsEnter(false);
            await new Promise(resolve => setTimeout(resolve, 450));
            if(currentPic === project.pic.length - 1) {
                setCurrentPic(0);
            } else {
                setCurrentPic((prevPic) => (prevPic + 1));
            }
            setIsEnter(true);
        }, 8000)

        return () => clearInterval(imageInterval);

    }, [currentPic, project.pic]);

    useEffect(()=> {
        console.log(currentPic);
    }, []);

    return (
            <div className="projInnerWrapper">
                <article className="projectCell">
                    <h2 className="projectName">{project.name}</h2>
                    <CSSTransition
                        in={isEnter}
                        timeout={500}
                        classNames='fade'
                        nodeRef={nodeRef}
                    >
                        <img ref={nodeRef} className="projectImage"
                            src={project.pic[currentPic] !== 'null' ? project.pic[currentPic] : ''}
                            alt={`${project.name} preview`}
                        />
                    </CSSTransition>
                    <p className="stack"><i>Tech Stack: {project.stack}</i></p>
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