import axios from "axios";

const defaultUrl =
  "https://res.cloudinary.com/dgqzpozrm/image/upload/v1638005242/Expert/IMG_20200930_192007_470_ibppie.jpg";

export const uploadImages = async (
  files,
  folder = "Expert",
  uploadPreset = "rv0frvsa"
) => {
  try {
    console.log("files", files);
    const file = files;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);
    formData.append("upload_preset", uploadPreset);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgqzpozrm/image/upload",
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }
    );
    const photo = {
      imageUrl: res.data.secure_url,
      publicKey: res.data.public_id,
    };
    return photo;
  } catch (error) {
    return false;
  }
};

export const imageExists = (url) => {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  // console.log(http.status);
  return http.status === 200 ? url : defaultUrl;
};

export const defaultImageSrc = (e) => {
  e.target.src = defaultUrl;
};
