import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { motion } from "motion/react"
import logo from '../assets/logo.svg';

export default function Login() {
  const navigate = useNavigate();
  const handleforgotpassword=()=>{
    navigate('/forgotpassword');
  }
  return (
    
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] flex items-center justify-center px-4">

      {/* Background Glow 1 */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          
          ease: "easeInOut",
        }}
      />

      {/* Background Glow 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
         
          ease: "easeInOut",
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          y: -2,
        }}
        className="relative z-10 w-full max-w-md"
      >
        <div
          className="
            bg-white/5
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <motion.img
              src={logo}
              alt="Elite Software Solutions"
              className="h-16 w-auto"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                
                ease: "easeInOut",
              }}
            />

            <h1 className="mt-8 text-3xl font-semibold tracking-tight text-white">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm text-zinc-400 text-center">
              Sign in to continue to your employee portal
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                px-4
                py-3
                rounded-2xl
                bg-white/5
                border
                border-zinc-700
                text-white
                placeholder:text-zinc-500
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                px-4
                py-3
                rounded-2xl
                bg-white/5
                border
                border-zinc-700
                text-white
                placeholder:text-zinc-500
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />

            <motion.button
              whileHover={{
                scale: 1.02,
                
              }}
              whileTap={{
                scale: 0.98,
                
              }}
              type="submit"
              className="
                w-full
                py-3
                rounded-2xl
                bg-blue-600
                text-white
                font-medium
                hover:bg-blue-500
                transition-all
                duration-300
                shadow-lg
                shadow-blue-500/20
              "
            >
              Sign In
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <Link
              to="/forgotpassword"
              className="
                text-sm
                text-zinc-400
                hover:text-blue-400
                transition-colors
              "
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          © 2026 Elite Software Solutions
        </p>
      </motion.div>
    </div>
  );
}
