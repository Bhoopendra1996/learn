// Home.jsx
import React from 'react';
class User{
  constructor(username){
    this.username=username;
     
  }
  first(){
    // console.log(this.username);
    return this.username;
  }
}

class Admin  extends User{
  constructor(username, email, age){
    super(username);
    this.email=email;
    this.age=age;
  }
  second(){
    // console.log(this.email);
    return this.email;
  }
}

const test = new Admin('bhoopendra', 'bhoopendra@123', 12);
console.log(test);
const value = test.second();
const value2 = test.first();
console.log(value)
console.log(value2);

const Home = () => {

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <p>Welcome to the Home Page!</p>
      <p>Welcome to the Home Page!</p>
      <p>Welcome to the Home Page!</p>
      <p>my project has been connected</p>
    </div>
  );
};

export default Home;
