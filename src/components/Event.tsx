import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//  Dữ liệu ảnh
const images = [
  ["Image 1", "Image 2", "Image 3"],
  ["Image 4", "Image 5", "Image 6"],
  ["Image 7", "Image 8", "Image 9"],
  ["Image 10", "Image 11", "Image 12"],
  ["Image 13", "Image 14", "Image 15"],
];

const Carousel = () => {
  const settings = {
    dots: true, // Hiển thị chấm chỉ báo
    infinite: true, // Lặp vô hạn
    speed: 500, // Thời gian chuyển cảnh
    slidesToShow: 1, // Hiển thị 1 "trang" tại một thời điểm
    slidesToScroll: 1, // Cuộn 1 "trang" mỗi lần
    arrows: true, // Hiển thị mũi tên trái/phải
    autoplay: true, // Bật tự động chuyển
    autoplaySpeed: 3000, // Chuyển slide mỗi 3 giây
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      {/* Slider */}
      <Slider {...settings}>
        {images.map((group, index) => (
          <div key={index} className="flex flex-col">
            {group.map((idx) => (
              <div
                key={idx}
                className="h-52 bg-orange-500 flex items-center justify-center rounded-xl m-5"
              >
                <p className="text-white text-lg"></p>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

const menu = [
  { id: 0, content: "Chia sẻ kinh nghiệm" },
  { id: 1, content: "Kiến thức chuyên môn" },
  { id: 2, content: "MCI Careers" },
  { id: 3, content: "Kinh nghiệm thực chiến" },
  { id: 4, content: "Lịch khai giảng" },
];

const data = [
  {
    id: 0,
    img: "img",
    title:
      "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 1,
    img: "img",
    title:
      "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 2,
    img: "img",
    title:
      "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 3,
    img: "img",
    title:
      "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 4,
    img: "img",
    title:
      "Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
];

export default function Event() {
  return (
    <div className="flex w-5/6 mx-auto p-5 gap-5">
      <div className="basis-1/3">
        <div className="text-orange-500 text-2xl font-semibold my-5">
          Sự kiện của MCI
        </div>
        <div className="w-[200px] bg-orange-500 h-1 rounded-full"></div>
        <Carousel />
      </div>
      <div className="mx-5 basis-2/3 ">
        <div className="flex rounded-full gap-2 items-center bg-white relative border-2 border-[#818080]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-5 h-5 pointer-events-none absolute left-5 text-[#818080]"
          />
          <input
            type="search"
            placeholder="Tìm kiếm bài viết"
            className="p-1 px-14 w-full rounded-full "
          />
        </div>
        <div className="flex divide-x-2 divide-gray-200 text-center my-2 items-center">
          {menu.map((m) => (
            <div
              key={m.id}
              className="text-orange-500 font-semibold flex-1 px-3 text-base"
            >
              {m.content}
            </div>
          ))}
        </div>
        <div>
          {data.map((d) => (
            <Link to={"/content"} key={d.id}>
              <div className="flex space-x-4 my-5 relative">
                <div className="bg-[#D9D9D9] rounded-xl h-[180px] w-[400px]"></div>
                <div className="text-[14px] w-2/3">
                  <p className="text-[#F1692F] font-semibold">{d.title}</p>
                  <p>{d.content}</p>
                </div>
                <p className="underline text-orange-500 absolute bottom-0 right-0">
                  Xem thêm
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
