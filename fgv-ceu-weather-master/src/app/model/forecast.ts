export interface Forecast {
    name?: string,
    weather?: Weather[],
    main?: Main,
    wind?: Wind,
}

export interface Weather {
    icon?: string,
    description?: string,
}

export interface Main {
    temp?: number,
    temp_min?: number,
    temp_max?: number,
    humidity?: number,
}

export interface Wind {
    speed?: number,
}