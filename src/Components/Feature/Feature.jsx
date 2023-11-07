import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='text-white  flex items-center mr-2'><AiFillCheckCircle></AiFillCheckCircle>{ feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;