import './font/PressStart2P-Regular.ttf';
import './custom.css';
import './css/nes.min.css';
import FilecoinLogo from "./img/filecoin-logo.png";
import IpfsLogo from "./img/ipfs-logo.png";
import SpheronLogo from "./img/spheron-logo.png";
import Screen1 from './img/screen1.png';
import Screen2 from './img/screen2.png';

function App() {
  return (
    <div className="App" style={{padding:30}}>
      <header className="App-header">
      <div style={{textAlign: "center"}}>
        <img src={FilecoinLogo} alt="Filecoin Logo" style={{display: 'inline-block', height: 80}}/>
        <img src={IpfsLogo}  alt="IPFS Logo" style={{display: 'inline-block', height: 80}}/>
      </div>
      <br />
      <h3>The "If you can code ..." Quest</h3>
      <br />
      </header>

      <div class="content">
        <div className="nes-container with-title">
          <h1 class="title">About</h1>
          <p class="nes-baloon from-left nes-pointer">
            "This quest you will deploy an website for your hackathon project to Spheron."
            <br />

            <br />
            <img src={SpheronLogo}  alt="Spheron Logo" style={{display: 'inline-block', height: 80}}/>
            <br />
            
            <br />
            Spheron is a app deployment and hosting platform that uses the power of IPFS and Filecoin.
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
            <ur class="nes-list is-disc">
              <li>Create a Github account (if you don't have one)</li>
              <br />
              <li>Fork this Github Repo</li>
              <br />
              <li>Change the "Title" or Logo of the site to your team or project name</li>
              <br />
            </ur>  
            <div class="item">
              <a class="nes-btn" href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs" target="_blank" rel="noopener"> Go to Github</a>
              <a class="nes-btn is-primary" href="https://github.com/login?return_to=%2FspheronFdn%2Flink-tree-app" target="_blank" rel="noopener"> Clone Repo</a>
            </div>
            <br />
            <i class="nes-octocat animate"></i>
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
            <i class="nes-squirtle"></i>
            <progress class="nes-progress is-success" value="50" max="100"></progress>
            <ur class="nes-list is-disc">
              <li>Create a Spheron account </li>
              <br />
              <li>Authorize your Github account</li>
              <br />
            </ur>  

            <img src={Screen1} style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '50%'}} />
              <br/>

            
            <div class="item">
              <a class="nes-btn is-success" href="https://app.spheron.network/#/signup" target="_blank" rel="noopener" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '80%'}}> Go to Spheron</a>
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
            <i class="nes-pokeball" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '50%'}}></i>
            <br/>
            <progress class="nes-progress is-primary" value="80" max="100"></progress>
            <ur class="nes-list is-disc">
              <li> Select the repo you just modified </li>
              <br />
              <li>Click Deploy</li>
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

            <img src={Screen2} style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '90%'}} />
              <br/>

            <section class="icon-list">
              <i class="nes-icon trophy is-large" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '50%'}}></i>
            </section>
        </div>
        <br />
        <br />

        <sectoin class="topic">
          <h2> 
            <a style={{color: 'blue'}}>#</a> Finally
          </h2>
          <article class="article-link"><h3 class="title"><a href="https://hackathons.filecoin.io" target="_blank" rel="noopener"><span> Check out our other Hackathons</span></a></h3></article>
        </sectoin>


      </div> 



    </div>
  );
}

export default App;
