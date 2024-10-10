export function Routes() {
  return (
    <div className="font-bold">
      <div>
        <h3 className="flex gap-[34px] text-[28px] tracking-[2px]">
          <span className="text-orange-700">01</span>
          <span>COLORS</span>
        </h3>
        <div className="mt-14 grid w-fit grid-cols-4 gap-[30px] *:grid *:h-[96px] *:w-[255px] *:place-items-center *:rounded-[8px]">
          <div className="bg-orange-700">Orange 700</div>
          <div className="bg-gray-900 text-white">Gray 900</div>
          <div className="bg-gray-100">Gray 100</div>
          <div className="bg-gray-50">Gray 50</div>
          <div className="bg-orange-400">Orange 400</div>
          <div className="border border-gray-900/20 bg-white">White</div>
          <div className="bg-black text-white">Black</div>
        </div>
      </div>
    </div>
  );
}
