import logo from "../assets/logo-moi-01png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 0,
    title: "Khóa học",
  },
  {
    id: 1,
    title: "lịch đào tạo",
  },
  {
    id: 2,
    title: "doanh nghiệp",
  },
  {
    id: 3,
    title: "blog",
  },
  {
    id: 4,
    title: "về chúng tôi",
  },
];

export default function Header() {
  return (
    <div className="bg-[#f1692f] flex justify-between">
      <div className="flex">
        <img src={logo} className="invert brightness-0" width={"100px"} />
        <div className="flex gap-5 ml-5">
          {data.map((d) => (
            <div
              key={d.id}
              className="uppercase text-white text-sm content-center"
            >
              {d.title}
              {d.id !== 3 && (
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="content-center px-3">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-200 h-5"
          />
        </div>
        <button className="m-2 px-5 rounded-md text-[#f1692f] bg-white drop-shadow-xl border border-white hover:bg-[#E87500] hover:text-white hover:border transition">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
