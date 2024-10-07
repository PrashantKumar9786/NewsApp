import React, { Component } from 'react'


export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
         <div  className="card" style={{width: "18rem"}}>
              <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-vKk3uoeOoMNh2MPODY1UOqnxqrBjm_-5w&s":imageUrl}  className="card-img-top" alt="..."/>
              <div  className="card-body">
                <h5  className="card-title">{title}</h5>
                <p  className="card-text">{description}  </p> 
                <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
