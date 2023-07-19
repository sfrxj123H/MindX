import LoginScreen from "./container/login/index.js";
import RegisterScreen from "./container/register/index.js";
class App {
    constructor(){}
    changeActiveScreen(screen){
        const appEle = document.getElementById("app")
        if(appEle){
            if(this.$activeScreen){
                appEle.innerHTML =""
            }
            this.$activeScreen = screen;
            appEle.appendChild(screen.render());

        }
    }
    alert(){
        this.$activeScreen.alert();
    }
}

const app = new App();
const Login = new LoginScreen();
app.changeActiveScreen(Login);
export default app;