import useAsync from "./useAsync";

export default function AsyncComponent() {
  const [loading, error, value] = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  });

  return (
    <>
      <div>{loading ? "Loading" : ""}</div>
      <div>{error ? error : ""}</div>
      {value && <div>Result : {value}</div>}
    </>
  );
}
