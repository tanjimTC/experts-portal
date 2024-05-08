import { useState, useRef } from "react";
import { AiOutlineFileImage, AiOutlineCamera } from "react-icons/ai";

const ImageUpload = ({ onOutput, name, handleChange }) => {
  const [im, setIm] = useState("");

  const inputElem = useRef(null);

  const upImage = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setIm(fileReader.result);
        onOutput &&
          onOutput({
            target: {
              files: [
                {
                  name: e.target.files[0].name,
                  size: e.target.files[0].size,
                  type: e.target.files[0].type,
                  base64: fileReader.result,
                },
              ],
              name: name,
              type: "file",
            },
          });
      };

      fileReader.readAsDataURL(e.target.files[0]);
      handleChange && handleChange(e);
    }
  };

  const handleCameraClick = (e) => inputElem.current.click();

  return (
    <div
      style={{ height: "9em", width: "9em" }}
      className="rounded-full border border-gray-400 p-1 relative mx-auto"
    >
      <div
        onClick={handleCameraClick}
        className="cursor-pointer absolute flex justify-center items-center shadow h-8 w-8 rounded-full bg-white hover:shadow-lg transition-all duration-300 right-2 bottom-2 z-10"
      >
        <AiOutlineCamera size={20} className={"text-gray-400"} />
      </div>
      <input
        name={name}
        onChange={upImage}
        ref={inputElem}
        type="file"
        accept={"image/png, image/jpg, image/jpeg, image/svg, image/webp"}
        className="hidden"
      />

      <div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center">
        {im ? (
          <img
            src={im}
            alt="Expert"
            className={"w-full h-full object-contain object-center"}
          />
        ) : (
          <AiOutlineFileImage size={85} className={"text-gray-400"} />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
