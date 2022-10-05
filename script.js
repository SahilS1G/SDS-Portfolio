// let canvas = document.getElementById("demo-canvas")

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;
const cols = Math.floor(w/20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = 'green';
  ctx.font = '15pt monospace';
  
  ypos.forEach((f, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, f);
    if (f > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] =  f+ 20;
  });
}

setInterval(matrix, 50);

//slider

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 0.5
})

observer.observe(document.querySelector(".abt-title"))
observer.observe(document.querySelector(".wtitle"))
observer.observe(document.querySelector(".bg"))
observer.observe(document.querySelector(".title-text"))
observer.observe(document.querySelector(".pr-title"))

//work

const teleport = document.getElementById("teleport")

function work(){
  document.getElementById("teleport").classList.add("teleport");
  
  document.getElementById("myprojects").innerHTML = `
  <div class="title-text">
                <div class="pr-bg"></div>
                <div class="pr-bg-2"></div>
                <div class="pr-title">
                    Planet Simulator
                </div>
                <div class="pr-text">
                    <ul>
                        <li>Planet Simulator is a project that I made in my 1st year of college. It is a simulation of
                            the solar system. It is made using python and the python library pygame.</li>
                        </li>
                        <li>
                            I used real data of the planets and the sun to make the simulation as accurate as possible.
                        </li>
                        <li>
                            If you want to know more about the project you can check out the github repo.
                        </li>
                        <li>
                            <a href="https://github.com/SahilS1G/planet-simulator" target="_blank">Planet Simulator</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="title-text">
                <div class="pr-bg"></div>
                <div class="pr-bg-2"></div>
                <div class="pr-title">
                    Voice Recognizer
                </div>
                <div class="pr-text">
                    <ul>
                        <li>
                            Voice Recognizer is a project that I made in my 1st year of college. It is a voice recognition
                            software that can recognize the voice of the user and perform the desired action.
                        </li>
                      
                        <li>
                            It is made using python and the python library speech_recognition.
                        </li>
                        <li>
                            If you want to know more about the project you can check out the github repo.
                        </li>
                        <li>
                            <a href="https://github.com/SahilS1G/voice-recognizer" target="_blank">Voice Recognizer</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="title-text">
                <div class="pr-bg"></div>
                <div class="pr-bg-2"></div>
                <div class="pr-title">
                    Notes website
                </div>
                <div class="pr-text">
                    <ul>
                        <li>
                            Notes website is a project that I made in my 1st year of college. It is a website that can be used
                            to store notes.
                        </li>
                        </li>
                        <li>
                            It is made using HTML, CSS, JavaScript.
                            <br>
                            Bootstrap is used for the frontend.
                        </li>
                        <li>
                            If you want to know more about the project you can check out the github repo.
                        </li>
                        <li>
                            <a href="https://github.com/SahilS1G/notes-app" target="_blank">Notes website</a>
                        </li>
                    </ul>
                </div>
            </div>
  `
}

