fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/users")
.then(parse => parse.json())
.then(data => {console.log(data)})
.then(data => {console.log(data)})

/*
    BTVN Viết API gồm có
    product name
    product price
    product img
    (product description)
    */