import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-3xl font-bold underline text-red-500">Hello World</p>
    </>
  );
}

export default App;
