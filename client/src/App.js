import { Outlet } from "react-router-dom";
import ButtonAppBar from "./components/AppBar";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "./store/auth.js";
import Cookies from "js-cookie";

function App() {
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  async function fetchUser() {
    setIsLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const user = await res.json();
      dispatch(getUser(user));
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ButtonAppBar />
      <Outlet />
    </div>
  );
}

export default App;
