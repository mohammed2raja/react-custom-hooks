import useToggle from "./useToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <div>Value : {value.toString()}</div>
      <button onClick={toggleValue}>Toggle Me</button>
    </>
  );
}

export default ToggleComponent;
