import React,{ Component } from 'react';
import {  BaseInfoWrap , BraftEdit } from './components/index'
import { Tabs ,Card ,Button } from 'antd';
import { creatArticle } from '@/api/article'
const { TabPane } = Tabs;

// 其他配置组件
// 栏目内容组件


class articleCreate extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      htmlContent:''
    }
  }

   callback (key) {
    console.log(key);
  }

  //  接受子组件的data
   create ()  {
     console.log("this.myRef.current", this.myRef.current)
    this.myRef.current.validateFields( async (err , value) => {
      if (!err) {
        console.log('Received values of form: ', err);
      }
      console.log('this.',this)
      const parasm = {
        ...value,
        user_id:1,
        article_content: this.state.htmlContent
      }
      const res = await creatArticle(parasm)
      console.log("this.props.history", res)
      if(res.code === 0) {
        this.props.history.push('/cms/article-list')
      }
      console.log("res",res)
    })
  }
  // 接受文本
  dataFunction(val) {
    this.setState({
      htmlContent: val
    })
  }

  render() {

    return (
      <div className="app-container">
       <Tabs onChange={this.callback} type="card">
          <TabPane tab="基本信息" key="1">
            <BaseInfoWrap  ref={this.myRef}   />
          </TabPane>
          {/* <TabPane tab="其他配置" key="2">
            <OtherConfigWrap />
          </TabPane> */}
          <TabPane tab="栏目内容" key="2">
            <BraftEdit  dataFunction={this.dataFunction.bind(this)} />
          </TabPane>
        </Tabs>
        <Card>
          <Button type="primary" onClick={ this.create.bind(this) }>创建</Button>
        </Card>
      </div>
    );
  }
 
}

export default articleCreate;