export function convertTemperature(temperature: number, fromScale: string, toScale: string): number {
    switch (fromScale) {
        case 'C':
            return convertFromCelsius(temperature, toScale);
        case 'F':
            return convertFromFahrenheit(temperature, toScale);
        case 'K':
            return convertFromKelvin(temperature, toScale);
        default:
            throw new Error('Invalid temperature scale');
    }
}

function convertFromCelsius(temperature: number, toScale: string): number {
    switch (toScale) {
        case 'F':
            return (temperature * 9/5) + 32;
        case 'K':
            return temperature + 273.15;
        default:
            throw new Error('Unsupported conversion from Celsius to ' + toScale);
    }
}

function convertFromFahrenheit(temperature: number, toScale: string): number {
    switch (toScale) {
        case 'C':
            return (temperature - 32) * 5/9;
        case 'K':
            return (temperature + 459.67) * 5/9;
        default:
            throw new Error('Unsupported conversion from Fahrenheit to ' + toScale);
    }
}

function convertFromKelvin(temperature: number, toScale: string): number {
    switch (toScale) {
        case 'C':
            return temperature - 273.15;
        case 'F':
            return (temperature * 9/5) - 459.67;
        default:
            throw new Error('Unsupported conversion from Kelvin to ' + toScale);
    }
}