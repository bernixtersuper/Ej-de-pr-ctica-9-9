// Ejercicio 1: Sistema de Gestión de Tareas
let TAREAS=[
    {
        id:1,
        nombre:'Estudiar JS',
        completado:true
    },
    {
        id:2,
        nombre:'Hacer ejercicio',
        completado:false
    },
    {
        id:3,
        nombre:'Comprar pan',
        completado:true
    },
    {
        id:4,
        nombre:'Pasear al perro',
        completado:false
    }
]
function existeTarea(array,nombre){
    for(let i=0;i<array.length;i++){
        if(array[i].nombre===nombre){
            return i;
        }
    }
    return false;
}

function tareaCompleta(array,nombre){
    let i = existeTarea(array,nombre);
    if (i===false){
        return `La tarea ${nombre} no existe`;
    }
    if(array[i].completado===true){
        return `La tarea ${nombre} ya está completa`;
    }
    else{
        return `La tarea ${nombre} no está completa`;
    }   
}
function agregarTarea(array,nombre){
if (existeTarea(array,nombre)===false){
    let tarea={
        id:array.length+1,
        nombre:nombre,
        completado:false
    }
    array.push(tarea);
    console.log(`la tarea ${nombre} se ha agregado correctamente`);
}
else{
    console.log(`La tarea ${nombre} ya existe`);
}
}
function completarTarea(array,nombre){
    let i = existeTarea(array,nombre);
    if (i===false){
        console.log(`La tarea ${nombre} no existe`);
    }
    else{
        array[i].completado = true
        console.log(`la tarea ${nombre} ha sido completada`)
    }
}
function mostrarTareas(array,completas){
    if (completas===true){
        console.log('se muestran las tareas completas')
        let COMPLETAS=[]
        for(let i=0;i<array.length;i++){
            if(array[i].completado===true){
                COMPLETAS.push(array[i])
            }
        }
        console.log(COMPLETAS)
    }
    if (completas===false){
        console.log('se muestran las tareas completas')
        let INCOMPLETAS=[]
        for (let i=0;i<array.length;i++){
            if(array[i].completado===false){
                INCOMPLETAS.push(array[i])
            }
        }
        console.log(INCOMPLETAS)
    }
    else{
        console.log('se muestran todas las tareas')
        console.log(array)
    }
}
function cambiarNombre(array,nombre,nombreNuevo){
    let i = existeTarea(array,nombre)
    let h = existeTarea(array,nombreNuevo)
    if ((i!==false)&&(h===false)){
        array[i].nombre=nombreNuevo
        console.log('el array fue modificado')
    }
    else{
        console.log('la tarea no existe o ya existe una con el nombre nuevo')
    }

}
console.log(tareaCompleta(TAREAS,'Estudiar JS'));
console.log(tareaCompleta(TAREAS,'Hacer ejercicio'));
agregarTarea(TAREAS,'Estudiar HTML');
completarTarea(TAREAS,'Estudiar HTML');
cambiarNombre(TAREAS,'Estudiar JS','Estudiar JS')
mostrarTareas(TAREAS)

// const jsonTareas = JSON.stringify(TAREAS);
// const parsedTareas = JSON.parse(jsonTareas);
// console.log(parsedTareas);
