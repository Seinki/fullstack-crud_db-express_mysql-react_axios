import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={UserList}/>
        <Route path="add" Component={AddUser}/>
        <Route path="edit/:id" Component={EditUser}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
