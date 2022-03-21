import RideSelctor from "./RideSelctor"
import { useContext } from 'react'

const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between`,
    rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
    confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}


const Confirm = () => {
    const storeTripDetails = async () => { }
    return <div className={style.wraper}>
        <div className={style.rideSelectorContainer}>
            <RideSelctor/>
        </div>
        <div className={style.confirmButtonContainer}>
            <div className={style.confirmButtonContainer}>
                <div
                    className={style.confirmButton}
                    onClick={() => storeTripDetails()}

                >

                </div>
                Confirm UberX</div>
        </div>
    </div>
}

export default Confirm