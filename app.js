const btn=document.querySelector(".buton")

btn.onclick=()=>{
    alert("Hello, welcome to Rukhshana's website!😊")
    
}

    function login() {
        const password = document.getElementById('password').value.trim();
    
        if (password === "admin") {
        window.location.href = "admin.html";
        } else {
        window.location.href = "user.html";
        }
    }