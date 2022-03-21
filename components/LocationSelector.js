import { useState } from 'react'


const style = {
    wrapper: 'pt-2',
    searchHeader: 'w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden',
    inputBoxes: 'flex flex-col mb-4 relative',
    inputBox: 'h-10 mx-4 border-2 bg-[#eeeeee] flex item-center my-1 py-1 px-2',
    focusedInputBox: 'border-black',
    focusedInputBox: 'border-black',
    input: 'my-2 rounded-2 p-2 outline-back border absolute z-10 left-[2.3rem] top-[2rem]',
    verticalLine: 'w-0 h-[2rem] border-black border  absolute z-10 left-[2.3rem] top-[2rem]',
    horizontalLine: 'w-[2rem] h-0 border-black border  absolute z-10 left-[2.3rem] top-[2rem]',


}

const LocationSelector = () => {
    const [inFocus, setInFocus] = useState('from')
    return (
        <div className={style.wrapper}>
            <div className={style.searchHeader}>
                {inFocus === 'from' ? 'Where can we pick you up' : 'Where to'}

            </div>
            <div className={style.inputBoxes}>
                <div
                    className={`${style.inputBox} ${inFocus === 'from' && style.focusedInputBox
                        }`}
                ></div>
            </div>
          </div>  
            
    )
}


            export default LocationSelector