import {getListOfTopArticles} from "../controllers/article-controller";
import React from "react";
import {ArticleCard} from "./components/articles";
import {Link} from "react-router-dom";

export default function DefaultHomePage() {
    const topArticles = getListOfTopArticles();
    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <ul>
                    {
                        topArticles.map(article => {
                            return (<li><Link to={`/reading/${article.id}`}>{article.title}</Link></li>)
                        })
                    }
                </ul>
                List of articles
            </div>
            <div>
                <div className="default-home-page-cards">
                    {topArticles.map(article => {return (<ArticleCard article={article} />)})}
                </div>
            </div>
        </div>
    )
}