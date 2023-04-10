import { useCallback, useEffect, useState } from "react";

function useAsync(callback, dependancies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const memorisedCallback = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependancies);

  useEffect(() => {
    memorisedCallback();
  }, [memorisedCallback]);

  return [loading, error, value];
}

export default useAsync;
