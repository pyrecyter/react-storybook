import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileCard from ".";
import "../../../styles/global.less";
import { Col, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default {
  title: "Client Portal/FileCard",
  component: FileCard,
  args: {
    title: "FileCard",
    fileType: "pdf",
    key: "1",
    content: <div>this is content</div>,
    trailingIcons: (
      <Row justify="end">
        <Col>
          <DownloadOutlined
            className="YJ_CP_FileCard_DownloadIcon"
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </Col>
      </Row>
    ),
  },
} as ComponentMeta<typeof FileCard>;

const Template: ComponentStory<typeof FileCard> = (args) => (
  <div className="yj_cp_primary_accordian_list">
    <FileCard {...args} />
  </div>
);

export const Primary = Template.bind({});
