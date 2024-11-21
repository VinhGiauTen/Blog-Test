import { useState } from "react";

const menuCourses = [
  {
    title: "Phân tích dữ liệu",
    subItems: [
      { title: "Phân tích dữ liệu" },
      { title: "Phân tích dữ liệu" },
      { title: "Phân tích dữ liệu" },
    ],
  },
  {
    title: "Kĩ sư dữ liệu",
    subItems: [
      { title: "Kĩ sư dữ liệu" },
      { title: "Kĩ sư dữ liệu" },
      { title: "Kĩ sư dữ liệu" },
    ],
  },
  {
    title: "Khoa học dữ liệu",
    subItems: [{ title: "Khoa học dữ liệu" }, { title: "Khoa học dữ liệu" }],
  },
  {
    title: "Lập trình ứng dụng",
    subItems: [
      { title: "Lập trình ứng dụng" },
      { title: "Lập trình ứng dụng" },
    ],
  },
];

interface SubItem {
  title: string;
}

interface MenuItem {
  title: string;
  subItems: SubItem[];
}

interface MenuItemProps {
  item: MenuItem;
  index: number;
  activeIndex: number | null;
  onClick: (index: number) => void;
}

const MenuItem = ({ item, index, activeIndex, onClick }: MenuItemProps) => {
  const isActive = activeIndex === index;
  return (
    <li>
      <div
        className={`flex items-center space-x-10 px-4 py-2 hover:bg-gray-200 rounded-xl border-b-2 border-dotted ${
          isActive ? "text-[#DE8D1E]" : ""
        }`}
        onClick={() => onClick(index)}
      >
        <span className="w-full">{item.title}</span>
      </div>
      {isActive && (
        <ul className="ml-5 space-y-3 my-3 text-gray-700">
          {item.subItems.map((subItem, subIndex) => (
            <li
              key={subIndex}
              className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-xl border-b-2 border-dotted"
            >
              {subItem.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default function MenuCourses() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="">
      <ul className="flex flex-col space-y-5">
        {menuCourses.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
