import "./Login.css";
import clock from "../Images/clock_right.png";
import futuretodo from "../Images/future-todo.png";
import { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Popup from "../components/popup";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url =
    "mongodb+srv://nipunikumudika:nipunikumudika@cluster0.txmga7v.mongodb.net/to-do-app?retryWrites=true&w=majority";



  const handleCreateUser = async (event) => {
    event.preventDefault();
    const postURL = "http://localhost:5000/users";
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(() => {
      alert("You have been added to the system!");
      togglePopup();
      setUsername("");
      setPassword("");
    });
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handlesubmit = async (event) => {
    const url = "http://localhost:5000/users/login";

    event.preventDefault();
    try {
      const submitData = {
        username: username,
        password: password,
      };

      const response = await axios.post(url, submitData);
      console.log(response);
      const id = await response.data._id;
      console.log("id");
      console.log(id);
      if (response) {
        // const url2 = `http://localhost:5000/tasks`;
        // const responsetasks = await axios.get(url2);
        // const filtered = responsetasks.data.filter(task => {
        //   return task.user === id;
        //});
        // console.log(filtered);
        navigate("Welcomebackpage", {
          state: {
            username: response.data.username,
            userid: response.data._id,
            //usertasks:filtered
          },
        });
      }
    } catch (error) {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div className="backgroundlogin">
      <img
        className="futuretodo"
        src={futuretodo}
        width={"40%"}
        alt={"Title"}
      ></img>
      <div className="clock-and-login">
        <div>
          <img src={clock} width={"70%"} alt={"Clock"}></img>
        </div>
        <div className="login">
          <h1 className="login-text">LOGIN</h1>

          <center>
            <form onSubmit={handlesubmit} style={{ margin: "auto" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontSize: 25, fontWeight: "bold" }}>Username</div>
                <span style={{ display: "inline-block", width: 50 }}></span>
                <input
                  style={{ fontSize: 15 }}
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(inputUsername) => {
                    setUsername(inputUsername.target.value);
                  }}
                />
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ fontSize: 25, fontWeight: "bold" }}>Password</div>
                <span style={{ display: "inline-block", width: 57 }}></span>
                <input
                  style={{ fontSize: 15 }}
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(inputPassword) => {
                    setPassword(inputPassword.target.value);
                  }}
                />
              </div>

              <br />
              <br />

              <button
                className="loginbtn"
                type="submit"
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                Login
              </button>
            </form>
            <br />
            <button
              onClick={(event) => togglePopup(event)}
              className="signinbtn"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              Sign up
            </button>

            {isOpen && (
              <Popup
                content={
                  <>
                    <form onSubmit={handleCreateUser} style={{ margin: "auto" }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div style={{ fontSize: 25, fontWeight: "bold" }}>
                          Username
                        </div>
                        <span
                          style={{ display: "inline-block", width: 50 }}
                        ></span>
                        <input
                          style={{ fontSize: 15 }}
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(inputUsername) => {
                            setUsername(inputUsername.target.value);
                          }}
                        />
                      </div>
                      <br />
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div style={{ fontSize: 25, fontWeight: "bold" }}>
                          Password
                        </div>
                        <span
                          style={{ display: "inline-block", width: 57 }}
                        ></span>
                        <input
                          style={{ fontSize: 15 }}
                          type="text"
                          name="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(inputPassword) => {
                            setPassword(inputPassword.target.value);
                          }}
                        />
                      </div>

                      <br />
                      <br />

                      <button
                        className="loginbtn"
                        type="submit"
                        style={{ fontSize: 20, fontWeight: "bold" }}
                      >
                        Create User
                      </button>
                    </form>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;
