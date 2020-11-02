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
//"bmiCalculator":"ts-node bmiCalculator.ts"
//}

const calculateBmi = (w: number, h : number) => 
{ 
    let l_formula = w/((h/100)**2);
    let l_message = "";

    if(l_formula >= 25)
        l_message = "Overweight (excess weight)";
    else if(l_formula >= 20)
        l_message = "Normal (healthy weight)"
    else
        l_message = "Low weight (below healthy)"
        
    return l_message;
}

console.log(calculateBmi(74,180));