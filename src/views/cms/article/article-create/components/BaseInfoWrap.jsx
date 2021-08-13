// 基本信息组件
import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  Radio,
  Input,
  Card,
} from 'antd';

const { Option } = Select;

const BaseInfo = (props) => {

  const { getFieldDecorator } = props.form;
 
  // validateFields
  // 获取表单字段
  // const getFormFields = () => {
  //   let valuesObj = null
  //   validateFields( (err,values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //      valuesObj = values
  //   })
  //   return valuesObj
  // }

  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 10 },
  };


  return (
    <Card>
      <Form {...formItemLayout}>
        <Form.Item label="所属栏目" name="sort_id" hasFeedback>
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

        <Form.Item label="文档标题" name="article_title">
          { getFieldDecorator('article_title')(<Input placeholder="请输入文档标题" />) }
        </Form.Item>

        <Form.Item label="标记" name="article_hot">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">首页</Radio>
              <Radio value="2">热门</Radio>
              <Radio value="3">推荐</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="点击" name="article_views">
          {getFieldDecorator('article_views', { initialValue: 3 })(<InputNumber min={1} />)}
        </Form.Item>

        <Form.Item label="点赞" name="article_like_count">
          {getFieldDecorator('article_like_count', { initialValue: 3 })(<InputNumber min={1} />)}
        </Form.Item>

        <Form.Item label="评论总数" name="article_comment_count">
          {getFieldDecorator('article_comment_count', { initialValue: 3 })(<InputNumber min={1} />)}
        </Form.Item>

      </Form>
    </Card>
  )
}

const BaseInfoWrap = Form.create({ name: 'validate_other' })(BaseInfo);

export default BaseInfoWrap
