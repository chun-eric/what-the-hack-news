import News from "./Components/News";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className='grid w-full h-screen place-items-center'>
      <News />
      <Analytics />
    </div>
  );
};

export default App;
