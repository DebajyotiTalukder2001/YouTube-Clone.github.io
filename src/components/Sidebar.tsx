/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className="h-[52px] lg:h-fit xl:h-full w-full lg:w-[10%] xl:w-2/12 3xl:w-[12%] bg-[#0f0f0f] lg:pr-1 xl:pr-4 xl:overflow-auto lg:pb-8 sidebar z-20">{/* bg-[#212121] */}
      <ul className="flex flex-row lg:flex-col xl:border-b-2 xl:border-b-gray-700 border border-b-transparent border-r-transparent xl:border-r-0 border-l-transparent border-t-gray-700 lg:border-t-[#0f0f0f]">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`xl:pl-5 ml-1 mr-2 rounded-lg pt-[6px] lg:py-3 w-[98%] lg:hover:bg-zinc-600 ${
                name === "Home" ? "lg:bg-slate-600" : ""
              }`}
            >
              <a href={`${name === "Home" ? "#" : "https://www.youtube.com/"}`}  target = {`${name === "Home" ? "" : "_blank"}`} className="flex flex-col xl:flex-row items-center xl:justify-start gap-1 xl:gap-5 w-fit m-auto xl:m-0">
                {icon}
                <span className={`text-xs pt-[2px] sm:pt-0 sm:text-sm tracking-wider ${name === "Subscriptions" ? "text-xs my-auto pt-[2px] sm:pt-0" : ""}`}>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="hidden xl:flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-lg`}>
              <a href="https://www.youtube.com/" target ="_blank" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider hidden xl:block">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="hidden xl:flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-lg`}>
              <a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider hidden xl:block">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="hidden xl:flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-lg`}>
              <a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider hidden xl:block">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="hidden xl:flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="hidden xl:flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="hidden xl:flex flex-wrap   pl-4 text-sm text-zinc-400">{/* 2xl:flex-nowrap */}
        &copy; 2024 
        <a href="#" className=" before:content-['•'] xl:before:m-1 2xl:before:m-2">{/* 2xl:ml-2  2xl:flex-nowrap */}
           YouTube-Lite 
        </a>Made with ⚛️
        </span>
      <br />
      <p className="hidden xl:flex px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  );
}

export default Sidebar