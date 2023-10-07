import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          Premium Products
        </>
      ),
      description: "Only the best strain genetics will make their way to our innovative cultivation center.",
      icon: "images/icon/premium-products.svg",
      width: "160",
      height: "160",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Cultivation Center
        </>
      ),
      width: "160",
      height: "160",
      description: "Top growers from the industry watch over the plants so only the best products reach you.",
      icon: "images/icon/cultivation-center.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          High Standards
        </>
      ),
      width: "100",
      height: "100",
      description: "Our in-house manufacturing process sets the new premium standard for flower, edibles, concentrates, and other cannabis products.",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
    {
      background: "#e8eafb",
      title: (
        <>
          Affordability
        </>
      ),
      description: "Our cultivation center allows us to grow our cannabis products, which helps keep prices low and ensure quality control.",
      icon: "images/icon/icon_100.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#eefbeb",
      title: (
        <>
          Grow Team
        </>
      ),
      width: "202",
      height: "170",
      description: "Utilizing the latest technology, our cultivation facility pushes the boundaries of cannabis plant genetics and production.",
      icon: "images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#f3f1e0",
      title: (
        <>
          Rewards
        </>
      ),
      width: "175",
      height: "175",
      description: "Every purchase will earn you points to trade in for discounts, merchandise, or other rewards from the dispensary.",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              layout="intrinsic"
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
