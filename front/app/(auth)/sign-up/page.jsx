"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLockPerson } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import Link from "next/link";
import api from "@/lib/api";
import "./page.css";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email").regex(/\@/, "Email must contain @"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const PageSignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });


      if (response.status === 201) {
        toast.success("Registration successful! Redirecting...");
        setTimeout(() => router.push("/sign-in"), 1500);
      } else {
        throw new Error(response.data.error || "Registration failed");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      
      if (errorMessage.includes("Email")) {
        setError("email", { message: errorMessage });
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
     <div className="auth-background">
      <div className="auth-container">
        {/* Removed UniNav and welcome message */}
        <div className="brand-header">
          <GiPerfumeBottle className="perfume-icon" />
          <h1 className="auth-title">SING UP</h1>
        </div>
        
        <h2 className="section-title">Create Your Scent Profile</h2>
        <p className="section-subtitle">Join our fragrance community</p>
        
        
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name Field */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <FaRegUser className="input-icon" />
              <input
                type="text"
                placeholder="Enter your name"
                className={`form-input ${errors.name ? "input-error" : ""}`}
                {...register("name")}
                disabled={isLoading}
              />
            </div>
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="input-group">
              <IoIosMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className={`form-input ${errors.email ? "input-error" : ""}`}
                {...register("email")}
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <MdOutlineLockPerson className="input-icon" />
              <input
                type="password"
                placeholder="Create password (min 6 characters)"
                className={`form-input ${errors.password ? "input-error" : ""}`}
                {...register("password")}
                disabled={isLoading}
              />
            </div>
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <MdOutlineLockPerson className="input-icon" />
              <input
                type="password"
                placeholder="Confirm your password"
                className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
                {...register("confirmPassword")}
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-indicator">Creating your scent profile...</span>
            ) : (
              "Sign Up"
            )}
          </button>

          <div className="auth-footer">
            Already part of our fragrance family?{" "}
            <Link href="/sign-in" className="auth-link">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageSignUp;