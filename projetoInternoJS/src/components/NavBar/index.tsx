import { Outlet } from "react-router-dom";


export function NavBar() {

  return(
    <div>
      <h1>Eu sou nav</h1>
      <Outlet />
    </div>
  );
}