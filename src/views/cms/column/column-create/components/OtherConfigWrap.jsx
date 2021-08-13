// 基本信息组件
import React from 'react';
import {
  Form,
  Select,
  Input,
  Card
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;


const OtherConfig = (props) => {


  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 10 },
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };



  return (
    <Card>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        

        <Form.Item label="SEO标题">
          <Input placeholder="请输入SEO标题" />
        </Form.Item>

        <Form.Item label="关键词">
          <Input placeholder="请输入关键词" />
        </Form.Item>

        <Form.Item label="摘要">
          <TextArea rows={4} placeholder="请输入摘要" />
        </Form.Item>

        <Form.Item label="来源">
          <Input placeholder="请输入来源" />
        </Form.Item>

        <Form.Item label="作者">
          <Input placeholder="请输入作者" />
        </Form.Item>

        <Form.Item label="文章模板" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: '请选择文档标题' }],
          })(
            <Select placeholder="所属栏目">
              <Option value="china">所属栏目</Option>
              <Option value="JS">JS</Option>
              <Option value="VUE">VUE</Option>
              <Option value="REACT">REACT</Option>
            </Select>,
          )}
        </Form.Item>

      </Form>
    </Card>
  )
}

const OtherConfigWrap = Form.create({ name: 'validate_other' })(OtherConfig);

export default OtherConfigWrap
