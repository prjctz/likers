//pure.app/app/ru/feed
//================================
function timeoutAW(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let likeButton1;

function getAllElLiks() {
	likeButton1 = document.getElementsByClassName("Actions__Wrapper-sc-17jfmee-0 kAIpAU");
}


async function LikerFn() {
	await timeoutAW(1000);
	getAllElLiks();
	await timeoutAW(500);
	for(let i=0;i<likeButton1.length;i++) {
		try {
			if(likeButton1[i].getElementsByTagName("button") &&
			likeButton1[i].getElementsByTagName("button")[2] &&
			likeButton1[i].getElementsByTagName("button")[2].innerHTML.indexOf('M16.0004 30.7899C15.9179 30.7902') > -1) {
				await timeoutAW(1100);
				likeButton1[i].getElementsByTagName("button")[2].click();
			}
		}
		catch(e) {
			console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
		}
	}
	document.getElementById('recommendations-list').scrollTop+=2500;
	LikerFn();
}
LikerFn();
//================================


//tinder
likeButton1 = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a");
likeButton1[0].click();

setInterval(function() {likeButton1[0].click();}, 10);
