import React from "react";

interface FacultyProps {
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  email?: string;
}

export default function FacultyCard(props: FacultyProps) {
  return (
    <div className="bg-white border border-[#E5E0D6] p-5 hover:border-[#B08D57] transition-colors">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#7A263A]">
        {props.designation}
      </p>
      <h3 className="text-base font-bold text-[#172033] mt-1">
        {props.name}
      </h3>
      <p className="text-xs text-[#252525]/70 mt-0.5 font-medium">
        {props.qualification}
      </p>

      <div className="w-8 h-[1px] bg-[#E5E0D6] my-3" />

      <p className="text-xs text-[#252525]">
        <span className="font-semibold text-[#172033]">Area of Teaching:</span> {props.specialization}
      </p>

      {props.email && (
        <p className="text-xs text-[#B08D57] mt-2 font-mono">
          {props.email}
        </p>
      )}
    </div>
  );
}
