import PolicyCard from "../../../Cards/PolicyCard";

const data = [
  {
    title:
      "Our Cookie Policy Is So Friendly <br/> We Provide Better Practices And Choices",
    subtitle: "COOKIE POLICY",
    text: `<p><span style="color: #000; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #fff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Like any other website,&nbsp;</span><a class="c-link" data-sk="tooltip_parent" data-stringify-link="http://experts portal" href="http://experts portal/" rel="noopener noreferrer" style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #fff;" target="_blank">experts portal</a><span style="color: #000; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #fff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">. uses &lsquo;cookies&rsquo;. These cookies are used to store information including visitors&rsquo; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&rsquo; experience by customizing our web page content based on visitors&rsquo; browser type and/or other information</span> </p>`,
  },
];

const CookiePolicy = () => {
  return (
    <div className={"container mb-20"}>
      <p className={"text-xs text-gray-500 font-primary"}>
        Last updated on : 19 jul, 2021
      </p>
      {data.map((item, index) => {
        return <PolicyCard {...item} key={index} />;
      })}
    </div>
  );
};

export default CookiePolicy;
