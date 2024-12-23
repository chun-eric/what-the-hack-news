import { Link } from "react-router-dom";

const logoHeader = () => {
  return (
    <div className='w-full pb-8 mt-10 border-b shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] '>
      <div className='flex items-center justify-center w-full min-h-30'>
        <div className='flex items-center justify-center flex-1 w-full'>
          <Link to='/'>
            <h1 className='font-["Bebas_Neue"] md:text-4xl text-gray-900 tracking-wider cursor-pointer flex items-center mt-2  text-3xl'>
              What_The_Hack
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default logoHeader;
