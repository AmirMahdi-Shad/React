import React, { useState } from "react";
import { FaHome, FaSleigh } from "react-icons/fa";
import {
  AiFillSetting,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlinePlus,
} from "react-icons/ai";
import styles from "./TabBar.module.css";
const TabBar = () => {
  const [isHover, setIsHover] = useState(false);

  const inHoverHandler = () => {
    if (!isHover) setIsHover(true);
  };
  const outHoverHandler = () => {
    if (isHover) setIsHover(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <i>
          <FaHome />
        </i>
        <div className="w-24 h-[.2rem] bg-slate-500 mt-9 rounded-3xl"></div>
        <i>
          <AiFillSetting />
        </i>
        <div
          className={styles.circle}
          onMouseEnter={inHoverHandler}
          onMouseLeave={outHoverHandler}
        >
          {!isHover ? (
            <i>
              <AiOutlinePlus />
            </i>
          ) : (
            <>
              <i>
                <AiFillYoutube />
              </i>
              <i>
                <AiFillTwitterCircle />
              </i>
              <i>
                <AiFillGithub />
              </i>
            </>
          )}
        </div>
        <div className={styles.circleBackground}></div>
      </div>
    </div>
  );
};

export default TabBar;
