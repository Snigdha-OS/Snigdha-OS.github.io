import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2022/05/29/04/35/trails-7228378_1280.jpg?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            {/* Custom SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-20 w-20 text-cornflower-blue"
            viewBox="0 0 256 256" width="24" height="24">
              <path fill="#6495ed" fill-rule="evenodd" d="m112.8 111.5q25.7 27 1.7 53.9-21.4 20.9-41.9 22.9c8.6-7.4 11-19.8 5.8-29.9q-26.1-27.2-39.2-47.7-15.1-39.6 40.9-53.8 9.4-15.5 91.4-55.6c15.4-4.4 31.8 2.8 38.9 17.2 7 14.4 2.8 31.8-10.2 41.3l-112.8 7.1q-1.9 20.7 25.4 44.6zm-35.5-43.4c-11.4 3.4-26.3 9.6-30.2 20.4-2 5.8-0.9 12.1 1.1 17.7 10.5 16.1 24.2 31.5 37.5 45.3l1 1.1 0.7 1.3c2.8 5.5 4 11.5 3.7 17.4 6-3.7 11.4-8.2 16.2-12.8 12.4-14.2 11.3-26.2-1.5-39.8-14.4-12.7-29.3-30.2-28.5-50.6zm124.1-45.1c-4.8-9.8-15.8-14.9-26.4-12.3-20.9 10.3-42.3 21.1-62.1 33.2-3.7 2.2-12.5 7.7-18.6 12.5l102.1-6.4c7.4-6.8 9.5-17.8 5-27z"/>
              <path fill="#6495ed" fill-rule="evenodd" d="m143.8 144.3q-25.7-26.9-1.8-53.9 21.5-20.8 42-22.8c-8.6 7.4-11 19.7-5.9 29.8q26.2 27.2 39.3 47.8 15 39.6-40.9 53.7-9.4 15.5-91.5 55.7c-15.4 4.4-31.7-2.9-38.8-17.3-7-14.4-2.8-31.7 10.1-41.3l112.8-7.1q2-20.7-25.3-44.6zm35.5 43.5c11.4-3.4 26.3-9.6 30.2-20.5 2-5.7 0.9-12-1.2-17.6-10.4-16.1-24.2-31.5-37.4-45.4l-1.1-1-0.6-1.3c-2.8-5.5-4-11.5-3.8-17.4-5.9 3.6-11.4 8.2-16.1 12.8-12.5 14.1-11.3 26.2 1.4 39.7 14.5 12.7 29.4 30.3 28.6 50.7zm-124.1 45.1c4.8 9.7 15.8 14.8 26.3 12.2 20.9-10.2 42.3-21 62.2-33.1 3.7-2.2 12.5-7.7 18.5-12.6l-102 6.5c-7.4 6.8-9.5 17.8-5 27z"/>
            </svg>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            <span className="text-cornflower-blue"> ~</span>
            Be 
            <span className="text-cornflower-blue"> Silent! </span><br></br>
            When It Is Time To
            <span className="text-cornflower-blue"> Hear. </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto text-justify"
          >
            ~ <b className="text-cornflower-blue">Snigdha OS</b> revolutionizes the world of penetration testing by offering a cutting-edge suite of tools, a user-friendly and intuitive interface, and unparalleled performance. Designed to empower security professionals, Snigdha OS not only simplifies complex testing processes but also enhances the accuracy and speed of vulnerability assessments. Whether you're a beginner or a seasoned expert, Snigdha OS provides a seamless experience, ensuring that your security testing efforts are more effective, efficient, and reliable than ever before.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              to="/download"
              className="group relative rounded-[5px] bg-cornflower-blue px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-600 transition-colors overflow-hidden"
            >
              <span className="relative flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Now
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-semibold leading-6 text-white flex items-center group"
            >
              User Docs 
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-semibold leading-6 text-white flex items-center group"
            >
              Dev Docs 
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
