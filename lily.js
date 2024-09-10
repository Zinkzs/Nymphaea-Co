    // laruan
    function fb() {
        location.href="https://www.facebook.com/profile.php?id=100089043337674&mibextid=ZbWKwL";
        }
    function ig() {
        location.href="https://www.instagram.com/nashyu_desu?igsh=OG9heGNsejh4MmFo";
    }
    function dc() {
        location.href="https://discordapp.com/users/705941681341595750/";
    }
    const testArea = document.getElementsByClassName('mvt');
    for (i = 0; i < testArea.length && i > 2;) {
        console.log('true');
    }
// laruaan //                       
function mt(userCLick) {
    const bodyBg = document.getElementsByClassName('body2');
    if (userCLick === 'mt') {
        if (document.getElementById('mtb').className=='mvbtcd',
            document.getElementById('mth').className=='mvt') {
            document.getElementById('mtb').className='mvbtca';
            document.getElementById('mth').className='mvta';
            document.getElementById('vth').className='mvtd';
            document.getElementById('oth').className='mvtd';
            document.getElementById('pth').className='mvtd';
            document.getElementById('mvid').className='mvid';
            document.getElementById('mvbtid').className='mvbta';
            bodyBg[0].style.backgroundImage="linear-gradient(#000000af,#34343484), url('misbg.jpg')";
            }
            else {
                document.getElementById('mtb').className='mvbtcd';
                document.getElementById('mth').className='mvt';
                document.getElementById('vth').className='mvt';
                document.getElementById('oth').className='mvt';
                document.getElementById('pth').className='mvt';
                document.getElementById('mvid').className='mvi';
                document.getElementById('mvbtid').className='mvbtd';
                bodyBg[0].style.backgroundImage='linear-gradient(45deg, gray, #6ebcc2, gray), url(none)';
            }
        }
    if (userCLick === 'vt') {
        if (document.getElementById('vtb').className=='mvbtcd',
            document.getElementById('vth').className=='mvt') {
            document.getElementById('vtb').className='mvbtca';
            document.getElementById('vth').className='mvta';
            document.getElementById('mth').className='mvtd';
            document.getElementById('oth').className='mvtd';
            document.getElementById('pth').className='mvtd';
            document.getElementById('mvid').className='mvid';
            document.getElementById('mvbtid').className='mvbta';
            bodyBg[0].style.backgroundImage="linear-gradient(#000000af,#34343484), url('visbg.jpg')";
            }
            else {
                document.getElementById('vtb').className='mvbtcd';
                document.getElementById('mth').className='mvt';
                document.getElementById('vth').className='mvt';
                document.getElementById('oth').className='mvt';
                document.getElementById('pth').className='mvt';
                document.getElementById('mvid').className='mvi';
                document.getElementById('mvbtid').className='mvbtd';
                bodyBg[0].style.backgroundImage='linear-gradient(45deg, gray, #6ebcc2, gray), url(none)';
            }
    }
    if (userCLick === 'ot') {
        if (document.getElementById('otb').className=='mvbtcd',
            document.getElementById('oth').className=='mvt') {
            document.getElementById('otb').className='mvbtca';
            document.getElementById('oth').className='mvta';
            document.getElementById('mth').className='mvtd';
            document.getElementById('vth').className='mvtd';
            document.getElementById('pth').className='mvtd';
            document.getElementById('mvid').className='mvid';
            document.getElementById('mvbtid').className='mvbta';
            bodyBg[0].style.backgroundImage="linear-gradient(#000000af,#34343484), url('objbg.jpg')";
            }
            else {
                document.getElementById('otb').className='mvbtcd';
                document.getElementById('mth').className='mvt';
                document.getElementById('vth').className='mvt';
                document.getElementById('oth').className='mvt';
                document.getElementById('pth').className='mvt';
                document.getElementById('mvid').className='mvi';
                document.getElementById('mvbtid').className='mvbtd';
                bodyBg[0].style.backgroundImage='linear-gradient(45deg, gray, #6ebcc2, gray), url(none)';
            }
    }
    if (userCLick === 'pt') {
        if (document.getElementById('ptb').className=='mvbtcd',
            document.getElementById('pth').className=='mvt') {
            document.getElementById('ptb').className='mvbtca';
            document.getElementById('pth').className='mvta';
            document.getElementById('mth').className='mvtd';
            document.getElementById('oth').className='mvtd';
            document.getElementById('vth').className='mvtd';
            document.getElementById('mvid').className='mvid';
            document.getElementById('mvbtid').className='mvbta';
            bodyBg[0].style.backgroundImage="linear-gradient(#000000af,#34343484), url('philbg.jpg')";
            }
            else {
                document.getElementById('ptb').className='mvbtcd';
                document.getElementById('mth').className='mvt';
                document.getElementById('vth').className='mvt';
                document.getElementById('oth').className='mvt';
                document.getElementById('pth').className='mvt';
                document.getElementById('mvid').className='mvi';
                document.getElementById('mvbtid').className='mvbtd';
                bodyBg[0].style.backgroundImage='linear-gradient(45deg, gray, #6ebcc2, gray), url(none)';
            }
    }
    }
// foot
    function fcl() {
    if (document.getElementById('ft').className=='foot',
        document.getElementById('ft').className=='foote') {
        document.getElementById('ft').className='footcl';
        document.getElementById('fta').style.backgroundColor='#EDE1D3';
        document.getElementById('pb').style.opacity= ".5";
    }
        else {
            document.getElementById('ft').className='foot';
            document.getElementById('fta').style.backgroundColor='ede1d3';
            document.getElementById('ft').style.opacity='.5';
            document.getElementById('pb').style.opacity= "1";
        }
    }
    function fme() {
    if (document.getElementById('ft').className=='foot') {
        document.getElementById('ft').className='foote';
        document.getElementById('ft').style.opacity='1';
        } 
    }
    function fml() {
    if (document.getElementById('ft').className=='foote') {
        document.getElementById('ft').className='foot';
        document.getElementById('ft').style.opacity='.5';
        } 
    }
    function onlmnd() {
        if (window.innerHeight<window.innerWidth){

        }
    }
    