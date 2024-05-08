import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./style.module.css";
import { Logo } from "./Logo";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedInExpert,
  setLoggedInUser,
} from "../../../redux/slices/authSlice";

const Header = () => {
  const [pos, setPos] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { loggedInExpert, loggedInUser } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = (e) => setPos(window.pageYOffset);
    dispatch(setLoggedInExpert());
    dispatch(setLoggedInUser());
  }, [dispatch]);

  return (
    <>
      <div
        className={
          pos < 350
            ? style["header-container-top"]
            : style["header-container-onScroll"]
        }
      >
        <div
          onClick={() => router.push("/")}
          className={`${style["header-logo-container"]} cursor-pointer `}
        >
          <Logo />
        </div>

        <div className={style["header-content-menu"]}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services"> Services </Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            {loggedInUser.name ? (
              <li>
                <Link href="/user-dashboard">User Deshboard </Link>
              </li>
            ) : (
              <li>
                <Link href="/policies">Legal</Link>
              </li>
            )}
            {loggedInExpert.name ? (
              <li>
                <Link href="/dashboard">Expert Deshboard </Link>
              </li>
            ) : (
              <li>
                <Link href="/signin"> Login </Link>
              </li>
            )}
          </ul>
        </div>

        <div className={style["header-email"]}>
          <a
            href="mailto:tanjimtc74@gamil.com.com?subject=information"
            className={"flex"}
          >
            <FaEnvelope style={{ display: "inline" }} /> info@expertsportal.com
          </a>

          <a href="tel:+1-347-849-7449" className={"flex"}>
            {" "}
            <FaPhoneAlt style={{ display: "inline" }} /> +1-5437-829-4544
          </a>
        </div>

        <div className={style["header-mobile-menu-icon"]}>
          <RiMenu4Fill onClick={() => setShowMobileMenu(!showMobileMenu)} />
        </div>
      </div>

      <div
        className={`${style["header-mobile-content-menu"]} ${
          showMobileMenu && style["header-mobile-content-menu-show"]
        }`}
      >
        <ImCross
          className={style["header-mobile-menu-close-icon"]}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <ul>
          <li onClick={() => router.push("/")}>
            <>
              <AiOutlineHome
                className={style["header-mobile-content-menu-li-icon"]}
              />
              <span className={style["header-mobile-content-menu-li-text"]}>
                Home
              </span>
            </>
          </li>

          <li onClick={() => router.push("/about-us")}>
            <>
              <BsPeople
                className={style["header-mobile-content-menu-li-icon"]}
              />
              <span className={style["header-mobile-content-menu-li-text"]}>
                About Us
              </span>
            </>
          </li>
          <li>
            <RiServiceLine
              className={style["header-mobile-content-menu-li-icon"]}
            />
            <span className={style["header-mobile-content-menu-li-text"]}>
              Services
            </span>
          </li>
          {loggedInExpert.name ? (
            <li>
              <BsReverseLayoutTextWindowReverse
                className={style["header-mobile-content-menu-li-icon"]}
              />

              <span className={style["header-mobile-content-menu-li-text"]}>
                Deshboard
              </span>
            </li>
          ) : (
            <li>
              <BsReverseLayoutTextWindowReverse
                className={style["header-mobile-content-menu-li-icon"]}
              />

              <span className={style["header-mobile-content-menu-li-text"]}>
                Login
              </span>
            </li>
          )}
          <li onClick={() => router.push("/blogs")}>
            <BsBriefcase
              className={style["header-mobile-content-menu-li-icon"]}
            />
            <span className={style["header-mobile-content-menu-li-text"]}>
              Blog
            </span>
          </li>
          <li>
            <AiOutlinePhone
              className={style["header-mobile-content-menu-li-icon"]}
            />
            <span className={style["header-mobile-content-menu-li-text"]}>
              Contact Us
            </span>
          </li>

          <li>
            <div className={style["header-email-mobile"]}>
              <a
                href="mailto:info@experts portal?subject=information"
                className="mb-3 flex"
              >
                <FaEnvelope style={{ display: "inline" }} /> info@experts portal
              </a>

              <a href="tel:+1-347-849-7449" className={"flex"}>
                <FaPhoneAlt style={{ display: "inline" }} /> +1-347-849-7449
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
