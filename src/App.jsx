import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (

    <div className="w-full  flex flex-col background items-center">
      <h1 className="bg-white rounded-xl text-center w-11/12 mt-[40px] py-3 text-3xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[20px]">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}
