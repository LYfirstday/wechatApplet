// app首页
export enum IndexActionType {
  ADDNUMBER = 'addNumber',
  TEST = 'test'
}
// 每个action中参数payload type
// key为action的type,值为action的类型约束
export interface ActionPayloadType {
  [IndexActionType.ADDNUMBER]: {
    number: number
  },
  [IndexActionType.TEST]: {
    name: string,
    age: number
  }
}

// 模块的state类型声明；对应UI组件装饰器的props type
export interface IndexStateType {
  number: number,
  name: string,
  age: number,
  key: string
}

interface Index {
  namespace: string,
  state: IndexStateType,
  reducers?: any,
  effects?: any
}

const Index: Index = {
  namespace: 'index',
  state: {
    number: 1,
    name: 'aaa',
    age: 14,
    key: 's'
  },
  reducers: {
    addNumber(state: IndexStateType, action: { payload: ActionPayloadType['addNumber'] }) {
      console.log(action.payload.number)
      return {
        ...state
      }
    }
  },
  effects: {}
}

export default Index
