const user = function(a) {
  a = {
     Name: 'Valeriya',
     Surname: 'Sitka',
     Age: '22'}
  for (let key in a) {
   if (a.hasOwnProperty(key)) {
     console.log(key + ': ' + a[key]);
    }
  }
}
user()
