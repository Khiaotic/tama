// 'use client'

import "../../../styles/mobile-styles.css";

import Image from "next/image";

import Navigation from "../../../components/Navigation";

// import Popup from "../../../components/popup";
import "tailwindcss/tailwind.css"; // Import the compiled Tailwind CSS
import React, { useState } from "react";

/////////MY IMAGES, VIDEOS, and OTHER CONTENT CONTAINER//////////////////////////
import TamaSketchy from "../../../public/content/tamasketchygif.gif";
import M_Tama from "../../../public/content/tama_eyes_only_spetum.png";
import TamaaBlack from "../../../public/content/tama_logo_bold_3.png";
import TaMaaBlack from "../../../public/content/tama_logo_sm_char.png";
import Placeholder300x300 from "../../../public/content/300x300.svg";
import Placeholder200x400 from "../../../public/content/200x400.svg";
import Placeholder600x400 from "../../../public/content/600x400.svg";
import Placeholder200x300 from "../../../public/content/200x300.svg";

/////////////////LOGOS/////////////////
import TikTokLogo from "../../../public/logos/TikTok_Icon_Black_Circle.png";
import BlackTwitterLogo from "../../../public/logos/logo-black.png";
import BlackInstaLogo from "../../../public/logos/Instagram_Glyph_Black.png";
///////////////////////////END OF CONTAINER///////////////////////////////////////

// import '../../../styles/mobile-styles.css'

// import { on } from 'events';

interface PopupProps {
  assetType: string;
  assetURL: string;
  onClose: () => void;
}
export default function Assets({ assetType, assetURL, onClose }: PopupProps) {
  const [selectedAsset, setSelectedAsset] = useState<PopupProps | null>(null);

  const openPopup = (assetType: string, assetURL: string) => {
    setSelectedAsset({
      assetType: assetType,
      onClose: closePopup,
      assetURL: assetURL,
    });
  };

  const closePopup = () => {
    setSelectedAsset(null);
  };
  return (
    <div>
      <Navigation />
      <div
        id="asset-popup-container"
        className="fixed top-0 left-0 h-full w-full flex items-center"
      >
        <div className="bg-white p-4 rounded-lg">
          <div id="popup-content"></div>
          <button id="close-popup" className="mt-4"></button>
        </div>
      </div>

      {/* ////////CONTENT CARDS//////// */}

      <div
        className=" w-full columns-1 sm:columns-3 max-w-5xl pb-10 mx-auto mb-10 gap-5 p-4 m-4 rounded-lg  shadow-xl bg-purple-200"
        id="assest-container"
      >
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2 "
            id="darken-hover"
            src={TamaSketchy}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={90}
            height={90}
            unoptimized={true}
          />
          <div className=" translate-y-[120%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
            <h2 className=" text-blue-300 flex justify-center bebasFont text-xl asset-title  md:text-left">
              Tama Sketchy Gif
            </h2>
            <p className="m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> 3sec blurb. Can be place in front of
              tiktoks and reels, or a quik post
            </p>
          </div>
        </div>

        {/* /////////NEW POST//////////////  */}
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2"
            id="darken-hover"
            src={Placeholder300x300}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={540}
            height={960}
            unoptimized={true}
          />
          {/* <div className="translate-y-[80%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
              <h2 className="text-blue-300 flex justify-center bebasFont text-xl asset-title">
             PlaceHolder
            </h2>
            <p className=" whitespace-normal m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> placeholder placeholder 
            </p>
              </div> */}
        </div>
        {/* /////////NEW POST//////////////  */}
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2 bg-white "
            id="darken-hover"
            src={M_Tama}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={90}
            height={90}
            unoptimized={true}
          />
          <div className=" translate-y-[120%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
            <h2 className=" text-blue-300 flex justify-center bebasFont text-xl asset-title  md:text-left">
              Tama M-face logo
            </h2>
            <p className="m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> 3sec blurb. Can be place in front of
              tiktoks and reels, or a quik post
            </p>
          </div>
        </div>
        {/* /////////NEW POST//////////////  */}
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2"
            id="darken-hover"
            src={Placeholder300x300}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={540}
            height={960}
            unoptimized={true}
          />
          {/* <div className="translate-y-[80%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
              <h2 className="text-blue-300 flex justify-center bebasFont text-xl asset-title">
             PlaceHolder
            </h2>
            <p className=" whitespace-normal m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> placeholder placeholder 
            </p>
              </div> */}
        </div>
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2 "
            id="darken-hover"
            src={TaMaaBlack}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={90}
            height={90}
            unoptimized={true}
          />
          <div className=" translate-y-[120%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
            <h2 className=" text-blue-300 flex justify-center bebasFont text-xl asset-title  md:text-left">
              Tama M-face logo
            </h2>
            <p className="m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> 3sec blurb. Can be place in front of
              tiktoks and reels, or a quik post
            </p>
          </div>
        </div>
        {/* /////////NEW POST//////////////  */}
        <div className="group relative flex items-center justify-center sm:flex-row">
          <Image
            className="rounded-lg p-2 "
            id="darken-hover"
            src={TamaaBlack}
            layout={"responsive"}
            alt="a fucking gif i need to work"
            width={90}
            height={90}
            unoptimized={true}
          />
          <div className=" translate-y-[120%] absolute flex flex-col items-center justify-center text-center group-hover:translate-y-0 transition-all">
            <h2 className=" text-blue-300 flex justify-center bebasFont text-xl asset-title  md:text-left">
              Tama M-face logo
            </h2>
            <p className="m-5 text-blue-300 nunito asset-size" id="hidden-text">
              <strong>Description:</strong> 3sec blurb. Can be place in front of
              tiktoks and reels, or a quik post
            </p>
          </div>
        </div>
        <Image
          className="rounded-lg p-2"
          id="darken-hover"
          src={Placeholder600x400}
          layout={"responsive"}
          alt="a fucking gif i need to work"
          width={540}
          height={960}
          unoptimized={true}
        />
        <Image
          className="rounded-lg p-2"
          id="darken-hover"
          src={Placeholder200x400}
          layout={"responsive"}
          alt="a fucking gif i need to work"
          width={540}
          height={960}
          unoptimized={true}
        />
        <Image
          className="rounded-lg p-2"
          id="darken-hover"
          src={Placeholder200x300}
          layout={"responsive"}
          alt="a fucking gif i need to work"
          width={540}
          height={960}
          unoptimized={true}
        />
      </div>
    </div>
  );
}
