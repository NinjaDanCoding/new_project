/* This program has been created to test my knowledge of early level
Javascript, as well as version control through git and navigation in
the terminal. I also hope, in some small cases, it may solve a tricky
problem now and again. Namely, what the heck to do on a date. While
very simple in execution, apparently we all need to start somewhere.*/

// First array contains all food places. Would objects give future customisation?
const food = [0, 1, 2, 3];

// Second array contains all activities.
const activity = [0, 1, 2, 3];

// Third array contains our 'night cap' post activity activity.
const nightcap = [0, 1, 2, 3];

const randomIndex = arr => {
    let index = Math.floor(Math.random() * arr.length);
    console.log('Index =' + index);
    return arr[index];
}

const generate = () => {
    console.log('Your date idea is : ' + randomIndex(food) + '. Then as an activity : ' + randomIndex(activity) + '. And finally, finish with : ' + randomIndex(nightcap));
}

generate();