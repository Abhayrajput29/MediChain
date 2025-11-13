import React from "react";
import { UserRound, Stethoscope, Hospital } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Patient Portal",
      description:
        "Manage your complete medical history, view treatments, and communicate securely with your doctor. Your health, in your hands.",
      icon: <UserRound size={48} strokeWidth={1.5} />,
      delay: "0",
    },
    {
      title: "Doctor Portal",
      description:
        "Access patient records with consent, update treatment plans, issue prescriptions, and monitor progress in real-time.",
      icon: <Stethoscope size={48} strokeWidth={1.5} />,
      delay: "0.1",
    },
    {
      title: "Hospital Portal",
      description:
        "Streamline hospital administration, manage patient data, update bed availability, and oversee doctor assignments.",
      icon: <Hospital size={48} strokeWidth={1.5} />,
      delay: "0.2",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2
          className="reveal reveal-up text-4xl font-bold text-center mb-12 tracking-tight"
          data-scroll
        >
          A Dedicated Portal for Everyone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl shadow-sm transition-all duration-300 bg-white dark:bg-slate-900  border border-gray-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 reveal reveal-up
              "
              data-scroll
              data-scroll-delay={feature.delay}
            >
              <div className="mb-6 inline-flex items-center justify-center text-blue-600 dark:text-blue-500">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
