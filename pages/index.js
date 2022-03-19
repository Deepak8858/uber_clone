import Navbar from "../components/Navbar"
import Map from "../components/Map"

const style = {
  wrapper: 'h-screen w-screen flex flex-col',
  main: 'h-full w-screen flex-1 z-10',
  mapContainer: 'flex-1 h-full w-full',
  rideRequestContainer: 'h-full w-[400px]  m1-[1rem] py-[3rem] absolute top-0 left-0  flex flex-col justify-end',
  rideRequest: 'h-full max-h-[700px] bg-white rounded-1g flex flex-col overflow-scroll',
}

export default function Home() {
  return <div className={style.wrapper}>
    <Navbar />
    <div className={style.main}>
      <Map />
    </div>
    <div className={style.rideRequestContainer}>
      <div className={style.rideRequest}>
        {/* location selector */}
        {/* confirm ride */}
      </div>
    </div>
  </div>

}