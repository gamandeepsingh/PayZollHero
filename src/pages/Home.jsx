import React, { useRef, Suspense, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PiPlus } from "react-icons/pi";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Stage,
  useAnimations,
} from "@react-three/drei";
import { GlobeLock, Menu, WalletMinimal, X } from "lucide-react";
import CustomCursor from "../components/CustomCursor";

useGLTF.preload("/robot.gltf");
function Model(props) {
  const { scene, animations } = useGLTF("/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions.Idle.play();
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  }, [actions, scene]);
  return <primitive object={scene} {...props} />;
}

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const refs = useRef([]);
  const barRef = useRef(null);
  const elanRef = useRef(null);
  const logoRef = useRef(null);
  const divref = useRef(null);
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const elanineRef = useRef(null);
  const creativeRef = useRef(null);
  const leftListTitleRef = useRef(null);
  const leftListRef = useRef(null);
  const rightListTitleRef = useRef(null);
  const rightListRef = useRef(null);
  const scrollDownRef = useRef(null);
  const centerText = useRef(null);
  const robotRef = useRef(null);
  const ham = useRef(null);
  const globeref = useRef(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      opacity: 0,
      duration: 2,
      delay: 0.8,
    });
    gsap.to(elanRef.current, {
      opacity: 0,
      y: -600,
      duration: 2,
      delay: 1,
    });
    gsap.to(divref.current, {
      duration: 2,
      delay: 1,
      gap: "50vw",
    });
    gsap.to(divRef1.current, {
      duration: 2,
      delay: 1,
      width: "20vw",
    });
    gsap.to(divRef2.current, {
      duration: 2,
      delay: 1,
      width: "20vw",
    });
    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 2,
      delay: 2.2,
    });
    gsap.from(robotRef.current, {
      opacity: 0,
      duration: 2,
      delay: 2.2,
    });
    gsap.from(elanineRef.current, {
      y: -300,
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(creativeRef.current, {
      y: 300,
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(leftListTitleRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(leftListRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(rightListTitleRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(rightListRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(centerText.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(ham.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    gsap.from(globeref.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
    });
    refs.current.forEach((ref, index) => {
      gsap.to(ref, {
        opacity: 1,
        duration: 1,
        delay: 2.2,
      });
    });
  });

  return (
    <main>
      <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-[#021526] cursor-none">
        {/*  */}
        <CustomCursor />
        <div
          ref={divref}
          className="flex gap-[20px] justify-center relative w-full h-full"
        >
          <div
            ref={divRef1}
            className="h-full w-[20px] border-x-[1px] border-white/20"
          >
            <nav className="w-full h-full grid grid-rows-3 relative">
              <div className=" w-full min-w-[100px] h-full flex justify-center pt-3 relative">
                <WalletMinimal
                  ref={logoRef}
                  className="text-indigo-400 h-[60px] w-[60px] md:h-[100px] md:w-[100px] object-contain  mt-5"
                />
                <div
                  ref={elanineRef}
                  className="hidden md:flex absolute xl:top-7 right-0 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-[55px] md:text-[100px] xl:text-[160px] translate-x-[100%] leading-[120px] tracking-wider font-[game]"
                >
                  PAYZOLL
                </div>
                <div ref={ham} className="md:hidden fixed top-10 right-10 z-50">
                  <button onClick={toggleMenu} className="text-white ">
                    {menuOpen ? (
                      <X size={32} className=" z-50" />
                    ) : (
                      <Menu size={32} className="" />
                    )}
                  </button>
                </div>
                <div
                  className={`fixed top-5 left-0 w-full h-full  text-white flex flex-col items-center gap-4 transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                  } md:hidden px-4 z-40`}
                >
                  <ul className="text-lg text-center mt-20 bg-white/10 w-full mx-4 rounded-2xl">
                    <li className="py-2 ">Home</li>
                    <li className="py-2 ">Features</li>
                    <li className="py-2 ">How It Works</li>
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex md:flex-col w-full">
                <p
                  ref={leftListTitleRef}
                  className="flex w-full justify-center items-center"
                >
                  <span className="text-xs text-indigo-400 uppercase text-nowrap">
                    Payroll Protocol
                  </span>
                  <span className="w-full h-[1px] bg-indigo-400 rounded-r-full"></span>
                </p>

                <ul
                  ref={leftListRef}
                  className="w-full flex flex-col items-start text-xs mt-2 gap-2"
                >
                  <li className="uppercase ">Home</li>
                  <li className="uppercase  ">Features</li>
                  <li className="relative uppercase  ">
                    How It Works
                    <span className="absolute -bottom-1 left-0 translate-y-full text-nowrap">
                      & many more...
                    </span>
                  </li>
                </ul>
                <div
                  ref={(el) => (refs.current[0] = el)}
                  className="w-full flex items-center justify-end opacity-0 text-xs text-end mt-5 z-50"
                >
                  <span className="flex items-center translate-x-[100%] text-white text-xs uppercase">
                    Privacy by Design
                    <PiPlus />{" "}
                  </span>
                </div>
              </div>

              <div className="opacity-0 w-full flex items-center justify-end text-xs text-end">
                <span className="flex items-center translate-x-[100%] mt-5">
                  MENU <PiPlus />
                </span>
              </div>
            </nav>
          </div>

          <div
            ref={divRef2}
            className="h-full relative w-[20px] border-x-[1px] border-white/20 overflow-visible grid grid-rows-3"
          >
            <div
              ref={creativeRef}
              className="absolute bottom-2 left-0 bg-white text-black text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[160px] translate-x-[-75%] leading-none xl:leading-[120px] font-extrabold tracking-wider bg-clip-text text-transparent overflow-visible flex flex-col"
            >
              <span className="visible md:hidden bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-[game]">
                PAYZOLL
              </span>
              <span
                className="text-transparent bg-clip-text bg-[#021526] font-[game]"
                style={{
                  WebkitTextStroke: "2px #fff",
                  WebkitTextFillColor: "#021526",
                }}
              >
                Decentralized
              </span>
            </div>

            <div
              ref={scrollDownRef}
              // onClick={()=>{
              //   gsap.to(window, {
              //     duration: 3, // Adjust this value for faster or slower scrolling
              //     scrollTo: { y: document.documentElement.scrollHeight },
              //     ease: "power2.out"
              // });
              // }}
              className="opacity-100 text-white w-full mt-5 sm:mt-0 flex justify-start -translate-x-1/2 sm:translate-x-0 md:justify-end p-5"
            >
              {/* <p className='w-fit flex items-center h-fit text-nowrap '><IoIosArrowRoundDown /> Scroll down</p> */}
            </div>
            <div className="relative hidden md:flex md:flex-col">
              <p
                ref={rightListTitleRef}
                className="flex w-full justify-center items-center"
              >
                <span className="w-full h-[1px] bg-indigo-400 rounded-r-full"></span>
                <span className="text-xs text-indigo-400 text-nowrap uppercase">
                  Flow
                </span>
              </p>
              <ul
                ref={rightListRef}
                className="w-full flex flex-col items-end text-xs mt-2 gap-2"
              >
                <li className="uppercase">Sign Up & Onboard</li>
                <li className="uppercase">Fund Your Wallet</li>
                <li className="uppercase">Set Schedule</li>
                <li className="uppercase">Instant Payouts</li>
              </ul>
              <div
                ref={(el) => (refs.current[2] = el)}
                className="w-full flex items-center justify-start opacity-0 text-xs text-start mt-5 z-50"
              >
                <span className="flex items-center translate-x-[-100%] text-white text-xs uppercase">
                  <PiPlus />
                  Global Transactions{" "}
                </span>
              </div>
            </div>
          </div>

          <div
            ref={centerText}
            className="absolute w-[100vw] md:w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-0"
          >
            <p className="text-center text-xl md:text-xl uppercase w-96">
              CRAFTING future of{" "}
              <span className="text-indigo-400">payroll management</span> with
              our <br />{" "}
              <span className="text-indigo-400">cutting-edge features</span>
            </p>
          </div>
          <div
            ref={robotRef}
            className="absolute md:w-2/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent"
          >
            <Canvas
              shadows
              camera={{ fov: 50 }}
              style={{
                height: "60vh",
                minHeight: "400px",
                width: "100%",
                minWidth: "300px",
              }}
            >
              <Suspense fallback={null}>
                <Stage contactShadow={{ opacity: 1, blur: 2 }}>
                  <Model />
                </Stage>
              </Suspense>
              <OrbitControls makeDefault enableZoom={false} />
            </Canvas>
          </div>
          <div
            ref={elanRef}
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-[60%] text-indigo-400 uppercase"
          >
            payzoll
          </div>

          <div
            ref={barRef}
            className="absolute top-[62.5%] left-1/2 -translate-x-1/2 -translate-y-[62.5%] w-[60px] h-1 rounded-full border-[1px] border-white/30 font-modern tracking-wide"
          />
        </div>

        <div
          ref={globeref}
          className="absolute bottom-4 left-0 animate-float-medium"
        >
          <GlobeLock className="w-40 h-40 text-white opacity-10 -rotate-12" />
        </div>
      </div>
    </main>
  );
};

export default Home;
