import React, { useEffect, useState } from "react";
import "./Account.css";

export default function Account() {
  const [data, setData] = useState({});
  useEffect(() => {
    var formdata = new FormData();
    formdata.append("input_type", "JSON");
    formdata.append("response_type", "JSON");
    formdata.append("method", "dreammobileapp_mobile_layout");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://103.54.222.110/dreamcrm.dreamertechs.com/custom/service/dream_portal_new/DreamPortalapp_rest.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log(data.modules_layout);
  return <div></div>;
}
