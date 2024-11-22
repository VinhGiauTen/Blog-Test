import img from "../assets/Facebook.png";

const hanoi = [
  {
    id: 0,
    name: "165 Thái Hà",
    hotline: "024 7106 8368",
    add: "Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam",
  },
  {
    id: 1,
    name: "30 Trung Liệt",
    hotline: "024 7106 8368",
    add: "Số 30, Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội, Việt Nam",
  },
];

const hcm = [
  {
    id: 0,
    name: "HCM - 13 Cao Thắng",
    hotline: "024 7106 8368",
    add: "13 Cao Thắng, Phường 2, Quận 3, Thành Phố Hồ Chí Minh",
  },
  {
    id: 1,
    name: "HCM - 224 Điện Biện Phủ",
    hotline: "024 7106 8368",
    add: "Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam",
  },
  {
    id: 2,
    name: "HCM - 677/6 Điện Biện Phủ",
    hotline: "024 7106 8368",
    add: "Tầng 4, Yoko Building 677/6, Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
  },
];

const contacts = [
  { title: "Khiếu nại CEO", info: "0982 521 378" },
  { title: "Khiếu nại DCEO", info: "0916 442 368" },
  { title: "Hợp tác truyền thông", info: "0934 146 016" },
  { title: "Hợp tác kinh doanh", info: "0961 123 988" },
  { title: "Khiếu nại dịch vụ CSKH", info: "024 7106 8368" },
  { title: "Tư vấn khóa học 1", info: "Ms. Khánh Ly 0352 433 233" },
  { title: "Tư vấn khóa học 2", info: "Ms. Ngọc Linh 0344 463 698" },
  { title: "CSKH", info: "cskh@mcivietnam.com" },
];

type Location = {
  id: number;
  name: string;
  hotline: string;
  add: string;
};

type ListProps = {
  list: Location[];
  city: string;
};
const List = ({ list, city }: ListProps) => {
  return (
    <div>
      <div>
        <div className="text-white text-3xl font-semibold my-2">{city}</div>
        <div className="w-[80px] bg-white h-1 rounded-full"></div>
        <div className="text-white my-5 pr-5">
          {list.map((h) => (
            <div key={h.id} className="font-bold my-3 text-sm">
              <p>{h.name}</p>
              <p>
                Hotline: <span className="font-normal">{h.hotline}</span>
              </p>
              <p>
                Địa chỉ: <span className="font-normal">{h.add}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="bg-[#3E3E3E]">
      <div className=" p-5 flex space-x-5 w-4/5 mx-auto">
        <img src={img} className="w-[400px] h-max p-5 basis-1/4" />
        <div className="basis-3/4 flex">
          <List list={hanoi} city="Hà Nội" />
          <List list={hcm} city="Hồ Chí Minh" />
          <div className="">
            <div className="text-white text-3xl font-semibold my-2 uppercase">
              Hotline
            </div>
            <div className="w-[80px] bg-white h-1 rounded-full"></div>
            <div className="text-sm my-5">
              {contacts.map((contact, index) =>
                contact.title.includes("Tư vấn khóa học") ? (
                  <div key={index} className="text-white font-semibold ">
                    <p>
                      {contact.title}: <br /> {contact.info}
                    </p>
                  </div>
                ) : (
                  <p
                    key={index}
                    className="text-white font-semibold whitespace-nowrap"
                  >
                    {contact.title}: {contact.info}
                  </p>
                )
              )}
            </div>
            <div className="my-2 text-white">Chính sách bảo mật</div>
          </div>
        </div>
      </div>
    </div>
  );
}
