import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import RequestDelivery from "./pages/RequestDelivery.jsx";
import Requests from "./pages/Requests.jsx";
import PassengerView from "./pages/PassengerView.jsx";
import Support from "./pages/Support.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request-delivery" element={<RequestDelivery />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/passenger-view" element={<PassengerView />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
