import React from "react";

const UserContext = createContext(null);

function useUserContext()
{
  const context = React.useContext(UserContext);
  return context;
};

export default { UserContext, useUserContext };