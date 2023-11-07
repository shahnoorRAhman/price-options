import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-6 hover:bg-teal-700 p-2 hover:text-white" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route:PropTypes.object,
}

export default Link;