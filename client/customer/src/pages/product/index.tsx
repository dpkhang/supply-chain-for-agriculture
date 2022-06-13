import React from 'react'
import './style.scss'
import FilterComponent from '../../components/common/filter/filter.component'
import PaginationComponent from '../../components/common/pagination/pagination.component'
import BannerComponent from '../../components/product/banner/banner.component'
import CardGroupComponent from '../../components/product/card/card-group.component'


function Index() {
  return (
    <div className="product">
      <BannerComponent></BannerComponent>
      <div className="main">
        <FilterComponent></FilterComponent>
        <CardGroupComponent></CardGroupComponent>
        <PaginationComponent></PaginationComponent>
      </div>
    </div>
  )
}

export default Index