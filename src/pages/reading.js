import {FullArticle, PreviewArticle} from "./components/articles";
import {useParams} from "react-router-dom";
import {getArticle} from "../controllers/article-controller";

export default function Reading(props) {
    function userHasArticle(id) {
        return false
    }

    let params = useParams()
    const article = getArticle(params.article_id)

    if (article) {
        return (
            <div>
                {
                    userHasArticle(article.id) ?
                        <FullArticle article={article}/> :
                        <PreviewArticle article={article}/>
                }
            </div>
        )
    } else {
        return <h1>Article not found</h1>
    }
}