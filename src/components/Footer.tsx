import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="footer__brand">
                    <h2>النهضة التقنية</h2>
                    <p>
                        شركة عربية متخصصة في بناء حلول رقمية متقدمة تدعم التحول الرقمي، وتساعد شركاءها على إطلاق
                        منتجات وخدمات موثوقة تعتمد على تقنيات سحابية حديثة وفِرق محلية خبيرة.
                    </p>
                </div>
                <div className="footer__links">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li>
                            <Link to="/about">من نحن</Link>
                        </li>
                        <li>
                            <Link to="/services">خدماتنا</Link>
                        </li>
                        <li>
                            <Link to="/contact">تواصل معنا</Link>
                        </li>
                        <li>
                            <Link to="/">الرئيسية</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <h3>تواصل مباشر</h3>
                    <ul>
                        <li>البريد الإلكتروني: info@alnahda.ly</li>
                        <li>الهاتف: ‎+218 91 000 0000</li>
                        <li>العنوان: برج الأعمال، الطابق الخامس، طرابلس، ليبيا</li>
                    </ul>
                    <div className="footer__social">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="لينكدإن">
                            لينكدإن
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="إكس">
                            إكس (تويتر سابقًا)
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
                            فيسبوك
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>
                    &copy; {new Date().getFullYear()} النهضة التقنية. جميع الحقوق محفوظة. نصمم حلولًا رقمية تُلهم النمو
                    وتدعم الابتكار العربي.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
