import React from 'react'
import CardComponent from '../../common/card/card.component'
import './card-group.component.scss'

function CardGroupComponent(): JSX.Element {

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

  const data = products.map((value, index) => {
    return (
      <div>
        <CardComponent 
          image="/images/extension/main.jpg"
          sx={{
            m: '.5rem auto'
          }}

          width={240}
        >
          <h1 style={{fontSize: '1.5rem'}}>Title</h1>
          <p>Noi dung</p>
          <p>Noi dung</p>
          <p>Noi dung</p>
          <p>Noi dung</p>
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