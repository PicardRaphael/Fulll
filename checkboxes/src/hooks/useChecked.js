import { useEffect, useState } from "react";

const useChecked = (items) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(items);

  /**
   * Toggle Check state based on evt.target.name
   * @param {object} evt
   */
  const toggleCheck = (evt) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      const item = prevState.filter((item) => item.name === evt.target.name);
      item[0].checked = !item[0].checked;
      return newState;
    });
  };

  /**
   * Checks or uncheckes all from "Select All" click
   * @param {object} evt
   */
  const selectAll = (evt) => {
    setCheckedAll(evt.target.checked);
    setChecked((prevState) => {
      const newState = [...prevState];
      newState.map((item) => {
        return (item.checked = evt.target.checked);
      });
      return newState;
    });
  };

  /**
   * Effect to control checkedAll state
   * If all items checked. It will activate chechedAll state
   * If just one items no checked. It will de-activate checkedAll strate
   */
  useEffect(() => {
    let allChecked = true;
    checked.map((item) => {
      if (item.checked === false) {
        allChecked = false;
      }
      return true;
    });
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return { checked, checkedAll, toggleCheck, selectAll };
};

export default useChecked;
