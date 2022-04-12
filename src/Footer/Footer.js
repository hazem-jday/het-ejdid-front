import * as React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-primary text-center text-white mt-3">
            <div className="container p-4 pb-0">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3">سجل من هنا ليصلك كل جديد</span>
                    <button type="button" className="btn btn-outline-light btn-rounded">
                        إنشاء حساب
                    </button>
                </div>
            </div>

            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaFacebook />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaTwitter />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FaYoutube />
                    </a>
                </section>
                
                <section className="mb-4">
                    <p>
                        تحصل على أهم و آخر الأخبار الوطنية و العالمية من مختلف المصادر
                    </p>
                </section>


            </div>

            <div className="row bg-light  text-center p-3">
                <a className="" href="/login">هات الجديد - 2022</a>
            </div>
        </footer>

    )
}
export default Footer