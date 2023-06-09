import { Select as AntdSelect } from "antd";
import Title from "antd/es/typography/Title";

const Select = ({
  label = "Search",
  options = [],
  placeholder = "Search Country",
  ...prop
}) => {
  return (
    <>
      <Title level={4}>{label}</Title>
      <AntdSelect
        {...prop}
        showSearch
        style={{
          width: "100%",
        }}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label.toLowerCase() ?? "").includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options.map((item) => {
          return {
            value: JSON.stringify(item),
            label: item?.name?.common,
          };
        })}
      />
    </>
  );
};

export default Select;
