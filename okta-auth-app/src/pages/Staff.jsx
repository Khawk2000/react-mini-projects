import { useAuth0 } from "@auth0/auth0-react";

function Staff() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated && 
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      }
      {!isAuthenticated && <h1>Must be logged in to access this page</h1>}
    </div>
  );
}

export default Staff;
