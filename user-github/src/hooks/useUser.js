import { useState } from "react";

const useUser = (fetchData) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (evt) => {
    setUser(evt.target.value);
  };

  const searchUser = (evt) => {
    evt.preventDefault();
    if (user !== "") {
      setError(false);
      fetchData("https://api.github.com/search/users?q=" + user);
    } else {
      setError(true);
    }
  };

  return {
    user,
    handleChange,
    searchUser,
    error,
  };
};
export default useUser;
