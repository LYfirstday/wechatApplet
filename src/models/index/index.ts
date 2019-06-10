// app首页
export enum IndexActionType {
  ADDNUMBER = 'addNumber'
}

// 每个action中参数payload type
export interface ActionPayloadType {
  'addNumber': {
    number: number
  }
}

// 是对应组件装饰器的props type
export interface IndexStateType {
  number: number,
  name: string,
  age: number,
  key: string
}

export default {
  namespace: 'index',
  state: {
    number: 1,
    name: 'aaa',
    age: 14
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

