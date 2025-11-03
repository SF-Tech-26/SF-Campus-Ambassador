import React, { useState,useEffect} from "react";

function Testimonials(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate,setAnimate] = useState(true);
    //card details ----------------------------------------------------------------------------------------------------------------------------
    const cards = [
        {
            id: 1,
            title: "Amazing Experience",
            description: "This product completely transformed how we work. The team is incredibly responsive and the results speak for themselves. Every interaction has been seamless and professional.",
            author: "Sarah Johnson",
            role: "CEO, TechCorp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
        },
        {
            id: 2,
            title: "Highly Recommend",
            description: "Outstanding service and quality. They exceeded our expectations in every way possible. A true game-changer for our business that delivered measurable results.",
            author: "Michael Chen",
            role: "Product Manager, InnovateCo",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
        },
        {
            id: 3,
            title: "Exceptional Quality",
            description: "The attention to detail and commitment to excellence is unmatched. We've seen incredible improvements since partnering with them. Truly exceptional work.",
            author: "Emily Rodriguez",
            role: "Marketing Director, BrandWorks",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
        },
        {
            id: 4,
            title: "Outstanding Results",
            description: "Professional, efficient, and results-driven. They delivered beyond what we thought was possible. Absolutely fantastic work that transformed our operations.",
            author: "David Kim",
            role: "Founder, StartupX",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
        },
        {
            id: 5,
            title: "Best Decision Ever",
            description: "Working with this team has been the best investment we've made. Their expertise and dedication are truly remarkable. Can't recommend them enough!",
            author: "Lisa Thompson",
            role: "Operations Manager, LogiTech",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
        }
    ];
    //end----------------------------------------------------------------------------------------------------------------------------------
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
    //motion--------------------------------------------------------------------------------------
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>(prev+1)%cards.length)
    }
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>((prev-1)+cards.length)%cards.length)
    }
    const goToSlide = (index)=>{
        setCurrentIndex(index)
    }
    //end------------------------------------------------------------------------------------------
    const current = cards[currentIndex];
    return(
        <>
        <div className="bg-gradient-to-br from-#1b1c1c via-#322f38 to-indigo-950 flex flex-col h-full w-full justify-center items-center py-16 px-4">
            <h1 className="text-5xl md:text-6xl text-white font-serif text-center font-bold mb-16">Testimonials</h1>
            {/* making sections using grids a single column for smaller screens while two coloums for bigger screens*/}
            <div className="w-full max-w-7xl mx-auto items-center grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-12">

                {/*image card */}
                <div className="relative flex h-96 lg-[500px] item-center row-start-1 col-start-1 sm:row-start-1 sm:col-start-2">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        {cards.map((card,index)=>{
                            let position = (index-currentIndex + cards.length)%cards.length;
                            return(<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={card.id} 
                            className={`absolute h-full w-full transition-all duration-1000 ease-in-out
                            ${position == 0 ? 'opacity-100 scale-100 z-30 translate-x-0' : 
                            position==1 ? 'opacity-0 scale-95 z-20 translate-x-full':'opacity-0 scale-90 z-10 translate-x-full'}`}>
                                <div className="relative w-full h-full rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden">
                                    <img src = {card.image}
                                    alt={card.author}
                                    className="h-full w-full object-cover"/>
                                    <div className= "absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent">{/*covers whole parent insert-0 and add a gradient form bottom and at 30% becomes transparent */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="font-bold text-2xl">{card.author}</p>
                                            <p className="text-purple-200">{card.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                        })}
                    </div>
                </div>

                {/* info card */}
                <div className="h-96 relative overflow-hidden sm:col-span-1">
                    {cards.map((card,index)=>(
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={card.id} className={`absolute w-full transition-all duration-1000 ease-in-out ${
                            index==currentIndex ? 'translate-y-0 opacity-100': index>currentIndex ? 'translate-y-full opacity-0' : '-translate-y-full opacity-0'
                        }`}>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 h-96 rounded-2xl p-8 flex flex-col justify-between">
                            <div>
                                <div className="text-purple-300 text-6xl mb-4">"</div>
                                <h1 className="text-3xl font-bold mb-4 text-purple-300">{card.title}</h1>
                                <p className="text-lg leading-relaxed text-gray-200 mb-6">{card.description}</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <p className="font-semibold text-xl text-white">{card.author}</p>
                                <p className="text-base text-purple-300">{card.role}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/*navigation button*/}
        </div>
            <div className="flex items-center gap-6 justify-between mt-12">
                <button 
                    onClick={prevSlide}
                    className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
                    aria-label="Previous testimonial"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-3">
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
                {/*next button */}
                <button 
                    onClick={nextSlide}
                    className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/30"
                    aria-label="Next testimonial"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
    </div>
        </>
    )
}

export default Testimonials;