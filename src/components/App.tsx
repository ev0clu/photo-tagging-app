import { useState } from 'react';
import '../assets/styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="bg-amber-400 text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
