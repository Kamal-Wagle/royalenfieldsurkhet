import { Coffee, Users, Award, Heart } from 'lucide-react'; // Removed MapPin import

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to [Restaurant Name]</h1>
        <p className="text-xl text-gray-600 mb-10">
          At [Restaurant Name], we bring you the finest dining experience, combining exceptional food with a welcoming atmosphere.
        </p>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is simple: to create a dining experience that leaves a lasting impression. We believe that food brings people together, and we are committed to serving high-quality, flavorful dishes made with fresh ingredients. From the moment you walk through our doors, we aim to make you feel at home and treat you to an unforgettable meal.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Heart className="text-primary-500 h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Passion</h3>
              <p className="text-gray-600 mt-2">
                We are passionate about food and hospitality. Every dish we serve is made with love and attention to detail.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="text-primary-500 h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
              <p className="text-gray-600 mt-2">
                We strive for excellence in every aspect of our restaurant, from the ingredients we use to the service we provide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Coffee className="text-primary-500 h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Creativity</h3>
              <p className="text-gray-600 mt-2">
                Our chefs are always experimenting with new flavors and techniques to create unique and exciting dishes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            [Restaurant Name] was founded in [Year] by [Founder&apos;s Name(s)], with the goal of creating a dining experience that combines the best of traditional flavors with innovative cooking techniques. Starting as a small family-owned restaurant, we quickly gained a loyal following due to our commitment to quality and customer service.
          </p>
          <p className="text-lg text-gray-600 mt-6">
            Over the years, we have grown into a popular local hotspot, serving both regulars and new visitors from near and far. Despite our success, we have remained true to our roots, continuously focusing on our mission to provide exceptional food and an inviting atmosphere for all our guests.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our team is the backbone of [Restaurant Name]. From the front-of-house staff to our talented chefs, everyone plays a role in creating a memorable dining experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Users className="text-primary-500 h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">[Chef&apos;s Name]</h3>
              <p className="text-gray-600 mt-2">Head Chef</p>
              <p className="text-gray-600 mt-2">
                [Chef&apos;s Name] brings years of culinary experience to the table, overseeing the preparation of every dish with care and creativity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-primary-500 h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">[Manager&apos;s Name]</h3>
              <p className="text-gray-600 mt-2">Restaurant Manager</p>
              <p className="text-gray-600 mt-2">
                [Manager&apos;s Name] ensures that every aspect of the restaurant runs smoothly, from customer service to operations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-primary-500 h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">[Server&apos;s Name]</h3>
              <p className="text-gray-600 mt-2">Head Server</p>
              <p className="text-gray-600 mt-2">
                [Server&apos;s Name] leads our service team, making sure every guest feels welcomed and well-cared for.
              </p>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Awards &amp; Recognition</h2>
          <p className="text-lg text-gray-600 mb-6">
            Over the years, we have been honored to receive several awards and recognitions for our food and service. Here are a few highlights:
          </p>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Best New Restaurant of the Year – [Award Organization] (Year)</li>
            <li>Top 10 Dining Destinations in [City] – [Local Magazine] (Year)</li>
            <li>Best Coffee in [City] – [Food Critic&apos;s Choice] (Year)</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Guests Are Saying</h2>
          <div className="flex flex-col items-center text-center space-y-8">
            <blockquote className="text-lg text-gray-600 italic">
              &quot;The food here is absolutely amazing! Every dish is a masterpiece, and the service is top-notch.&quot; 
              <br />– [Customer Name]
            </blockquote>
            <blockquote className="text-lg text-gray-600 italic">
              &quot;We had a wonderful experience! The ambiance is cozy, and the staff made us feel so welcome.&quot; 
              <br />– [Customer Name]
            </blockquote>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            We&apos;d love to hear from you! Whether you have a question, want to make a reservation, or just want to share feedback, feel free to reach out.
          </p>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> [Restaurant Address]
            <br />
            <strong>Phone:</strong> [Phone Number]
            <br />
            <strong>Email:</strong> [Email Address]
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
