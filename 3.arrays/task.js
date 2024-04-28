function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(people => people.gender === gender)
        .map(ages => ages.age).reduce((ageSum, age) => ageSum + age, 0) / 
                users.filter(people => people.gender === gender).map(ages => ages.age).length;
    return result ? result : 0;
}