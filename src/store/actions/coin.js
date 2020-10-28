import { coin } from "../../services/apiService"
import { constans } from "../constans"

const setCoin = (data) => {
  return ({
    type: constans.COIN.SET_COIN_SUCCESS,
    payload: data
  })
}

const setRange = (value) => {
  return ({
    type: constans.COIN.SET_RANGE_SUCCESS,
    payload: value
  })
}

export const startSetCoin = () => dispatch => {
  return coin
    .getCoin()
    .then(res => dispatch(setCoin(res)))
    .catch(err => console.log(err))
}

export const startSetRange = (value) => dispatch => {
  return dispatch(setRange(value))
}
