// 'use client' 
// import '../../../styles/global.css'
// import Link from 'next/link';
import Navigation from '../../../components/Navigation'
import Popup from '../../../components/popup'
import React, { useState} from 'react';
// import '../../../styles/mobile-styles.css'


// import { on } from 'events';

interface PopupProps {
    assetType: string;
    assetURL: string;
    onClose: () => void
}
export default function Assets({assetType, assetURL, onClose} : PopupProps) {
    const [selectedAsset, setSelectedAsset] = useState<PopupProps | null>(null)
    
    
    const openPopup = (assetType: string, assetURL: string) => {
        setSelectedAsset({ 
            assetType: assetType,
            onClose: closePopup, 
            assetURL: assetURL,
        });
    }

    const closePopup = () => {
        setSelectedAsset(null)
    }
    return (


        <div>
          <Navigation />
            
            <div id="asset-popup-container" className="fixed top-0 left-0 h-full w-full flex items-center">
                <div className="bg-white p-4 rounded-lg">
                    <div id="popup-content"></div>
                    <button id='close-popup' className='mt-4'></button>
                </div>
            </div>
            <div className="flex p-4 m-4 items-center" id="assest-container">
                <div className="asset-preview">
                    <img src="" alt=''></img>
                </div>
                <div className="asset-details">
                    <h2 className="asset-title">Title</h2>
                    <p className="asset-size">Dimensions:bl  BRUHHHHahblah</p>
                    <p className='asset-description'></p>
                </div>
                <div className='asset-download-btn'>
                    <a href="download-link.zip"
                        download={''}>Download</a>
                </div>
            </div>
            <div onClick={() => openPopup('image',"")}></div>
            <div onClick={() => openPopup('video',"")}></div>

            {selectedAsset && 
    <Popup assetType={selectedAsset.assetType} assetURL={selectedAsset.assetURL} onClose={closePopup} />
}


        </div>

    )
}
