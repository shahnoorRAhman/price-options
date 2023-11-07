import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const { name, price, features } = option;
    return (
        <div className='bg-teal-700 rounded-lg p-5 text-center flex flex-col'>
            <h2 className='text-white'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-white'>{name}</h4>
            <div className='pl-12 mt-3 flex-grow'>
            {
                features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="btn btn-active btn-accent mt-10 font-bold hover:bg-white hover:text-black">Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;