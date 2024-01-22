import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1> Counter List</h1>
            <button onClick={() => setCount((count) => count + 1)}>Click +</button><br></br>
            <button onClick={() => setCount((count) => count - 1)}>Click -</button><br></br>
            <button onClick={() => setCount((count) => count == 0)}>Click to Reset </button><br></br>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;