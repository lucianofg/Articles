import ArticleList from "./articles";
import {getYourTopArticles} from "../../controllers/article-controller";

export default function Dashboard() {
    const [headers, articles] = getYourTopArticles();
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h1>Sales Plot</h1>
                <p>Maybe look for a 3rd party library?</p>
            </div>

            <div>
                <ArticleList headers={headers} rows={articles} />
            </div>
        </div>
    )
}