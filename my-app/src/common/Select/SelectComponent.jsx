import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <>
      <span className="block mr-4">{title}</span>
      <Select {...rest} className="w-52 mx-2 text-black" />
    </>
  );
};

export default SelectComponent;
