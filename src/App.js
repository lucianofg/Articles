import './App.css';
import SignIn from "./pages/signin";
import Reading from "./pages/reading";
import imagem from './resources/temp_image_reading.png'
import {CancelButton, OkayButton, SignButton} from "./components/buttons";

function App() {
    const article = {
        title: "What was the trend in 2020 and you didn’t use it",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.".split("\n"),
        author: {
            name: "An Author",
            work: "A work",
            img: imagem,
        },
        tags: ["tag1", "tag2"],
        temps: 4,
    }

    return (
    <div className="App">
      <h1>Articles</h1>
      <OkayButton text="Testando" onClick={() => alert("Alerta")}/>
        <p><CancelButton text="Testando" onClick={() => alert("Alerta")}/></p>
        <p><SignButton text="Testando" onClick={() => alert("Alerta")}/></p>
    </div>
  );
}

export default App;
