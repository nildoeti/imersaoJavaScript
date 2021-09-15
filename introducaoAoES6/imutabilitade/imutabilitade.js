const user() {
  name = 'Fulano';
  lastname =  ' de Tal';
};
function getUserWithFullName(user) {
  return {
    ... user,
    fullName: '${name.user} ${lastname.user}'
  }
}

const getUserWithFullName = getUserWithFullName(user);
console.log(getUserWithFullName);
