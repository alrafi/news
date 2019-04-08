import React from 'react'

function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1><br/>
        <p>News Portal Web App using newsapi</p>
        <p>Developed by Hafis Alrafi</p>
      </div>
    </React.Fragment>
  )
}

const aboutStyle = {
  background: '#f6f6f6',
  paddingTop: '20px',
  textAlign: 'center',
  height: '600px'
}

export default  About;