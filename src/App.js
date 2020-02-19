import React, { Component } from "react";
import axios from "axios";
import Main from "./pages/Main";

import "./styles/App.scss";

class App extends Component {
    state = {
        featuredData: {
            loading: false,
            axiosErros: null,
            responseInfo: ""
        },
        noFeaturedData: {
            loadingNoFeatured: false,
            axiosErrosNoFeatured: null
        },
        noFeaturedInfo: {
            items: []
        },
        // Pagination state ==>
        page: 1
        // Pagination state <==
    };

    componentDidMount() {
        this.handlerQuery();
        this.handlerNoFeaturedQuery();
        document.addEventListener("scroll", this.loadMoreData);
    }

    //pagination ==>
    loadMoreData = event => {
        const {
            scrollTop,
            clientHeight,
            scrollHeight
        } = event.target.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 20) {
            return this.handlerNoFeaturedQuery();
        }
    };
    //pagination <==

    handlerQuery = async () => {
        this.setState({
            featuredData: {
                loading: true
            }
        });
        try {
            const query = await axios.get(
                "https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true"
            );

            this.setState({
                featuredData: {
                    responseInfo: query.data.items,
                    loading: false
                }
            });
        } catch (error) {
            this.setState({
                featuredData: {
                    axiosErros: error.message,
                    loading: false
                }
            });
        }
    };

    handlerNoFeaturedQuery = async () => {
        this.setState({
            noFeaturedData: {
                loadingNoFeatured: true
            }
        });
        try {
            const query = await axios.get(
                `https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${this.state.page}&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME`
            );
            this.setState({
                noFeaturedData: {
                    loadingNoFeatured: false
                },
                noFeaturedInfo: {
                    items: [].concat(
                        this.state.noFeaturedInfo.items,
                        query.data.items
                    )
                },

                page: this.state.page + 1
            });
        } catch (error) {
            this.setState({
                noFeaturedData: {
                    axiosErrosNoFeatured: error.message,
                    loadingNoFeatured: false
                }
            });
        }
    };

    render() {
        console.log(this.state.noFeaturedInfo.items);
        if (
            this.state.featuredData.responseInfo &&
            this.state.noFeaturedInfo.items
        ) {
            return (
                <Main
                    responseInfo={this.state.featuredData.responseInfo}
                    noFeaturedInfo={this.state.noFeaturedInfo.items}
                />
            );
        } else if (this.state.featuredData.loading) {
            return "Loading";
        } else {
            return "Empty";
        }
    }
}

export default App;
