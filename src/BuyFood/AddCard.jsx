
import PropTypes from 'prop-types';

const AddCard = ({add,hendleDelete}) => {
    console.log(add)
    return (
        <div>
            <div className="bg-[#12132D0D] text-center md:w-[60%] mx-auto p-2 md:p-12 rounded-xl">

                { add.map((add,index) => <div key={index} className="bg-white md:w-[90%] mx-auto py-4 md:py-5 px-3 md:px-5 rounded-xl flex justify-between items-center my-4 font-semibold text-gray-600 text-[12px] md:text-[16px]">
                    <h2>{add.food_name}</h2>
                    <h2>{add.food_price} <span className="text-red-500">$</span></h2>
                    <button onClick={()=>hendleDelete(add)} className="p-2 text-[12px] bg-[#86aecf] text-white rounded-[6px]">Delete</button>
                </div>)}
            </div> 
        </div>
    );
};

AddCard.propTypes ={
    add : PropTypes.array.isRequired,
    hendleDelete : PropTypes.func.isRequired
}

export default AddCard;