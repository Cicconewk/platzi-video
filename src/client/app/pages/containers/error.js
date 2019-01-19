import React from 'react'
import '../../styles/error.css'

export default function Error() {
  return (
    <div className="error">
      <p>PAGE NOT FOUND</p>
      <Button className='btn btn-primary'>Go back home!</Button>
    </div>
  )
}
