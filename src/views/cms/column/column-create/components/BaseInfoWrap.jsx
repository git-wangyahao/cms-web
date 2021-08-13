// 基本信息组件
import React from 'react';
import {
  Form,
  Select,
  InputNumber,

  Radio,


  Upload,
  Icon,
  Modal,

  Input,
  Card
} from 'antd';

const { Option } = Select;


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const BaseInfo = (props) => {

  const state = {
    fileList:[],
    previewImage:''
  }

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

  const  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  // 关闭预览
  const handleCancel =() => {

  }
  // 预览

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });

  };

 const  handleChange = ({ fileList }) =>  {
  this.setState({ fileList })
 }

  return (
    <Card>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="所属栏目" hasFeedback>
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

        <Form.Item label="栏目名称">
          <Input placeholder="请输入栏目名称" />
        </Form.Item>

        <Form.Item label="排序">
          {getFieldDecorator('input-number', { initialValue: 1 })(<InputNumber min={1} />)}
        </Form.Item>

        <Form.Item label="显示状态">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">显示</Radio>
              <Radio value="2">隐藏</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="页面模式">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">列表模式</Radio>
              <Radio value="2">单页模式</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="是否外部链接">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">外部链接</Radio>
              <Radio value="2">正常访问</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="外部链接">
          <Input placeholder="请输入外部链接" />
        </Form.Item>

        <Form.Item label="封面图片" >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          })(
            <div>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={state.fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {state.fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal visible={state.previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
              </Modal>
            </div>
          )}
        </Form.Item>

        <Form.Item label="文档评论">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">允许评论</Radio>
              <Radio value="2">禁止评论</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

      </Form>
    </Card>
  )
}

const BaseInfoWrap = Form.create({ name: 'validate_other' })(BaseInfo);

export default BaseInfoWrap
