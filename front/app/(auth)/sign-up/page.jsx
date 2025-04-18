"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import api from "@/lib/api"
import "./page.css";

// ✅ Zod schema
const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .email("Invalid email")
      .regex(/\@/, "Email must contain @"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


const Page = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
  
      if (response.status === 201) {
        toast.success("User registered successfully!");
        router.push("/sign-in");
      } else {
        toast.error(response.data.error || "Registration failed");
      }
    } catch (error) {
      toast.error("Server error: " + error.response?.data?.error || error.message);
    }
  };
  

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* EMAIL */}
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <IoIosMail />
          <input
            type="email"
            placeholder="Enter your Email"
            className="input"
            {...register("email")}
          />
        </div>
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

        {/* PASSWORD */}
        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            type="password"
            placeholder="Enter your Password"
            className="input"
            {...register("password")}
          />
        </div>
        {errors.password && <p className="text-red-700">{errors.password.message}</p>}
        {/* CONFIRM PASSWORD */}
        <div className="flex-column">
          <label>Confirm Password</label>
        </div>
        <div className="inputForm">
          <MdOutlineLockPerson />
          <input
            type="password"
            placeholder="Confirm your Password"
            className="input"
            {...register("confirmPassword")}
          />
        </div>
        {errors.confirmPassword && <p className="text-red-700">{errors.confirmPassword.message}</p>}

        {/* NAME */}
        <div className="flex-column">
          <label>Name</label>
        </div>
        <div className="inputForm">
          <FaRegUser />
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            {...register("name")}
          />
        </div>
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
  
        <button className="button-submit font-cinzel" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Sign Up"}
        </button>

        <Link href="/sign-in">
          <p className="p">
            Already have an account? <span className="span">Sign in</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Page;
