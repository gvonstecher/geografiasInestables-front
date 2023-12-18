
import { useState } from "react";

const PersistentPlayer = ({src}) => {
    const [showMe, setShowMe] = useState(false);
    function toggleVisibilty(){
        setShowMe(!showMe);
    }

    if(src){
        return (
        
            <div 
                className={
                    `sticky bottom-0 w-full z-40 ${showMe? "h-20":"min-h-min"}`
                } 
            >
                    <button className="absolute top-3 right-3 z-50 rounded-full p-4 text-2xl font-bold bg-black"  onClick={toggleVisibilty}>
                        <div 
                            className={
                                `h-0 w-0 border-x-8 border-x-transparent ${showMe? "border-b-[16px] border-b-white-600":"border-t-[16px] border-t-white-600"}`
                            } 
                        >
                        </div>
                    </button>
                    <div 
                        id="persistentPlayer" 
                        className={
                            ` bg-dark-verde ${showMe? "hidden":"block"}`
                        } 
                        dangerouslySetInnerHTML={{__html: src}}></div>
            </div>
        )
    }
    
}

export default PersistentPlayer;