function Contacts() {
  const data = JSON.parse(localStorage.getItem("contacts"));
  console.log(data);

  return (
    <div className="text-center">
      <h1>{data.module_name}</h1>
      <h2>Detail View</h2>
      <table>
        <thead>
          <tr>
            {data.layoutdefs.detailview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      </table>
      <h2>List View</h2>
      <table>
        <thead>
          <tr>
            {data.layoutdefs.listview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      </table>
      <h2>Edit View</h2>
      <table>
        <thead>
          <tr>
            {data.layoutdefs.editview.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Contacts;
