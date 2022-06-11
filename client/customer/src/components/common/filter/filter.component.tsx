
import * as React from 'react'
import SelectorComponent from '../selector/selector.component'
import './filter.component.scss'

function FilterComponent() {
  return (
    <div className="filter-wrapper">
      <div className="filter">
        <div className="col">
          <p className="title">Bộ lọc: </p>
          <SelectorComponent label="Danh mục" size="small" style={{width: '23%', m: 1}}></SelectorComponent>
          <SelectorComponent label="Nhà cung ứng" size="small" style={{width: '23%', m: 1}}></SelectorComponent>
          <SelectorComponent label="Số lượng" size="small" style={{width: '23%', m: 1}}></SelectorComponent>
        </div>
        <div className="col">
          <p className="title" >Sắp xếp: </p>
          <SelectorComponent label="Sắp xếp" size="small" style={{width: '60%', m: 1}}></SelectorComponent>
        </div>
      </div>
    </div>
  )
}

export default FilterComponent