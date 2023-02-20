import React from "react";
// UI frameworks
import { Table } from "antd";

const source = [
  {
    key: "0",
    name: "John",
    age: 17,
    job: "Jr. frontend developer",
    salary: "50000",
  },
  {
    key: "1",
    name: "Jane",
    age: 27,
    job: "Sr. backend developer",
    salary: "150000",
  },
];

const columns = [
  {
    title: "First name",
    key: "name",
    dataIndex: "name",
    // width: "10%",
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    filters: [
      {
        text: "John",
        value: "John",
      },
      {
        text: "Jane",
        value: "Jane",
        children: [
          {
            text: "Jane2",
            value: "Jane2",
          },
        ],
      },
    ],
  },
  {
    title: "Age",
    key: "age",
    dataIndex: "age",
    defaultSortOrder: "descending",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Job",
    key: "job",
    dataIndex: "job",
  },
  {
    title: "Salary",
    key: "salary",
    dataIndex: "salary",
    render: (value, record, index) => {
      return (
        <div>
          {index}:${value}({record.salary})
        </div>
      );
    },
  },
];

const Tables = () => {
  const [selected, setSelected] = React.useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    setSelected(newSelectedRowKeys);
  };
  return (
    <div>
      <Table 
      dataSource={source}
      columns={columns}
      pagination={false}
      rowSelection={{
        selectedRowKeys: selected,
        type: "checkbox",
        // rowSelection: selected,
        onChange: onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              setSelected(newSelectedRowKeys);
            
          },
          }
        ]
      }}
      />
    </div>
  );
};

export default Tables;
