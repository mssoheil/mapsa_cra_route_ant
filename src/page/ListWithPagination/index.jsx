import React from "react";
// UI frameworks
import { Row, Col, Pagination, Typography, Divider, Space } from "antd";
// Hooks
import { useList } from "./list.hook";

const styles = {
  colContent: {
    border: "1px solid #aaa",
    borderRadius: "8px",
    padding: "10px",
  },
};

const ListWithPagination = () => {
  const { list, current, end, handleChange } = useList();

  return (
    <div>
      <Space direction="vertical" size={40}>
        <Row>
          {list.slice(end - 10, end).map((post) => {
            return (
              <Col key={post.id} span={4}>
                <div style={styles.colContent}>
                  <Typography.Title level={5}>
                    {post.title.slice(0, 10)}
                  </Typography.Title>
                  <Divider>Content</Divider>
                  <Typography.Paragraph>
                    {post.body.slice(0, 100)}
                  </Typography.Paragraph>
                </div>
              </Col>
            );
          })}
          <Col></Col>
        </Row>
        <Pagination
          // pageSizeOptions={[10, 12, 15, 24]}
          total={list.length}
          current={current}
          onChange={handleChange}
        />
      </Space>
    </div>
  );
};

export default ListWithPagination;
