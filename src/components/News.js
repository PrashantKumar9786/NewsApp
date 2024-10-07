import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize: 8, 
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  articles = [
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "England vs Australia LIVE: fourth men’s ODI – cricket score, radio commentary, video highlights and text updates",
        "description": "England host Australia in the fourth men’s one-day international at Lord's – follow text updates, radio commentary and video highlights.",
        "url": "http://www.bbc.co.uk/sport/cricket/live/c9r39015kwzt",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        "publishedAt": "2024-09-27T12:52:12.0513963Z",
        "content": "England: Phil Salt, Ben Duckett, Will Jacks, Harry Brook (c), Jamie Smith (wk), Liam Livingstone, Jacob Bethell, Brydon Carse, Jofra Archer, Matthew Potts, Adil Rashid \r\nAustralia: Travis Head, Mitch… [+353 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/289this.props.pageSize907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]


  constructor(){
    super();

    this.state = {
     articles: [], 
     loading: false,
     page: 1

    }
  }
  
  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5bd90e48800476f8c400794d0eb210c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults:parseData.totalResults,
      loading:false })
  }

  handlePrevClick = async()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5bd90e48800476f8c400794d0eb210c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
        page: this.state.page - 1,
        articles: parseData.articles,
        loading: false
    })
  }

  handleNextClick = async()=>{
    console.log("Next");
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5bd90e48800476f8c400794d0eb210c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
        page: this.state.page + 1,
        articles:parseData.articles,
        loading: false
    })
    }
}
  render() {
    return (
        <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url} >
          <NewsItem title={element.title?element.title.slice(0, 45):""} 
          description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
        </div>
        
      })}
        </div>
         <div className="container d-flex justify-content-between">
         <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News
