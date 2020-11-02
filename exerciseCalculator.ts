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



const calculateExercises = (hours : Array<number>, target : number) =>
{
    let l_trainingDays = 0;
    for (let i = 0; i < hours.length; i++) 
        if(hours[i] > 0) //Count training days
            l_trainingDays++;



    let l_result = {} as Exercices;
    l_result.periodLength = hours.length;
    
    l_result.trainingDays = l_trainingDays;

    l_result.target = target;
    
    l_result.average = hours.reduce((previous : number, current:number)=> current+= previous)/hours.length;

    l_result.success = l_result.average >= l_result.target;

    l_result.rating = 2;

    l_result.ratingDescription = 'not too bad but could be better';

    return l_result;
}

let m_target = Number(process.argv[2]); 
let m_hourArray = [];
for(let i = 3; i < process.argv.length; i++)
{
    m_hourArray.push(Number(process.argv[i]));
}

console.log(calculateExercises(m_hourArray,m_target));