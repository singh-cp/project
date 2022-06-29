const header = document.getElementById("header");
header.innerHTML = `
<div class="upper-header">
<a href="./index.html" class="logo">Show Me Around</a>
            <!-- Dark Mode -->
            <i class="fa-solid fa-moon" id="theme-change" onclick="themeCheck()"></i>
            <div class=" social-links">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-quora"></i></a>
            <a href="#"><i class="fa-brands fa-pinterest"></i></a>
    </div>
    <div class="weather">
    <p id="city"></p>
    <p id="temperature"></p>
    </div>
            <div class="main-search">
                <i class="fa-solid fa-magnifying-glass" id="search-icon" onclick="showSearch()"></i>
            </div>
        </div>
        <div class="nav">
            <!-- Logo -->
            <div class="logo-icons">
                <a href="./index.html" class="logo" id="logo"><img src="images/mylogo.png" alt="logo"></a>
                <!-- Mobile Nav-->
                <i class="fa-solid fa-ellipsis-vertical" id="menu-icon" onclick="menuOpen()"></i>
            </div>
            <!-- Navbar -->
            <ul class="navbar">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./listing.html">Listing</a></li>
                <li><a href="#">Itinerary</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <form action="" class="search-form">
            <input type="text" placeholder="Search a city">
            <button class="btn" type="submit">Search</button>
        </form>
            <!-- Login -->
            <a href="./login-page.html" class="btn login-btn" id="login-btn">Log In</a>
        </div>`;