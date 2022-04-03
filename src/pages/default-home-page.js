import React from "react";
import {getListOfTopArticles} from "../controllers/article-controller";
import {ArticleCard, ArticleCardList} from "./components/articles";

export default function DefaultHomePage() {
    const topArticles = getListOfTopArticles();
    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <ul>
                    <ArticleCardList articles={topArticles} />
                </ul>
            </div>
            <div>
                <div className="default-home-page-cards">
                    {topArticles.map(article => {return (<ArticleCard article={article} />)})}
                </div>
            </div>
        </div>
    )
}