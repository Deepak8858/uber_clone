import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: 'flex-1 h-full w-full',
}

mapboxgl.accessToken = process.env.PUBLIC_MAPBOX_ACCESS_TOKEN





const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/deepak8858/cl0ib79kc003915pji9zlrm75',
            center: [-73.935242, 40.730610],
            zoom: 3,
        })


    }, [])

    return <div className={style.wrapper} id='map' />

}

export default Map