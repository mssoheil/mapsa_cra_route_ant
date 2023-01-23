export function handleShowTotal(total, range) {
  const [startNumber, endNumber] = range;
  return `from ${startNumber} to ${endNumber} of ${total} items`;
}

export function handleItemRender(page, type, element) {
  if (type === "next") {
    return <span>بعدی</span>;
  }

  if (type === "prev") {
    return <span>قبلی</span>;
  }

  return element;
}
