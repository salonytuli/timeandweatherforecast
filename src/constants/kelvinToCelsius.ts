export function kelvinToCelsius(temp: string) {
    return (parseInt(temp, 10) - 273.15).toFixed(2).toString() + "°C";
}
