import React from 'react';
import instagram from '../../public/assets/logo/instagram.svg';
import twitter from '../../public/assets/logo/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#181818] py-5 flex items-center justify-center flex-col gap-1">
                <p className="text-center text-white">@2024 Dimas Bagus Prasetyo</p>
                <div className="flex gap-5">
                    <Link>
                        <img
                            src={instagram}
                            alt=""
                        />
                    </Link>
                    <Link
                        to={'https://x.com/DimasBagus_17'}
                        target="blank"
                    >
                        <img
                            src={twitter}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
