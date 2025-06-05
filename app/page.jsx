import { ExternalLink } from "lucide-react";
import { FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa";

export default function CaffeinatedSarcasmCo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b08968] via-[#e6ccb2] to-[#f5ebe0] p-6 font-comic">
      <header className="text-center mb-10">
        <div className="w-28 h-28 mx-auto mb-4 bg-[#4e342e] rounded-full flex items-center justify-center text-white text-xl font-bold">
          Logo
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-[#4e342e]">Caffeinated Sarcasm Co.</h1>
        <p className="text-xl mt-2 text-[#6d4c41] italic">Bold sarcasm for tired humans ☕</p>

        <div className="flex justify-center gap-4 mt-4 text-[#4e342e] text-2xl">
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest />
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-lg text-[#4e342e]">We’re a bold, coffee-fueled design brand slinging sarcastic quotes and quirky illustrations on everything from t-shirts to snarky coloring books. Life is too short for boring merch — join us if you're tired, caffeinated, and gloriously unfiltered.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Redbubble Shop",
            desc: "Funny & bold POD designs available on Redbubble",
            url: "https://www.redbubble.com/people/your-shop"
          },
          {
            title: "TeePublic Store",
            desc: "Explore hilarious tees and more on TeePublic",
            url: "https://www.teepublic.com/user/your-shop"
          },
          {
            title: "Amazon KDP",
            desc: "Snarky coloring books and more on Amazon",
            url: "https://www.amazon.com/author/your-kdp-page"
          },
          {
            title: "Amazon Merch",
            desc: "Premium merch directly via Amazon",
            url: "https://www.amazon.com/your-merch-page"
          },
          {
            title: "Printify",
            desc: "More sarcastic merch — coming soon!",
            url: "https://www.printify.com/"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2 text-[#4e342e]">{item.title}</h2>
            <p className="text-[#5d4037] mb-4">{item.desc}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-[#4e342e] border border-[#4e342e] px-4 py-2 rounded hover:bg-[#4e342e] hover:text-white transition"
            >
              Visit {item.title.split(" ")[0]} <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        ))}
      </section>

      <section className="bg-[#fff8f0] p-6 rounded-xl shadow-md text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-[#4e342e]">Stay caffeinated and sarcastic ☕</h3>
        <p className="mb-4 text-[#6d4c41]">Subscribe to our newsletter to get exclusive updates, product drops, and free sarcasm.</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-md w-full sm:w-64"
          />
          <button className="bg-[#4e342e] text-white px-4 py-2 rounded hover:bg-[#3e2723] transition w-full sm:w-auto">Subscribe</button>
        </div>
      </section>

      <footer className="text-center text-sm mt-10 text-[#5d4037]">
        © 2025 Caffeinated Sarcasm Co. All rights reserved.
      </footer>
    </div>
  );
}
