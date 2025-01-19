import React from 'react'

function MenuItem(props) {
  return (
    <div>
      <a href={props.linkurl} >{props.linktext}</a>
    </div>
  )
}

export default MenuItem
