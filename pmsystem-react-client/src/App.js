import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddProject from './components/Project/AddProject';
import { Provider } from "react-redux";
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import Landing from './components/Layout/Landing';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            //Public Routes
          }

          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>

          {
            //Private Routes
          }
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/updateProject/:id" element={<UpdateProject />} />
            <Route path="/projectBoard/:id" element={<ProjectBoard />} />
            <Route path="/addProjectTask/:id" element={<AddProjectTask />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
