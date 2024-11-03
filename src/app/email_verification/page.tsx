"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

export default function OTPValidation() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#131212] to-[#4c1d0c] p-4 relative overflow-hidden">
            {/* Subtle animated background particles */}
            <div className="absolute inset-0 z-0 animate-gradient overflow-hidden opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 20%)',
            }}></div>
            
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center w-full max-w-md bg-[#1c1c1c] rounded-lg shadow-2xl shadow-black p-8 space-y-6 relative z-10"
            >
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white">Enter OTP</h1>
                    <p className="text-gray-400 text-sm">We sent a code to your email. Enter it below to verify.</p>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center space-x-1 mb-4">
                    {[0, 1, 2, 3].map((_, i) => (
                        <span key={i} className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    ))}
                </div>

                {/* OTP Input Field */}
                <InputOTP maxLength={4} className="space-y-4 text-white">
                    <InputOTPGroup>
                        <InputOTPSlot
                            index={0}
                            className="bg-[#333] border border-gray-600 text-white text-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-150 shadow-md hover:shadow-lg"
                        />
                        <InputOTPSlot
                            index={1}
                            className="bg-[#333] border border-gray-600 text-white text-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-150 shadow-md hover:shadow-lg"
                        />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot
                            index={2}
                            className="bg-[#333] border border-gray-600 text-white text-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-150 shadow-md hover:shadow-lg"
                        />
                        <InputOTPSlot
                            index={3}
                            className="bg-[#333] border border-gray-600 text-white text-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-150 shadow-md hover:shadow-lg"
                        />
                    </InputOTPGroup>
                </InputOTP>

                {/* Submit Button with Gradient and Rounded Shape */}
                <Button
                    type="submit"
                    className="w-full text-sm md:text-base rounded-full py-3 text-white transition-transform duration-150 transform hover:scale-105"
                    style={{
                        background: "linear-gradient(135deg, #ff8a00, #e52e71)",
                    }}
                >
                    Submit
                </Button>

                {/* Resend OTP Link with Animated Underline */}
                <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm mt-4 relative">
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-orange-600 transform scale-x-0 transition-transform duration-200 hover:scale-x-100"></span>
                    Resend OTP
                </Link>
            </motion.div>
        </div>
    );
}
