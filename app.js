console.log('hello')



let btn = document.getElementsByClassName('btn')[0]
let btn_meals = document.getElementsByClassName('btn_meals')[0]
let breakfast = document.getElementsByClassName('breakfast')[0]
let lunch = document.getElementsByClassName('lunch')[0]
let snack = document.getElementsByClassName('snack')[0]
let dinner = document.getElementsByClassName('dinner')[0]
let totalcalorie = document.getElementById('totalcalorie')
let cl = document.querySelectorAll('.cl')
let btn_yes = document.querySelector('.btn_yes')
let btn_no = document.querySelector('.btn_no')
let main_totalcalorie = document.querySelector('.main_totalcalorie')
let calories_breakfast = document.querySelector('.calories_breakfast')
let calories_lunch = document.querySelector('.calories_lunch')
let calories_snack = document.querySelector('.calories_snack')
let calories_dinner = document.querySelector('.calories_dinner')
let btn_calories = document.querySelector('.btn_calories')
let user_ask = document.querySelector('.askuser')
let inputs = document.querySelectorAll('.inpt')
// let breakfastMeals=['peanutbutter','eggs','oats']
// let lunchMeals=['rice','chicken','milt']
// let dinnerMeals=['salad','milk','Yogur']
// let snacksMeals=['banan','coffee','dates'] (تفاح توست)،(موز قهوة)
let breakfastMeals = []
let lunchMeals = []
let dinnerMeals = []
let snacksMeals = []

// breakfastMeals.push({firstmeal: firstmeal.value, secondmeal: secondmeal.value, thirdmeal: thirdmeal.value})

btn_meals.addEventListener('click', (e) => {

    let firstmeal = document.getElementsByClassName('firstmeal')[0]
    let secondmeal = document.getElementsByClassName('secondmeal')[0]

    let thirdmeal = document.getElementsByClassName('thirdmeal')[0]
    let fourthmeal = document.getElementsByClassName('fourthmeal')[0]

    breakfastMeals = firstmeal.value.split("،", 3)
    lunchMeals = secondmeal.value.split("،", 3)
    snacksMeals = thirdmeal.value.split("،", 3)
    dinnerMeals = fourthmeal.value.split("،", 3)




    for (input of inputs) {
        if (input.value.trim() == '') {
            alert('Enter your meals!')
            break;
        }
        btn_meals.classList.add('sucess')

        document.querySelector('.fa-check-circle').style.display = 'block'
    }

})

btn.addEventListener('click', (e) => {

    const random_breakfast = Math.floor(Math.random() * breakfastMeals.length);
    breakfast.innerHTML = breakfastMeals[random_breakfast]

    const random_lunch = Math.floor(Math.random() * lunchMeals.length);
    lunch.innerHTML = lunchMeals[random_lunch]

    const random_snacksMeals = Math.floor(Math.random() * snacksMeals.length);
    snack.innerHTML = snacksMeals[random_snacksMeals]

    const random_dinnerMeals = Math.floor(Math.random() * dinnerMeals.length);
    dinner.innerHTML = dinnerMeals[random_dinnerMeals]

    user_ask.style.display = 'block'
    btn.style.display = 'none'
})

btn_yes.addEventListener('click', (e) => {
    user_ask.style.display = 'none'
    btn.style.display = 'none'
    btn_calories.style.display = 'block'
    cl.forEach(element => {
        element.style.display = 'block'
    });
    // calories_breakfast.style.display='block'
})
btn_calories.addEventListener('click', (e) => {
    main_totalcalorie.style.display = 'block'
    totalcalorie.innerHTML = parseInt(calories_breakfast.value) + parseInt(calories_lunch.value) +
        parseInt(calories_snack.value) + parseInt(calories_dinner.value)

})
btn_no.addEventListener('click', (e) => {
    btn_calories.style.display = 'none'
    calories_breakfast.style.display = 'none'
    alert('Enjoy your Day')
})


