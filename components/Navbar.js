import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";

const Navbar = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out." } });
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.name}
            style={{
              borderRadius: "50%",
              width: 30,
              height: 30,
              transform: "translateY(-3px)",
              marginRight: 3,
            }}
          />
          {auth.user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">WTWM</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart">
              <a
                className={"nav-link" + isActive("/cart")}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="position-relative">
                  <FaShoppingCart aria-hidden="true" />
                  <span
                    className="position-absolute"
                    style={{
                      padding: "1px 6px",
                      background: "#ed143dc2",
                      borderRadius: "50%",
                      top: "-7px",
                      right: "-10px",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {cart.length}{" "}
                  </span>
                </div>

                <span style={{ marginLeft: 10 }}> Cart</span>
              </a>
            </Link>
          </li>

          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin">
                <a
                  className={"nav-link" + isActive("/signin")}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaUser aria-hidden="true" />
                  <span> Sign in</span>
                </a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
