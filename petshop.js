let petList = ['Bob', 'Tiger', 'July'];

const addPet = (nome) => {
    petList.push(nome);
    return 'Pet adicionado com sucesso';
};

const listPets = () => {
    return petList.reduce((a, c) => a += `<br><strong>Nome do pet:</strong> ${c}<br>-------------------------`,'-------------------------');
}

module.exports = {
    addPet,
    listPets,
}
