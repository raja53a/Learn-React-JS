import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
      setCopied(true); // Show the "Copied!" message

      // Hide the "Copied!" message after 5 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="centered-container"></div>
      <h1 className="text-4xl text-center text-white">Generate a</h1>
      <div className="text-4xl w-full max-w-md mx-auto rounded-lg px-4 my-2 text-customGreen font-semibold">
        Random Password
        <div className="flex flex-col">
          <div className="flex shadow rounded-lg overflow-hidden mt-8 mb-2">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-3 font-normal text-lg"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-customGreen text-white px-3 py-2 shrink-0 text-sm"
              onClick={copyPasswordToClipBoard}
            >
              Copy
            </button>
          </div>
          {copied && <div className="text-sm text-green-500">Copied!</div>}
        </div>
        <div className="flex text-base gap-x-3 mt-8">
          <div className="flex items-center px-1 gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
