import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRefreshTokens } from "../../../src/hooks";

const Success = () => {
  const [counter, setCounter] = useState(3);
  const router = useRouter();
  useRefreshTokens();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 0) {
        return router.back();
      }
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [router, counter]);

  return (
    <div className="flex w-full flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-green-500">Success!</h1>
      <h2 className="text-2xl">Redirecting in {counter}</h2>
    </div>
  );
};

export default Success;