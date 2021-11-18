import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

// fetch("http://165.227.87.89/admin/login", {
//     method: "POST",
//     body: JSON.stringify({
//         email: "testmest@gmail.com",
//         password: "Testmest1"
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

const Login = () => {
  const navigate = useNavigate();
  // const history = useHistory();

  const mailRef = useRef();
  const passwordRef = useRef();

  const {setUser} = useContext(AuthContext);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const mail = mailRef.current.value;
    const password = passwordRef.current.value;

    if (mail && password) {
      fetch("http://165.227.87.89/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.json())
      })
      .then(data => {
          setUser(data.data);
          navigate("/products")
      })
      .catch((err) => console.log(err))
      // history.push("/products");
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        mail
        <input ref={mailRef} type="text" />
      </label>
      <label>
        Password
        <input ref={passwordRef} type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;