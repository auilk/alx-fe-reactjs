import UserContext from "./UserContext";

function UserDetails()
{
  const user = UserContext;
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  export default UserDetails;