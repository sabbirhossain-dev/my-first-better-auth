"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignIn() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: resData, error } = await signIn.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    console.log("Form submitted data:", resData, error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-2xl shadow-indigo-200/40 backdrop-blur-xl sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-200">
              B
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-sm font-semibold text-slate-700">
                Email address
              </Label>

              <Input
                placeholder="john@example.com"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />

              <FieldError className="mt-1 text-sm text-red-500" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <Label className="text-sm font-semibold text-slate-700">
                  Password
                </Label>

                <button
                  type="button"
                  className="text-xs font-medium text-indigo-600 transition hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>

              <Input
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />

              <Description className="mt-2 text-xs leading-5 text-slate-400">
                At least 8 characters with 1 uppercase letter and 1 number.
              </Description>

              <FieldError className="mt-1 text-sm text-red-500" />
            </TextField>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-sm text-slate-500"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-indigo-600 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-xl"
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Google */}
            {/* <Button
              type="button"
              variant="secondary"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <span className="mr-2 text-lg font-bold text-red-500">G</span>
              Continue with Google
            </Button> */}
          </Form>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <a
              href="/sign-up"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create an account
            </a>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-slate-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
