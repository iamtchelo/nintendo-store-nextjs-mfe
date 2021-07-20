export default function Products() {
  return (
    <section className="products">
      <div className="product">
        <img
          src="https://a-static.mlcdn.com.br/618x463/nintendo-switch-mario-kart-8-deluxe/legiaogames/a50bb22cb28511eb95c64201ac18500e/2555cf71f5c8bb4e793cf2cbbbb8f7c0.jpg"
          width={250}
          height={375}
          alt="Mario Kart"
          className="product__image"
        />
      </div>
      <div className="product">
        <img
          src="https://livecards.it/pi/donkey-kong-country-tropical-freeze-switch-37319.png"
          width={250}
          height={375}
          alt="Donkey Kong"
          className="product__image"
        />
      </div>
      <div className="product">
        <img
          src="https://cdn.awsli.com.br/800x800/347/347499/produto/40844386/2e235181a8.jpg"
          width={250}
          height={375}
          alt="Overcooked"
          className="product__image"
        />
      </div>
    </section>
  );
}
