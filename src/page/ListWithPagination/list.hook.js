import React from "react";

export function useList() {
  const [list, setList] = React.useState([]);
  console.log("DEBUG -> ListWithPagination -> list", list);
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });
  }, []);

  const end = (list.length / 10) * current;

  function handleChange(page, pageSize) {
    setCurrent(page);
  }

  return {
    list,
    current,
    end,
    handleChange,
  };
}
