import React from "react";

export function usePaginations() {
  const [current, setCurrent] = React.useState(1);

  function handleChange(page) {
    setCurrent(page);
  }

  return { current, handleChange };
}
