import { BrowserRouter, Routes,Route} from "react-router-dom";
import Movies from "./component/Movies";
import Add from "./component/Add";
import Update from "./component/Update";
import "./style.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Movies/>} />
  <Route path="/add" element={<Add/>}/>
  <Route path="/update/:id" element={<Update/>}/>

</Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
