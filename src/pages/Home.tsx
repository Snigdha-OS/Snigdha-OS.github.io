import React from 'react';
import { Download, Shield, Terminal, Award, Users, Coffee, ArrowRight, Star, Book, Cpu, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Embedded CSS */}
      <style>
        {`
          /* New Gradient Animation for Hero Section */
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Typing Effect for Hero Tagline */
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }

          .typing-effect {
            // font-family: monospace;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            // border-right: 3px solid;
            width: 20ch; /* Adjust to fit text length */
            animation: typing 7s steps(100) infinite;
          }


          .hero-background {
            background: linear-gradient(135deg, #000000, #1a1a1a, #6495ed);
            background-size: 300% 300%;
            animation: gradientAnimation 10s ease infinite;
          }

          /* Optional: Keep the animation definition if not already present */
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }


          /* New hover effect for feature cards */
          .card:hover {
            transform: scale(1.07) rotate(1deg); /* Slight rotation for a dynamic effect */
            transition: 
              transform 0.4s ease-in-out, 
              box-shadow 0.4s ease-in-out, 
              background-color 0.4s ease-in-out;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3); /* Increased shadow intensity */
            background-color: rgba(255, 255, 255, 0.9); /* Light tint on hover */
            filter: brightness(1.1) contrast(1.05); /* Subtle brightness and contrast boost */
          }

          /* Optional Glow Effect for a More Eye-Catching Look */
          .card:hover::after {
            content: "";
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 10px; /* Matches the card border radius */
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4); /* Glowing effect */
            pointer-events: none; /* Ensures it doesn't block interaction */
          }

          /* New hover effect for hero section heading */
          .hero-heading:hover {
            transform: scale(1.1);
            color: #ffffff;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          }

          /* New feature card style */
          .feature-card {
            border: 2px solid transparent;
            background: linear-gradient(145deg, #ffffff, #f0f4f8);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(100, 149, 237, 0.2);
            transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.4s cubic-bezier(0.19, 1, 0.22, 1), border 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .feature-card::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(100, 149, 237, 0.2), rgba(0, 0, 0, 0));
            transform: scale(0);
            transition: transform 0.4s ease-in-out;
            z-index: 0;
          }

          .feature-card:hover::before {
            transform: scale(1);
          }

          .feature-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(100, 149, 237, 0.3);
            border-color: #6495ed;
          }

          .feature-card h4 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #6495ed;
            margin-bottom: 10px;
            z-index: 1;
            position: relative;
          }

          .feature-card p {
            font-size: 1rem;
            color: #333333;
            z-index: 1;
            position: relative;
          }

          .feature-card:hover h4 {
            color: #1e90ff;
          }

          .feature-card:hover p {
            color: #555555;
          }

          /* New list style for features */
          .feature-list {
            list-style-type: disc;
            padding-left: 20px;
            margin-top: 10px;
            text-align: left;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#000000] to-[#6495ed] text-white py-20 relative overflow-hidden hero-background">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://via.placeholder.com/1920x1080" // Replace with your desired background image URL
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-md leading-tight hero-heading">
            EXPERIENCE THE POWER OF
          </h1>
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-md leading-tight hero-heading">
            SNIGDHA OS 🔥
          </h1>

          {/* Tagline with Typing Effect */}
          <h2 className="text-2xl font-semibold mb-8 max-w-3xl mx-auto text-shadow-lg text-center">
            <span className="typing-effect">"Where Performance Meets Innovation ✨"</span>
          </h2>

          <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow-lg text-justify">
            Snigdha OS is a lightweight, Arch-based Linux distribution crafted for <strong>Penetration Testing 🛡️</strong>, <strong>Ethical Hacking 🔍</strong>, and general use. Power up your system with cutting-edge tools 🛠️ and enhanced security features 🔐💻.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center space-x-6 mt-6">
            <Link
              to="/download"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Download className="h-5 w-5" />
              <span>Download Now 🚀</span>
            </Link>

            <Link
              to="https://snigdha-os.github.io/documentation/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Book className="h-5 w-5" />
              <span>Documentation 📚</span>
            </Link>

            <Link
              to="https://forum.snigdha-os.org" // Replace with your community forum URL
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 hover:bg-white hover:text-[#6495ed] transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Users className="h-5 w-5" />
              <span>Community Forum 🌐</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-[#f0f4f8] to-[#ffffff]">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-center text-[#6495ed] mb-12 tracking-tight">
            Key Features ✨
          </h2>

          {/* Subheading */}
          <p className="text-xl text-center text-gray-700 mb-6 max-w-3xl mx-auto">
            Discover the amazing features of Snigdha OS that make it the perfect choice for developers, cybersecurity professionals, and anyone looking for a fast, secure, and customizable OS.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-red-500 mx-auto" />}
              title="Secure 🔒"
              description="Regular security updates and a robust system architecture keep your data safe."
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-green-500 mx-auto" />}
              title="Powerful 💪"
              description="Full access to the terminal and system components for advanced users."
            />
            <FeatureCard
              icon={<Download className="h-10 w-10 text-blue-500 mx-auto" />}
              title="Free Forever 🎉"
              description="Snigdha OS is free and open source. No costs, no subscriptions."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-yellow-500 mx-auto" />}
              title="Customizable 🎨"
              description="Personalize your desktop environment to suit your needs and style."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-pink-500 mx-auto" />}
              title="Community Support 🤗"
              description="A vibrant community ready to help and share knowledge."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10 text-[#6495ed] mx-auto" />}
              title="Feature Rich ⚡"
              description="Pre-installed applications and tools for everyday use."
            />
            <FeatureCard
              icon={<Coffee className="h-10 w-10 text-brown-500 mx-auto" />}
              title="Energy Efficient 🌱"
              description="Optimized performance to save energy and enhance hardware longevity."
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-teal-500 mx-auto" />}
              title="Fast Boot ⏱️"
              description="Experience faster boot times and smooth transitions."
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-purple-500 mx-auto" />}
              title="Advanced Tools 🧰"
              description="Access specialized penetration testing and ethical hacking tools."
            />
          </div>
        </div>
      </section>

      {/* Desktop Environments Section */}
      <section className="py-16 bg-gradient-to-r from-[#f9f9f9] to-[#ffffff]">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-center text-[#6495ed] mb-12 tracking-tight">
            Popular Desktop Environments 🌍
          </h2>

          {/* Desktop Environment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-blue-500 mx-auto" />}
              title="GNOME 🌿"
              description="A clean and modern desktop environment that prioritizes simplicity and ease of use."
              listItems={[
                "Minimalist design focused on usability.",
                "Intuitive interface with modern features.",
                "Highly customizable with GNOME extensions.",
              ]}
            />
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-green-500 mx-auto" />}
              title="KDE Plasma ⚡"
              description="Highly customizable and visually appealing, perfect for power users."
              listItems={[
                "Rich, visually appealing desktop with full customization.",
                "Multiple widgets and advanced themes.",
                "Excellent performance with modern hardware.",
              ]}
            />
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-purple-500 mx-auto" />}
              title="XFCE ⚙️"
              description="Lightweight, fast, and resource-efficient, ideal for older hardware."
              listItems={[
                "Optimized for low resource usage.",
                "Simple, clean interface with traditional design.",
                "Fast boot times and low memory footprint.",
              ]}
            />
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-pink-500 mx-auto" />}
              title="Cinnamon 🍃"
              description="A modern desktop environment that provides a user-friendly interface."
              listItems={[
                "Traditional desktop layout with a modern touch.",
                "Easy to customize and lightweight.",
                "Supports multiple workspaces and desklets.",
              ]}
            />
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-orange-500 mx-auto" />}
              title="MATE 🌻"
              description="A continuation of GNOME 2, offering a more traditional desktop experience."
              listItems={[
                "Classic desktop environment with modern touches.",
                "Low memory usage and optimized performance.",
                "Supports a wide range of applications and tools.",
              ]}
            />
            <FeatureCard
              icon={<Monitor className="h-10 w-10 text-yellow-500 mx-auto" />}
              title="LXQt 💻"
              description="A lightweight and fast desktop environment designed for low-resource systems."
              listItems={[
                "Minimal memory footprint and fast boot times.",
                "Simple interface with modern functionalities.",
                "Efficient on both old and modern hardware.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Window Managers Section */}
      <section className="py-16 bg-gradient-to-r from-[#f0f4f8] to-[#ffffff]">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-center text-[#6495ed] mb-12 tracking-tight">
            Popular Window Managers 🖥️
          </h2>

          {/* Window Manager Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-red-500 mx-auto" />}
              title="i3 🖱️"
              description="A tiling window manager designed for power users."
              listItems={[
                "Dynamic tiling for efficient workspace management.",
                "Keyboard-driven interface for quick navigation.",
                "Highly customizable with scripting support.",
              ]}
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-yellow-500 mx-auto" />}
              title="Awesome WM ⚡"
              description="Highly configurable and extensible for personalized setups."
              listItems={[
                "Extensible and modular configuration.",
                "Supports tiling, floating, and full-screen layouts.",
                "Built-in Lua scripting for customizations.",
              ]}
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-green-500 mx-auto" />}
              title="Openbox 🔲"
              description="Lightweight stacking window manager with high flexibility."
              listItems={[
                "Minimalist window manager focused on efficiency.",
                "Highly customizable themes and behaviors.",
                "Great for older hardware and resource-limited systems.",
              ]}
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-blue-500 mx-auto" />}
              title="Xmonad 💻"
              description="A tiling window manager written and configured in Haskell."
              listItems={[
                "Written in Haskell for maximum customizability.",
                "Uses dynamic tiling for flexible window management.",
                "Highly customizable and extendable.",
              ]}
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-orange-500 mx-auto" />}
              title="Fluxbox 🌀"
              description="A lightweight and configurable window manager based on Blackbox."
              listItems={[
                "Very low memory usage and high performance.",
                "Highly customizable with simple configuration.",
                "Supports multiple workspaces and styles.",
              ]}
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-purple-500 mx-auto" />}
              title="Herbstluftwm 🖼️"
              description="A manual tiling window manager for X11 with a unique approach."
              listItems={[
                "Manual tiling with a highly flexible layout.",
                "Written in bash and easy to configure.",
                "Supports multi-monitor setups and dynamic layouts.",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, listItems }: { icon: React.ReactNode; title: string; description: string; listItems?: string[] }) => (
  <div className="feature-card p-6 rounded-lg shadow-md text-center">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-[#6495ed]">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
    {listItems && (
      <ul className="feature-list">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

