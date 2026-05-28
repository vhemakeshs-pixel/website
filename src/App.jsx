import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    title: 'Logo Design',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Graphic Designing',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Website Design',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Search Engine Marketing',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Search Engine Optimization',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Social Media Marketing',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Branding',
    image:
      'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'WhatsApp Marketing',
    image:
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop',
  },
]

const portfolioItems = [
  {
    title: 'Brand Identity Campaign',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Social Media Promotion',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Creative Marketing Design',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Business Website Project',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/mnt/data/739b782f-b4c0-4e2e-8c4e-2878a07e79b8.png"
            alt="Sentido Soft Logo"
            className="w-14 h-14 rounded-full object-cover border border-gray-200 shadow-md"
          />

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Sentido Soft
            </h1>
            <p className="text-xs tracking-[4px] text-gray-500 mt-1">
              DIGITAL MARKETING AGENCY
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-cyan-500 transition-colors">
            Home
          </Link>
          <Link to="/services" className="hover:text-cyan-500 transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-cyan-500 transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="hover:text-cyan-500 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-cyan-500 transition-colors">
            Contact
          </Link>
        </nav>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918897666910"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-white text-3xl z-50"
    >
      💬
    </a>
  )
}

function HomePage() {
  return (
    <main>
      <section className="pt-36 pb-24 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium mb-6">
              Creative Digital Marketing Solutions
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-8 max-w-2xl mb-10">
              We create premium websites, branding, SEO, social media marketing, and powerful digital campaigns that help businesses grow online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>

              <Link
                to="/services"
                className="inline-block px-10 py-5 rounded-2xl border border-cyan-500 text-cyan-600 font-semibold text-lg hover:bg-cyan-50 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-cyan-200 blur-3xl opacity-40 rounded-full"></div>
            <img
              src="/mnt/data/a25a87d7-61d6-494f-b184-1eced09ae78d.png"
              alt="Influencer Marketing"
              className="relative z-10 rounded-[32px] shadow-2xl border border-gray-200 w-full max-w-2xl"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: 'Creative Marketing',
              desc: 'Modern campaigns that increase visibility and online business growth.',
            },
            {
              icon: '💡',
              title: 'Branding Solutions',
              desc: 'Professional logo design, graphics, and brand identity solutions.',
            },
            {
              icon: '📈',
              title: 'Business Growth',
              desc: 'SEO and digital campaigns focused on leads, traffic, and sales.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:-translate-y-2 transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ServicesPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-cyan-500">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Complete digital marketing and branding solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-600 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  Professional marketing and branding services designed for modern businesses.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function PortfolioPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Creative branding and business campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  Professional branding, website development, SEO marketing, and social media campaigns.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-8">
            About Us <span className="text-cyan-500">Sentido Soft</span>
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-8">
            Sentido Soft is a premium digital marketing agency delivering branding, website design, SEO, social media marketing, influencer campaigns, and business growth strategies.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            We help businesses build a strong online presence through modern digital experiences and creative solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-cyan-50 rounded-3xl p-8 border border-cyan-100">
              <h3 className="text-4xl font-bold text-cyan-600 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/mnt/data/a25a87d7-61d6-494f-b184-1eced09ae78d.png"
            alt="About Sentido Soft"
            className="rounded-[32px] shadow-2xl border border-gray-200 w-full max-w-xl"
          />
        </div>
      </div>
    </main>
  )
}

function ContactForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all information before sending message.')
      return
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/vhemakeshs@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        alert('Thank You For Choosing Sentido Soft! We will contact you soon.')

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        navigate('/')
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <form
      className="bg-white rounded-[32px] border border-gray-200 shadow-xl p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-4 rounded-2xl border border-gray-300 outline-none focus:border-cyan-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-4 rounded-2xl border border-gray-300 outline-none focus:border-cyan-500"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-cyan-500 mb-6"
      />

      <textarea
        rows={6}
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:border-cyan-500 mb-6"
      />

      <button
        type="submit"
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:scale-[1.02] transition-transform"
      >
        Send Message
      </button>
    </form>
  )
}

function ContactPage() {
  return (
    <main className="pt-36 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Contact <span className="text-cyan-500">Us</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Ready to grow your business online? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">Phone</h3>
              <p className="text-gray-600 text-lg">7569994555</p>
              <p className="text-gray-600 text-lg">8897666910</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">Email</h3>
              <p className="text-gray-600 text-lg">vhemakeshs@gmail.com</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">
                Office Location
              </h3>

              <iframe
                title="Sentido Soft Office"
                src="https://maps.google.com/maps?q=16.30258,80.440793&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72 rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
              />

              <a
                href="https://maps.google.com/?q=16.30258,80.440793"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold"
              >
                Open In Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 text-center text-gray-500 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <img
            src="/mnt/data/739b782f-b4c0-4e2e-8c4e-2878a07e79b8.png"
            alt="Sentido Soft Logo"
            className="w-20 h-20 rounded-full shadow-lg border border-gray-200"
          />
        </div>

        <h3 className="text-3xl font-bold text-cyan-600 mb-4">Sentido Soft</h3>

        <p className="text-lg text-gray-600 mb-2">Our Office</p>

        <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-3xl mx-auto">
          <iframe
            title="Sentido Soft Footer Map"
            src="https://maps.google.com/maps?q=16.30258,80.440793&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="flex justify-center gap-6 text-lg mb-6 flex-wrap">
          <span>📞 7569994555</span>
          <span>📞 8897666910</span>
          <span>✉️ vhemakeshs@gmail.com</span>
        </div>

        <p>© 2026 Sentido Soft • www.sentidosoft.in • All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default function SentidoSoftWebsite() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  )
}
