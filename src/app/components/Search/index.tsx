import { Input } from "antd";
import React from "react";

type Props = {
  placeholder?: string;
  suffix?: React.ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onSearch?: (value: string) => void;
};

const Search: React.FC<Props> = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      suffix={props.suffix}
      value={props.value}
      disabled={props.disabled}
      className={props.className}
      style={props.style}
      onChange={(e) => {
        if (props.onChange) {
          props.onChange(e.target.value);
        }
      }}
      onPressEnter={(e) => {
        if (props.onSearch) {
          props.onSearch(e.currentTarget.value);
        }
      }}
    />
  );
};

export default Search;
