let cursos = {
    fisica: [
        { nombre: 'Kevin', calificacion: 8 },
        { nombre: 'Melissa', calificacion: 7 },
        { nombre: 'Maritrini', calificacion: 8 }
    ],
    matematicas: [
        { nombre: 'Kevin', calificacion: 10 },
        { nombre: 'Melissa', calificacion: 7 },
        { nombre: 'Maritrini', calificacion: 6 },
        { nombre: 'Marina', calificacion: 5 }
    ]
    ,
    historia:
        [{ nombre: 'Daniel', calificacion: 10 }]
}

let arreg = [];

for (curso in cursos) {
    arreg.push(cursos[curso]);
}
arreg.sort((a,b) => {
    if(a.length === b.length) return 0;
    return (a.length < b.length) ? -1 : 1;
});
arreg.forEach((curso) => {
    curso.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre}, calificiacion: ${alumno.calificacion}`);
    });
});
