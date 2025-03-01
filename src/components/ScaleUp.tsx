import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ScaleUp = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="bg-black py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top section with buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mb-16 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold mr-4">
            Scale your
          </h2>
          <button className={`bg-transparent border border-gray-700 rounded-full px-4 py-2 text-white flex items-center transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
            <img 
              src={isDark ? "/enterprise-icon.PNG" : "/enterprise-icon-light.PNG"} 
              alt="Enterprise Icon" 
              className="w-5 h-5 mr-2" />
            Enterprise
          </button>
          <h2 className="text-3xl md:text-4xl text-white font-bold mx-4">
            without compromising
          </h2>
          <button className={`bg-transparent border border-gray-700 rounded-full px-4 py-2 text-white flex items-center transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
            <img 
              src={isDark ? "/security-icon.PNG" : "/security-icon-light.PNG"} 
              alt="Security Icon" 
              className="w-5 h-5 mr-2" />
            Security
          </button>
        </motion.div>

        {/* Bottom section with CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
          {/* Left side */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
              Ready to deploy?
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Start building with a free account. Speak to an expert for your{' '}
              <span className="text-blue-500">Pro</span> or{' '}
              <span className="text-purple-500">Enterprise</span> needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className={`font-medium px-6 py-3 rounded-3xl transition-colors ${isDark ? '!bg-white !text-black' : '!bg-black !text-white !hover:bg-gray-300'}`}
              >
                Start Deploying
              </button>
              <button
                className={`border border-gray-700 font-medium px-6 py-3 rounded-3xl hover:border-gray-500 transition-colors ${isDark ? '!border-gray-600 !text-white' : '!border-gray-200 !text-black shadow-lg'}`}
              >
                Talk to an Expert
              </button>
            </div>
          </motion.div>
          
          {/* Right side */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-white font-bold mb-2">
              Explore Vercel Enterprise
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              with an interactive product tour, trial, or a personalized demo.
            </p>
            <div>
              <button className="border border-gray-700 text-white font-medium px-6 py-3 my-8 rounded-3xl hover:border-gray-500 transition-colors">
                Explore Enterprise
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScaleUp;
