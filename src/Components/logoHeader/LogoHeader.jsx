import { Link } from "react-router-dom";

const logoHeader = () => {
  return (
    <div className='w-full pb-4 mt-10 border-b'>
      <div className='flex items-center justify-center w-full min-h-30'>
        <div className='flex items-center justify-center flex-1 w-full'>
          <Link to='/'>
            <h1 className='font-["Bebas_Neue"] md:text-4xl text-gray-900 tracking-wider cursor-pointer flex items-center mt-2 text-[1.4rem] sm:text-3xl'>
              What_The_Hack
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default logoHeader;
