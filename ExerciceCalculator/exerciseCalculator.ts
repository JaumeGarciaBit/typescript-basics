//Crear una aplicación npm: es decir, crea el package.json
//> npm init
//Instalar ts-node en npm en la carpeta de dependencias de desarrollo del package.json del proyecto en cuestión:
//> npm install ts-node --save-dev
//Instalar typescript en npm en la carpeta de dependencias de desarrollo del package.json del proyecto en cuestión:
//> npm install typescript --save-dev
//> npm i --save-dev @types/node

//Modificaciones en package.json:
//creamos un script para ts-node:
//"scripts":{
//...
//"ts-node": "ts-node",
//"exerciseCalculator":"ts-node exerciseCalculator.ts"
//}

interface Exercices
{
    periodLength : number,
    trainingDays : number,
    target : number,
    average : number,
    success : boolean,
    rating : number,
    ratingDescription : string,
}

let m_hourArray = [3, 0, 2, 4.5, 0, 3, 1];

const calculateExercises = (hours, target) =>
{
    let l_trainingDays = 0;
    for (let i = 0; i < hours.length; i++) 
        if(hours[i] > 0) //Count training days
            l_trainingDays++;



    let l_result = {} as Exercices;
    l_result.periodLength = hours.length;
    
    l_result.trainingDays = l_trainingDays;

    l_result.target = target;
    
    l_result.average = hours.reduce((previous, current)=> current+= previous)/hours.length;

    l_result.success = l_result.average >= l_result.target;

    l_result.rating = 2;

    l_result.ratingDescription = 'not too bad but could be better';

    return l_result;
}

console.log(calculateExercises(m_hourArray,2));