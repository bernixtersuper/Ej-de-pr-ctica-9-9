USUARIOS=[
    {id:1, nombre:'Juan', password:'1234', email:'juanperez@gmail.com'},
    {id:2, nombre:'Maria', password:'5678', email:'mariagomez@gmail.com'},
    {id:3, nombre:'Pedro', password:'abcd', email:'pedrolopez@gmail.com'},
    {id:4, nombre:'Laura', password:'efgh', email:'lauramartinez@gmail.com'},
    {id:5, nombre:'Carlos', password:'ijkl', email:'carlosrodriguez@gmail.com'}
]
function usuarioNuevo(nombre){
    for(let i=0; i< USUARIOS.length;i++){
        if (USUARIOS[i]===nombre){
            return i
        }
    }
    return true
}
function registrarUsuario(nombre,password,email){
    if(usuarioNuevo(nombre)===true){
        objeto={id:USUARIOS.length+1,nombre:nombre,password:password,email:email}
        USUARIOS.push(objeto)
        console.log(`se agregó el usuario ${nombre}`)
    }
}
registrarUsuario('John', 'password123', 'john@example.com');
console.log(USUARIOS)
// 4. Implementa manejo de `Falsy` y `Truthy` valores para comprobar si las entradas son válidas (es decir, que no sean `null`, `undefined`, etc.).
// 5.Validar la fortaleza del `password` (debe tener al menos 6 caracteres y un número).

