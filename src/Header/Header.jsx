
import { GiHamburger } from "react-icons/gi";

const Header = () => {
    return (
        <div>
            <div className="hero mt-4 mb-12 md:my-24">
       <div className="hero-content flex-col lg:flex-row-reverse">
         <img src="https://i.ibb.co/GcKVMYR/pexels-elevate-1267320.jpg" className="w-[100%] lg:w-[40%] rounded-lg shadow-2xl" />
         <div>
           <h1 className="text-4xl md:text-5xl font-bold flex gap-3"><span className="text-green-500 flex items-center gap-1"><GiHamburger />Flavor</span> Haven</h1>
           <p className="text-[12px] md:text-[16px] py-6 md:w-[80%] text-gray-500">Where big flavors await in every bite. Located in the heart of Sunamgonj, our restaurant is your haven for bold and exciting culinary experiences. From sizzling steaks to zesty seafood, indulge in a world of taste sensations that will leave you craving more. Join us and elevate your dining adventure to new heights.</p>
           <button className="btn btn-primary bg-green-500 border-none text-white">Get Started</button>
         </div>
       </div>
     </div>
 </div>
    );
};

export default Header;