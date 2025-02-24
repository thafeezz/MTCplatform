"use client";
import Nav from "@/components/Nav";
import { lora1 } from "../../styles/fonts";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* <div
        className="absolute inset-0 bg-cover bg-center blur-sm h-[512]"
        style={{ backgroundImage: "url('/frontier.avif')" }}
      ></div> */}
      <div className="relative z-10">
        <Nav
          className="fade-in-top"
          items={["about", "programs", "team", "support"]}
        />
        <Welcome />
      </div>
    </div>
  );
}

const Welcome = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center pt-20"
  >
    <motion.span
      className={`${lora1.className} italic text-2xl block`}
      initial={{ opacity: 0, y: 20, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      Welcome to
    </motion.span>
    <motion.span
      className={`${lora1.className} font-bold text-6xl my-4 block`}
      initial={{ opacity: 0, y: 20, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      MTC @ The University of Michigan
    </motion.span>
    <motion.span
      className={`${lora1.className} italic text-2xl block`}
      initial={{ opacity: 0, y: 20, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      A new frontier 🚀
    </motion.span>
    <motion.span
      className={`${lora1.className} italic text-maize text-4xl block mt-16`}
      initial={{ opacity: 0, y: 20, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      Coming soon...
    </motion.span>
  </motion.div>
);
