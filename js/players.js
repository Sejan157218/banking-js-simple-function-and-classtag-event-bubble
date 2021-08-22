function style(player){
    player.style.border = '.75px solid blue';
    player.style.margin = '5px';
    player.style.padding = '5px';   
}
const players = document.getElementsByClassName('player');
    for (const player of players){
        style(player);       
    }

function addPlayers(){
    const playersId = document.getElementById('players');
    const playerId = document.createElement('div');
    playerId.classList.add('player');
    const h1 = document.createElement('h1');
    h1.classList.add('player-name')
    h1.innerText = 'new-player';
    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum doloribus impedit molestiae perspiciatis temporibus repellendus quisquam! Nesciunt ratione nam enim?';
    playerId.appendChild(h1);
    playerId.appendChild(p);
    style(playerId);
    playersId.appendChild(playerId);  
}

document.getElementById('players').addEventListener('click',function(event){
        if(event.target.tagName.toLocaleLowerCase() == 'div'){
            event.target.style.backgroundColor = 'green';
           
        }
        else{
            event.target.parentNode.style.backgroundColor ='red';
        }
    })



const playersDiv = document.querySelectorAll('#players .player:first-child');
// console.log(playersDiv);