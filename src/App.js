import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Headercomponent from './components/Headercomponent';
import NotesListPage from './pages/NotesListPage';
import NotePage from "./pages/NotePage";

function App() {
  return (
    <BrowserRouter>
    <div className="container dark">
    <div className="app">
    <Headercomponent />
   <Routes>
        <Route path="/" exact element={<NotesListPage />} />
        <Route path="/note/:id" element={<NotePage />} />           
  </Routes>       
  </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
