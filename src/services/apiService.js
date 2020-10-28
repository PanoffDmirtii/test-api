import axios from 'axios'

export const req = axios.create({
  baseURL: 'https://api.binance.com/api/v3'
})

export const coin = {
  getCoin() {
    return req.get('/ticker/price?symbol=ETHBTC').then(res => res.data)
  }
}