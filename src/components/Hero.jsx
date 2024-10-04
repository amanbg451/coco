import heroimg from "../assets/Heroimg.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {  AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";
import pdf from "../pdf/catalog.pdf";

const Hero = () => {
  return (
    <>
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-orange-600 md:text-7xl font-bold text-5xl tracking-tight mb-4"
          >
            Sweto'h <br />
            <span className="text-red-950">Coconut sugar</span>
          </motion.p>
          <TypeAnimation
            sequence={[
              "100% organic",
              1000,
              "Gluten Free",
              1000,
              "Health is Happiness",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-orange-500 text-xl md:text-5xl italic- mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-black md:w-auto p-4 border bg-white-500 border-slate-900 rounded-xl hover:bg-orange-600 hover:text-white"
            >
              <a href={pdf} target="_blank" className="text-xl">
                Our Catalog
              </a>
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-5xl text-blue-800 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/company/sweto-h/" target="_blank">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://wa.me/9835691200" target="_blank" className="text-green-500">
                <AiOutlineWhatsApp />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={heroimg}
          className="w-[250px] md:w-[350px] rounded-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
      
    </div>
    <hr className="mt-6 border-gray-500 opacity-15" />
    </>
  );
};

export default Hero;
