import {getArticlesThatYouWrote} from "../../controllers/article-controller";
import ArticleList from "./articles";

export default function WrittenArticles() {
    const [headers, articles] = getArticlesThatYouWrote();
    return (
        <div>
            <ArticleList rows={articles} headers={headers} />
        </div>
    )
}