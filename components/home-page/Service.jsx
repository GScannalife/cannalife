import Link from "next/link";

const services = [
  {
    icon: "images/icon/cannabis-leaf.svg",
    title: "Flower",
    delayAnim: 0,
  },
  {
    icon: "images/icon/vape-image-sm.png",
    title: "Vapes",
    delayAnim: 100,
  },
  {
    icon: "images/icon/edibles.svg",
    title: "Edibles",
    delayAnim: 200,
  },
  {
    icon: "images/icon/wax.svg",
    title: "Concentrates",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon">
              <img width={"80px"} src={service.icon} alt="" className="lazy-img m-auto" />
            </div>
            <p className="fs-20 m0 pt-20"></p>
            <h4 className="tx-dark">{service.title}</h4>
            <Link
              href="#"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
