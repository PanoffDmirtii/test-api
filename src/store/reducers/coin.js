import { constans } from "../constans";

const initState = {
  data: null,
  diff: null,
  range: '10'
}

const coinReduser = (state = initState, action) => {
  switch (action.type) {

    case constans.COIN.SET_COIN_SUCCESS:
      const { price } = action.payload
      const _diff = state.data ? (+price / state.data.price - 1) * 100 : ''
      return { ...state, data: action.payload, diff: _diff }

    case constans.COIN.SET_RANGE_SUCCESS:
      return { ...state, range: action.payload }

    default:
      return state
  }
}

export default coinReduser;