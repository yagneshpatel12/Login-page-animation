let animationcount;

//taking elemet to variable
const circle1 = document.getElementById('circle1')
const circle2 = document.getElementById('circle2')
const trianglesmall = document.getElementById('trianglesmall')
const tribox = document.getElementById('tribox');
const text = document.getElementById('text');
const parahead = document.getElementsByClassName('parahead')[0];
const imagebox = document.getElementsByClassName('image')[0];
const input2 = document.getElementsByClassName('input2')[0];
const input1 = document.getElementById('input1');
const img = document.getElementsByTagName('img');
const forwardbtn = document.getElementById('forwadbtn')
const inputarea = document.getElementById('inputarea')
const allinput = document.getElementsByTagName('input')
const mainpoint = document.getElementsByClassName('mainpoint')
const border = document.getElementById('border')
const loginbtn = document.getElementById('loginbtn')
const changenum = document.getElementById('changenum')
const resendotp = document.getElementById('resendotp')
const container = document.getElementsByClassName('container')[0];

function anifunc1() {

    //if user press changenumber
    if (animationcount == 1) {

        //removing and set the some attribute
        container.removeAttribute('id');
        border.classList.remove('inputareaborder');
        mainpoint[0].innerHTML = ``;
        circle1.setAttribute('id', 'circle1');
        circle2.setAttribute('id', 'circle2');
        trianglesmall.setAttribute('id', 'trianglesmall');
        text.setAttribute('id', 'text');

        trianglesmall.classList.add('triangle');
        trianglesmall.classList.remove('trianglesmallright');

        for (i = 0; i < 4; i++) {
            allinput[i].classList.remove('setpinposi')
        }

        inputarea.innerHTML = `<input type="text" class="inputani" value="+91" id="input1" >
        <input type="text" class="input2 inputani" placeholder="Enter your mobile number">
        <i class="fa fa-chevron-circle-right" class="inputani" aria-hidden="true" id="forwadbtn" onclick="anifunc1()"></i>`

        //removing some classes
        tribox.classList.remove('tribox1');
        imagebox.classList.remove('imageboxposi')
        img[0].classList.remove('imgposi');
        parahead.classList.remove('paraheadposi')

        //putting animation to element
        parahead.innerText = 'LOG IN';
        circle1.style.animation = ` circle1right 2s`;
        circle2.style.animation = `circle2right 2s `;
        trianglesmall.style.animation = `trianglesmallright 2s  `;
        text.style.animation = `textright 2s`;
        tribox.style.animation = `rounderright 2s`;
        imagebox.style.animation = `imageboxright 2s`;
        img[0].style.animation = `imgright 2s`;
        parahead.style.animation = `paraheaddown 2s`;
        text.innerHTML = `WELCOME<br>&nbsp;&nbsp;BACK`;
        animationcount = 0;
    }
    //if user press blue forward button
    else {
        // change the background color
        container.setAttribute('id', 'changebg');

        //putting animation to element
        circle1.style.animation = ` circle1left 2s`;
        circle2.style.animation = `circle2left 2s`;
        trianglesmall.style.animation = `trianglesmallleft 2s`;
        tribox.style.animation = `rounderleft 2s`;
        imagebox.style.animation = `imagebox 2s`;
        img[0].style.animation = `img 2s`;

        //change the text and putting animation to element
        text.innerText = `Let's shop`;
        text.style.animation = `textleft 2s`;
        parahead.style.animation = `parahead 2s`

        setTimeout(() => {
            parahead.innerText = 'Enter OTP';
            trianglesmall.classList.add('trianglesmallright');
            trianglesmall.classList.remove('triangle');
            trianglesmall.classList.add('trianglesmallleftposi');
            inputarea.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="form-control pininput" maxlength="1"  />
                                    <input type="text" class="form-control pininput"  maxlength="1" />
                                    <input type="text" class="form-control pininput" maxlength="1" />
                                    <input type="text" class="form-control pininput"  maxlength="1" />`;
            for (i = 0; i < 4; i++) {
                allinput[i].classList.add('setpinposi');
            }
        }, 1000);

        setTimeout(() => {
            border.classList.add('inputareaborder');
        }, 2100);

        // add positioning class
        imagebox.classList.add('imageboxposi');
        img[0].classList.add('imgposi');
        circle1.classList.add('circle1leftposi');
        circle2.classList.add('circle2leftposi');
        tribox.classList.add('tribox1');
        text.classList.add('textleftposi');
        parahead.classList.add('paraheadposi');

        setTimeout(() => {
            mainpoint[0].innerHTML = `<button id="loginbtn">Log In</button><br>
            <p onclick="anifunc1()" id="changenum">Change Number</p>
            <p  id="resendotp">Resend OTP</p>`;
        }, 1500);

        //removing some attribute
        setTimeout(() => {
            circle1.removeAttribute('id');
            circle2.removeAttribute('id');
            trianglesmall.removeAttribute('id');
            text.removeAttribute('id');
        }, 1100);

        animationcount = 1;
    }

}
