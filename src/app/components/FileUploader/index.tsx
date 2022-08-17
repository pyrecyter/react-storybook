import { Button, Col, Row } from "antd";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

const FileUploader: React.FC = () => {
  return (
    <div className={styles.yj_cp_upload_files_area}>
      <Row justify="center">
        <Col>
          <Button
            type="default"
            className={styles.yj_cp_upload_btn}
            icon={<DownloadOutlined />}
          >
            Upload Files
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FileUploader;
