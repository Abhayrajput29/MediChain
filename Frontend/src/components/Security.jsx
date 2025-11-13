import React from "react";
import { Blocks, UserCheck, Lock } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function Security() {
  const securityFeatures = [
    {
      icon: <Blocks size={32} strokeWidth={1.5} />,
      title: "Blockchain Immutability",
      description:
        "Every record, prescription, and report is cryptographically sealed on the blockchain, making it tamper-proof and permanent.",
    },
    {
      icon: <UserCheck size={32} strokeWidth={1.5} />,
      title: "Patient-Controlled Access",
      description:
        "You are the sole gatekeeper of your data. You decide who sees what, and for how long, using a sophisticated permission system.",
    },
    {
      icon: <Lock size={32} strokeWidth={1.5} />,
      title: "End-to-End Encryption",
      description:
        "All data, including chats between doctors and patients, is encrypted both in transit and at rest, ensuring complete privacy.",
    },
  ];

  return (
    <section
      id="security"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2
          className="reveal reveal-up text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white"
          data-scroll
        >
          Built on a Foundation of Trust
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-10 reveal reveal-left" data-scroll>
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="shrink-0 mt-1 p-3 rounded-lg bg-white dark:bg-slate-900 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <div className="text-blue-600 dark:text-greenish transition-colors">
                    {feature.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-right flex justify-center" data-scroll>
            {" "}
            <Tilt
              className="background-stripes track-on-window rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              glareEnable={true}
              glareMaxOpacity={0.5}
              glareColor="lightblue"
              glarePosition="all"
              glareBorderRadius="20px"
            >
              <div className="inner-element w-full h-full relative">
                <div className="absolute inset-0 bg-blue-500/5 dark:bg-greenish/5 pointer-events-none mix-blend-overlay" />

                <img
                  src="https://bernardmarr.com/img/What%20Is%20Blockchain%20A%20Super%20Simple%20Guide%20Anyone%20Can%20Understand.png"
                  alt="Blockchain Diagram"
                  className="w-full h-auto" 
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
