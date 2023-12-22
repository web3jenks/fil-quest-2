import './font/PressStart2P-Regular.ttf';
import './custom.css';
import './css/nes.min.css';
import FilecoinLogo from "./img/filecoin-logo.png";
import IpfsLogo from "./img/ipfs-logo.png";
import SpheronLogo from "./img/spheron-logo.png";
import Screen1 from './img/screen1.png';
import Screen2 from './img/screen2.png';
import SpheronGif from "./img/spheron-gif.gif";

function App() {
  return (
    <div className="App" style={{
      padding:30,
      alignItem: 'center',
      display: 'flex',
      justifyContent: 'center'
    }}>
      
      <div style={{
        maxWidth: '600px',
        width: '600px'
      }}>

        <header className="App-header">
        <div style={{textAlign: "center"}}>
          <img src={FilecoinLogo} alt="Filecoin Logo" style={{display: 'inline-block', height: 80}}/>
          <img src={IpfsLogo}  alt="IPFS Logo" style={{display: 'inline-block', height: 80}}/>
        </div>

        <br />
        <h3>Deploy a Site Quest</h3>
        <br />
        </header>

        <div class="content" style={{

        }}>
          <div className="nes-container with-title">
            <h1 class="title">About</h1>
            <p class="nes-baloon from-left nes-pointer">
              "In this quest you will deploy a website to IPFS & Filecoin via Spheron."
              <br />

              <br />
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img src={SpheronLogo}  alt="Spheron Logo" style={{width: 300, height: 'auto'}}/>
                </div> 
              <br />
              
              <br />
              Spheron is a app deployment and hosting platform that leverage the power of decentralised networks like IPFS & Filecoin..

              <br />
              <br />
              <br />
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img src={SpheronGif}  alt="Spheron Gif" style={{display: 'inline-block', width: '80%'}}/>
              </div> 
              <br />
              <br />
            </p>
          </div>
          <br />
          <br />

          <sectoin>
            <h2> 
              <a style={{color: 'blue'}}>#</a> Step 1
            </h2>
          </sectoin>

          <div className="nes-container">
            <div>
              <i class="nes-mario"></i>

              <progress class="nes-progress is-error" value="20" max="100"></progress>

              <br />
              <br />
              <ur class="nes-list is-disc">
                <li>Fork this linktree example app Github Repo (You may need an Github account)</li>
                <br />
                <li>Change the "Title" or Logo of the site to your team or project name</li>
                <br />
              </ur>  
              <div class="item" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <br />
                <a class="nes-btn is-primary" href="https://github.com/login?return_to=%2FspheronFdn%2Flink-tree-app" target="_blank" rel="noopener"> Clone Repo</a>
              </div>
              <br />

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <i class="nes-octocat animate"></i>
              </div>
              
            </div>

          </div>
          <br />
          <br />

          <sectoin>
            <h2> 
              <a style={{color: 'blue'}}>#</a> Step 2
            </h2>
          </sectoin>

          <div className="nes-container">
              <i class="nes-squirtle" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '300px'}}></i>
              <br />
              <progress class="nes-progress is-success" value="50" max="100"></progress>
              <br />
              <br />
              <ur class="nes-list is-disc">
                <li>Create a Spheron account </li>
                <br />
                <li>Authorize your Github account & your repo</li>
                <br />
              </ur>  

              <img src={Screen1} style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '50%'}} />
                <br/>

              
              <div class="item" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <a class="nes-btn is-success" href="https://app.spheron.network/#/signup" target="_blank" rel="noopener" > Go to Spheron</a>
              </div>
          </div>
          <br />
          <br />

          <sectoin>
            <h2> 
              <a style={{color: 'blue'}}>#</a> Step 3
            </h2>
          </sectoin>

          <div className="nes-container">
              <i class="nes-pokeball" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '30px'}}></i>
              <br/>
              <progress class="nes-progress is-primary" value="80" max="100"></progress>
              <br />
              <br />
              <ur class="nes-list is-disc">
                <li> Select the repo you just modified </li>
                <br />
                <li>Click "Deploy"</li>
                <br />
                <li>Wait for site deployment and visit the site</li>
                <br />
                <li>Get the IPFS link</li>
                <br />
                <li>Get spheron.app link</li>
                <br />
                <li>Show us your site on IPFS and enjoy the swag!</li>
                <br />
              </ur>  

              <img src={Screen2} style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '80%'}} />
                <br/>

              <section class="icon-list">
                <i class="nes-icon trophy is-large" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '60px'}}></i>
              </section>
          </div>
          <br />
          <br />

          <sectoin class="topic">
            <h2> 
              <a style={{color: 'blue'}}>#</a> Finally
            </h2>
            <article class="article-link"><h3 class="title"><a href="https://hackathons.filecoin.io" target="_blank" rel="noopener"><span> Check out our other Hackathons</span></a></h3></article>
            <br />
            <i class="nes-icon is-large like" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '70px'}}></i>
            <br />
            <p> Check out the 
                <a href="https://linktr.ee/filecoinquest"> Filecoin Quests </a>
                for more information about other IPFS & Filecoin Dev Quests.
              </p>
          </sectoin>

        </div> 
      </div> 
    </div>
  );
}

export default App;
