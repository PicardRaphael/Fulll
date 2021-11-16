import { useState } from "react";
import useDataApi from "../services/fetchApi";

const useUser = () => {
  const [user, setUser] = useState("");
  const { fetchData } = useDataApi();

  const searchUsers = (evt) => {
    evt.preventDefault();
    const url = "https://api.github.com/search/users?q=" + user;
    fetchData(url);
  };

  return {
    user,
    searchUsers,
    setUser,
  };
};

export default useUser;
