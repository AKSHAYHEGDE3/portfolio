import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";
import { skills } from "../data";

const about = () => {
  return (
    <div className={`${styles.main_about}`}>
      <div className={`flex flex-wrap mt-10 ${styles.about}`}>
        <div className={`w-[40%] mx-auto ${styles.first}`}>
          <img
            src="abou.jpeg"
            className={`h-[300px] w-[300px] rounded-3xl mt-5 mx-auto ${styles.img}`}
            alt={"..."}
          />
          <div className="mt-8 text-center">
            <p
              style={{ fontWeight: "600" }}
              className="text-[#d7f484] text-bold text-xl mb-0"
            >
              Download my Resume
            </p>
            <a href="/resume.pdf" download>
              <Image
                src="/download_icon.png"
                width={150}
                height={100}
                className=""
              />
            </a>
          </div>
        </div>
        <div className={`w-[60%] pl-5 pr-2 ${styles.second}`}>
          <p
            style={{ fontWeight: "600" }}
            className="text-center text-[#d7f484] font-bold text-3xl"
          >
            About Me
          </p>
          <p
            className={`text-white w-[600px] mt-7 mx-auto text-lg ${styles.para}`}
          >
            Hey,I am Akshay Hegde a skilled Software Developer and Freelancer,
            experienced in building Web and Mobile Applications. I have
            extensive experience in bug fixing, implementing new features, and
            developing full-stack solutions. I love diving into new technologies
            and figuring out how to make them work for me. From web frameworks
            to mobile app development, I'm always up for learning and mastering
            the latest tech trends. 
            Other than Coding I watch/play cricket,watch movies,series,
            animes and also read  manga/manwha. so if you are also a fan of
            any of these and Technologies lets connect!
          </p>
          <div className="mt-8 mx-auto w-[600px]">
            <div>
              <span className="mr-2 font-bold text-2xl text-[#d7f484]">
                Skills :{" "}
              </span>
              <br />
              <div style={{ maxWidth: "80vw" }} className="flex flex-wrap">
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center justify-center px-2 py-1 font-bold leading-none text-white bg-[#5bc0de] rounded-full mx-2 my-3"
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
