export function Routes() {
  return (
    <div className="space-y-20 font-manrope font-bold">
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
      <div>
        <h3 className="flex gap-[34px] text-[28px] tracking-[2px]">
          <span className="text-orange-700">01</span>
          <span>TYPOGRAPHY</span>
        </h3>
        <div className="grid grid-cols-2">
          <div className="w-[518px] space-y-10 uppercase">
            <h1 className="text-5xl">Morbi interdum mollis sapien</h1>
            <h2 className="text-4xl">Donec nec justo eget felis facilisis</h2>
            <h3 className="text-3xl">Nunc sem lacus accum</h3>
            <h4 className="text-2xl">interdum consectetuer</h4>
            <h5 className="text-xl">nascetur ridiculus mus</h5>
            <h6 className="text-lg">natoque penatibus et</h6>
            <p className="text-sm text-orange-700">LOREM IPSUM</p>
            <p className="text-xs text-orange-700">
              Fusce ut est sed dolor gravida convallis
            </p>
          </div>
          <div className="space-y-[38px] text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed
              ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus
              arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel
              lacus. Mauris nibh felis, adipiscing varius, adipiscing in,
              lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque
              mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae,
              ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
              vulputate vel, nisl.
            </p>
            <p>
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a
              sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem
              lacus, accumsan quis, faucibus non, congue vel, arcu. Ut
              scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris
              eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus
              imperdiet nibh feugiat est.
            </p>
            <p>
              Ut convallis, sem sit amet interdum consectetuer, odio augue
              aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna
              sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor
              elementum imperdiet. Quisque fermentum. Cum sociis natoque
              penatibus et magnis xdis parturient montes, nascetur ridiculus
              mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel
              tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida
              convallis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
