import { SUBMIT_TEMPLATE } from '../actions'
const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_TEMPLATE: {
      state['template'] = action.template
      return state
    }
    default:
      return state
  }
}

export default reducer
