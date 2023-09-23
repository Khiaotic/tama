import {useState} from 'react'


export default function Popup({assetType, assetURL, onClose }){
const [showPopup, setShowPopup] = useState(true)

const handleClose = () => {
    setShowPopup(fasle)
    onClose ()
}

return(
    <div className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center ${showPopup ? 'block' : 'hidden'}`}>
    <div className="bg-white p-4 rounded-lg">
    {assetType === 'image' && <img src={assetURL} alt="image" className="max-w-full max-h-96"/>}
    {assetType === 'video' && ( <video controls className="max-w-full max-h-96" style={{ maxheight: '80h'}}>
        <source src={assetURL} type="video/mp4" />
        YOUR BROWSER DOESN'T SUPPORT THE VIDEO TAG
    </video>
    )}
    <button onClick={handleClose} className='mt-4 py-2 bg-yellow-300 px-4 rounded hover:bg-red-500' >
        Close
    </button>
    </div>
    </div>
)

}