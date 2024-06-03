import React from 'react';
import instagram from '../../public/assets/logo/instagram.svg';
import twitter from '../../public/assets/logo/twitter.svg';
import github from '../../public/assets/logo/github.svg';
import discord from '../../public/assets/logo/discord.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#181818] py-5 flex items-center justify-center flex-col gap-1">
                <p className="text-center text-white">@2024 Dimas Bagus Prasetyo</p>
                <div className="flex items-center gap-5">
                    <hr className="w-5 border border-white" />
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
                    <Link
                        to={'https://github.com/dimasbp17'}
                        target="blank"
                    >
                        <img
                            src={github}
                            alt=""
                            className="w-6"
                        />
                    </Link>
                    <Link
                        to={'https://x.com/DimasBagus_17'}
                        target="blank"
                    >
                        <img
                            src={discord}
                            alt=""
                            className="w-6"
                        />
                    </Link>
                    <hr className="w-5 border border-white" />
                </div>
            </div>
        </>
    );
};

export default Footer;
