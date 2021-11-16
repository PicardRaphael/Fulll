import styles from "./List.module.css";

const List = ({ items }) => {
  if (items.length === 0) {
    return <h1 className={styles.NotFound}>User not found</h1>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li className={styles.ListLi} key={item.id}>
          <a
            className={styles.ListLink}
            href={item.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {item.login}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
