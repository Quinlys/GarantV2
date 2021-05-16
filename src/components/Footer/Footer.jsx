import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-bs navbar-fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 footer-brand animated fadeInLeft">
                        <h2>Послуги які ми надаємо</h2>
                        <p className="footerText">Купівля, продаж, оренда, обмін.
                            Допомога з документами (юридичний супровід і реєстрація угод з нерухомістю)
                            Безкоштовна консультація.
                            Виготовлення експертної оцінки на будь-яку нерухомість.
                            Виготовлення технічних паспортів.</p>
                    </div>
                    <div className="col-md-6 footer-ns animated fadeInRight">
                        <h4>Ми знаходимось</h4>
                        <p>м. Калуш, пл. Героїв 30 ( тц. Олімп, 2 пов.)</p>
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83747.47555298654!2d24.348642125781254!3d49.00851863640808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7611220a9704462!2z0JDQs9C10L3RgtGB0YLQstC-INCd0LXRgNGD0YXQvtC80L7RgdGC0ZYg0JPQsNGA0LDQvdGC!5e0!3m2!1suk!2sua!4v1613565875192!5m2!1suk!2sua"
                                width="100%" height="350" frameBorder="0" allowFullScreen=""
                                aria-hidden="false" tabIndex="0" title={'some'}>

                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
