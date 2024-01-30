import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Account from "./pages/Accounts/Account.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Leads from "./pages/Leads/Leads.jsx";
import Cases from "./pages/Cases/Cases.jsx";
import EditView from "./pages/Contacts/EditView.jsx";
import DetailView from "./pages/Contacts/DetailView.jsx";
import Account_EditView from "./pages/Accounts/EditView.jsx";
import Account_DetailView from "./pages/Accounts/DetailView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="accounts" element={<Account />}>
            <Route path="editview" element={<Account_EditView />} />
            <Route path="detailview" element={<Account_DetailView />} />
          </Route>
          <Route path="contacts" element={<Contacts />}>
            <Route path="editview" element={<EditView />} />
            <Route path="detailview" element={<DetailView />} />
          </Route>
          <Route path="leads" element={<Leads />} />
          <Route path="cases" element={<Cases />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
