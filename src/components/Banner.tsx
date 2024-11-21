import img2 from "../assets/le_van_tiep.jpg";
import img from "../assets/3000x1150 1.png";
import logo1 from "../assets/logo-moi-01png.png";
import logo2 from "../assets/institute_795_logo1542189403.jpg";
import logo3 from "../assets/simbolo-da-grade-do-globo-terrestre-com-uma-seta.png";

const profiles = [
  {
    id: 0,
    img: img,
    name: "Ms. Judy McBurney",
    position: "Head of the Business School, AIBT",
  },
  {
    id: 1,
    img: img2,
    name: "Mr. Le Van Tiep",
    position:
      "FRM Co-Founder & CEO Consulting Joint Stock Company, MCI Vietnam",
  },
];

const EventCard = () => {
  return (
    <div className="bg-white shadow-md overflow-hidden flex py-5">
      {/* Speakers Section */}
      <div className="grid grid-cols-2 text-center p-6 content-center py-20 basis-1/2">
        {profiles.map((p) => (
          <div key={p.id}>
            <img
              src={p.img}
              alt={p.name}
              className="rounded-full mx-auto mb-4 w-52 object-cover"
            />
            <h3 className="text-orange-500 text-lg font-bold">{p.name}</h3>
            <p className="text-sm w-2/3 mx-auto">{p.position}</p>
          </div>
        ))}
      </div>

      <div className="place-items-center basis-1/2 px-5 relative">
        {/* Event Info Section */}
        <div className="flex justify-center mb-10">
          <img src={logo1} className="w-28 h-20" />
          <img src={logo2} className="w-20 h-20" />
        </div>
        <div className="bg-[rgb(41,49,121)] text-white p-1 px-10 rounded-lg">
          Australia Borad
        </div>
        <div className=" text-center text-orange-500">
          <h1 className="text-3xl font-bold my-3 uppercase mx-auto">
            EMPOWERING YOUR DATA ANALYSIS AND IT CAREER IN THE AGE OF AUTOMATION
            ZOOM MEETING
          </h1>
          <div className="flex justify-between content-center bg-orange-500 p-2 rounded-2xl w-4/5 mx-auto">
            <div className="flex bg-white text-orange-500 text-lg p-1 rounded-xl uppercase font-bold tracking-widest content-center">
              <img
                src={logo3}
                alt="Logo"
                className="w-6 h-6 px-5 filter brightness-0 invert sepia saturate-500 hue-rotate-330"
                style={{
                  filter:
                    "brightness(0) invert(1) sepia(1) saturate(1000%) hue-rotate(15deg)",
                }}
              />
              Zoom Meeting
            </div>
            <div className=" text-white text-lg">
              9:00 - 11:00 | Sunday | 26/03/2023
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center p-4 absolute bottom-0 inset-x-0">
          www.mcivietnam.com.vn
        </div>
      </div>
    </div>
  );
};

function Banner() {
  return (
    <div className="bg-gray-300 flex items-center justify-center">
      <EventCard />
    </div>
  );
}

export default Banner;
