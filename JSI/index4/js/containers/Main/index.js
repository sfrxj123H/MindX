import { getCurrentUser } from "../../firebase/auth"
import { getUserByEmail } from "../../firebase/store"

class MainScreen {
    $container
    $avatar
    constructor() {
        this.$container = document.createElement("div")
        this.$container .classList.add("main", "d-flex")
        this.$container.innerText = "Main Screen"

        this.$avatarContainer = document.createElement("div")
        this.$avatarContainer.classList.add("avatar-container")
        this.$avatar = document.createElement("div")
        this.$avatar.classList.add("avatar")
        this.handleFetchUserByEmail()
    }
    render() {
        return this.$container
    }
    async handleFetchUserByEmail () {
        const user = getCurrentUser()
        const userStore = await getUserByEmail(user.email)
        console.log(userStore)
        if (userStore) {
            this.$container.innerText = `${userStore.name}`
            this.$avatar.style.backgroundImage = `url(${userStore.image})`
        }
    }
}
export default MainScreen