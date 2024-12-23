const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full h-full p-8 max-h-28 bg-[#eeeeee] flex items-center justify-center z-[4] flex-col font-["Bebas_Neue"]  rounded-b-[0.6rem]'>
      <p className='text-xl font-["Bebas_Neue"] '>What_The_Hack</p>
      <p className='text-xl font-["Bebas_Neue"]'>
        &copy; {currentYear} All Rights Reserved. Created by Eric Chun
      </p>
    </footer>
  );
};

export default Footer;
