import { Checkbox, Col, Collapse, Row } from "antd";
import React, { ReactNode } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

type Props = {
  key: string | number;
  fileType: string;
  title: string;
  isSelected: boolean;
  content?: ReactNode;
  trailingIcons?: any;
  isActive?: boolean;
  fileStatus?: string;
  className?: string;
  note?: string;
  onSelectChange?: (isSelected: boolean) => void;
};

const { Panel } = Collapse;

const FileCard: React.FC<Props> = (props) => {
  const generateHeader = () => {
    return (
      <Row style={{ width: "100%" }}>
        <Col span={16}>
          <Row gutter={10}>
            <Col>
              <Checkbox
                type="checkbox"
                className={styles.YJ_CP_FILECARD_CHECKBOX}
                checked={props.isSelected}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  props.onSelectChange &&
                    props.onSelectChange(e.target.checked);
                }}
              />
            </Col>
            <Col className={styles.YJ_CP_FILECARD_TITLE}>{props.title}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={10} justify="space-between">
            <Col className={styles.YJ_CP_FILECARD_FILETYPE} span={3}>
              {(() => {
                if (props.isActive !== undefined)
                  return props.isActive ? (
                    <div
                      style={{ display: "inline-block" }}
                      className={styles.YJ_CP_FILECARD_ACTIVE}
                    ></div>
                  ) : (
                    <div
                      style={{ display: "inline-block" }}
                      className={styles.YJ_CP_FILECARD_DEACTIVE}
                    ></div>
                  );
              })()}
              {props.fileType}
            </Col>
            <Col flex="auto">{props.trailingIcons}</Col>
          </Row>
        </Col>
        {props.note && (
          <Col span={24}>
            <div className={styles.yj_cp_fileCard_note}>{props.note}</div>
          </Col>
        )}
      </Row>
    );
  };
  return (
    <Collapse
      expandIconPosition="right"
      expandIcon={(exProp) =>
        exProp.isActive ? <UpOutlined /> : <DownOutlined />
      }
      className={styles.YJ_CP_FILECARD + " " + props.className}
    >
      <Panel header={generateHeader()} key={props.key}>
        <div className={styles.YJ_FILECARD_CONTENT}>{props.content}</div>
      </Panel>
    </Collapse>
  );
};
export default FileCard;
