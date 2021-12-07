import { useState } from "react";
import CookiePolicy from "../CookiePolicy";
import FAQPage from "../FAQPage";
import PrivacyPolicyPage from "../PrivacyPolicyPage";
import TermsConditions from "../TermsConditions";
import style from "./style.module.css";

const SubPolicyPage = ({ setHeroText }) => {
  const [policyTitles, setPolicyTitles] = useState(0);

  return (
    <div>
      <div className={"container grid place-items-center my-20"}>
        <ul
          className={`${style["list"]} text-sm md:text-xl text-center font-primary font-medium text-textColor`}
        >
          <li
            onClick={() => {
              setPolicyTitles(0);
              setHeroText("Privacy Policy");
            }}
            className={
              policyTitles === 0
                ? "bg-connectedBG border text-primaryBG transition duration-500 "
                : ""
            }
          >
            Privacy Policy
          </li>
          <li
            onClick={() => {
              setPolicyTitles(1);
              setHeroText("Terms & Conditions");
            }}
            className={
              policyTitles === 1
                ? "bg-connectedBG mx-2 text-primaryBG transition duration-500"
                : "mx-2"
            }
          >
            Terms &amp; Condition
          </li>
          <li
            onClick={() => {
              setPolicyTitles(2);
              setHeroText("Cookie Policy");
            }}
            className={
              policyTitles === 2
                ? "bg-connectedBG mx-2 text-primaryBG transition duration-500"
                : "mx-2"
            }
          >
            Cookie Policy
          </li>
          <li
            onClick={() => {
              setPolicyTitles(3);
              setHeroText("Frequently Asked Questions");
            }}
            className={
              policyTitles === 3
                ? "bg-connectedBG mx-2 text-primaryBG transition duration-500"
                : "mx-2"
            }
          >
            FAQ
          </li>
        </ul>
      </div>
      <div className={policyTitles === 0 ? "block" : "hidden"}>
        <PrivacyPolicyPage />
      </div>
      <div className={policyTitles === 1 ? "block" : "hidden"}>
        <TermsConditions />
      </div>
      <div className={policyTitles === 2 ? "block" : "hidden"}>
        <CookiePolicy />
      </div>
      <div className={policyTitles === 3 ? "block" : "hidden"}>
        <FAQPage />
      </div>
    </div>
  );
};

export default SubPolicyPage;
