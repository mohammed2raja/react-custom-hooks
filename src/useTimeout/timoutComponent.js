import { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10)
  const [reset, clear] = useTimeout(() => setCount(0), 5000)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
    </>
  )
}