import InputCompoment from "../../components/input.js";
import ButtonComponent from "../../components/button.js";//new
import LoginScreen from "../login/index.js";
import { checkEmail,checkPassword } from "../../common/validation.js";
import app from "../../index.js";
class RegisterScreen {
    $container;
    $formLogin;
    $email;
    $password1;
    $password2;
    $imageCover;//new
    $btnSubmit;
    $titleScreen;
    $link;

    constructor(){
        this.$container = document.createElement("div")
        this.$container.classList.add("login-form", "d-flex")

        this.$imageCover = document.createElement("div");//new
        this.$imageCover.classList.add("img-cover");

        this.$formLogin = document.createElement("form")
        this.$formLogin.classList.add("form-container")
        this.$formLogin.addEventListener("submit", this.handleSubmit);//new

        this.$titleScreen = document.createElement("div");//new
        this.$titleScreen.classList.add("big-title");
        this.$titleScreen.innerText = "Register";

        this.$email = new InputCompoment("Email address","email","login-email","email")
    
        this.$password1 = new InputCompoment("Create password","password1","login-password-1","password")
        this.$password2 = new InputCompoment("Confirm password","password2","login-password-2","password")
    
        this.$btnSubmit = new ButtonComponent(//new
            "Register",
            ["btn", "btn-primary", "d-block", "mt-3"],
            "submit"
          );

          this.$link = document.createElement("a")
          this.$link.innerText = "I had an account"
          this.$link.classList.add("link", "d-block")
		  this.$link.addEventListener("click", this.handleChangeScreen)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        let isError = false;
        if (checkEmail(email.value) !== null) {
          // loi
          this.$email.setError(checkEmail(email.value));
          isError = true;
        }
        if (checkPassword(password.value) !== null) {
          console.log("Invalid password");
          this.$password1.setError(checkPassword(password.value));
          isError = true;
        }
    
        if (!isError) {
          console.log("Register complete!");
        }
      };
    handleChangeScreen = (e) => {
        e.preventDefault()
        const Login = new LoginScreen();
        app.changeActiveScreen(Login)
    }
    render(){
        this.$formLogin.append(
            this.$titleScreen,//new
            this.$email.render(),
            this.$password1.render(),
            this.$password2.render(),
            this.$btnSubmit.render(),
            this.$link,
        )
        // this.$container.append(this.$formLogin)
        //     return this.$container
            this.$container.append(this.$imageCover, this.$formLogin);
    return this.$container;//new
    }
}
export default RegisterScreen;