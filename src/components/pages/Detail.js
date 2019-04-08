import React from 'react'

function Detail(props) {
  console.log(props)
  return (
    <>
      <h1>Detail News</h1>
      <p>
        { props.news.content }
      </p>
    </>
  )
}

export default Detail
