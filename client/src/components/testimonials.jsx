import React, { useEffect,useState} from "react";
import Utkarsh from "./images/Utkarsh Kala.png";
import Aditya from "./images/Aditya Saurav.png";
import Raghav from "./images/Raghav Dogra.png";
import Siddhant from "./images/Siddhant Sharma.png";
import Ayushi from "./images/Ayushi Baijal.png"

function Testimonials(){

    const [currentIndex,setcurrentIndex]= useState(0);
    const [animate,setAnimate]= useState(true);

    // loading card info -------------------------------------------------------------------------------------------------------------------
    const cards = [
            {
            id: 1,
            title: "Amazing Experience",
            description: "This product completely transformed how we work. The team is incredibly responsive and the results speak for themselves. Every interaction has been seamless and professional.",
            author: "Utkarsh Kala",
            role: "CEO, TechCorp",
            image: Utkarsh,
        },
        {
            id: 2,
            title: "Highly Recommend",
            description: "Outstanding service and quality. They exceeded our expectations in every way possible. A true game-changer for our business that delivered measurable results.",
            author: "Michael Chen",
            role: "Product Manager, InnovateCo",
            image: Aditya,
        },
        {
            id: 3,
            title: "Exceptional Quality",
            description: "The attention to detail and commitment to excellence is unmatched. We've seen incredible improvements since partnering with them. Truly exceptional work.",
            author: "Emily Rodriguez",
            role: "Marketing Director, BrandWorks",
            image: Raghav,
        },
        {
            id: 4,
            title: "Outstanding Results",
            description: "Professional, efficient, and results-driven. They delivered beyond what we thought was possible. Absolutely fantastic work that transformed our operations.",
            author: "David Kim",
            role: "Founder, StartupX",
            image: Siddhant,
        },
        {
            id: 5,
            title: "Best Decision Ever",
            description: "Working with this team has been the best investment we've made. Their expertise and dedication are truly remarkable. Can't recommend them enough!",
            author: "Lisa Thompson",
            role: "Operations Manager, LogiTech",
            image: Ayushi,
        }
    ]
    //end-----------------------------------------------------------------------------------------------------------------------------------
    // Create an interval that runs forever every 2 seconds
    useEffect(() => {
            if(animate){
            const interval = setInterval(() => {
              nextSlide();
            }, 3000);
            return () => clearInterval(interval);
            }
            
        }, [animate]);
    
        const handleMouseEnter = () => {
        setAnimate(false);
        };
    
        const handleMouseLeave = () => {
        setAnimate(true);
        };
    //end-------------------------------------
    //get next slide -----------------------------------------------
    const nextSlide = () => {
        setcurrentIndex((prev) => (prev + 1) % cards.length);
    };
    //get previous slide-----------------------------------------
    const prevSlide = () => {
        setcurrentIndex((prev) => ((prev - 1)+cards.length) % cards.length);
    };
    //nevigation throgh dots----------------------------------------------
    const goToSlide = (index) =>{
        setcurrentIndex(index)
    };

    return(
        <>
        {/*Main Container */}
        <div className="bg-gradient-to-br from-#1b1c1c via-#322f38 to-indigo-950 flex flex-col h-full w-full justify-center items-center py-16 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">Testimonials</h1>
            {/*main content */}
            <div className="relative w-full max-w-6xl h-130 flex items-center justify-center">
            {/*slider */}
            <div className="relative h-full w-full overflow-y-visible overflow-x-hidden flex items-center justify-center">
                {/*loading cards */}
                {cards.map((card,index)=>{
                    // card specific functions-----------------------------------------------------------------------------

                    //calculateing position of unrendered cards------------
                    let position = index - currentIndex;
                    if(position>2){
                        position -= cards.length;
                    }
                    if(position<-2){
                        position += cards.length;
                    }
                    //done-------------------------------------------------

                    //styleing for each card-------------------------------
                let getCardStyle=()=>{
                    let baseStyle = "absolute h-150 w-90 sm:h-120 sm:w-130 bg-black/10 backdrop-blur-md rounded-2xl p-8 transition all duration-500 ease-in-out border border-white/20"
                    //index depended styling---------------
                    if(position  == 0)
                    {
                        return (`${baseStyle} opacity-100 translate-x-0 scale:60 ms:scale-100 z-30`);
                    }
                    else if(position == 1){
                        return (`${baseStyle} opacity-0 translate-x-80 scale:50 ms:scale-90 z-20 md:opacity-60`);
                    }
                    else if (position ==2){
                        return (`${baseStyle} opacity-0 translate-x-96 scale: 45 ms:scale-75 z-10 md:opacity-30`);
                    }
                    else if(position == -1){
                        return (`${baseStyle} opacity-0 -translate-x-80 scale:50 ms:scale-90 z-20 md:opacity-60`);
                    }
                    else if (position == -2){
                        return (`${baseStyle} opacity-0 -translate-x-96 scale:45 ms:scale-75 z-10 md:opacity-30`);
                    }
                    else{
                        return (`${baseStyle} opacity-0 scale-75 z-0 `);
                    }
                }
                    //end--------------------------------------------------
                    //end--------------------------------------------------------------------------------------------------
                    return(//return card--------------------
                        <div key = {card.id} className = {getCardStyle()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="flex flex-col h-full justify-between text-white">
                                <div>
                                <div className="h-35 w-35 sm:h-50 sm:w-50 bg-amber-100 translate-x-20 sm:translate-x-35 border-white/20 rounded-full translate-y-5 sm:-translate-y-13">
                                    <img src = {card.image}
                                    alt={card.author}
                                    className="h-full w-full object-cover rounded-full"/>
                                </div>
                                <h1 className="pt-15 sm:pt-0 text-2xl font-bold mb-4 text-purple-300">{card.title}</h1>
                                <p className="text-base leading-relaxed mb-6 text-gray-200">{card.description}</p>
                                </div>
                            <div className="border-t border-white/20 pt-4">
                                <p className="font-semibold text-lg">{card.author}</p>
                                <p className="text-sm text-purple-300">{card.role}</p>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*navigation button */}
            <button 
                    onClick={prevSlide}
                    className="absolute left-0 z-40 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
                    aria-label="Previous testimonial"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 z-40 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
                    aria-label="Next testimonial"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
        </div>
        {/*card indication dots */}
        <div className="flex gap-3 mt-12">
                {cards.map((card, index) => (
                    <button
                        key={card.id}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-purple-400 w-8' 
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
        </div>
        </div>
        </>
    )
}

export default Testimonials;