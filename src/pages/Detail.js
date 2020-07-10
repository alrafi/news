import React from 'react';

const Detail = (props) => {
  // console.log(props);
  const { item } = props.location.state;
  console.log(item);
  return (
    <>
      <div style={contentStyle}>
        <h1 style={titleStyle}>{item.title}</h1>
        <p>
          <img src={item.urlToImage} alt="img" style={imgStyle} /> <br />
          Author: {item.author} <br />
          Published: {item.publishedAt} <br />
          <br />
          {item.content} <br />
          <br />
          <strong>
            <a href={item.url}>Read More</a>
          </strong>
        </p>
      </div>
    </>
  );
};

const imgStyle = {
  marginTop: '20px',
  width: '50%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const contentStyle = {
  background: '#f6f6f6',
  paddingLeft: '10px',
  paddingRight: '10px',
};

const titleStyle = {
  paddingTop: '20px',
};

export default Detail;
