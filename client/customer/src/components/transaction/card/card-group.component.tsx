import React from 'react'
import CardComponent from '../../common/card/card.component'
import './card-group.component.scss'

function CardGroupComponent(): JSX.Element {

  const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

  const data = transactions.map((value, index) => {
    return (
      <div>
        <CardComponent 
          image="/images/extension/main.jpg"
        >
          <h1 style={{fontSize: '1.5rem'}}>giao dịch mua bán lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022</h1>
          <p><b>Ngày giao dịch: </b>21-03-2022</p>
          <p><b>Số lương: </b>15.000KG</p>
          <p><b>Mã giao dịch: </b>1234432190512</p>
        </CardComponent>
      </div>
    )
  })


  return (
    <div className='card-group-wrapper'>
      {data}
    </div>
  )
}

export default CardGroupComponent