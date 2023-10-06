interface User {
  birthYear: number
}

function calculateAgeOfUser(user: User) {
 return new Date().getFullYear() - user.birthYear;
}

calculateAgeOfUser('Fabio');
calculateAgeOfUser({
  birthYear: 1995
});
