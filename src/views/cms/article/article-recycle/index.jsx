import React from 'react';
import { Form, Button ,Select, Card ,Input} from 'antd';
import { DatePicker } from 'antd';
import { Table, Divider, Tag ,Menu, Dropdown} from 'antd';
import './index.less'

const { RangePicker } = DatePicker;
const { Option } = Select;
// 操作区

const menu = (
  <Menu>
    <Menu.Item>
      还原所选
    </Menu.Item>
    <Menu.Item>
    还原所有
    </Menu.Item>
    <Menu.Item>
    删除所选
    </Menu.Item>
    <Menu.Item>
    删除全部
    </Menu.Item>
  </Menu>
);

const OperateSpace = () => {
  return (
    <div>
      <Dropdown overlay={menu} >
        <Button type="primary" icon="setting">操作</Button>
      </Dropdown>
    </div>
  )
}



// 搜索区
const SearchSpace = () => {

  const handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  const handleChange = () => {

  }

  // 时间组件
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  const onOk = (value) => {
    console.log('onOk: ', value);
  }
  


  return (
    <Form className="ant-advanced-search-form" layout="inline" onSubmit={handleSearch}>
      <Form.Item>
        <Select defaultValue="所属栏目" style={{ width: 120 }} onChange={handleChange}>
          <Option value="所属栏目">所属栏目</Option>
          <Option value="HTML">HTML</Option>
          <Option value="CSS">CSS</Option>
          <Option value="JS">JS</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        placeholder={['Start Time', 'End Time']}
        onChange={onChange}
        onOk={onOk}
      />
      </Form.Item>
      <Form.Item>
        <Input placeholder="请输入关键词" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">搜索</Button>
      </Form.Item>
    </Form>
  )
}

// 定义头部区域

const HeaderSpace = () => {
  return (
    <div className="header-space">
       {/* 操作区 */}
      <OperateSpace />
        {/* 搜索区 */}
      <SearchSpace />
    </div>
  )
}
// 内容区
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary"> 编辑 </Button>
        <Divider type="vertical" />
        <Button type="danger">删除</Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Content =() => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}


const ArticleRecycle = () => {
  return (
    <div className="app-container">
      <Card>
        <HeaderSpace />
      </Card>
      <Card>
        <Content />
      </Card>
    </div>
  );
}

export default ArticleRecycle;