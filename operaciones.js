const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) =>{
    const registros = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    const nuevoRegistro = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };
    registros.push(nuevoRegistro);
    fs.writeFileSync('citas.json', JSON.stringify(registros))
};

const leer = () =>{
    const registros = fs.readFileSync('citas.json', 'utf8')
    const registrosJSON = JSON.parse(registros)

    for( const registro of registrosJSON){
        console.log(registro)
    }
};

module.exports = { registrar, leer };