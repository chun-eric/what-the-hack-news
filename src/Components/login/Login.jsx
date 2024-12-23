import appleLogo from "./../../assets/icons/apple.png";
import googleLogo from "./../../assets/icons/google.png";
import facebookLogo from "./../../assets/icons/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='max-w-[500px] mx-auto  h-auto mt-20 flex flex-col'>
      <h1 className='mb-6 text-2xl font-bold text-center font-inter'>
        Log in or create an account
      </h1>

      <div className='flex flex-col gap-2'>
        <h2 className='text-sm font-bold text-left'>Email Address</h2>
        <input
          type='text'
          placeholder='Email'
          className='border-[#535353] border px-2 py-3 rounded'
        />
        <button className='py-3 mt-2 text-sm font-bold text-white bg-black rounded'>
          Continue
        </button>
      </div>

      <div className='relative flex items-center justify-center w-full my-4'>
        <div className='absolute w-full border-t border-gray-200'></div>
        <div className='relative px-4 translate-y-[-1px] bg-white'>
          <span className='text-xs text-[#464545] text-center'>or</span>
        </div>
      </div>

      <div className='px-10 mt-3 mb-4'>
        <p className='text-xs text-[#464545] text-center'>
          By continuing, you agree to the{" "}
          <Link to='/terms-sale'>
            <span className='underline'>Terms of Sale</span>,{" "}
          </Link>
          <Link to='/terms-service'>
            <span className='underline'>Terms of Service</span> and{" "}
          </Link>
          <Link to='/privacy'>
            <span className='underline'>Privacy Policy.</span>
          </Link>
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='border border-[#000] flex items-center justify-center py-3 rounded hover:bg-gray-100 transition-all ease-in-out duration-200 cursor-pointer'>
          <p className='font-bold flex items-center justify-center gap-4 text-sm text-[#000]'>
            <img src={googleLogo} alt='Google Logo' className='w-6 h-6' />
            Continue with Google
          </p>
        </div>
        <div className='border border-[#000] flex items-center justify-center py-3 rounded hover:bg-gray-100 transition-all ease-in-out duration-200 cursor-pointer'>
          <p className='font-bold flex items-center justify-center gap-4 text-sm text-[#000]'>
            <img src={facebookLogo} alt='Facebook Logo' className='w-6 h-6' />
            Continue with Facebook
          </p>
        </div>
        <div className='border border-[#000] flex items-center justify-center py-3 rounded hover:bg-gray-100 transition-all ease-in-out duration-200 cursor-pointer'>
          <p className='font-bold flex items-center justify-center gap-4 text-sm text-[#000]'>
            <img src={appleLogo} alt='Apple Logo' className='w-6 h-6' />
            Continue with Apple
          </p>
        </div>
        <div className='mt-4'>
          <p className='text-sm font-bold text-center underline cursor-pointer'>
            Continue with single sign-on &gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
