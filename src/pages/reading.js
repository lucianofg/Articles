import React, {useState} from "react";
import {OkayButton} from "../components/buttons";

export default function Reading(props) {
    function userHasArticle(id) {
        // TODO
        return true
    }

    return (
        <div>
            {
                userHasArticle(props.article.id) ?
                    <FullArticle article={props.article} /> :
                    <PreviewArticle article={props.article} />
            }
        </div>
    )
}

function ArticleInfo(props) {

}

function BuyArticle(props) {
    function buyArticle() {

    }

    return (
        <div>
            <p>To continue reading, you need to buy this article.</p>
            <p>You can continue this reading for only {props.article.price} paid on you card</p>
            <OkayButton
                value="Buy item"
                onClick={() => buyArticle()}
            />
        </div>
    )
}

function FullArticle(props) {
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

function PreviewArticle(props) {
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
