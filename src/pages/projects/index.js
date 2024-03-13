import React, {
  useCallback,
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

export const Projects = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("3");
    }, 2000);
    console.log('4')
  }, []);
  useInsertionEffect(() => {
    setTimeout(() => {
      console.log("1");
    }, 5000);
    console.log("2");
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count);
        }}
      >
        increment
      </button>
      {count}
    </div>
  );
};
