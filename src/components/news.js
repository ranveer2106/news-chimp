import React, { Component } from 'react'
import Newsbox from './newsbox'
import "../output.json"
import "./total.css";
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            page: 1,
            totalresults: 0,
            progress: 20
        }
        document.title = ` ${this.capitalizeFirstLetter(this.props.category)}-News Chimp`
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    updateNews = async () => {
        this.props.setProg(50)
        console.log("1")
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9abbb9206b664dc5b6223d57ae7f11ec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalresults: parsedData.totalResults, loading: false })
        this.props.setProg(100);
        console.log(url)
    }
    componentDidMount() {
        this.updateNews();
        this.setState({ page: this.state.page + 1 })
        console.log("2")
    }

    fetchMoreData = async () => {
        console.log("3")
        this.props.setProg(50)
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9abbb9206b664dc5b6223d57ae7f11ec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalresults: parsedData.totalResults, loading: false })
        this.props.setProg(100);
        console.log(url)
    };
    render() {
        return (
            <div className='justify-content-evenly'>
                <div className='d-flex flex-column container' style={{ justifyContent: "center" }}>
                    <h1 style={{ textAlign: "center", margin: "30px" }}>{this.capitalizeFirstLetter(this.props.category)} - Category News Chimp</h1>
                    {/* {this.state.loading && <Spinner />} */}
                </div>
                {/* {this.state.page} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalresults}
                    loader={<Spinner />}
                    className="justify-content-evenly"
                >
                    <div className='container' >
                        <div className='d-flex flex-wrap' style={{ justifyContent: "space-between" }}>
                            {this.state.articles.map((element) => {
                                return <Newsbox key={element.url} title={element ? element.title : ""} desc={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
                            })}
                        </div>
                    </div>
                </InfiniteScroll>


            </div>

        )
    }
}

export default News