import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    heroes:any[] = [
        {
            nombre:'Aquaman',
            bio:'El poder más reconocido de aquaman es la capacidad telepática para...',
            img:'assets/img/aquaman.png',
            aparacion:'1941-11-01',
            casa: 'CM'
        },
        {
            nombre:'Batman',
            bio:'ELos rasgos principales de Batman se resumen en (destreza física, cualidades de su auto de lujo,, su apoyo Robin y más)',
            img:'assets/img/batman.png',
            aparacion:'1939-11-01',
            casa: 'Marvel'
        },
        {
            nombre:'Daredevil',
            bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi laborum accusantium ratione saepe, veniam harum magni cupiditate alias velit ex similique rem tempore nemo vitae tenetur aspernatur corporis eligendi.',
            img:'assets/img/daredevil.png',
            aparacion:'1939-11-01',
            casa: 'Marvel'
        },
        {
            nombre:'Hulk',
            bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi laborum accusantium ratione saepe, veniam harum magni cupiditate alias velit ex similique rem tempore nemo vitae tenetur aspernatur corporis eligendi.',
            img:'assets/img/hulk.png',
            aparacion:'1939-11-01',
            casa: 'Marvel'
        },
        {
            nombre:'SpiderMan',
            bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi laborum accusantium ratione saepe, veniam harum magni cupiditate alias velit ex similique rem tempore nemo vitae tenetur aspernatur corporis eligendi.',
            img:'assets/img/spiderman.png',
            aparacion:'1939-11-01',
            casa: 'Marvel'
        },
        {
            nombre:'Wolverine',
            bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi laborum accusantium ratione saepe, veniam harum magni cupiditate alias velit ex similique rem tempore nemo vitae tenetur aspernatur corporis eligendi.',
            img:'assets/img/wolverine.png',
            aparacion:'1939-11-01',
            casa: 'Marvel'
        }
    ];

    constructor(){
        console.log('Cargado el servicio');
    }
    
    public getHeroes(){
        return this.heroes;
    }

    //Datos traidos de otra vista (id del Héroe)
    public findHeroeById( id:string ){
        return this.heroes[id];
    }

}