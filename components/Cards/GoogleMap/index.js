const GoogleMap = ({ width, height, className, opacity }) => {
  return (
    <div className={className || " bg-gray-800"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.896453370663!2d91.84237551492758!3d24.901513384034526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750554e52cb7077%3A0xf183012d4710cc19!2sSylhet%20International%20University!5e0!3m2!1sen!2sbd!4v1638884570480!5m2!1sen!2sbd"
        width={width || "100%"}
        height={height || "450px"}
        style={{ opacity: opacity || ".7" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
