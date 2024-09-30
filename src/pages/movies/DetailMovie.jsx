import React from 'react';
import Navbar from '../../components/Navbar';
import avatar from '../../../public/assets/avatar.png';

const DetailMovie = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="w-full">
          <div className="relative">
            <img
              src={avatar}
              alt=""
              className="object-cover h-screen"
            />
          </div>
        </div>
        <div className="container mx-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error
          reiciendis fuga numquam delectus recusandae similique quo ad
          voluptates itaque modi, sed perspiciatis fugiat? Tempore possimus
          dignissimos quae sapiente, saepe perspiciatis iste adipisci labore
          culpa nulla ea facere consequatur eveniet. Non facilis magnam
          aspernatur nostrum ratione eveniet iste reiciendis nesciunt a mollitia
          tenetur vel, aliquam, unde commodi ex, optio possimus excepturi nihil
          labore! Sint necessitatibus illum aliquid cum qui consequuntur
          deserunt beatae corrupti. Accusantium incidunt officiis aut vel illum
          tenetur. Velit, praesentium corporis ipsam nostrum, inventore ipsa sed
          reiciendis quae adipisci laudantium officia veniam nemo odit
          consequatur. Optio, impedit ad.
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
