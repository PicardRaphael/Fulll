import useUser from "../../hooks/useUser";
import styles from "./Search.module.css";
const Search = ({ fetchData }) => {
  const { user, handleChange, searchUser, error } = useUser(fetchData);

  return (
    <form className={styles.SearchForm}>
      <label htmlFor="usernameInput" className={styles.SearchLabel}>
        Username
      </label>
      <div>
        <input
          id="usernameInput"
          type="text"
          className={`${styles.SearchInput} ${
            error ? styles.SearchInputError : ""
          }`}
          value={user}
          onChange={handleChange}
        />
      </div>
      <button
        className={styles.SearchButton}
        type="button"
        onClick={searchUser}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
