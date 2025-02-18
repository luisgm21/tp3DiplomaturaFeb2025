import fs from 'fs'

class SuperHeroe {
    constructor(id,nombreSuperHeroe, nombreReal, nombreSociedad, edad, planetaOrigen , debilidad, poder ,habilidadEspecial,aliado, enemigo){
        this.id = id;
        this.nombreSuperHeroe = nombreSuperHeroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
    
}

export function leerSuperHeroes(ruta) {
    const datos = fs.readFileSync(ruta,'utf-8');
    const superHeroesArray = JSON.parse(datos);

    const superheroes = superHeroesArray.map(
        hero => new SuperHeroe(hero.id,hero.nombreSuperHeroe,hero.nombreReal,
                hero.nombreSociedad,hero.edad,hero.planetaOrigen,hero.debilidad,
                hero.poder,hero.habilidadEspecial,hero.aliado,hero.enemigo)
    );

    superheroes.sort((a,b) => a.nombreSuperHeroe.localeCompare(
        b.nombreSuperHeroe));
    
    return superheroes;
}