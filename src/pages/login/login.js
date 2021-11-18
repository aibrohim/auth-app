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
      setUser({
        token: "1235",
        user: {
          mail,
          password
        }
      });
      navigate("/products")
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