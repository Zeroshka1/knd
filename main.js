let link = ['image/rock.png','image/nozh.png','image/papper.png'];
let button_rock = document.getElementById('rock');
let button_nozh = document.getElementById('nozh');
let button_pap = document.getElementById('papper');
let score = document.getElementById("score").value = 0;
let score_en = document.getElementById("score_enemy").value = 0;
let popup = document.querySelector('.popup-ths');
let closePup = document.querySelector('.close');

button_rock.addEventListener( "click" , () => {
    if(document.getElementById("players").classList != "player_anim" && document.getElementById("enemys").classList != "item_anim"){
        document.getElementById("players").classList.add("player_anim");
        document.getElementById("enemys").classList.add("item_anim")
        document.getElementById("players").src=link[0];
        document.getElementById("enemys").src=link[0];
    }
    setTimeout(function(){
        document.getElementById("players").classList.remove("player_anim");
        document.getElementById("enemys").classList.remove("item_anim")
        let item = 0;
        enemy_change(item);
        document.getElementById("players").src=link[0];
    }, 900)

}
);
button_nozh.addEventListener( "click" , () => {
    if(document.getElementById("players").classList != "player_anim" && document.getElementById("enemys").classList != "item_anim"){
        document.getElementById("players").classList.add("player_anim");
        document.getElementById("enemys").classList.add("item_anim")
        document.getElementById("players").src=link[0];
        document.getElementById("enemys").src=link[0];
    }
    setTimeout(function(){
        document.getElementById("players").classList.remove("player_anim");
        document.getElementById("enemys").classList.remove("item_anim")
        let item = 1;
        enemy_change(item);
        document.getElementById("players").src=link[1];
    }, 900)

}
);
button_pap.addEventListener( "click" , () => {
    if(document.getElementById("players").classList != "player_anim" && document.getElementById("enemys").classList != "item_anim"){
        document.getElementById("players").classList.add("player_anim");
        document.getElementById("enemys").classList.add("item_anim")
        document.getElementById("players").src=link[0];
        document.getElementById("enemys").src=link[0];
    }
    setTimeout(function(){
        document.getElementById("players").classList.remove("player_anim");
        document.getElementById("enemys").classList.remove("item_anim")
        let item = 2;
        enemy_change(item);
        document.getElementById("players").src=link[2];
    }, 900)
}
);

function enemy_change(item){
    let randomIndex = Math.floor(Math.random() * link.length);
    let randomElement = link[randomIndex];

    document.getElementById("enemys").src=randomElement;
    if(item == 0 && randomIndex == 1){
        score ++;
        document.getElementById("score").value = score;
    }
    else if(item == 1 && randomIndex == 2){
        score ++;
        document.getElementById("score").value = score;
    }
    else if(item == 2 && randomIndex == 0){
        score ++;
        document.getElementById("score").value = score;
    }
    else if(item == randomIndex){}
    else{
        score_en ++;
        document.getElementById("score_enemy").value = score_en;
    }
    windowOpen();
}

function windowOpen(){
    function openPopup() {
        var title = document.querySelector('.success-title');
        if (score == 10) {
          title.textContent = "ВЫ ПОБЕДИЛИ!"
          title.style.color = 'green';
          popup.classList.remove('hidden-popup')

        }
        else if(score_en == 10){
          title.textContent = "ВЫ ПРОИГРАЛИ!"
          title.style.color = 'red';
          popup.classList.remove('hidden-popup')
        }
      }
      function closePopup(){
        popup.classList.add('hidden-popup')

      }
      closePup.addEventListener("click", () => {
          closePopup();
          score = 0;
          score_en = 0;
      })
      openPopup();

}


  
