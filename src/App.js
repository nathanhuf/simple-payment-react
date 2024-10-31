import "./App.css";

import ShowList from "./pages/ShowList";
import showData from "./data";

function App() {
  return (
    <div className="App">
      <div className="App-header">Show Tickets</div>
      <div className="App-body">
        <ShowList showData={showData} />
      </div>
    </div>
  );
}

export default App;
