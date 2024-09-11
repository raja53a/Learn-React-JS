import "./App.css";
import Card from "./components/card";


function App() {

  return (
    <>
    <h1 className="font-bold bg-orange-400 p-4 rounded-xl mb-4">Tailwind CSS</h1>
    <Card userName="Hitesh" role="Developer" message="Its a Greate Course"/>
    <Card userName="Raja Mishra" role="React Developer" message="Wonderful Hitesh, great comment"/>
    </>
  )
}

export default App;
