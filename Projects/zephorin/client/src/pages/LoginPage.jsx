import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      console.log("Logged in:", formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1D2B53] flex items-center justify-center px-4">
      <motion.div
        {...fadeIn(0)}
        className="w-full max-w-md bg-[#121212] p-8 rounded-xl shadow-lg"
      >
        <motion.h2
          {...fadeIn(0.1)}
          className="text-3xl font-bold text-center text-[#30E3CA] mb-6"
        >
          Sign In
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div {...fadeIn(0.2)}>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#2E323C] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div {...fadeIn(0.3)}>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#2E323C] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={submitting}
            className={`w-full bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-2 rounded transition ${
              submitting && "opacity-50 cursor-not-allowed"
            }`}
          >
            {submitting ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <motion.p
          {...fadeIn(0.4)}
          className="text-sm text-gray-400 text-center mt-6"
        >
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#30E3CA] hover:underline">
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
