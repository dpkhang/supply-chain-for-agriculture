import { Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import './pagination.component.scss'

function PaginationComponent() {

  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        <Stack spacing={2} >
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  )
}

export default PaginationComponent