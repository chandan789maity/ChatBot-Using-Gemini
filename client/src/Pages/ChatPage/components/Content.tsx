import img from "../../../assets/img/chat/bg-image.png";
import InputBox from "./InputBox";
import ModelSelection from "./ModelSelection";
import PluginsAdd from "./PluginsAdd";
const Content = () => {
  return (
    <div>
      <div className="flex justify-center max-sm:mt-2 ml-72 mt-12 max-sm:ml-0">
        <div
          className="min-h-screen w-full mb-4 rounded bg-transparent dark:bg-[#0b1437] max-sm:ml-0 mt-24 max-sm:mt-10 flex align-middle flex-col"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain", // Ensure the full image is shown
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", // Prevent image repetition
           // height: "600px",
           // width: "600px", // Center the image
            // You can adjust the width as needed
          }}
        >
          {/* Models  */}
          <ModelSelection />
          <PluginsAdd/>
          <InputBox/>
        </div>
      </div>
    </div>
  );
};

export default Content;
