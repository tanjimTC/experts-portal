import emailjs from "emailjs-com";

const SERVICE_ID = "service_odbkym9";
const USER_ID = "user_K19m2SewmOT4LsddOQuY7";
const TEMPLATE_ID = "template_ysiffbg";

const SendEmail = (data) => {
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    (result) => {
      console.log(result.text);
      console.log(result);
    },
    (error) => {
      console.log(error.text);
      console.log(error);
    }
  );
};

export default SendEmail;
