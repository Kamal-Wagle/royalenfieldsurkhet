import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-10">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact details below or by filling out the form.
        </p>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={6}
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-primary-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="text-primary-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                <p className="text-gray-600">
                  [Restaurant Name], [Restaurant Address], [City, Country]
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="text-primary-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">[Phone Number]</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="text-primary-500 h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">[Email Address]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map (optional, placeholder for demo) */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Us</h2>
          <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzcjMzEwJzQ3LjAiTiAxMjLCg2n7GGIEitLwR8"
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ border: 0 }}
            allowFullScreen={true} 
            aria-hidden="false"
            tabIndex={0}
            />

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
