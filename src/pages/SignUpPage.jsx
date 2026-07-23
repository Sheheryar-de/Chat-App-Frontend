import Input from "../components/Input.jsx";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";

const SignUpPage = () => {
  const { user, setUser, setIsAuthenticated } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [gender, setGender] = useState({
    male: false,
    female: false,
  });

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setGender({
      male: name === "male",
      female: name === "female",
    });
  };

  const navigate = useNavigate(); // 👈 gives you the navigate function

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || name.length < 3) {
      setError("User must be atleast 3 character long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Invalid Email!");
      return;
    }
    if (password.length < 8) {
      setError("Password must be atleast 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password must be the same!");
      return;
    }

    const selectedGender = gender.male ? "male" : gender.female ? "female" : "";

    if (!selectedGender) {
      setError("Please select a gender.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setUser({
        name,
        email,
        password,
        confirmPassword,
        gender: selectedGender,
      });
      setIsAuthenticated(true);
      console.log("User data stored in Zustand:", user);
      navigate("/");

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div
        className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Create Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center pl-2 py-2 space-x-8 w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
              <h3 className="text-gray-400">Gender</h3>
              <div className="flex items-center justify-center gap-2">
                <Input
                  type="checkbox"
                  name="male"
                  checked={gender.male}
                  onChange={handleCheckboxChange}
                  label="Male"
                />
                <Input
                  type="checkbox"
                  name="female"
                  checked={gender.female}
                  onChange={handleCheckboxChange}
                  label="Female"
                />
              </div>
            </div>
            <Input
              icon={Lock}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}

            <button
              className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader className=" animate-spin mx-auto" size={24} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
