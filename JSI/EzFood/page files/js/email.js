import { MakeVerificationCode } from "./account.js";
import { CheckVerificationCode } from "./account.js";

document.querySelector(".mail-form").addEventListener("submit", verifyEmail)

let email

function verifyEmail(handle) {
   handle.preventDefault()

   document.querySelector("#email-input").disabled = true
   document.querySelector("#submit-button").innerHTML = "Resend verification code"

   let verifyInput = document.createElement("input")
   verifyInput.type = "text"
   verifyInput.classList.add("verification-email-input")
   verifyInput.id = "verification-code"
   verifyInput.autocomplete = "off"

   let verifyInputLabel = document.createElement("label")

   let verifyForm = document.createElement("form")
   verifyForm.classList.add("verify-form")

   let verifyButton = document.createElement("button")
   verifyButton.classList.add("verify-button")
   verifyButton.innerHTML = "Verify!"

   verifyInputLabel.append("Verification code: ", verifyInput)
   verifyForm.append(verifyInputLabel, verifyButton)
   document.querySelector(".verification-container").innerHTML = ""
   document.querySelector(".verification-container").append(verifyForm)
   verifyForm.addEventListener("submit", CheckVerificationCode)

   MakeVerificationCode()
}