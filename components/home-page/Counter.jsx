import { InView, useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const counters = [
  {
    count: 25000,
    suffix: "",
    color: "#3f51b5",
    rating: "Sq.Ft. Cultivation Operation",
    delay: 100,
  },
  {
    count: 750,
    suffix: "",
    color: "#ff9f00",
    rating: "Solar Panels",
    delay: 200,
  },
  {
    count: 500,
    suffix: " ",
    color: "#4caf50",
    rating: "High-Powered LED Lights  ",
    delay: 100,
  },

  {
    count: 5800,
    suffix: "",
    color: "#9c27ad",
    rating: "Plants Per Harvest",
    delay: 0,
  },

 
  {
    count: 35,
    suffix: "+",
    color: "#FF2222",
    rating: "Cannabis Strains",
    delay: 200,
  },
];

const Counter = () => {
  return (
    <>
      {counters.map((counter, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div
            className="counter-block-three text-center mt-40"
            data-aos="fade-up"
            data-aos-delay={counter.delay}
          >
            <InView>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="main-count"
                  style={{ color: counter.color }}
                >
                  {inView ? (
                    <CountUp end={counter.count} duration={2} separator="," />
                  ) : (
                    0
                  )}
                  {counter.suffix}
                </div>
              )}
            </InView>
            <p className="tx-dark fs-18 m0">{counter.rating}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
