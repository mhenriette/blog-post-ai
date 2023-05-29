import Image from "next/image";
import cross from "../public/cross.jpg";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden flex justify-center items-center">
      <Image src={cross} alt="cross" fill />
      <div className="bg-slate-900/90 max-w-screen-sm rounded-lg px-10 py-5  relative z-10 backdrop-blur-0">
        <Logo className="text-4xl" />
        <p className="text-white text-center my-4">
          Using standard-specification permanent AWD, the G-Class masters
          gradients of up to 80%. When driving off-road, an off-road step-down
          ratio can be activated using a low-range switch
        </p>
        <Button btnName="begin" link="/post/new" />
      </div>
    </div>
  );
}
