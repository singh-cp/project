const myTheme = localStorage.getItem("themePreference");
const themeColor = document.getElementById("theme-change");
if (myTheme=="lightMode" || myTheme=="darkMode"){
    themeMode();
}else{
    localStorage.setItem("themePreference","lightMode");
}

function themeCheck(){
    if (themeColor.classList.contains("fa-moon")){
        localStorage.setItem("themePreference","darkMode");
        themeMode();
    }else{
        localStorage.setItem("themePreference","lightMode");
        themeMode();
    }
}

function themeMode() {
    const imgList = document.querySelectorAll("img");
    if (localStorage.getItem("themePreference")=="darkMode") {
        document.documentElement.style.setProperty("--main-color", "#3390ec");
        document.documentElement.style.setProperty("--second-color", "#ADD8E6");
        document.documentElement.style.setProperty("--text-color", "#F8F8F8");
        document.documentElement.style.setProperty("--bg-color", "#212121");
        document.documentElement.style.setProperty("--box-shadow", "2px 2px 18px rgba(0,0,0,0.20)");
        themeColor.classList.replace("fa-moon", "fa-sun");
        for (i in imgList) {
            if (i < imgList.length ){
                imgList[i].style.filter = "brightness(.8) contrast(1.2)";
            }
        }    
    }else{
        themeColor.classList.replace("fa-sun","fa-moon");
        document.documentElement.style.setProperty("--main-color", "#198754");
        document.documentElement.style.setProperty("--second-color", "#192f6a");
        document.documentElement.style.setProperty("--text-color", "#314862");
        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--box-shadow", "2px 2px 18px rgba(14, 52, 54, 0.15)");
        for (i in imgList) {
            if (i < imgList.length ){
                imgList[i].style.filter = "brightness(1) contrast(1)";
            }
        }
    }
}