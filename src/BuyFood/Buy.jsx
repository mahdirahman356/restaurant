import PropTypes from 'prop-types';

const Buy = ({buy,hendleAddCardButton}) => {
    let {id,image,food_name,description,food_price,buy_button} = buy
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-6 md:my-12 h-[500px]">
             <figure className="px-10 pt-10">
               <img className="rounded-xl" src={image} />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title text-[20px] md:text-[23px]">{food_name}</h2>
               <p className="text-gray-500">{description}</p>
               <p className="text-[20px] md:text-[23px] font-semibold">{food_price} <span className="text-red-500">$</span></p>
               <div className="card-actions">
                 <button onClick={()=>hendleAddCardButton(buy,id)} className="btn btn-primary bg-green-500 border-none text-white">{buy_button}</button>
               </div>
             </div>
           </div>
        </div>
    );
};

Buy.propTypes={
    buy : PropTypes.object.isRequired,
    hendleAddCardButton : PropTypes.func.isRequired
}
export default Buy;