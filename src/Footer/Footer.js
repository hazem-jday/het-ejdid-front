import * as React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-primary text-center text-white mt-3">
            <div className="container p-4 pb-0">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3">يمكنك متابعتنا على وسائل التواصل الاجتماعي</span>
                   
                </div>
            </div>

            <div className="container p-4">
                <section className="mb-4">
                    {/* à changer après créer des comptes */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com/hazemjday" role="button">
                        <FaFacebook />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://play.google.com/store/apps/developer?id=Hazem+Jday" role="button">
                        <FaTwitter />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UCcvnCHySSsNwZ8KOUuF0ILQ?app=desktop" role="button">
                        <FaYoutube />
                    </a>
                </section>
                
                <section className="mb-4">
                    <p>
                        تحصل على أهم و آخر الأخبار الوطنية و العالمية من مختلف المصادر
                    </p>
                </section>

                <a className="text-light" href="/login">هات الجديد - 2022</a>

            </div>

        </footer>

    )
}
export default Footer