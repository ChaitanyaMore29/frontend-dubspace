"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#131212] to-[#4c1d0c]"
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-[#1c1c1c] rounded-lg shadow-2xl shadow-black overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/overhead-view-blue-craft-paper-plain-orange-background_23-2147981657.jpg"
            alt="Description of the image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Sign-in Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full md:w-1/2 p-8 space-y-6"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white">
              Welcome to DubSpace
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
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
                className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm md:text-base"
                style={{ WebkitBoxShadow: "0 0 0 30px #1c1c1c inset" }}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
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
                  className="bg-[#1c1c1c] text-white placeholder-[#78716C] text-sm md:text-base"
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

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-gray-300">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button type="submit" className="w-full text-sm md:text-base" variant="custom">
              Sign in
            </Button>
          </form>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1c1c1c] px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Sign In Button */}
          <Button variant="custom" className="w-full text-sm md:text-base">
            <Mail className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>

          {/* Sign Up Link */}
          <div className="text-center text-xs md:text-sm text-gray-400">
            <span>Don't have an account? </span>
            <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
              Sign up
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
