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
];

export default function RelatePost() {
  return (
    <div className="my-5 py-5 bg-[#F0F0F0]">
      <div className="text-center">
        <div className="text-orange-500 text-2xl font-semibold my-5">
          Các bài đăng liên quan
        </div>
        <div className="w-[200px] bg-orange-500 h-2 rounded-full mx-auto"></div>
      </div>
      <div className="flex py-10 w-3/4 mx-auto space-x-10">
        {data.map((d) => (
          <div key={d.id} className="space-y-3 relative text-sm">
            <div className="bg-orange-500 h-52 mx-auto"></div>
            <p className="text-orange-500 font-bold">{d.title}</p>
            <p className="pb-8">{d.content}</p>
            <p className="text-orange-500 absolute bottom-0 right-0">
              Xem thêm
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
