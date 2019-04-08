import React from 'react'

function Detail(props) {
  console.log(props)
  return (
    <>
      <div style={contentStyle}>
        <h1 style={titleStyle}>{ props.news.title }</h1>
        <p>
          <img src={props.news.urlToImage} alt="img" style={imgStyle} /> <br/>
          Author: {props.news.author} <br/>
          Published: {props.news.publishedAt} <br/><br/>
          { props.news.content } <br/><br/>
          <strong><a href={props.news.url}>Read More</a></strong>
        </p>
      </div>
    </>
  )
}

const imgStyle = {
  marginTop: '20px',
  width: "50%",
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const contentStyle = {
  background: '#f6f6f6',
  paddingLeft: '10px',
  paddingRight: '10px'
}

const titleStyle = {
  paddingTop: '20px'
}

export default Detail
