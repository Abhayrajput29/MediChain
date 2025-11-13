import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 dark:bg-slate-950" data-scroll-section>
      <div className="container mx-auto px-4">
        <h2
          className="reveal reveal-up text-4xl font-bold text-center mb-16 dark:text-white"
          data-scroll
        >
          Simple, Secure, and Collaborative
        </h2>
        {/* Timeline */}
        <div className="timeline relative max-w-3xl mx-auto dark:text-slate-100">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2" />

          {/* Step 1 */}
          <div className="step relative mb-12 reveal reveal-left" data-scroll>
            <div className="step-number absolute left-0 md:left-1/2 top-1 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">1</div>
            <div className="step-content ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:pl-8">
              <h3 className="text-2xl font-semibold mb-2">1. Register & Secure Identity</h3>
              <p className="text-gray-600 dark:text-slate-400">
                Patients, doctors, and hospitals create secure profiles.
                Blockchain technology ensures your digital identity is
                verified and protected.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step relative mb-12 reveal reveal-right" data-scroll>
            <div className="step-number absolute left-0 md:left-1/2 top-1 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">2</div>
            <div className="step-content ml-12 md:ml-[calc(50%+2rem)] md:w-[calc(50%-2rem)] md:pl-8">
              <h3 className="text-2xl font-semibold mb-2">2. Connect & Share Securely</h3>
              <p className="text-gray-600 dark:text-slate-400">
                Patients grant permission-based access to their records. All
                interactions are logged immutably on the blockchain for
                complete transparency.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step relative mb-12 reveal reveal-left" data-scroll>
            <div className="step-number absolute left-0 md:left-1/2 top-1 h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">3</div>
            <div className="step-content ml-12 md:ml-0 md:w-[calc(50%-2rem)] md:pl-8">
              <h3 className="text-2xl font-semibold mb-2">3. Manage & Collaborate</h3>
              <p className="text-gray-600 dark:text-slate-400">
                Doctors update treatments, hospitals upload reports, and
                patients view their unified health record in real-time for a
                truly collaborative experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}