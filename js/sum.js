function sum(a, b) {
    if(!a){
        return 'Nera pirmos reiksmes';
    }
    
    if (typeof a !== 'number') {
        return 'Pirmas parametras netinkamo tipo';
    }
    return a + b;
}

module.exports = sum;