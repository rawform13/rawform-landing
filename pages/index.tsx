export default function Home() {
  return (
    <div className="container">
      <picture>
        <source media="(max-width: 768px)" srcSet="/hero-mobile.jpg" />
        <img src="/hero-desktop.jpg" alt="RAWFORM13 Próximamente" className="hero" />
      </picture>

      <div className="overlay">
        <h1>PRÓXIMAMENTE</h1>
        <h2 className="logo">RAWFORM13</h2>
        <p className="tagline">Las formas toman vida en RAWFORM13</p>
        <p className="made">Made for Collectors</p>
      </div>
    </div>
  );
}
