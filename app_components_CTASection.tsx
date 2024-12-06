import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Join millions of developers and start collaborating on your next big project.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md inline-flex items-center justify-center">
              Sign up for free
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md inline-flex items-center justify-center">
              Start a free trial
            </a>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Stay updated with our newsletter</h3>
            <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-64 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

