const footer = document.getElementById("footer");
footer.innerHTML = `<div class="footer">
            <h2>ShowMeAround</h2>
            <div class="footer-components">
                <div class="footer-box">
                    <h3>Quick Links</h3>
                    <a href="./index.html">Home</a>
                    <a href="./about.html">About Us</a>
                    <a href="#">Our Team</a>
                </div>
                <div class="footer-box">
                    <h3>Contact</h3>
                    <a href="mailto:abc@example.com"">abc@example.com</a>
                    <div class=" social-links">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-quora"></i></a>
                        <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
            <div class="footer-box">
                <h3>Opportunities</h3>
                <a href="#">Career</a>
                <a href="#">Investor</a>
            </div>
            <div class="footer-box">
                <h3>Important Links</h3>
                <a href="#">Sitemap</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
        <!-- Newsletters -->
        <div class="newsletter">
            <h2>Love Travel?<br> Sign Up for Our Newsletters</h2>
            <form action="" class="footer-form">
                <input id="newsletter-input" name="" placeholder="example@abc.com" required>
                <button class="btn" type="submit">Submit</button>
            </form>
        </div>
        <div class="copyright">
            <h3>&#169; All Rights Reserved by ShowMeAround</h3>
        </div>
        </div>`;