const messages = [
    "Ana",
    "Maria",
    "Juan",
    "Pedro",
    "Carolina",
    "Paula",
    "Nicolas"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };