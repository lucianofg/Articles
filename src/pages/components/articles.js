import {OkayButton} from "./buttons";
import React from "react";
import AuthorInfo from "./author";
import './articles.css'
import {Link} from "react-router-dom";

export function ArticleInfo(props) {
    return (
        <div>
            <div className="article-info article-author">
                <AuthorInfo author={props.article.author} />
            </div>
            <div className="article-info article-themes">
                <div className="description">Themes</div>
                <div className="content">{props.article.tags.join(', ')}</div>
            </div>
            <div className="article-info article-temps">
                <div className="description">Temps</div>
                <div className="content">{props.article.temps}</div>
            </div>
        </div>
    )
}

export function ArticleCard(props) {
    return (

            <div className="article-card">
                <Link to={`/reading/${props.article.id}`}>
                    <img className="article-card-img" src={props.article.img}/>
                    <h1>{props.article.title}</h1>
                </Link>
                <div className="article-card-author-info">
                    <ArticleInfo article={props.article} />
                </div>
            </div>
    )
}

export function BuyArticle(props) {
    function buyArticle() {

    }

    return (
        <div>
            <p>To continue reading, you need to buy this article.</p>
            <p>You can continue this reading for only {props.article.price} paid on you card</p>
            <OkayButton
                text="Buy item"
                onClick={() => buyArticle()}
            />
        </div>
    )
}

export function FullArticle(props) {
    return (
        <div className="reading-div">
            <img src={props.article.img} />
            <h1>{props.article.title}</h1>
            <div>
                {props.article.text.map((paragraph) => {return (<p>{paragraph}</p>)})}
            </div>
            <ArticleInfo article={props.article}/>
        </div>
    )
}

export function PreviewArticle(props) {
    return (
        <div className="reading-div">
            <h1>{props.article.title}</h1>
            <div>
                <p>{props.article.text[0]}</p>
            </div>
            <BuyArticle article={props.article} />
            <ArticleInfo article={props.article} />
        </div>
    )
}