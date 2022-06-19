const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
})

const listButton = document.getElementById('listButton');
const gridButton = document.getElementById('gridButton');  
const containerCard = document.getElementById('containerCard'); 

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');

listButton.addEventListener('click', () => {

    card1.classList.add('containerCard__cards--single')
    card2.classList.add('containerCard__cards--single')
    card3.classList.add('containerCard__cards--single')
    card4.classList.add('containerCard__cards--single')
    card5.classList.add('containerCard__cards--single')
    card6.classList.add('containerCard__cards--single')
    card7.classList.add('containerCard__cards--single')
    card8.classList.add('containerCard__cards--single')
    card9.classList.add('containerCard__cards--single')

})

gridButton.addEventListener('click', () => {

    card1.classList.remove('containerCard__cards--single')
    card2.classList.remove('containerCard__cards--single')
    card3.classList.remove('containerCard__cards--single')
    card4.classList.remove('containerCard__cards--single')
    card5.classList.remove('containerCard__cards--single')
    card6.classList.remove('containerCard__cards--single')
    card7.classList.remove('containerCard__cards--single')
    card8.classList.remove('containerCard__cards--single')
    card9.classList.remove('containerCard__cards--single')

})

listButton.addEventListener('click', () => {
    containerCard.classList.add('mainCard__containerCard--single');
});



gridButton.addEventListener('click', () => {
    containerCard.classList.remove('mainCard__containerCard--single');
});

