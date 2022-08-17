import FileUploader from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../../styles/global.less";
import React from "react";

export default {
  title: "Client Portal/FileUploader",
  component: FileUploader,
  args: {},
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => (
  <div>
    <FileUploader {...args} />
  </div>
);

export const Primary = Template.bind({});
