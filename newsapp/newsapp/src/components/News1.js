import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {

    return (
      <div>

        <div className="container my-3">
          <div className="row">
            <div className="col-md-3">

              <NewsItem title='title' description='mydes' />
            </div>
            <div className="col-md-3">

              <NewsItem title='title' description='mydes' />
            </div>
            <div className="col-md-3">

              <NewsItem title='title' description='mydes' />
            </div>


          </div>
          
        </div>
      </div>
    )
  }
}
