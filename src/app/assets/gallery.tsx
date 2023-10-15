// 'use client'
// import '../../../styles/global.css'
import '../../../styles/mobile-styles.css';

// import Link from 'next/link';
import Image from "next/image";
// import { FallbackImage} from 'components'
import Navigation from "../../../components/Navigation";
import Popup from "../../../components/popup";
import "tailwindcss/tailwind.css"; // Import the compiled Tailwind CSS
import React, { useState } from "react";

/////////MY IMAGES, VIDEOS, and OTHER CONTENT CONTAINER//////////////////////////
import TamaSketchy from "../../../public/content/tamasketchygif.gif";
// import Hannah from '../../../public/hannah.png'
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

      {/* /////POPUP///// */}
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


      <div className="flex" id="asset-container-mobile">
        <div
          className="max-w-sm p-4 m-4 rounded-lg items-center shadow-xl bg-purple-200"
          id="assest-container"
        >
          <div className=" aspect-ratio: 1/1 asset-preview">
            <Image
              className="rounded-t-lg "
              src={TamaSketchy}
              layout={"responsive"}
              alt="a fucking gif i need to work"
              width={540}
              height={960}
              unoptimized={true}
            />
          </div>

          <div></div>
          <div className="asset-details">
            <h2 className="flex justify-center bebasFont text-xl asset-title">
              TAMA Sketchy Gif
            </h2>
            <p className="nunito asset-size">
              <strong>Dimensions:</strong> 1080 by 1920
            </p>
            <p className="nunito asset-size">
              <strong>Description:</strong> a 3-5sec blurb you can place in
              front of tiktoks and reels, or a quik post needed to keep
              consistent when you fall behind because of life
            </p>
            <p className="asset-description"></p>
          </div>
          {/* <Image className='' 
                src={TikTokLogo}
                alt="tiktok logo"
                width={20}
                height={20}
                /> */}
          <div className="flex mx-auto justify-between item-center">
            <div className="asset-download-btn">
              <a href="download-link.zip" download={"tamasketchygif.gif"}>
                <button className="bg-pink-300 hover:bg-purple-500 text-white bebasFont py-2 px-4 border-b-4 border-pink-600 hover:border-purple-700 rounded">
                  Download
                </button>
              </a>
            </div>
            {/* /////////////////////LOGOS/PlATFLORMS//////////////// */}
            {/* <div className=" flex items-center ">
              <Image
                className="mr-2"
                id = "logo-image"
                src={TikTokLogo}
                alt="tiktok logo"
                width={20}
                height={20}
              />
              <Image
                className="mr-2"
                id = "logo-image"
                src={BlackTwitterLogo}
                alt="tiktok logo"
                width={16}
                height={16}
              />
              <Image
                className="mr-2"
                id = "logo-image"
                src={BlackInstaLogo}
                alt="tiktok logo"
                width={18}
                height={18}
              />
            </div> */}
          </div>
        </div>

        {/* /////////////NEW POST/////////////// */}
        {/* /////////////NEW POST/////////////// */}
        {/* /////////////NEW POST/////////////// */}

        <div
          className="max-w-sm p-4 m-4 rounded-lg items-center shadow-xl bg-purple-200"
          id="assest-container"
        >
          <div className=" aspect-ratio: 1/1 asset-preview">
            <Image
              className="rounded-t-lg "
              src={Placeholder300x300}
              layout={"responsive"}
              alt="a fucking gif i need to work"
              width={540}
              height={960}
              unoptimized={true}
            />
          </div>
          <div className="asset-details">
            <h2 className="flex justify-center bebasFont text-xl asset-title">
              PlaceHolder
            </h2>
            <p className="nunito asset-size">
              <strong>Dimensions:</strong> 1080 by 1920
            </p>
            <p className="nunito asset-size">
              <strong>Description:</strong> a a place holder for place holder shit
            </p>
            <p className="asset-description"></p>
          </div>
          <div className="flex mx-auto justify-between item-center">
            <div className="asset-download-btn">
              <a href="download-link.zip" download={"tamasketchygif.gif"}>
                <button className="bg-pink-300 hover:bg-purple-500 text-white bebasFont py-2 px-4 border-b-4 border-pink-600 hover:border-purple-700 rounded">
                  Download
                </button>
              </a>
            </div>
            {/* /////////////////////LOGOS/PlATFLORMS//////////////// */}
            <div className=" flex items-center ">
              <Image
                className="mr-2"
                src={TikTokLogo}
                alt="tiktok logo"
                width={20}
                height={20}
              />
              <Image
                className="mr-2"
                src={BlackTwitterLogo}
                alt="tiktok logo"
                width={16}
                height={16}
              />
              <Image
                className="mr-2"
                src={BlackInstaLogo}
                alt="tiktok logo"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>

        {/* /////////////NEW POST/////////////// */}
      </div>
      <div onClick={() => openPopup("image", "")}></div>
      <div onClick={() => openPopup("video", "")}></div>

      {selectedAsset && (
        <Popup
          assetType={selectedAsset.assetType}
          assetURL={selectedAsset.assetURL}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
