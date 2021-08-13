import React from 'react';
import {  BaseInfoWrap ,OtherConfigWrap ,BraftEdit } from './components/index'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

// 其他配置组件
// 栏目内容组件

const ColumnCreate = () => {
  const callback = (key) => {
    console.log(key);
  }

  return (
    <div className="app-container">
     <Tabs onChange={callback} type="card">
    <TabPane tab="基本信息" key="1">
      <BaseInfoWrap />
    </TabPane>
    <TabPane tab="其他配置" key="2">
      <OtherConfigWrap />
    </TabPane>
    <TabPane tab="栏目内容" key="3">
      <BraftEdit />
    </TabPane>
  </Tabs>
    </div>
  );
}

export default ColumnCreate;