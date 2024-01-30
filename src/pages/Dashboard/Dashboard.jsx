import { useEffect, useState } from "react";
import Layout from "../../layout/Layout.jsx";
import Header from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "dreammobileapp_mobile_layout");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
        requestOptions,
      );

      const data = await response.json();
      const [contactsData, accountsData, casesData, notesData] =
        data.modules_layout;
      console.log(data.modules_layout);
      localStorage.setItem("account", JSON.stringify(accountsData));
      localStorage.setItem("contacts", JSON.stringify(contactsData));
      localStorage.setItem("cases", JSON.stringify(casesData));
      localStorage.setItem("notes", JSON.stringify(notesData));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Layout>
      <Header />
      <div className="flex">
        <Sidebar />
        <div style={{ flexGrow: "1" }} className="grid place-content-center">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
