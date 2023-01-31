
const App = () => {
  return (
    <main>
      <section className="glass">
        <div className="dashboard">
          <div className="user">
            <img src="./images/foto.PNG" className="foto" alt="" />
            <h3>Jose Marcano</h3>
            <p>Devloper Frontend/Backend</p>
          </div>
          <div className="links">
            <div className="link">
              <img src="./images/twitch.png" className="icono" alt="" />
              <h2>Streams</h2>
            </div>
            <div className="link">
              <img src="./images/steam.png" className="icono" alt="" />
              <h2>Games</h2>
            </div>
            <div className="link">
              <img src="./images/gamepad.png" className="icono" alt="" />
              <h2>New</h2>
            </div>
            <div className="link">
              <img src="./images/xbox.png" className="icono" alt="" />
              <h2>Library</h2>
            </div>
          </div>
          <div className="pro">
            <h2>Join pro free game</h2>
            <img src="./images/360.png" className="img-panel" alt="" />
          </div>
        </div>
        <div className="games">
          <div className="status">
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <div className="cards">
            <div className="card">
              <img src="./images/360.png" className="icono" alt="" />
              <div className="card-info">
                <h2>Assasins Creed</h2>
                <p>PS5 version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            <div className="card">
              <img src="./images/360.png" className="icono" alt="" />
              <div className="card-info">
                <h2>Assasins Creed</h2>
                <p>PS5 version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
            <div className="card">
              <img src="./images/360.png" className="icono" alt="" />
              <div className="card-info">
                <h2>Assasins Creed</h2>
                <p>PS5 version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
          </div>
        </div>

      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    
    </main>
  )
}

export default App
