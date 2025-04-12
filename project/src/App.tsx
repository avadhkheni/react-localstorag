import { useState } from 'react';
import { Menu, X, Twitter, Instagram, MessageCircle, Compass, Users, ShoppingBag, ScrollText, ArrowUp, Sword, Anchor, Ship, Map } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const crewMembers = [
    {
      name: "Monkey D. Luffy",
      role: "Captain",
      bounty: "3,000,000,000 Berries",
      devilFruit: "Gomu Gomu no Mi (Gum-Gum Fruit)",
      description: "The captain of the Straw Hat Pirates and the main protagonist. Known for his rubber abilities, unwavering determination, and dream of becoming the King of the Pirates.",
      image: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Roronoa Zoro",
      role: "Swordsman",
      bounty: "1,111,000,000 Berries",
      description: "The first mate and master swordsman. Aims to become the world's greatest swordsman. Known for his three-sword style and terrible sense of direction.",
      image: "https://images.unsplash.com/photo-1515936185222-c859f26405cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Nami",
      role: "Navigator",
      bounty: "366,000,000 Berries",
      description: "The crew's navigator and cartographer. Dreams of mapping the entire world. Expert in meteorology and stealing.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      name: "Usopp",
      role: "Sniper",
      bounty: "500,000,000 Berries",
      description: "The crew's marksman and inventor. Known for his incredible sniping skills and elaborate lies. Dreams of becoming a brave warrior of the sea.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  const achievements = [
    { icon: <Anchor className="w-12 h-12" />, title: "Grand Line Conquest", description: "Successfully navigated through the treacherous waters of the Grand Line" },
    { icon: <Sword className="w-12 h-12" />, title: "Warlord Defeats", description: "Victories against multiple members of the Seven Warlords" },
    { icon: <Ship className="w-12 h-12" />, title: "Territory Control", description: "Protected territories under the Straw Hat flag" },
    { icon: <Map className="w-12 h-12" />, title: "Poneglyph Discovery", description: "Uncovered ancient secrets through Road Poneglyphs" }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header/Navigation */}
      <header className="fixed w-full z-50 bg-blue-900/95 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Grand Line</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a>
              <a href="#crew" className="hover:text-yellow-400 transition-colors">Crew</a>
              <a href="#achievements" className="hover:text-yellow-400 transition-colors">Achievements</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block hover:text-yellow-400 transition-colors">Home</a>
              <a href="#about" className="block hover:text-yellow-400 transition-colors">About Us</a>
              <a href="#crew" className="block hover:text-yellow-400 transition-colors">Crew</a>
              <a href="#achievements" className="block hover:text-yellow-400 transition-colors">Achievements</a>
              <a href="#services" className="block hover:text-yellow-400 transition-colors">Services</a>
              <a href="#contact" className="block hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div 
          className="h-[600px] bg-cover bg-center relative"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to the Grand Line</h1>
              <p className="text-xl md:text-2xl">Your ultimate One Piece fan destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-900">About Us</h2>
              <p className="text-lg mb-4">
                Created by fans, for fans, we're your nakama in the vast world of One Piece. 
                Our passion for Eiichiro Oda's masterpiece drives us to create the ultimate 
                hub for everything One Piece.
              </p>
              <p className="text-lg">
                Join us on this grand adventure as we explore the rich stories, 
                unforgettable characters, and endless mysteries that make One Piece 
                the greatest pirate saga ever told.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Adventure"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crew Section */}
      <section id="crew" className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Meet the Straw Hat Crew</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {crewMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-red-600 font-bold mb-2">Bounty: {member.bounty}</p>
                  {member.devilFruit && (
                    <p className="text-purple-600 font-semibold mb-2">Devil Fruit: {member.devilFruit}</p>
                  )}
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Crew Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="text-blue-600 mb-4 flex justify-center">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ScrollText className="w-8 h-8" />, title: 'Episode Guide', desc: 'Comprehensive guide to every episode and chapter' },
              { icon: <Users className="w-8 h-8" />, title: 'Character Bios', desc: 'Detailed profiles of your favorite characters' },
              { icon: <Compass className="w-8 h-8" />, title: 'Fan Theories', desc: 'Explore and share exciting theories' },
              { icon: <ShoppingBag className="w-8 h-8" />, title: 'Merch Guide', desc: 'Find the best One Piece merchandise' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Join our Nakama!</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-center mb-6">© 2025 One Piece Fan World. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>
      
    </div>
    
  );

}

export default App;