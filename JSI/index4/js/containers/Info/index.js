import InputComponent from "../../components/input.js";
import ButtonComponent from "../../components/button.js";
import { getCurrentUser } from "../../firebase/auth.js";
import { createUser, getUserByEmail } from "../../firebase/store.js";
class InfoScreen {
    $container;
  
    $paper;
    $avatarContainer;
    $avatar;
  
    $form;
    $title;
    $email;
    $name;
    $phone;
    $imageUrl;
  
    $btnSubmit;
  
    $existUser;
  
    constructor() {
      this.$container = document.createElement("div");
      this.$container.classList.add("info-screen");
  
      this.$paper = document.createElement("div");
      this.$paper.classList.add("paper");
  
      this.$avatarContainer = document.createElement("div");
      this.$avatarContainer.classList.add("avatar-container");
      this.$avatar = document.createElement("div");
      this.$avatar.classList.add("avatar");
  
      this.$form = document.createElement("form");
      this.$form.classList.add("form-container");
      this.$form.addEventListener("submit", this.handleSubmit);
  
      this.$title = document.createElement("div");
      this.$title.classList.add("big-title");
      this.$title.innerText = "Your profile";
  
      const user = getCurrentUser();
  
      this.$email = new InputComponent(
        "Email address",
        "email",
        "info-email",
        "text"
      );
  
      this.$email.setAttriBute("value", user.email);// email này chung ta sẽ ko cho ngta sửa vì nó là mã định danh cho từng người
      this.$email.setAttriBute("disabled", true);
  
      this.$name = new InputComponent("Full name", "name", "info-name", "text");
      this.$phone = new InputComponent(
        "Phone number",
        "phone",
        "info-phone",
        "text"
      );
      this.$imageUrl = new InputComponent(
        "Avatar URL",
        "imageUrl",
        "info-imageUrl",
        "text"
      );
  
      this.$imageUrl.setEventListener("input", this.handleChangeAvatar);// lấy dữ liệu
  
      this.$btnSubmit = new ButtonComponent(
        "Continue...",
        ["btn", "btn-primary", "d-block", "mt-3"],
        "submit"
      );
  
      this.handleFetchUserByEmail();
    }
  
   async handleFetchUserByEmail() {
    const user = getCurrentUser();
    const userStore = await getUserByEmail(user.email)
    console.log(userStore)
   }
  
    handleChangeAvatar = (e) => {// thay đổi ảnh avatar
      this.$avatar.style.backgroundImage = `url(${e.target.value})`;
    };
  
   handleSubmit = (e) => {
    e.preventDefault()
    const {name, phone, imageUrl} = e.target
    const user = getCurrentUser();
    console.log(user)
    createUser(user.email, "", name.value, phone.value, imageUrl.value)
   }
  
    render() {    
     
      this.$container.append(this.$paper);
      this.$paper.append(this.$form, this.$avatarContainer);
  
      this.$form.append(
        this.$title,
        this.$email.render(),
        this.$name.render(),
        this.$phone.render(),
        this.$imageUrl.render(),
        this.$btnSubmit.render()
      );
  
      this.$avatarContainer.appendChild(this.$avatar);
    return this.$container
    }
  }
  
  export default InfoScreen;