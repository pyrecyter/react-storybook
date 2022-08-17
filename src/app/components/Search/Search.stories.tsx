import Search from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/global.less";
import React from "react";

export default {
  title: "Client Portal/Search",
  component: Search,
  args: {
    placeholder: "Search",
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <div>
    <Search {...args} />
  </div>
);

export const Primary = Template.bind({});
