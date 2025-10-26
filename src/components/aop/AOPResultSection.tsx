import Image from "next/image";

export default function AOPResultSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white mb-24">
      <div className="container mx-auto px-4 sm:px-8 lg:px-46 flex flex-col justify-center items-center">
        {/* Heading */}
        <h3 className="text-text-esg-title font-bold text-2xl md:text-4xl mb-8 md:mb-24">
          RESULT
        </h3>

        {/* 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* 1 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/aop/aop-result-10배.webp`}
              alt={"saasd"}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="select-none pointer-events-none"
            />
            <p className="text-xl line-clamp-1 md:text-2xl lg:text-3xl tracking-tight font-normal text-gray-800">
              데이터 검색 속도 10배↑
            </p>
          </div>

          {/* 1 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/aop/aop-result-90.webp`}
              alt={"saasd"}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="select-none pointer-events-none"
            />
            <p className="text-xl line-clamp-1 md:text-2xl lg:text-3xl tracking-tight font-normal text-gray-800">
              지식 기반 정확도 95%
            </p>
          </div>
          {/* 1 */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`/assets/aop/aop-result-A.webp`}
              alt={"saasd"}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="select-none pointer-events-none"
            />
            <p className="text-xl line-clamp-1 md:text-2xl lg:text-3xl tracking-tight font-normal text-gray-800">
              자동 학습 및 업데이트
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
