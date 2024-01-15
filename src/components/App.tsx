import { useState } from 'react';
import '../App.css';
import { Explanation } from './Explanation';
import { SimpleClosure } from './SimpleClosure';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log('before', count);
          setCount(count + 1);
          console.log('after', count);
        }}
      >
        Click
      </button>
      <SimpleClosure />
      <Explanation />
    </div>
  );
}

export default App;
