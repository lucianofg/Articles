import {OkayButton} from "./buttons";
import React from "react";

export function ArticleInfo(props) {

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
            <ArticleInfo />
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