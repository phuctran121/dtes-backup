export default function WhyDTESBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-4xl p-4 ring-2 ring-white/60 md:cursor-auto cursor-pointer">
      <div className="rounded-2xl bg-white order border-white/40 p-12 shadow-lg h-full flex flex-col justify-center gap-4">
        {title && (
          <h3 className="text-[24px] font-semibold text-black text-center">
            {title}
          </h3>
        )}
        {text && (
          <p className="text-black text-xl font-medium leading-relaxed">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
