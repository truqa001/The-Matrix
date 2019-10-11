$(window).ready(function(){

    const matrix_text = function() {
        let mess = "You have been lost in the matrix...";
        for (let i=0;i<mess.length;i++){
            mess_container.append("<span id='text"+ i+"'>"+"</span>");
        }
        for (let i=0;i<mess.length;i++){
            var text = document.getElementById("text"+i);
            chars_array.push(text);
            let $interval;
            $interval_array.push($interval);
        }

        for (let i=0;i<chars_array.length;i++){
            $interval_array[i] = setInterval(function(){
                chars_array[i].innerHTML = all_chars.charAt(Math.floor(Math.random()*all_chars.length));

            })
        }

        //stop matrix
        let delay = 1000;
        for (let i=0;i<chars_array.length;i++){
            setTimeout(function(){
                clearInterval($interval_array[i]);
                chars_array[i].innerHTML= mess.charAt(i);
                if (i== (chars_array.length-1)){
                    $('body').append("<div class='text-selector'>&nbsp;&nbsp;</div>");
                }
            },delay);
            delay+=100;
        }
    }

    const write_mess = function(mess,speed) {
        for (let i=0;i<mess.length;i++){
            setTimeout(function(){
                mess_container.append("<span>"+mess.charAt(i)+"</span>");
            },speed);
            speed+=70;
        }
    }

    const remove_mess = function(speed) {
        let spans = mess_container.find("span");

        for(let i=spans.length-1;i>=0;i--){
            setTimeout(function(){
                spans[i].remove();
            },speed);
            speed+=70;
        }
    }


    let mess_container = $("#mess-container");
    let chars_array = [];
    let $interval_array= [];
    let all_chars = "!@#$%^*()-+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let input = $("input[type='text']");

    //check input key
    input.keyup(function(){
        let input_val = input.val().toLowerCase();
        if (input_val == 'y' || input_val == 'n') {
        }else{
            input.val('');
            alert("Sorry, only 'Y' or 'N'")
        }
    })


    matrix_text();
    setTimeout(function(){
        remove_mess(10);
    },6000)

    setTimeout(function(){
        write_mess("Let's find the way out...",10);
    },8600)

    setTimeout(function(){
        remove_mess(10);
    },12000);

    setTimeout(function(){
        // $(".text-selector").hide();
        write_mess("Are you ready? (y/n) _ ",10);
        setTimeout(function(){
            input.show();
            input.focus();
            let keypressed = '';
            input.keyup(function(){
                let input_val = input.val().toLowerCase();

                if (input_val == 'y' || input_val == 'n' ){
                    keypressed = input_val;
                    mess_container.append("<span>"+keypressed+"</span>")
                    input.remove();

                    if (keypressed == 'y'){
                        remove_mess(700)
                        setTimeout(function(){
                            mess_container.remove();
                            $(".text-selector").remove();
                            let code = "Z2kyMTYzOTEyOG9oZWtqZGFzYmFzeG9haXN1MGQ5LTkxMi1bZWxrYW5zLG1kYmFza2lkb3VqYXNsZHk5OHUyb2lla2oyYmQsbWFuc2xramRvYWlzOWQwOWxrbGtqbGthCmFuLG14em5ja2l1eTI5ODF1bzFqa2RtbmFzYnhtYW5sa3N1ZDA5ODJwMWVsayxtZG5iamFzdWl5ZDA5cDJlayxtZGFzdmFzam54bTtwMDg5MjF5dWlrajA5MgpqY2lvNzk4MjE3MzBwMTJrZW5kLGFtc254a2phaDh3OThzMjlldXNramhhc2tkam1hcyB4bSxhc25pb2R1OXNkNzAtMjE4LTAxMls7M2wuMm0ubGphb3NkMDkwOQpudm9pMjE3OTgzODEyMDl1ZWlramFzYixtYyxzbnhsYW91ZDA5MjgtZTAydTFvaWVoa3dhbnNha2pwZGktMDE5ZTBwbzJqa253bSxzYW5rbHNhanUwLTktMDI3bQprdTJlOTBpZHBvYXNqYW1kYXNuZGxha3NkamFvc3VkMGE5c2RuMDI5MWFzam9haXN1ZDA5ODEyLTB1b2loZG9pd3Fhc2hkYXNuZG5hbHNrZDkwMTI4MDM5MDEKMTJpOWUwOXVhb3NpamFsa3NqZGxhc2RtYXNxICAgICAgICAgRklORCBUSEUgUkVBTCBNT05BTElTQSgpICAgICAgIGtkam9haXN1ZG9pMjFqZW9pMTJ1ZTA5aWpsYWtzbmRhCnF3ZGxqb3Bxd2RqbGtqZHBxd2llMDkxMnVlb2lqbGthc25kLGFzbm1kbixhc2Rhc2R1b3F3OXUwZDlpZXBvMTJqZWw7ZHNhLm0sZC5hc20uZG1hc3BvZDBhOTkyCmNuYWxrc2pvZGl1cDJvZWkwMWllb2xrYW5za2xkaGFpb3NqZG9hc2psZGtoMjkwMThlMDkxMnVpa2pkYmFzZG9pcXd1ZTlwMnJlOThpdWxhaHNqZGhhc2prZGhhOThzZAoyODE5NzMwb2l1d3Fsa2FzbmRza2hkYTkwZHBpaztsYWtzLm1iY3VpcXd1ZWkwMTI3ODcxMjY3MzAtOTIxcG9sa2hxd2Fzbmxkb3U4YTBzOWQ4NjEycDExNwo5MTIwODMwOXVkamxrc2FuZGFuc2thc29peGp1YW9zdXgwcS13OWlwb2lsa3FudyxzbWFuLG1jbix6bnhjbGFzamNvYWlzdWMwOWFzOGRbcHNsZGtqYWxzZGphbGtzZGoKamxrbmx1MjE5MzgtMHV3cGRvYWxrc25uZGthanNvZGE4c2QwOTg2cXR3Nzg9YDExMDlxc2lha2pobmFsc2RqYW9wc3VkMHEzNzlwYXVzamxrZGFzZGFzZDExMzEK";
                            $('body').append("<div id='code-container'><div id='code' style='display: inline;'></div></div>");
                            $('#code-container').append("<div class='text-selector' style='margin:0;'>&nbsp;&nbsp;</div>");
                            let code_div = document.getElementById("code");
                            let speed = 10;
                            for (let i=0;i<code.length;i++){
                                setTimeout(function(){
                                    code_div.innerHTML += code.charAt(i);
                                },speed);
                                speed += 3;

                            }
                        },2500);
                    }else{
                        remove_mess(700);

                        setTimeout(function(){
                            write_mess("I see. See you next time...",10);

                            setTimeout(function(){
                                window.location.href = 'https://truqa001.github.io/portfolio';
                            },2500);
                        },2500)


                    }
                }



            });
        },1500);
    },14000)
})
window.MONALISA = function() {
    console.log("Well done, You are very close to the portal...");


    $("#code-container").remove();
    let random = Math.floor((Math.random() * 100));
    let speed = 10;
    for (let i=0;i<100;i++){
        setTimeout(function(){
            if (random === i){
                $('body').append("<!-- REAL MONALISA --><img class='monalisa' src='images/monalisa.jpg' onclick='found()'>");
            }else{
                $('body').append("<img class='monalisa' src='images/monalisa.jpg' onclick='nah(this)'>");
            }
        },speed)
        speed += 10;
    }

}

window.nah = function(img) {
    img.src = 'images/fake-monalisa.gif';
    setTimeout(function(){
        alert("Oops! Fake one...")
    },200);
}

window.found = function() {
    alert("Congratulations! You have found the way out...");
    window.location.href = 'https://truqa001.github.io/portfolio';
}
