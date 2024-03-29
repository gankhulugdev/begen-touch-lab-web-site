import { useState } from "react";
import { fadeIn, staggerContainer, styles } from "../utils";
import { TitleText, TypingText } from "../components";
import ExploreCard from "../components/explore-card";
import { motion } from "framer-motion";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("map-of-city");

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Interactive Arts" textStyles="text-center" />

        <motion.h2 variants={fadeIn("left", "tween", 0.2, 1)}>
          <TitleText
            title={
              <>
                Choose the art you want <br className="md:block hidden" /> to
                explore
              </>
            }
            textStyles="text-center"
          />
        </motion.h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
