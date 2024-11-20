const userDataArray = []; 


class User {
  constructor(username, pass, email, gender, city) {
    this.username = username;
    this.pass = pass;
    this.email = email;
    this.gender = gender;
    this.city = city;
  }
}

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const username = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const city = document.getElementById('city').value;

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !pass || !email || !gender || !city) {
    alert('Please fill all fields!');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Invalid email format!');
    return;
  }

  
  const isUsernameExists = userDataArray.some(user => user.username === username);
  const isEmailExists = userDataArray.some(user => user.email === email);

  if (isUsernameExists) {
    alert('Username already exists');
    return;
  }

  if (isEmailExists) {
    alert('Email already exists');
    return;
  }

 
  const newUser = new User(username, pass, email, gender, city);
  userDataArray.push(newUser);

 
  alert('User registered successfully!');
  console.log(userDataArray);

  
  this.reset();
});
