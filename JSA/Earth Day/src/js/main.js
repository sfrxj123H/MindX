let target1;
let users = eval(localStorage.users);
let mainData = ""
let accNum;
if (sessionStorage.user == null || sessionStorage.user == "") {
    localStorage.create = true;
    window.location.assign("login.html");
}
else {
    target1 = sessionStorage.user;
}
for (let i = 0; i < users.length; i++) {
    if (users[i].name = sessionStorage.user) {
        mainData = users[i].mainData;
        accNum = i;
    }
}
document.querySelector("#main").innerHTML = mainData;
document.querySelector("#iControl").value = mainData;
document.querySelector("#a1").setAttribute("onclick", `send("https://www.earthday.org/")` )
document.querySelector("#a2").setAttribute("onclick", `author()` )
document.querySelector("#account").innerHTML = target1;
input = document.querySelector("#signout");
input.addEventListener("mouseover", function change1() {
    document.querySelector("#signout").src = "img/logout hover.png"
});
input.addEventListener("mouseout", function change2() {
    document.querySelector("#signout").src = "img/logout.png"
});
  function send(link) {
    window.open(link);
  }
  function author() {
    if (document.querySelector("#everything").lang == "auto") {
        lang = "en"
    }
    else {
        lang = document.querySelector("#everything").lang;
    }
    send(`https://${lang}.wikipedia.org/wiki/Gaylord_Nelson`)
  }
  function mainDataChange() {
    mainData = document.querySelector("#iControl").value;
    users[accNum].mainData = mainData;
    localStorage.users = JSON.stringify(users);
    document.querySelector("#main").innerHTML = mainData;
  }
  function resetData() {
    document.querySelector("#iControl").value = `<br>
<h1>EARTH DAY</h1>
<h2>General</h2>
<h3>Earth Day is an annual event on April 22 to demonstrate support for environmental protection. First held on April 22, 1970, it now includes a wide range of events coordinated globally by <a class="a" id="a1" title="earthday.org">earthday.org</a> (formerly Earth Day Network) including 1 billion people in more than 193 countries.</h3>
<h2>Organiser</h2>
<h3>The first Earth Day was organised by US <a class="a" id="a2" title="wikipedia.org">Senator Gaylord Nelson</a>, who was inspired by the anti-war protests of the 1960s to create a similar movement focused on environmental issues.</h3>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gaylord_Nelson.jpg/220px-Gaylord_Nelson.jpg" title="Senator Gaylord Nelson (1916 - 2005)" style="border: 3px solid black; border-radius: 15px;">
<h5>Senator Gaylord Nelson (1916 - 2005)</h5>
<h2>Earth day 2023</h2>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ihPpNHiX3vE?controls=0" title="YouTube video player" style="border: 3px solid black; border-radius: 15px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`
    mainData = document.querySelector("#iControl").value;
    users[accNum].mainData = mainData;
    localStorage.users = JSON.stringify(users);
    document.querySelector("#main").innerHTML = mainData;
  }