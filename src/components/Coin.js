import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import withVisibleTab from '../hoc/withVisibleTab';
import { startSetCoin, startSetRange } from '../store/actions/coin';

const Coin = (props) => {
  const { isVisibleTab } = props
  const dispatch = useDispatch()
  const { data, diff, range } = useSelector(state => state.coin)

  useEffect(() => {
    dispatch(startSetCoin())
  }, [])

  useEffect(() => {
    /**
     * setInterval для очень коротких интервалов не подойдет.
     */
    let coinAutoUpdate = setTimeout(
      function startAutoUpdate() {
        if (!isVisibleTab) return
        dispatch(startSetCoin())
        coinAutoUpdate = setTimeout(startAutoUpdate, +range * 1000)
      }, 0)
    return () => {
      clearTimeout(coinAutoUpdate)
    }
  }, [range, isVisibleTab])


  const handleChangeRange = ({ target: { value, name } }) => {
    dispatch(startSetRange(value))
  }

  const getDiffPersent = () => {
    const persent = diff ? parseFloat(diff).toFixed(4) : '0.0000'
    if (persent > 0) return <span className='text-success'>&#8593; {persent}%</span>
    else if (persent < 0) return <span className='text-danger'>&#8595; {persent}%</span>
    else return <span className='text-muted'>{persent}%</span>
  }

  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Row className='flex align-items-center mb-5 justify-content-center'>
        <Col>
          <div className='d-flex justify-content-center'>
            <h3 className='mr-5'>{`${data.price} ${data.symbol}`}</h3>
            <h3>{getDiffPersent()}</h3>
          </div>
        </Col>
      </Row>
      <Row className='flex align-items-center mb-3 justify-content-center'>
        <Col sm='3'>
          <FormGroup>
            <Label>Частота обновления</Label>
            <Input name='range' type='select' defaultValue={range} onChange={handleChangeRange}>
              <option value='10'>10</option>
              <option value='3'>3</option>
              <option value='1'>1</option>
              <option value='0.4'>0.4</option>
              <option value='0.1'>0.1</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default withVisibleTab(Coin);