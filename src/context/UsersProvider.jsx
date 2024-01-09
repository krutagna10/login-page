import UsersContext from "./UsersContext.jsx";
import users from "../data/data.js";

function UsersProvider({ children }) {
  const value = {
    users: users,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export default UsersProvider;
