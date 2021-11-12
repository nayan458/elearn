
let svgtxt = `<svg id="playBtnn" viewBox="0 0 120 114" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3:32)">
<path d="M115 53C115 81.6676 90.4283 105 60 105C29.5717 105 5 81.6676 5 53C5 24.3324 29.5717 1 60 1C90.4283 1 115 24.3324 115 53Z" stroke="#3B117B" stroke-width="2"/>
<path d="M81 53L50.25 70.3205V35.6795L81 53Z" fill="#3B117B"/>
</g>
<defs>
<filter id="filter0_d_3:32" x="0" y="0" width="120" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3:32"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3:32" result="shape"/>
</filter>
</defs>
</svg>
`;

let intro = `
<div id="main_01_sub">
                
<p>e-Learning</p>
<p>"TO STRIVE, TO <span><br></span> SEEL, <span><br></span>TO LEARN AND NOT <span><br></span>TO TIELD"</p>
<p>
    <div id="main_01_sub_03">
        <a id="main_01_sub_03" href="#">
            <div>
                <!-- <div>
                    <div>
                        <div> -->
                        <div class="video-btn-icon">
                            <p id="trioBtnn"></p>
                        </div>
                        <!-- </div>
                    </div>
                </div> -->
            </div>
            <div>
                <p>
                    <span id="txt_01">START LEARNING</span> <span><br></span><span id="txt_02">Register Now</span></p>
            </div>
            
        </div>
        </a>
</p>
</div>
`
window.addEventListener('load',()=>{
    // document.getElementById('main_01').innerHTML = intro
    document.getElementById('trioBtnn').innerHTML = svgtxt
})

let btnn = document.getElementById('main_01_sub_03');
    function ftcDta(){
        let app = new XMLHttpRequest();
        app.open('GET',"/dta",true);
        app.onload = function(){
            if(this.status === 200)   {
                let Dta = this.responseText;
                document.getElementById('main_01').innerHTML = Dta;
                let signin = document.getElementById('main_01_SignIn_btnn');
                signin.addEventListener('click',
                ()=>{
                    alert('You have successfuly registered')
                    location.href='http://www.kcdccollege.ac.in/';
                                                     }
                                                )
            }
            else
                console.log("Error")
        }
        app.send();
    };
    btnn.addEventListener('click',ftcDta);
