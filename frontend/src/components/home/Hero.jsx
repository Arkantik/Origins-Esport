import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const lienVersLaVideo = 3; // à changer, lien pour aller sur le http:// ... /videos/id:${lienVersLaVideo}
const displayedLinks = [
  {
    id: 1,
    img: "./src/components/home/picturesForHome/cs.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "cs",
  },
  {
    id: 2,
    img: "./src/components/home/picturesForHome/ow.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "ow",
  },
  {
    id: 3,
    img: "./src/components/home/picturesForHome/valo.jpg",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "valo",
  },
  {
    id: 4,
    img: "",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "",
  },
  {
    id: 5,
    img: "",
    link: `/videos/id:${lienVersLaVideo}`,
    alt: "",
  },
];

export default function Hero() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
  };
  const links = displayedLinks.map((link) => {
    return (
      link?.img && (
        <div key={link.id} className="relative">
          <img
            className="h-[492px] w-full leading-[160px] bg-primaryLight text-white
            md:h-[500px] md:object-cover"
            src={link.img}
            alt={link.alt}
          />
          <NavLink to={link.link}>
            <button
              type="button"
              className="gap-2 text-white bg-gradient-to-b from-[#4E5DB6]/95 to-[#9969C4]
              w-[132px] h-8 rounded-2xl font-bold font-header text-xs 
              flex justify-center items-center absolute bottom-8 left-1/2 transform -translate-x-1/2
              "
            >
              WATCH NOW
              <BsArrowRight className="text-[1.8em]" />
            </button>
          </NavLink>
        </div>
      )
    );
  });
  /* eslint-disable */
  return <Carousel {...settings}>{links}</Carousel>;
  /* eslint-enable */
}