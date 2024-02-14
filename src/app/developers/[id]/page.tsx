// import FormPage from "../new/page";

// export default FormPage;
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaLink } from "react-icons/fa";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import Link from "next/link";

const SingleDeveloper = () => {
  const [developer, setDeveloper] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getDeveloper = async () => {
      try {
        const res = await fetch(`/api/developers/${params.id}`);
        const data = await res.json();
        setDeveloper(data);
      } catch (error) {
        console.error("Error fetching developer:", error);
      }
    };

    if (params.id) {
      getDeveloper();
    }
  }, [params.id]);

  const typeOfDeveloper = () => {
    if (developer.front_end && developer.back_end) {
      return "FullStack Developer";
    } else if (developer.front_end) {
      return "Front End Developer";
    } else {
      return "Back End Developer";
    }
  };

  return (
    <div>
      {developer ? (
        <div className="relative bg-primary rounded-md p-4 mt-8">
          <Image
            src="/assets/img/profile_pic.jpg"
            width={100}
            height={100}
            alt="Developer Img"
            className="absolute -top-4 -left-4 rounded-full border-primary border-4 block"
          />
          <div className="flex justify-between">
            <h1 className="ml-[4.5rem] text-2xl font-bold">{developer.name}</h1>
            <p className="my-auto">{typeOfDeveloper()}</p>
          </div>

          <p className="mt-12 text-bgPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ipsa, omnis tenetur alias fugiat nihil nisi nobis,
            beatae adipisci maxime doloribus sequi labore reiciendis odit
            praesentium atque illum neque est aspernatur debitis velit! Vero
            optio beatae eaque reiciendis maxime molestiae autem praesentium
            distinctio commodi et sunt a assumenda magnam officia voluptatibus
            adipisci sequi fugit velit, deleniti quis inventore! Saepe
            exercitationem, officiis
          </p>

          <div className="social-media-links mt-14">
            <ul className="flex gap-2">
              {Object.entries(developer.social_media_links).map(
                ([key, value]) => (
                  <li key={key} className="my-1">
                    <Link
                      href={value as string}
                      target="_blank"
                      className="flex font-bold my-auto bg-bgPrimary text-primary py-1 px-2 rounded-md hover:bg-bgSecondary transition-all"
                    >
                      <FaLink className="mr-2 my-auto" />
                      {key}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Render other developer details here */}
        </div>
      ) : (
        <div className="flex justify-center">
          <Box sx={{ width: "100%" }}>
            <Skeleton animation="wave" sx={{ bgcolor: "#2a4e57" }} />
            <Skeleton animation="wave" sx={{ bgcolor: "#2a4e57" }} />
            <Skeleton animation="wave" sx={{ bgcolor: "#2a4e57" }} />
            <Skeleton animation="wave" sx={{ bgcolor: "#2a4e57" }} />
            <Skeleton animation="wave" sx={{ bgcolor: "#2a4e57" }} />
          </Box>
        </div>
      )}
    </div>
  );
};

export default SingleDeveloper;
