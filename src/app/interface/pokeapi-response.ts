export interface PokeapiResponse {
    count: number;
    next: string;
    previous: string;
    results: ResultadoPokemon[];
}

export interface ResultadoPokemon{
    name:string, 
    url:string
}

export interface Pokemon{
    linkId:string,
    name:string, 
    image:string
}
