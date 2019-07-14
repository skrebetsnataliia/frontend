/**
 * @author Nataliia Skrebets 
 */
/**
/**
 * @constructor @extends {User}
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 * @param {Number} zip
 */
function User(firstName, lastName, email, zip) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.zip = zip;
}

let FirstName;
let LastName;
let Email;
let ZIP;
/**
 *function which initializes object
 */
document.querySelector("#submit").onclick = () => {
    FirstName = document.querySelector("#first_name").value;
    LastName = document.querySelector("#last_name").value;
    Email = document.querySelector("#email").value;
    ZIP = document.querySelector("#zip").value;
    let user = new User(FirstName, LastName, Email, ZIP);
    console.log(user);
}