import './Main.css';

function Main() {
  return (
    <main className="content">
      <div className="welcome">
        <p className="welcome__welcome">Welcome</p>
        <p className="welcome__greeting">to portfolio page of</p>
        <h1 className="welcome__header">Maxim G<span>rivennyy</span></h1>
      </div>
      <section className="works">
        <div className="works__container">
          <a href="http://github.io" className="work">
          <div className="work__info">
              <h3 className="work__name">Work</h3>
              <p className="work__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis vero blanditiis ex beatae magnam, veritatis id ab tenetur tempore impedit illum harum temporibus maxime natus incidunt. Delectus, tempora expedita?</p>
            </div>
            <img src="./" alt="" />
          </a>
          <a href="http://github.io" className="work">
            <div className="work__info">
              <h3 className="work__name">Work</h3>
              <p className="work__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis vero blanditiis ex beatae magnam, veritatis id ab tenetur tempore impedit illum harum temporibus maxime natus incidunt. Delectus, tempora expedita?</p>
            </div>
            <img src="./" alt="" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Main;