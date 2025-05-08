import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
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
    // 🛑 Placeholder for backend integration
    setTimeout(() => {
      setSubmitting(false);
      console.log("Submitted:", formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1D2B53] flex items-center justify-center px-4">
      <motion.div
        {...fadeIn(0)}
        className="w-full max-w-md bg-[#121212] p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-[#30E3CA] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#2E323C] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
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
          </div>

          {/* Password */}
          <div>
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
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-[#2E323C] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#30E3CA]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={submitting}
            className={`w-full bg-[#30E3CA] hover:bg-[#7A60FF] text-black font-semibold py-2 rounded transition ${
              submitting && "opacity-50 cursor-not-allowed"
            }`}
          >
            {submitting ? "Registering..." : "Register"}
          </motion.button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#30E3CA] hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
