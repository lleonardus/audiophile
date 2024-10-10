import products from "./products.json";

export function Routes() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3>Hello Audiophile</h3>
      <ul>
        {products.map((p) => {
          return (
            <li key={p.id}>
              <h2>{p.name}</h2>
              <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                {p.category}
              </p>
              <img src={p.image.mobile} alt={p.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
