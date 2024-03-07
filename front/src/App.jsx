import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import TasksPage from "./pages/TasksPage";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10 ">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />}></Route>
                <Route path="/add-task" element={<TaskFormPage />}></Route>
                <Route path="/tasks/:id" element={<TaskFormPage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}
