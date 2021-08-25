import './../index.css';
import './../Styles/Form.css';
const Form=()=>{

    return(
      
        <div className="flex justify-center  center_parent w-3/5 h-4/5 ">
            <div className="w-full h-full mt-4 shadow-lg z-2 border-lg  flex mt-24">
                <div className="bg-white w-1/2 h-full flex  flex-col items-center justify-between ">
                    <div className="flex flex-col justify-center items-center h-1/4">
                      <div className="mt-4 ">
                        <svg class="md:w-12 h-12 sm:w-10 h-10 lg:w-14 h-14 text-blue-400 color-red" fill="blue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      </div>
                      <h2 className="  uppercase font-sanse font-bold header tracking-wide text-2xl">online marketing</h2>
                      <h4 className=" mt-2 text-gray-500">Sign Up In Our Site</h4>
                    </div>
                    <div className="w-4/5 flex  justify-center h-2/4 flex-shrink items-center">
                        <form className=" flex flex-grow flex-col border-2 items-center border-blue-200 rounded-sm h-full w-4/5 text-center justify-between">
                            <div className="bg-blue-700 w-full h-12 text-white pt-2">SIGN UP</div>
                            <div className=" w-3/4">
                                <input className="input lg:text-lg md:text-md sm:text-sm  text-blue-400 w-full border-b-2 p-2 border-gray-400" stype="text"placeholder="Username"></input>
                            </div>
                            <div className="w-3/4">
                                <input className="input  lg:text-lg md:text-md sm:text-sm  text-blue-400 w-full border-b-2 p-2 border-gray-400 " type="password"placeholder="Password"></input>
                            </div>
                            <button className="bg-green-500 lg:px-4 lg:py-3 md:px-2 md:py-2  w-3/5 lg:mb-4 md:mb-2 hover:opacity-40 transition-all text-white font-bold lg:text-xl md:text-lg sm:text-md rounded-sm shadow-lg">Sign Up</button>
                           
                        </form>
                    </div>
                    <div className="h-1/4 flex flex-col justify-end items-end">
                      <footer className="mb-2">hosseinfouladi20@gmail.com</footer>
                    </div>
                </div>
                <div className="picture_box h-full w-1/2 px-8 flex flex-col justify-center">
                    <p className="text-2xl text-gray-500 skew-y-12 font-serif font-bold uppercase  ">online shopping with online marketing </p>
                    <p className="text-gray-500 mt-2">with online marketing u can easily buy your needs for example luxery smart phone,car and .... just sign up and click to add product to your cart.</p>
                </div>
            </div>
        </div>
    )
}
export default Form;