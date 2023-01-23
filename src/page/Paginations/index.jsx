import React from "react";
// UI frameworks
import { Divider, Pagination as AntdPagination } from "antd";
// Utilities
import { handleItemRender, handleShowTotal } from "./index.utils";
// Hooks
import { usePaginations } from "./index.hook";

const Paginations = () => {
  const { current, handleChange } = usePaginations();

  return (
    <div>
      <Divider>Pagination</Divider>
      <AntdPagination
        // disabled
        total={100}
        size="small"
        // simple
        showQuickJumper
        current={current}
        showLessItems={false}
        showPrevNextJumpers={false}
        defaultCurrent={4}
        onChange={handleChange}
        itemRender={handleItemRender}
        showTotal={handleShowTotal}
      />
    </div>
  );
};

export default Paginations;
