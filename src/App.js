import './App.css';
import {Link} from "react-router-dom";
import {ArticleCard} from "./pages/components/articles";
import {getArticle} from "./controllers/article-controller";

function App() {
    return (
        <div>
            <h1>Homepage</h1>
            <p><Link to={"/sign-in"}>"Sign In"</Link></p>
            <p><Link to={"/reading/12"}>"Reading"</Link></p>
            <p><Link to={"/writing"}>"Writing"</Link></p>

            <ArticleCard article={getArticle(10)} />
        </div>
    );
}

export default App;
