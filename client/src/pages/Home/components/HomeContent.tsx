import { Vortex } from "../../../components/vortex";
import Content from "./Content";

export function HomeContent() {
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="indigo-800"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full backdrop-blur-sm"
      >
        <Content/>
      </Vortex>
    </div>
  );
}
