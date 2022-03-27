import './App.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <h1>Homepage</h1>
            <p><Link to={"/sign-in"}>"Sign In"</Link></p>
            <p><Link to={"/reading"}>"Reading"</Link></p>
        </div>
    );
}

export default App;
