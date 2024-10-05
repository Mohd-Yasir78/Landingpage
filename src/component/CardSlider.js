// src/CardSlider.js
import React from 'react';


const CardSlider = () => {
    const cards = [
        { id: 1, title: "Cameron Williamson", content: " It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available.", image: require('./testimonial/avatar1.png') },
        { id: 2, title: "Shirley Hand", content: "It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available", image: require('./testimonial/avatar2.png') },
        { id: 3, title: "Dr. Ollvia Hansen", content: "It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available 3.", image: require('./testimonial/avatar3.png')  },
        { id: 4, title: "Aubrey Sanfod", content: "It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available", image: require('./testimonial/avatar4.png')  },
        { id: 5, title: "Terri Conroy", content: "It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available", image: require('./testimonial/avatar5.png')  },
    ];

    return (
        <div className="max-w-screen-lg h-[400px] mx-auto p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
            
            <div className="overflow-x-scroll scrollbar-hide py-4">
                <div className="flex space-x-4">
                    {cards.map(card => (
                        <div key={card.id} className="min-w-[300px] bg-white shadow-lg rounded-lg p-4 border-t-8 border-t-orange-500">
                            <p className='mb-5'>{card.content}</p>
                            <div className='flex '>
                            <img src={card.image} alt={card.title} className='w-[30px] h-[30px] mr-5'/>
                            <h2 className=" font-bold mb-2">{card.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
