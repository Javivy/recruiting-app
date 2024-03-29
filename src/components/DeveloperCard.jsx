import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function DeveloperCard({developer}) {
  return (
    <Link className="bg-cyan p-10 text-white rounded-md hover:cursor-pointer hover:bg-primary hover:text-bgPrimary transition-all group/anchor hover:shadow-md hover:shadow-primary" href={`/developers/${developer._id}`}>
      <div className="relative">
        <Image width={64} height={64} src="/assets/img/profile_pic.jpg" alt="card_picture" className="absolute -top-14 -left-14 rounded-full border-4 border-primary"/>
        <span className="p-2 bg-white/40 absolute -top-7 -right-7 rounded-full -rotate-45 transform opacity-0 scale-0 translate-y-5 transition-all group-hover/anchor:opacity-100 group-hover/anchor:scale-100 group-hover/anchor:translate-y-0 text-bgPrimary/60">
          <FaArrowRight />
        </span>
        <h3 className="text-2xl font-bold">{developer.name}</h3>
        <p className="text-slate-200 group-hover/anchor:text-slate-700">{developer.description}</p>
        <div className="flex gap-x-1 my-2 relative">
          {
            developer.tech_skill_set.map(tech => (
              <p key="tech" className="bg-white/40 shadow-lg rounded-lg px-2 py-1 font-bold text-bgPrimary/70 text-[13px]">{tech}</p>
            ))
          }
        </div>
      </div>

    </Link>
  );
}

export default DeveloperCard;
