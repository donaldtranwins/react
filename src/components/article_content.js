import React, { Component } from 'react';
import { getArticle } from '../data/article_data';

class ArticleContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            article: null
        }
    }

    componentWillMount(){
        this.updateArticle(this.props.params.id);
    }

    componentWillReceiveProps(props){
        this.updateArticle(props.params.id);
    }

    updateArticle(articleID){
        getArticle(articleID).then(
            article => {this.setState({article});});
    }

    render(){
        const { article } = this.state;
        if(!article){
            return <h1>LOADING...</h1>;
        } else {
            return (
                <div>
                    <h1>{article.title}</h1>
                    <h3>{article.author}</h3>
                    <p>{article.content}</p>
                </div>
            );
        }
    }
}

export default ArticleContent;