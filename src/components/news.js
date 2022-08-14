import React, { useState, useEffect } from 'react'
import Newsbox from './newsbox'
import "../output.json"
import "./total.css";
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalresults, settotalresults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        props.setProg(50)
        console.log("1")
        // this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9abbb9206b664dc5b6223d57ae7f11ec&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        // this.setState({ loading: true });
        setLoading(true);
        let data = await fetch(url)
        let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles, totalresults: parsedData.totalResults, loading: false })
        setarticles(parsedData.articles);
        settotalresults(parsedData.totalResults)
        setLoading(false);
        props.setProg(100);
        console.log(url)
    }

    useEffect(() => {
        updateNews();
        document.title = ` ${capitalizeFirstLetter(props.category)}-News Chimp`
        // this.setState({ page: this.state.page + 1 })
        // setpage(page + 1);
        console.log("2")
    }, [])

    const fetchMoreData = async () => {
        console.log("3")
        props.setProg(50)
        // this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9abbb9206b664dc5b6223d57ae7f11ec&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        // this.setState({ loading: true });
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({ articles: this.state.articles.concat(parsedData.articles), totalresults: parsedData.totalResults, loading: false })
        setarticles(articles.concat(parsedData.articles));
        settotalresults(parsedData.totalResults)
        setLoading(false);
        props.setProg(100);
        console.log(url)
    };
    return (
        <div className='justify-content-evenly'>
            <div className='d-flex flex-column container' style={{ justifyContent: "center" }}>
                <h1 style={{ textAlign: "center", margin: "30px" }}>{capitalizeFirstLetter(props.category)} - Category News Chimp</h1>
                {/* <h1 style={{ textAlign: "center", margin: "30px" }}>Category News Chimp</h1> */}
                {loading && <Spinner />}
            </div>
            {/* {this.state.page} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalresults}
                loader={<Spinner />}
                className="justify-content-evenly"
            >
                <div className='container' >
                    <div className='d-flex flex-wrap' style={{ justifyContent: "space-between" }}>
                        {articles.map((element) => {
                            return <Newsbox key={element.url} title={element ? element.title : ""} desc={element.description} imgurl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </div>

    )

}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News