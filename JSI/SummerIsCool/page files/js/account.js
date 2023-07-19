//DOCUMENT
class AccountForm {
    title;
    username;
    password;
    password2;
    constructor() {}
    typeLogin() {
        this.title = document.createElement("h1")
        this.title.classList.add("title")
        this.title.innerText = "Login to SummerIsCool";
        
        let inputUsername = document.createElement("input")
        inputUsername.classList.add("input")
        inputUsername.id = "user"
        inputUsername.type = "text";
        this.username = document.createElement("label")
        this.username.classList.add("field")
        this.username.append("Username", inputUsername);

        let inputPassword = document.createElement("input")
        inputPassword.classList.add("input")
        inputUsername.id = "pass"
        inputPassword.type = "password";
        this.username = document.createElement("label")
        this.username.classList.add("field")
        this.username.append("Password", inputPassword);

        let submitButton = document.createElement("button")
        submitButton.classList.add("submit-button")
        submitButton.value = "Submit";
        submitButton.addEventListener("click", LoginCheck())

        let formContainer = document.createElement("form")
        formContainer.classList.add("accountForm")
        formContainer.append(this.username, this.password)
        document.getElementById("container").append(this.title, formContainer);
    }
}
export default AccountForm;