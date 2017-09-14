import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState (state,{ payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}


const pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
       showSizeChanger:true,
      showQuickJumper:true,
      showTotal: total => `Total ${total} Items`,
      current:1,
      total:0,
    },
  },
})
