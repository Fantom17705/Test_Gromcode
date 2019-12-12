let people = [
    {name: 'Jonny Walker', birthDate: '1995-12-17'},
    {name: 'Andrew', birthDate: '2001-10-29'},
];
const findName = name => people.filter(user=>user.name.includes(name))
const newPeople = findName('Jon')
console.log(newPeople);

const date1 = people.map(person =>{
    return person.birthDate;

})

let get_current_age1 = function(date) {
    return new Date().getFullYear() - date;
};
console.log(get_current_age = new Date('1995-12-17'));

let get_current_age2 = function(date) {
    return new Date().getFullYear() - date;
};
console.log(get_current_age = new Date('2001-10-29'));
let result = Math.max(get_current_age1, get_current_age2());
console.log(result);
/*
let arr = people.length;
console.log(arr);

if (date1.getMonth() < date2 && date1.getDate() < date2)) {
    age--;
}
alert(age);

/*
function _calculateAge(birthDate) { // birthday is a date
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear());
}


/*
console.log(date);
const get_current_age = function(date) {
    return new Date().getFullYear() - date;
};
4

5
alert(get_current_age(birthDate));

/*
const getAge = birthDate => people.filter(user=>user.birthDate.includes(Math.max('1995-12-17', '2001-10-29')))
const newAge = getAge('');
console.log(newAge);

/*
// Возвращаем возраст самого старого объекта
let age = people.map(function(currentValue,index,array){
    return Math.max()
})
console.log(age);
/*
function getMaxOfArray(people) {
    return Math.max.apply(null, people);
}
/*
let age = people.map(item => item.birthDate(Math.max(people)));
alert(age); // 5,7,6

/*
let agePeople = people.map(value =>value.birthDate){
    Math.max(People)
}
    people.filter(user=>user.birthDate. )

l

/*let user = people.find(item => item.name == "Jonny Walker");

alert(user.name);
people.some(i => i.name === 'Jonny') && people; */

/*
let result = people.find(function(item, index, array) {

});






let str = people.find(function (value) {
    return
});
var s=mas.find(function(value){return value=='JS';});
const q = people.find(function(value) {
return name('Jon')
};
//const s = people.find(function findName(currentValue name:toString()));

//let str = people.toString();
//for (let i = 0; i < people.length; i++) {
 //console.log(people[i]);
//}

 */




/*console.log(people[0][1].find());
console.log(people.find(name'Jon'));
//console.log(str);
//const find
const findName = str.find(function(value){return value=='Jon';});
console.log(findName);



console.log(people[0]);

//console.log(people.length);


//console.log([4, 6, 8, 12].find(isPrime));            */




/*
let people = new Array();

function arr(people) {
    searchByName =
}
console.log(arr(people));
people.forEach(function (allPeople,index, Arr) {
console.log(allPeople);
})

const newPeople = people.map(person => {return })


console.log(people.length);

function SearchByName(people) {

}
*/