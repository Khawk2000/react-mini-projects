import { useAuthContext } from "./useAuthContext";

//simple logout
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("token");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
