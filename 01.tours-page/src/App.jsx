import { useState } from "react";
import Tours from "./Component/Tours";
const App = () => {
  const [isLoading, setisLoading] = useState(true);

  return (
    <>
      <div className=" h-screen w-screen bg-red-100 overflow-x-hidden">
        <Tours />
      </div>
    </>
  );
};

export default App;
