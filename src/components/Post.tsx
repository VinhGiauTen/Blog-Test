import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuCourses from "./MenuCourses";

const menu = [
  { id: 0, content: "Chia sẻ kinh nghiệm" },
  { id: 1, content: "Kiến thức chuyên môn" },
  { id: 2, content: "MCI Careers" },
  { id: 3, content: "Kinh nghiệm thực chiến" },
  { id: 4, content: "Lịch khai giảng" },
];

const Text = () => {
  return (
    <p className="py-3 text-sm">
      Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
      về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký
      nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường
      trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành
      công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em
      thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các
      ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
      ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
      không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn
      mà chỉ...
    </p>
  );
};

export default function Post() {
  return (
    <div>
      <div className="w-1/2 mx-auto my-10">
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
        <div className="flex divide-x-2 divide-gray-200 text-center my-5 items-center">
          {menu.map((m) => (
            <div
              key={m.id}
              className="text-orange-500 font-semibold flex-1 px-3 text-base"
            >
              {m.content}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F0F0F0] p-5 w-full">
        <p className="text-orange-500 font-semibold px-32">
          Trang chủ &gt; Blog &gt; Chia sẻ kinh nghiệm &gt; Bạn Nguyễn Quang
          Hưng - Học Data là 1 quá trình và mình đã vượt qua nó như nào
        </p>
      </div>
      <div className="my-10 grid grid-cols-4 items-start w-3/4 mx-auto gap-5">
        <div className="col-span-3 mr-24">
          <div className="text-orange-500 text-2xl font-bold my-2">
            Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua
            nó như nào
          </div>
          <div className="w-[200px] bg-orange-500 h-[6px] rounded-full my-3"></div>
          <Text />
          <div className="bg-[#F5F5F5] rounded-2xl my-3 p-5 px-10 drop-shadow-xl">
            <div className="flex text-orange-500 font-bold text-2xl">
              <FontAwesomeIcon icon={faBars} className="h-8 mr-5" />
              Nội dung bài viết
            </div>
            <ul className="list-decimal list-inside my-3 space-y-2 ml-5">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index}>Nội dung bài viết</li>
              ))}
            </ul>
          </div>
          <Text />
          <Text />
          <Text />
          <div className="bg-orange-500 h-72"></div>
          <Text />
          <Text />
        </div>
        {/* Banner & Các khóa học */}
        <div className="sticky top-8">
          <div className="bg-orange-500 h-96 mb-10"></div>
          <div className="text-orange-500 text-2xl font-bold my-3">
            Các khóa học
          </div>
          <div className="w-[200px] bg-orange-500 h-[6px] rounded-full my-3"></div>
          <MenuCourses />
          <div className="bg-orange-500 rounded-xl p-5 my-5">
            <p className="text-white font-bold uppercase text-2xl text-center">
              Đăng ký tư vấn khóa học
            </p>
            <div className="text-white my-5 space-y-3">
              {["Họ và tên", "Email", "Số điện thoại"].map((label) => (
                <div key={label}>
                  {label}:
                  <input
                    type="text"
                    className="w-full h-8 text-black rounded mt-1"
                  />
                </div>
              ))}
              Khóa học bạn muốn tư vấn:
              <select className="w-full h-8 text-black rounded mt-1">
                <option>Phân tích dữ liệu</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white p-2 px-5 rounded font-bold hover:-translate-y-2 transition">
                Đăng ký tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
