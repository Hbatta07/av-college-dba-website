import React from "react";

export default function AdmissionsSection() {
  const steps = [
    { num: "01", title: "Eligibility Criteria", text: "Passed Bachelor's Degree of min 3 years duration with at least 50% aggregate marks (45% for reserved categories)." },
    { num: "02", title: "Entrance Exam", text: "Must appear for the Telangana State Integrated Common Entrance Test (TSICET) conducted by TGCHE / OU." },
    { num: "03", title: "Counselling Process", text: "Centralized counselling conducted by University / APSCHE / TGCHE for merit-based seat allotment." },
    { num: "04", title: "Seat Allocation", text: "70% seats filled via Convener Merit Counseling; 30% seats under Management quota as per guidelines." },
    { num: "05", title: "Document Verification", text: "Verification of Degree certificates, Rank Card, Transfer Certificate, and Caste/Income certificates." },
  ];

  return (
    <section className="bg-white border border-[#E5E0D6] p-4 sm:p-6">
      <div className="border-b border-[#E5E0D6] pb-3 mb-4">
        <h3 className="text-base font-bold text-[#172033] uppercase tracking-wide flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#7A263A] inline-block"></span>
          Admission Pathway & Procedure (TSICET)
        </h3>
        <p className="text-xs text-[#252525]/70 mt-0.5">
          Step-by-step process for MBA seat allotment at A.V. College
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
        {steps.map((step) => (
          <div key={step.num} className="border border-[#E5E0D6] p-3 bg-[#F7F4ED]/30">
            <span className="text-xs font-bold text-[#7A263A] bg-[#E5E0D6] px-1.5 py-0.5 inline-block mb-1">
              Step {step.num}
            </span>
            <h4 className="font-bold text-[#172033] mb-1">{step.title}</h4>
            <p className="text-[#252525]/80 leading-snug">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
