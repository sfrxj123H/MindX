export function LoginCheck(handle) {
    handle.preventDefault()
    let user = document.querySelector("#user").value
    let pass = document.querySelector("#pass").value;
    let error = "Please wait...";
    let valid = undefined;
    // Check input error
    if (user.length == 0 || pass.length == 0) {
        error = "Username and password are required."
    }
    else if (user.length < 8) {
        error = "Username must contain at least 8 characters."
    }
    else if (pass.length < 8) {
        error = "Password must contain at least 8 characters."
    }
    // Check login error
    else {
        fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    valid = false
                    return res.json()
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (user.toLowerCase() === data[i].user.toLowerCase() && pass === data[i].pass) {
                        valid = true
                    }
                }
            })
        if (valid == undefined) {
            error = "An error occurred."
            document.querySelector(".error").innerHTML = error;
        }
        else if (!valid) {
            error = "Invalid username or password."
        }
        else {
            localStorage.loginUser = JSON.stringify([user, pass])
            document.querySelector(".account-form").submit
            error = ""
            window.location.assign("./homepage.html")
        }
    }
    document.querySelector(".error").innerHTML = error;
}
export function RegisterCheck(handle) {
    handle.preventDefault()
    let user = document.querySelector("#user").value
    let pass1 = document.querySelector("#pass1").value
    let pass2 = document.querySelector("#pass2").value;
    let _error = "Please wait...";
    let errored = true

    //Check input error
    if (user.length == 0 || pass1.length == 0 || pass2.length == 0) {
        _error = "Username and passwords are required."
    }
    else if (user.length < 8) {
        _error = "Username must contain at least 8 characters."
    }
    else if (pass1.length < 8) {
        _error = "Password must contain at least 8 characters."
    }
    else if (pass1 !== pass2) {
        _error = "Passwords didn't match."
    }
    else {
        const regexUser1 = /^[a-zA-Z0-9_]+$/;
        const regexUser2 = /^(?!_)(?!.*?_$)(?!.*?__)[^\W_]+$/;
        if (!user.match(regexUser1)) {
            _error = "Username can only contain uppercase letters, lowercase letters, numbers and underscores."
        }
        else if (!user.match(regexUser2)) {
            _error = "Underscores in username shouldn't be at the start, end or consecutively."
        }
        // Check username error
        else fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    errored = false
                    return res.json()
                }
            })
            .then(data => {
                let sameUser = false
                for (let i = 0; i < data.length; i++) {
                    if (user.toLowerCase() === data[i].user.toLowerCase()) {
                        sameUser = true
                    }
                }
                if (!sameUser) {
                    fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            user: user,
                            pass: pass1,
                            email: "",
                            money: 0,
                        }),
                    })
                    localStorage.loginUser = JSON.stringify([user, pass1]);
                    document.querySelector(".account-form").submit;
                    _error = ""
                    window.location.assign("./email.html")
                }
                else if (errored) {
                    _error = "An error occurred."
                }
                else { _error = "An account with a same username has been registered."; document.querySelector(".error").innerHTML = _error; }
            })
    }
    document.querySelector(".error").innerHTML = _error;
}
export function MakeVerificationCode() {
    let randomInt = Math.floor(Math.random() * 1000000)
    let verificationCode
    if (randomInt < 10) {
        verificationCode = `00000${randomInt}`
    }
    else if (randomInt < 100) {
        verificationCode = `0000${randomInt}`
    }
    else if (randomInt < 1000) {
        verificationCode = `000${randomInt}`
    }
    else if (randomInt < 10000) {
        verificationCode = `00${randomInt}`
    }
    else if (randomInt < 100000) {
        verificationCode = `0${randomInt}`
    }
    else { verificationCode = `${randomInt}` }
    const targetEmail = document.querySelector("#email-input").value;
    emailjs.send("service_llxhb4e", "template_wvg6ymb", {
        to_name: JSON.parse(localStorage.loginUser)[0],
        to_email: targetEmail,
        message: verificationCode,
    })
    document.querySelector("#verificationCode").value = verificationCode
}
export function CheckVerificationCode(handle) {
    handle.preventDefault()
    let verificationCode = document.querySelector("#verificationCode").value
    if (document.querySelector("#verification-code").value === verificationCode) {
        let user = JSON.parse(localStorage.loginUser)[0]
        let pass = JSON.parse(localStorage.loginUser)[1]
        let verifiedEmail = document.querySelector("#email-input").value
        let valid = undefined
        fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    valid = false
                    return res.json()
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (user.toLowerCase() === data[i].user.toLowerCase() && pass === data[i].pass) {
                        let id = data[i].id
                        valid = true
                        fetch(`https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood/${id}`, {
                            method: 'PUT',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({
                                email: verifiedEmail,
                            })
                        })
                    }
                }
            })
        if (valid == undefined) {
            document.querySelector(".error").innerHTML = "An error occurred"
        }
        else if (valid == false) {
            document.querySelector(".error").innerHTML = `Invalid / Incorrect username or password, please go back to <a href="login.html" style="color: black" >login page</a> to login!`
        }
    }
    else { document.querySelector(".error").innerHTML = "Incorrect verification code!" }
}
export function ForgotPassword() {
    let createElements = false
    let randomInt = Math.floor(Math.random() * 1000000)
    let verificationCode
    if (randomInt < 10) {
        verificationCode = `00000${randomInt}`
    }
    else if (randomInt < 100) {
        verificationCode = `0000${randomInt}`
    }
    else if (randomInt < 1000) {
        verificationCode = `000${randomInt}`
    }
    else if (randomInt < 10000) {
        verificationCode = `00${randomInt}`
    }
    else if (randomInt < 100000) {
        verificationCode = `0${randomInt}`
    }
    else { verificationCode = `${randomInt}` }
    let user = document.querySelector("#user").value
    let email = ""
    let valid = undefined
    fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood")
        .then(res => {
            if (res.ok) {
                valid = false
                return res.json()
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (user.toLowerCase() === data[i].user.toLowerCase()) {
                    valid = true
                    email = data[i].email
                }
            }
        })
    if (valid || email.length > 0) {
        createElements = true
        emailjs.send("service_llxhb4e", "template_wvg6ymb", {
            to_name: user,
            to_email: email,
            message: verificationCode,
        })
    }
    else if (valid == undefined) {
        document.querySelector(".error").innerHTML = "An error occurred."
    }
    else if (valid == false) {
        document.querySelector(".error").innerHTML = "This user doesn't exist or have an email yet!"
    }
    else {
        document.querySelector(".error").innerHTML = "Verification code sent to your email!"
    }
    document.querySelector("#verificationCode").value = verificationCode
    return createElements
}
export function PassOwnerTest(handle) {
    handle.preventDefault()

    let verificationCode = document.querySelector("#verificationCode").value
    let user = document.querySelector("#user").value
    if (verificationCode === document.querySelector("#verification-code").value) {
        let pass
        fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (user.toLowerCase() === data[i].user.toLowerCase()) {
                        pass = data[i].pass
                    }
                }
            })
        let userData = [user, pass]
        localStorage.loginUser = JSON.stringify(userData)
        window.location.assign("./password.html")
    }
}
export function ChangePassword(handle) {
    handle.preventDefault()

    let user = JSON.parse(localStorage.loginUser)[0]
    let pass0 = JSON.parse(localStorage.loginUser)[1]
    let pass1 = document.querySelector("#pass1").value
    let pass2 = document.querySelector("#pass2").value
    let _error = "Please wait..."

    if (pass1.length < 6) {
        _error = "Password must contain at least 6 characters."
    }
    else if (pass1 !== pass2) {
        _error = "Passwords didn't match."
    }
    else fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood")
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(data => {
            let id
            let valid = false
            for (let i = 0; i < data.length; i++) {
                if (user.toLowerCase() === data[i].user.toLowerCase() && data[i].pass === pass0) {
                    valid = true
                    id = data[i].id
                }
            }
            if (valid == true) {
                fetch(`https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        pass: pass1,
                    }),
                })
                localStorage.loginUser = JSON.stringify([user, pass1]);
                document.querySelector(".pass-form").submit;
                _error = ""
                window.location.assign("./index.html")
            }
            else { document.querySelector("#error").innerHTML = _error; }
        })
}