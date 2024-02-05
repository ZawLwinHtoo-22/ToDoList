import "./App.css";
import { Button } from "./components/button/Button";
import { MainTitle } from "./components/mainTitle/MainTitle";
import { StudentList } from "./components/studentList/StudentList";
import { SwitchTheme } from "./components/switchTheme/SwitchTheme";
import Parent from "./pages/Parent";
import './style/css/style.css'
import { ToDoList } from "./pages/ToDoList";
import { Login } from "./pages/login/Login";
export function App() {
  return (
    <>
      <div>
        {/* <MainTitle title="Title" />
        <Button />
        <Parent />
        <SwitchTheme />
        <Login />
        <StudentList /> */}
        <ToDoList />
      </div>
    </>
  );
}
