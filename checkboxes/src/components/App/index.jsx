import useChecked from "../../hooks/useChecked";
import Checkbox from "../Checkbox";
import "./App.css";

const App = () => {
  const items = [
    {
      name: "item1",
      label: "Item 1",
      checked: false,
    },
    {
      name: "item2",
      label: "Item 2",
      checked: false,
    },
    {
      name: "item3",
      label: "Item 3",
      checked: false,
    },
    {
      name: "item4",
      label: "Item 4",
      checked: false,
    },
  ];

  const { checked, checkedAll, toggleCheck, selectAll } = useChecked(items);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Checkboxes</h1>
      </header>
      <main className="App-main">
        <section>
          <Checkbox
            label="Select all"
            name="all"
            checked={checkedAll}
            onClick={selectAll}
          />
          <div>
            {checked.map((item) => (
              <Checkbox
                key={item.name}
                name={item.name}
                onClick={toggleCheck}
                checked={item.checked}
                label={item.label}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
