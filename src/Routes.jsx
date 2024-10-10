import products from "./products.json";

export function Routes() {
  return (
    <div className="w-fit font-bold">
      <h3>Hello Audiophile</h3>
      <ul className="space-y-10 divide-y divide-solid divide-black *:pt-10">
        {products.map((p) => {
          return (
            <li key={p.id}>
              <h2>{p.name}</h2>
              <p className="font-bold capitalize">{p.category}</p>
              <img src={p.image.mobile} alt={p.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
