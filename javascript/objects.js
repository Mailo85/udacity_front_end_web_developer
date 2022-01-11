var umbrella = {
    color: 'pink',
    isOpen: false,
    open: function () {
        if (umbrella.isOpen === true) {
            return 'The umbrella is already opened!';
        } else {
            umbrella.isOpen = true;
            return 'Julia opens the umbrella!';
        }
    },
    close: function () {
        if (umbrella.isOpen === false) {
            return 'The umbrella is already closed!';
        } else {
            umbrella.isOpen = false;
            return 'Julia closes the umbrella!';
        }
    },
};

console.log(umbrella.close());
console.log(umbrella.open());
console.log(umbrella.open());
console.log(umbrella.close());

/********************************************************/
var facebookProfile = {
    name: 'Florian',
    friends: 555,
    messages: [
        'Hey world, how are you?',
        'Wassup, pals?',
        "How's it hangin', McFly?",
    ],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        facebookProfile.friends++;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    },
};

/********************************************************/
var donuts = [
    {type: 'Jelly', cost: 1.22},
    {type: 'Chocolate', cost: 2.45},
    {type: 'Cider', cost: 1.59},
    {type: 'Boston Cream', cost: 5.99},
];

donuts.forEach(function (donut) {
    console.log(donut.type + ' donuts cost $' + donut.cost + ' each');
});
