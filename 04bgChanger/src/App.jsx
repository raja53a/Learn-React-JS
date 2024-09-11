import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button onClick={() => setColor("red")} style={{ backgroundColor: "red"}} btnName="Red" />
          <Button onClick={() => setColor("green")} style={{ backgroundColor: "green"}} btnName="Green" />
          <Button onClick={() => setColor("blue")} style={{ backgroundColor: "blue"}} btnName="Blue" />
          <Button onClick={() => setColor("olive")} style={{ backgroundColor: "olive"}} btnName="Olive" />
          <Button onClick={() => setColor("grey")} style={{ backgroundColor: "grey"}} btnName="Gray" />
          <Button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow"}} btnName="Yellow" textColor="black" />
          <Button onClick={() => setColor("pink")} style={{ backgroundColor: "pink"}} btnName="Pink" textColor="black" />
          <Button onClick={() => setColor("lavender")} style={{ backgroundColor: "lavender"}} btnName="Lavendar" textColor="black" />
          <Button onClick={() => setColor("black")} style={{ backgroundColor: "black"}} btnName="Black" />
          <Button onClick={() => setColor("white")} style={{ backgroundColor: "white"}} btnName="White" textColor="black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
