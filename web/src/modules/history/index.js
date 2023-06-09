import React from "react";
import { Button, List } from "antd";
import Title from "antd/es/typography/Title";
import { useHistory } from "../../api/history";

const History = ({ handleItemClick, selectedItem }) => {
  const { data, isLoading } = useHistory();
  return (
    <List
      header={<Title level={4}>History</Title>}
      bordered
      loading={isLoading}
      dataSource={selectedItem ? [selectedItem, ...data] : data}
      style={{
        overflow: "scroll",
        maxHeight: "700px",
      }}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Button type="link" onClick={() => handleItemClick(item)}>
                {item.country_name}
              </Button>
            }
            description={item.created_at}
          />
        </List.Item>
      )}
    />
  );
};

export default History;
