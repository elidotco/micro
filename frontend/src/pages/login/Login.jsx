import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const erros = [];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handleSubmit = (event) => {
    if (validateEmail(formData.email)) {
      if (formData.password) {
        handleLogin();
      } else {
        erros.push("Please enter password");
        console.log("no");
      }
    } else {
      erros.push("Please enter a valid email");
      console.log("nocff");
    }
    // Your login logic here, you can access formData.username and formData.password
  };

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  // setTimeout(() => {
  //   handleLogin();
  // }, 3 * 1000);

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-[#18345E] flex justify-center items-center flex-col gap-10 text-white">
          <img src="/Group 2.png" alt="" />

          <h2 className="font-semibold  text-3xl">Welcome Back</h2>
        </div>
        <div className="w-1/2 h-full bg-[white]  flex justify-center items-center flex-col ">
          <h2 className="text-[#18345e] text-[48px]  mb-14 text-left">
            Sign In
          </h2>
          {erros.map((item) => (
            <p>{item}</p>
          ))}
          {/* input  */}
          <div className="flex flex-col w-3/5 ">
            <label htmlFor="email">Email</label>

            <div className="w-full flex bg-[#f4f2f2] p-3 rounded-lg mb-10">
              <input
                type="email"
                name="email"
                required
                id=""
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your company email"
                className="w-full outline-none bg-transparent"
              />
              {/* Icon */}
              <span>
                <EnvelopeIcon class="h-6 w-6 text-gray-500" />
              </span>
            </div>
            <label htmlFor="password">Password</label>
            <div className="w-full flex bg-[#f4f2f2] p-3 rounded-lg mb-14">
              <input
                autoComplete="off"
                type={!isOpen ? "password" : "text"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                id=""
                placeholder="password..."
                className="w-full outline-none bg-transparent"
              />
              {/* Icon */}
              <span onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <EyeIcon class="h-6 w-6 text-gray-500" />
                ) : (
                  <EyeSlashIcon class="h-6 w-6 text-gray-500" />
                )}
              </span>
            </div>

            <button
              onClick={() => handleSubmit()}
              className="w-full py-4 font-semibold  bg-[#F0AB20] rounded-lg "
            >
              Sign In
            </button>
            <p className="text-center">
              Don't Have an account ?{"   "}
              <Link to="/signup">
                <span className="text-[#22C1DC]">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
