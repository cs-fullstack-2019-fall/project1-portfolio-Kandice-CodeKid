
// alert("Test");
let playerClicks = 0;
let playScore = 0;
const delay = 2000;
const targets = 5;

// Start the Game!!!

function main(){
    playerClicks =0;
    playScore = 0;
//    get random spots on the board
//     let randomSpot=getRandomInt(1,50);
//     console.log(randomSpot);

//    Get 5 random locations and place on board
    for (let i=1; i<=targets;i++)
    {
        let target_num = getRandomInt(1,50); // get random cell in table
        let target_cell_id =`td${target_num}`; //generate a cell id
        let image_id = `img${target_num}`; //generate image id
    //    let target_cell_id ="td" +target_num // does the same as above
    //     console.log(target_cell_id);
    //    place image in td cell
        $('#'+target_cell_id).append(`<image id=${image_id} src=bird.png width="100"/>`)
        let target_element = document.getElementById(target_cell_id);
        target_element.addEventListener("click", clicked_target)
    }
    // add a click listener for the entire table
    document.getElementById('play_table').addEventListener('click', function (ev)
    {
        playerClicks++;
        if (playerClicks===targets)
        {
            alert(`game over! your score was ${playScore}!`)
        }
    })
}
// called when the user hists a target

function clicked_target(ev)
{
    let hit = ev.target.querySelector('img');
    playScore ++;
    alert("you got it")
}

// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


main();