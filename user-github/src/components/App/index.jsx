import useDataApi from "../../services/fetchApi";
import { useSearchContext } from "../../stores/reducers/SearchUserContext";
import Header from "../Header";
import List from "../List";
import Search from "../Search";
import styles from "./App.module.css";
const App = () => {
  const { stateSearch } = useSearchContext();
  const { isLoading, fetchData } = useDataApi();

  return (
    <main className={styles.AppMain}>
      <div className={styles.App}>
        <Header />
        <Search fetchData={fetchData} />
        {isLoading && <div>Loading ...</div>}
        {!isLoading && typeof stateSearch.data === "object" && (
          <List items={stateSearch.data} />
        )}
      </div>
    </main>
  );
};

export default App;
