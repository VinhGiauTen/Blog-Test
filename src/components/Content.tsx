// Dữ liệu ảnh
const images = [
  { id: 0, style: "bg-orange-500 col-span-2 " },
  { id: 1, style: "bg-[#D9D9D9] " },
  { id: 2, style: "bg-[#D9D9D9] " },
  { id: 3, style: "bg-orange-500 col-span-2 " },
];

const data = [
  {
    id: 0,
    title: "Phân tích dữ liệu",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 1,
    title: "Khoa học dữ liệu",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 2,
    title: "Kĩ sư dữ liệu",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
  {
    id: 3,
    title: "Lập trình ứng dụng",
    content:
      "Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...",
  },
];

export default function Content() {
  return (
    <div>
      <div className="my-5 bg-[#F0F0F0] py-5">
        <div className="text-center">
          <div className="text-orange-500 text-2xl font-semibold my-5">
            Thư viện ảnh
          </div>
          <div className="w-[200px] bg-orange-500 h-1 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-5 w-2/3 mx-auto">
          {images.map((i) => (
            <div key={i.id} className={`rounded-xl h-56 ${i.style}`}></div>
          ))}
        </div>
      </div>
      <div className="my-5 py-5">
        <div className="text-center">
          <div className="text-orange-500 text-2xl font-semibold my-5">
            Chương trình đào tạo của MCI
          </div>
          <div className="w-[200px] bg-orange-500 h-1 rounded-full mx-auto"></div>
        </div>
        <div className="flex py-10 w-3/4 mx-auto space-x-10">
          {data.map((d) => (
            <div key={d.id} className="space-y-3 relative">
              <div className="bg-orange-500 h-64 w-64 rounded-full mx-auto"></div>
              <p className="text-orange-500 font-bold text-xl text-center">
                {d.title}
              </p>
              <p className="text-sm pb-8">{d.content}</p>
              <p className="text-orange-500 absolute bottom-0 right-0 hover:underline">
                Xem thêm
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
