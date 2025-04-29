'use client';

import { cn } from "@/lib/utils"; // shadcn's utility for class merging
import { Check } from "lucide-react";

export default function StepProgress({ currentStep = 1 }) {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center gap-2">
        {steps.map((step, i) => {
          const isCompleted = currentStep > step;
          const isActive = currentStep === step;

          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-medium text-lg transition-all duration-300 ease-in-out",
                  isCompleted
                    ? "bg-purple-600 text-white shadow-xl"
                    : isActive
                    ? "border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-100"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5 text-white" /> : step}
              </div>

              {/* Connector */}
              {i !== steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 w-8 transition-all duration-300 ease-in-out",
                    currentStep > step ? "bg-purple-600" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}