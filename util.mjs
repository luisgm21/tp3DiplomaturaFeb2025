import fs from 'fs'

class SuperHeroe {
    constructor(id,nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen , debilidad, poder ,habilidadEspecial,aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
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
        hero => new SuperHeroe(hero.id,hero.nombreSuperheroe,hero.nombreReal,
                hero.nombreSociedad,hero.edad,hero.planetaOrigen,hero.debilidad,
                hero.poder,hero.habilidadEspecial,hero.aliado,hero.enemigo)
    );

    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe));
    
    return superheroes;
}

export function agregarSuperHeroes(rutaOriginal,rutaNueva){
    const datosOriginales = fs.readFileSync(rutaOriginal,'utf-8');
    const datosNuevos = fs.readFileSync(rutaNueva,'utf-8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperHeroes = JSON.parse(datosNuevos);

    const instanciasNuevos = nuevosSuperHeroes.map(
        hero => new SuperHeroe(hero.id,hero.nombreSuperheroe,hero.nombreReal,
                hero.nombreSociedad,hero.edad,hero.planetaOrigen,hero.debilidad,
                hero.poder,hero.habilidadEspecial,hero.aliado,hero.enemigo)
    );

    const listaActualizada = [... superheroesOriginales, ... instanciasNuevos];

    const nuevaRutaHeroesCompletos = './heroesFull.txt'

    fs.writeFileSync(nuevaRutaHeroesCompletos,JSON.stringify(listaActualizada),'utf-8');
    console.log('Lista de superhéroes actualizada con exito');

}