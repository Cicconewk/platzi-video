import React, { Fragment } from 'react'
import Category from './category'

export default function Categories (props) {
  return(
    <Fragment>
      <div className="row">
        <div className="col-sm-12">
          {
            props.categories.map(category => {
              return <Category key={category.id} {...category} />
            })
          }
        </div>
      </div>
    </Fragment>
  )
}
