import Assets from '../app/assets/pages'
import 'tailwindcss/tailwind.css'; 



export default function AssetPage (){
    const assestType = 'image';
    const assetURL = '';
    const onClose = () => {

    }
    
    
    
    return <Assets assetType={assestType} assetURL={assetURL} onClose={onClose}/>
}