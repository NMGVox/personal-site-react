import { useState } from "react";
import { PropTypes } from "prop-types";

const ProjectWrapper = ({ projects }) => {
    return (
        <div className="projOuterWrapper">
            <button> Left </button>
            <button> Right </button>
        </div>
    )
}

ProjectWrapper.propTypes = {
    projects: PropTypes.array,
};