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
                  "w-8 h-8 rounded-full flex items-center justify-center font-medium transition-all",
                  isCompleted
                    ? "bg-purple-600 text-white"
                    : isActive
                    ? "border-2 border-purple-600 text-purple-600"
                    : "bg-gray-200 text-gray-600"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step}
              </div>

              {/* Connector */}
              {i !== steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 w-8 transition-all",
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
