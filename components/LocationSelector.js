import { useState } from 'react'


const style = {
    wrapper: 'pt-2',

}

const LocationSelector = () => {
    const [inFocus, setInFocus] = useState('from')
    return (
        <div className={style.wrapper}>
            <div className={style.searchHeader}>
                {inFocus === 'from' ? 'Where can we pick you up' : 'Where to'}

            </div>
        </div>
    )
}


export default LocationSelector