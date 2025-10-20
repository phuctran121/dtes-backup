import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/assets/icons/rocket.svg",
    title: "01. ESG 통합관리",
  },
  {
    id: 2,
    icon: "/assets/icons/rocket.svg",
    title: "02. 탄소배출 자동산정",
  },
  {
    id: 3,
    icon: "/assets/icons/rocket.svg",
    title: "03. 리포팅 자동화",
  },
  {
    id: 4,
    icon: "/assets/icons/rocket.svg",
    title: "04. 리스크 진단",
  },
  {
    id: 5,
    icon: "/assets/icons/rocket.svg",
    title: "05. 공급망 ESG 관리",
  },
];

export default function ESGFeatureIcons() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-8 md:gap-10 lg:gap-12">
      {features.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center gap-2 md:gap-4 lg:gap-6"
        >
          <div className="size-20 md:size-40 lg:size-60 flex items-center justify-center rounded-full bg-blue-50 mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <p className="text-xs md:text-xl lg:text-2xl font-bold text-gray-800">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
