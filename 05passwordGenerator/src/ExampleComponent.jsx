import React, { useEffect, useLayoutEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('iam Effect ran. Count:', count);
  }, [count]);
console.log("want before")
console.log("count",count)
  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked. New Count:', count);
  };
console.log("md")
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick} style={{color:"white"}}>Increment Count</button>
    </div>
  );
};

export default ExampleComponent;
