// import logo from './logo.svg';
import './App.css';
import Datatable from "./components/Datatable";
import datasource from "./data/datasource.json"
import {useEffect, useState} from "react";
import DataRest from "./components/DataRest";

function App() {
  const salute = "Hola a todos";
  const message = "La vida es mas fácil cuando uno mismo decide no complicarsela!"

  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(
        (result) => {
          setJsonData(result);
          // console.log(JSON.stringify(result))
        },
        (error) => {
          console.log("Error")
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<h1>Hola mundo, los saluda Carlos</h1>*/}
        <h2>
          <code>(GKentaurus)</code>
        </h2>
        {/*<h5>Bye...</h5>*/}
        <a className="App-link"
           href="https://github.com/GKentaurus/adsi-react-demo"
           target="_blank"
           rel="noopener noreferrer">
          Ir al repositorio
        </a>
        <div>
          <Datatable datasource={datasource}
                     saludo={salute}
                     mensaje={message}
          />
          <hr/>
          <DataRest dataImported={jsonData}/>
        </div>
      </header>
    </div>
  );
}

export default App;
