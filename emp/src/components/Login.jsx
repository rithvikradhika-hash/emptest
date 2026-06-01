import React from 'react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-sm">
        
        <div className='flex flex-col items-center mb-10'>
          <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">E</span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Sign in to continue to your account
          </p>
        </div>
        <div className="bg-white border border-zinc-200 rounded-2xl p-6">
          <form className="space-y-4">
            <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white outline-none focus:border-zinc-400 transition"
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white outline-none focus:border-zinc-400 transition"
            />
            <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition"
            >
              Sign In
            </button>

          </form>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition "
            >
              Forgot password?
            </a>

          </div>

        </div>
      </div>

    </div>
  )
}