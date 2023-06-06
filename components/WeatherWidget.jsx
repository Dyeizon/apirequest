import { useEffect, useState } from "react"
import axios from 'axios'

export function WeatherWidget() {
    const [weatherData, setWeatherData] = useState(null)
    const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=-27.01&longitude=-51.15&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&timezone=America%2FSao_Paulo"

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(endpoint)
                setWeatherData(response.data)
            } catch (error) {
                console.error("Erro: ", error)
            }
        }

        fetchData()
    }, [])


    return (
        <div class="flex items-center justify-center">
            <div class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                <div class="flex flex-col">
                    <div>
                        <h2 class="font-bold text-gray-600 text-center">{weatherData} Bucharest, Romania</h2>
                    </div>
                    <div class="my-6">
                        <div class="flex flex-row space-x-4 items-center">
                            <div id="icon">
                                <span>
                                    <svg class="w-20 h-20 fill-stroke text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div id="temp">
                                <h4 class="text-4xl">12&deg;C</h4>
                                <p class="text-xs text-gray-500">Feels like +14&deg;C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}