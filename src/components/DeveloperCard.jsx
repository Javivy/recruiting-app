import Link from "next/link";
import React from "react";

function DeveloperCard({developer}) {
  return (
    <Link className="bg-primary p-10 text-bgPrimary rounded-md hover:cursor-pointer hover:bg-bgSecondary hover:text-white transition-all" href={`/developers/${developer._id}`}>
      <div>
        <h3 className="text-2xl font-bold">{developer.name}</h3>
        <p className="text-slate-300">{developer.description}</p>
        <div className="flex gap-x-1 my-2">
        {
          developer.tech_skill_set.map(tech => (
            <div className="relative group/tech transition-all duration-200" key={tech}>
              <span className="absolute -top-8 left-1/2 px-1 transform -translate-x-1/2 bg-white z-10 text-bgPrimary font-bold rounded-lg hidden opacity-0 group-hover/tech:opacity-100 group-hover/tech:block">{tech}</span>
              <span className="absolute w-4 h-4 bg-white -top-6 left-1/2 -translate-x-1/2 rotate-45 hidden opacity-0 group-hover/tech:opacity-100 group-hover/tech:block"></span>
              <i className={`devicon-${tech.toLowerCase()}-plain text-2xl bg-bgPrimary rounded-full text-white p-2 block`}></i>
            </div>
          ))
        }         
        </div>
        <p className="text-slate-400 my-2">
          <span className="mr-1">
            Created at:
          </span>
          {new Date(developer.createdAt).toLocaleDateString()}
        </p>
      </div>

    </Link>
  );
}

export default DeveloperCard;
