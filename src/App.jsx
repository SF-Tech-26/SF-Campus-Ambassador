import { useEffect } from "react";
import { Package, Gift, Medal, Trophy, Briefcase, Ticket } from "lucide-react";

export default function App() {
  const perks = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Exclusive Merchandise",
      text: "Get your hands on limited edition Springfest merch that you can’t buy anywhere else!"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Premium Goodies",
      text: "Receive surprise goodie bags packed with awesome items throughout your journey."
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Exciting Rewards",
      text: "Earn points and unlock exclusive rewards based on your performance and engagement."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Cash Prizes",
      text: "Top performers get rewarded with attractive cash prizes. The more you do, the more you earn!"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Internships",
      text: "Stand out and get priority consideration for internships with our partner organizations."
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Free Night Pass",
      text: "Enjoy VIP access with a complimentary night pass to experience Springfest like never before!"
    }
  ];

  // 🌠 SCROLL GLIDE EFFECT (responsive + staggered)
  useEffect(() => {
    const cards = document.querySelectorAll(".perk-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // stagger delay for cinematic effect
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.2 // earlier trigger for mobile
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapper px-4">
      <h1 className="text-5xl text-glow">What You’ll Get</h1>
      <p className="pill mb-8">
        Being an ambassador comes with incredible perks and opportunities
      </p>

      <div className="grid grid-cols-3 gap-6">
        {perks.map((perk, i) => (
          <div
            key={i}
            className="perk-card flex flex-col items-center justify-center text-center"
          >
            <div className="icon-box">{perk.icon}</div>
            <h2 className="text-base uppercase tracking-wide mb-2">
              {perk.title}
            </h2>
            <p className="text-xs leading-snug px-3 opacity-90">{perk.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
