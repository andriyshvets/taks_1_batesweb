import { Header } from "./components/Header";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Header />
      

      <main>
        <div>
        <button>Published</button>
        <button>Unpublished</button>
        <button>Add Event</button>
      </div>
      </main>      
    </div>
  );
};

export default App;
