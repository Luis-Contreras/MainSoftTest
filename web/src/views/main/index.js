import React, { useState } from "react";
import { Maps } from "../../modules/maps";
import { Divider, Layout } from "antd";
import { Country } from "../../modules/country";
import History from "../../modules/history";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

const siderStyle: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "white",
  width: "300px",
};

const contentStyle: React.CSSProperties = {
  backgroundColor: "white",
  marginLeft: "10px",
};

const Main = () => {
  const [currentItem, setCurrentItem] = useState({
    lat: "44.3",
    long: "10.99",
  });
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Layout>
      <Sider width="300px" style={siderStyle}>
        <Country
          setCurrentItem={(item) => {
            setSelectedItem(item);
            setCurrentItem(item);
          }}
        />
        <Divider />
        <History selectedItem={selectedItem} handleItemClick={setCurrentItem} />
      </Sider>
      <Layout>
        <Content style={contentStyle}>
          <Maps currentItem={currentItem} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
