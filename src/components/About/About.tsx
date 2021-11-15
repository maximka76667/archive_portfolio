import './About.css';

function About() {
  return (
    <main className="about">
      <img src="./" alt="" className="about__photo" />
      <div className="about__info">
        <h2 className="about__name">Maxim</h2>
        <p className="about__short">Frontend and Backend Web Developer</p>
        <p className="about__story">I was born in Astana, now I live in Santiago de Compostela. I am studying at the College of Application Development. I love listening to music, and I'm also fond of video games. This year I started coding.</p>
      </div>
    </main>
  )
}

export default About;