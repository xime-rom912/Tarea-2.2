function matriz(m, n){
    let matrix =  [];
    for(let i = 0; i < m; i++){
        matrix.push([]);
        for(let j = 0; j < n; j++){
            matrix[i][j] = Math.floor(Math.random() * 100) + 1;
        }
    }
    return matrix;
}

console.log(matriz(99,1).sort((a,b) => {
    if(a[0] === b[0]) return 0;
    return (a[0] < b[0]) ? -1 : 1;
}))
