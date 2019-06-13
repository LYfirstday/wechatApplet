import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less'
import { IndexStateType, ActionPayloadType, IndexActionType } from './../../models/index/index';

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

interface DispatchType<T extends IndexActionType>{
  type: T,
  payload: ActionPayloadType[T]
}

type ConnectDispatchProps = {
  dispatch: <T extends IndexActionType>(data: DispatchType<T>) => void
}

type IProps = IndexStateType & ConnectDispatchProps;

// IProps为装饰器注入的props类型，包括models中state的类型和dispatch类型
// 如果是常规传props，则声明后写在泛型中
interface Index {
  props: IProps
}

@connect(({ index }) => ({
  ...index
}))
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentDidShow() {
    console.log(this.props)
    this.props.dispatch({
      type: IndexActionType.ADDNUMBER,
      payload: {
        number: 1,

      },
    });
  }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

// 组件的常规类型：props, state; 有就写没有就{}或any
// 第一个{} 是常规传入的props类型  这种方式：<Com props={...props}/>
export default Index as ComponentClass<{}, {}>






