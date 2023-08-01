"use client";

import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Progress, Upload } from "antd";

const { Dragger } = Upload;

export default function Home() {
  return (
    <div className="p-2">
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">拖拽或者点击这里上传图片</p>
        <p className="ant-upload-hint">
          建议：切图的比例要计算好，每块小图大小最好保持一致。
        </p>
      </Dragger>

      <Card title="设置" bordered={false}>
        <Form>
          <Form.Item label="宽度">
            <Input placeholder="255" />
          </Form.Item>
          <Form.Item label="高度">
            <Input placeholder="255" />
          </Form.Item>
          <Form.Item label="品质">
            <Input placeholder="50" />
          </Form.Item>
        </Form>
      </Card>

      <Progress className="mt-4" percent={50} status="active" />

      <Button type="primary" block>
        导出图片
      </Button>
    </div>
  );
}
