"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link"; // Import Link

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#131212] to-[#4c1d0c]">
      <div className="flex flex-col md:flex-row w-full max-w-[90%] lg:max-w-4xl xl:max-w-5xl bg-[#1c1c1c] rounded-lg shadow-2xl shadow-black overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/overhead-view-blue-craft-paper-plain-orange-background_23-2147981657.jpg"
            alt="Description of the image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Sign-up Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full md:w-1/2 p-8 space-y-4"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white">
              Create Your Account
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Sign up to get started with DubSpace
            </p>
          </div>
          <form className="space-y-3">
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-gray-300 text-sm md:text-base">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm"
                style={{ WebkitBoxShadow: "0 0 0 30px #1c1c1c inset" }}
              />
            </div>

            {/* Company Name Field */}
            <div className="space-y-1">
              <label htmlFor="company" className="text-gray-300 text-sm md:text-base">
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm"
                style={{ WebkitBoxShadow: "0 0 0 30px #1c1c1c inset" }}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-gray-300 text-sm md:text-base">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <label htmlFor="confirm-password" className="text-gray-300 text-sm md:text-base">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <Button type="submit" className="w-full text-sm" variant="custom">
              Sign up
            </Button>
          </form>

          {/* Already have an account? */}
          <div className="text-center text-xs md:text-sm text-gray-400">
            <span>Already have an account? </span>
            <Link href="/" className="text-primary-500 hover:text-primary-600 font-medium">
              Sign in
            </Link> {/* Updated with Link */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
