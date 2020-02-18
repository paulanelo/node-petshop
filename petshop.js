let petList = ['Bob', 'Tiger', 'July'];

const addPet = (nome) => petList.push(nome);

const listPets = () => {
    return petList.reduce((a, c, id) => a += `<br><strong>${id+1} Nome do pet:</strong> ${c}<br>-------------------------`,'-------------------------');
}

const deletePet = (nome) => {
    if(petList.indexOf(nome) !== -1) {
        return petList.splice(petList.indexOf(nome), 1);
    }
    return false;
}

module.exports = {
    addPet,
    listPets,
    deletePet
}
