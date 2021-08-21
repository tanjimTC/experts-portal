import { useEffect } from "react";

import style from "./style.module.css";
import Link from "next/link";
import { Logo } from "../Header/Logo";
import { IoMdPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let w;
  useEffect(() => {
    w = window;
  }, []);

  return (
    <div className={style["footer-container"]}>
      <div className={style["footer-address-section"]}>
        <Logo fill="white" />
        <ul>
          <li>
            <IoMdPin className={style["footer-address-section-icons"]} /> 50 230
            Vesey St,
            <br /> New York, NY 10281
          </li>
          <li>
            <FaPhoneAlt className={style["footer-address-section-icons"]} /> +1
            (347) 849-7449
          </li>
          <li>
            <MdEmail className={style["footer-address-section-icons"]} />{" "}
            info@algosolver.com
          </li>
        </ul>
      </div>

      <div className={style["footer-quick-link"]}>
        <p>Quick Links</p>
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
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/careers">Career</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className={style["footer-service-section"]}>
        <p>Our Services</p>
        <ul>
          <li>
            <Link href="/services"> Ecommerce </Link>
          </li>
          <li>
            <Link href="/services"> Website Migration </Link>
          </li>
          <li>
            <Link href="/services"> Search Engine Optimization </Link>
          </li>
          <li>
            <Link href="/services"> Web Design Services </Link>
          </li>
          <li>
            <Link href="/services"> Web Security Services </Link>
          </li>
          <li>
            <Link href="/services"> Website Speed Optimization </Link>
          </li>
          <li>
            <Link href="/services"> Learning Management Systems </Link>
          </li>
          <li>
            <Link href="/services"> Digital Merketing Service </Link>
          </li>
          <li>
            <Link href="/services"> Software Development </Link>
          </li>
          <li>
            <Link href="/services"> App Development </Link>
          </li>
        </ul>
      </div>

      <div className={style["footer-legal-section"]}>
        <p>Legal</p>
        <ul>
          <li>
            <Link href={"/policies"}> Privacy Policy </Link>
          </li>
          <li>
            <Link href={"/policies"}> cookie Policy </Link>
          </li>
          <li>
            <Link href={"/policies"}> Terms &#38; Conditions </Link>
          </li>
          <li>
            <Link href={"/policies"}> FAQ </Link>
          </li>
        </ul>
      </div>
      <div className={style["footer-copyrights-section"]}>
        <p className={style["footer-copyrights-section-text"]}>
          <AiOutlineCopyright
            className={style["footer-copyrights-section-icon"]}
          />
          AlgoSolver LLC. All rights reserved 2021
        </p>

        <div className={style["footer-social-icons-container"]}>
          <FaFacebookF
            onClick={() =>
              w.open("https://www.facebook.com/algosolver.LLC", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaTwitter
            onClick={() =>
              w.open("https://twitter.com/AlgoSolverLLC", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaInstagram
            onClick={() =>
              w.open("https://www.instagram.com/algosolver.llc/", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
          <FaLinkedinIn
            onClick={() =>
              w.open("https://www.linkedin.com/company/algo-solver", "__blank")
            }
            className={`${style["footer-social-icon"]} cursor-pointer `}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
