import { useState } from "react";
import { search } from "../stores/actions/searchActions";
import { useSearchContext } from "../stores/reducers/SearchUserContext";

const useDataApi = () => {
  const { dispatchSearch } = useSearchContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      dispatchSearch(search(result.items));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  return { isLoading, isError, fetchData };
};

export default useDataApi;
