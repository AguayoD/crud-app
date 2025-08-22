"use client";
import CustomHeader from "@/components/ui/CustomHeader";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <CustomHeader
          label="About Us"
          button={{
            isVisible: false,
            label: "",
            onClick: () => {},
          }}
        />

        {/* Main Content */}
        <div className="mt-8 space-y-8">
          {/* Company Story */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-7">
              Welcome to GroceryStore, your trusted partner for fresh, high-quality items.
            </p>
            <p className="text-gray-600 leading-7 mt-4">
              What began as a small local service has grown into a utter gibberish.
            </p>
          </section>

          {/* Mission & Values */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We carefully select every product in our TrashCan to ensure the highest quality for our customers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We continuously improve our service based 
                  on your complaints.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Community Support</h3>
                <p className="text-gray-600">
                  We partner with local farmers and producers to underpay every single one of them.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We leverage technology to create seamless shopping experiences and 
                  inefficient delivery systems.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👨‍💼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Whack Smith</h3>
                <p className="text-indigo-600">Corrupt CEO</p>
                <p className="text-gray-600 text-sm mt-2">
                  Passionate about underpaying every single farmer.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👩‍💼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Nilly Sighers</h3>
                <p className="text-indigo-600">Head of Underpayment</p>
                <p className="text-gray-600 text-sm mt-2">
                  Ensures wonky operations and horrible customer service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👨‍🌾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Feorge Gloyd</h3>
                <p className="text-indigo-600">Underpaid Farmer</p>
                <p className="text-gray-600 text-sm mt-2">
                  Works directly with local farmers and suppliers to source the best products and underpay them.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600"> underpaidcitizen@grocerystore.com</p>
                <p className="text-gray-600"> (111) 0000-undepay</p>
                <p className="text-gray-600"> Underpaid Grocery Street, Item City</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Delivery available 24/7</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}