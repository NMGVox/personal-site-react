import PropTypes from 'prop-types';

const Skill = ({ name, icon }) => {    
    return(
        <div className="skill">
            <img src={icon} alt={`${name} icon`} />
            <h4>{name}</h4>
        </div>
    )
}

Skill.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
};


export default Skill;