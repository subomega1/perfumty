"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import "./page.css";
import Link from "next/link";
import api from '@/lib/api';

// 🔒 Define validation schema
const loginSchema = z.object({
  email: z
  .string()
  .regex(/\@/, "Email must contain @ symbol")
  .email("Invalid email")

  ,
  
  password: z
              .string()
              .min(6, "Password must be at least 6 characters long")
              .max(50, "Password cannot exceed 50 characters")
              
});

const Page = () => {
  const router = useRouter();

  // 🔧 Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Send login request
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
  
      // Check if response was successful
      if (response.status === 200) {
        toast.success("Login successful! 🎉");
        router.push("/"); // Redirect to home or another page
      } else {
        // If not successful, show error from response
        const errorMsg = response.data?.error || response.data?.msg || "Login failed";
        toast.error(errorMsg);
      }
    } catch (err) {
      // Catch errors and show generic error message
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <IoIosMail />
          <input
            placeholder="Enter your Email"
            className={`input`}
            type="email"
            {...register("email")}
          />
        </div>
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            {...register("password")}
          />
        </div>
        {errors.password && <p className="text-red-700">{errors.password.message}</p>}

        <div className="flex-row">
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit" type="submit">
          Sign In
        </button>

        <Link href="/sign-up">
          <p className="p">
            Don't have an account? <span className="span">Sign Up</span>
          </p>
          <p className="p line">Or With</p>
        </Link>
      </form>
    </div>
  );
};

export default Page;
