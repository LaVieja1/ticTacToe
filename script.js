const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", "", ];

    return { board };
})();

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };

    return { getSign };
};

const displayController = (() => {
    const fieldElements = document.querySelectorAll(".field");

    fieldElements.forEach((field) => 
    field.textContent = 'x');
})();