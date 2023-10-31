import { useEffect, useState } from "react";

export default function NavBar({ updated }) {
  const [toggleFilters, setToggleFilters] = useState(false);

  useEffect(() => {
    updated(toggleFilters);
  }, [toggleFilters]);
  return (
    <div className="h-20 w-full bg-purple flex row items-center justify-between pl-10 pr-10">
      <div className="header-cont fler-col items-start  text-white ">
        <h2 className=" text-base font-bold">Frontend Mentor</h2>
        <p className="text-xs font-medium"> Feedback Board</p>
      </div>
      <div onClick={() => setToggleFilters((prevState) => !prevState)}>
        {toggleFilters ? (
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 3">
              <path
                id="Combined Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z"
                fill="white"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 3">
              <rect id="Rectangle" width="20" height="3" fill="white" />
              <rect
                id="Rectangle Copy"
                y="7"
                width="20"
                height="3"
                fill="white"
              />
              <rect
                id="Rectangle Copy 2"
                y="14"
                width="20"
                height="3"
                fill="white"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
