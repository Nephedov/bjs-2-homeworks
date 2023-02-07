function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((value, index) => value === arr2[index]);
    } 
    else return false;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(people => people.gender === gender)
        .map(ages => ages.age).reduce((ageSum, age) => ageSum + age, 0) / 
                users.filter(people => people.gender === gender).map(ages => ages.age).length;
    return result ? result : 0;
}