import "./App.css";

import ShowList from "./pages/ShowList";
import showData from "./data";

function App() {
  return (
    <div className="App">
      <ShowList showData={showData} />
    </div>
  );
}

export default App;
