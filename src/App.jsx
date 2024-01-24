import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Registration from "./pages/Registration/Registration.jsx";
// import DashboardLayout from "./components/Dashboard/Dashboard.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Account from "./pages/Accounts/Account.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Leads from "./pages/Leads/Leads.jsx";
import Cases from "./pages/Cases/Cases.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="accounts" element={<Account />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="leads" element={<Leads />} />
          <Route path="cases" element={<Cases />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
