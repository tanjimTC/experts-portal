import PolicyCard from "../../../Cards/PolicyCard";

const data = [
  {
    title:
      "Our Terms & Conditions Are Very Strict <br/> We Provide Better Practices And Choices",
    subtitle: "TERMS & CONDITIONS",
    text: `<div class="p-rich_text_section" style="box-sizing: inherit; counter-reset: list-0 0 list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: #000; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #fff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Information we collect<br style="box-sizing: inherit;">The personal information that you are asked to provide, and the reasons why you are asked to provide Consultancy , will be made clear to you at the point we ask you to provide your personal information.<br style="box-sizing: inherit;">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.<br style="box-sizing: inherit;">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.How we use your information<br style="box-sizing: inherit;">We use the information we collect in various ways, including to:</div>
    <ul class="p-rich_text_list p-rich_text_list__bullet" data-indent="0" data-stringify-type="unordered-list" style="box-sizing: inherit; margin: 0px; padding: 0px; list-style-type: none; color: #000; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #fff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Provide, operate, and maintain our website</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Improve, personalize, and expand our website</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Understand and analyze how you use our website</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Develop new products, services, features, and functionality</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Send your emails</li>
        <li data-stringify-indent="0" style="box-sizing: inherit; margin-bottom: 0px; list-style-type: none; margin-left: 28px;">Find and prevent fraud</li>
    </ul>`,
  },
];

const TermsConditions = () => {
  return (
    <div className={"container mb-20"}>
      <p className={"text-xs text-gray-500 font-primary"}>
        Last updated on : 12 May, 2021
      </p>
      {data.map((item, index) => {
        return <PolicyCard {...item} key={index} />;
      })}
    </div>
  );
};

export default TermsConditions;
