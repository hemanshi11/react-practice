import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ marginTop: '3rem' }}>
          <img src={imgurl} className="card-img-top" alt="..." height='250px'/>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

