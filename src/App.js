import data from "./timezones copy.json";
import { Header } from "./components/Header";
console.log(data);

const App = () => {

  return (
    <div className="App">
      <Header />
      <header>
        <h1>Event Manager</h1>
        <laber for="timezones">Select Timezone</laber>
        <select
          name="timezones"
          onChange={function(){}}
        >
          <option value="">Central European Time</option>
          {Object.keys(data.timezones).map(item =>(
            <option key={data.timezones[item].id} value={data.timezones[item].name}>
              {data.timezones[item].name}</option>
          ))}
        </select>
      </header>

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
