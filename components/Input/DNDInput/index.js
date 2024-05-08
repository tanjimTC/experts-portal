import { useState, useRef } from "react";

const DNDInput = ({ onOutput, name }) => {
  const [im, setIm] = useState("");

  const dndContainer = useRef(null);
  const inputElem = useRef(null);
  const dragEnter = () => {
    dndContainer.current.classList.remove("shadow");
    dndContainer.current.classList.remove("bg-gray-300");
    dndContainer.current.classList.add("bg-gray-500");
    dndContainer.current.classList.add("shadow-inner");
    dndContainer.current.classList.add("border-2");
  };

  const dragEnd = () => {
    dndContainer.current.classList.remove("shadow-inner");
    dndContainer.current.classList.remove("bg-gray-500");
    dndContainer.current.classList.remove("border-2");
    dndContainer.current.classList.add("shadow");
    dndContainer.current.classList.add("bg-gray-300");
  };

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
    }
  };

  return (
    <div
      ref={dndContainer}
      onDrop={dragEnd}
      onDragEnter={dragEnter}
      onDragLeave={dragEnd}
      className="bg-gray-300 overflow-hidden w-full shadow relative cursor-pointer transition-all duration-100 border-gray-700 h-44 md:h-52"
    >
      <input
        ref={inputElem}
        onChange={upImage}
        type="file"
        accept={"image/png, image/jpg, image/jpeg, image/svg, image/webp"}
        className={"w-full h-full absolute opacity-0 -top-0 -left-0 z-10"}
      />

      {im ? (
        <>
          <button
            onClick={() => inputElem.current.click()}
            className="bg-gray-700 focus:outline-none px-3 py-2 font-sans-pro text-white hover:opacity-100 opacity-70 absolute transform top-1/2 left-1/2 rounded -translate-x-1/2 -translate-y-1/2 z-30"
          >
            Change
          </button>

          <img
            src={im}
            alt="N"
            className={"w-full h-full object-contain object-center"}
          />
        </>
      ) : (
        <>
          <div className={"w-full mx-auto py-5 text-center"}>
            <img
              src="/images/icon/upload.png"
              className={"w-1/3 mx-auto"}
              alt="UPLOAD"
            />
            <p className={"font-sans-pro text-gray-500 text-lg"}>DRAG & DROP</p>
            <p className={"text-gray-500 font-sans-pro text-sm font-medium"}>
              your files to assets, or{" "}
              <span className={"text-blue-700 underline cursor-pointer"}>
                browse
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DNDInput;
