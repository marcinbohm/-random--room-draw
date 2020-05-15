window.addEventListener('load', function() {

    let myNumbers = ['1', '2', '4', '5', '6', '7', '8'];

        const getNumber = () => {
            var randomItem = myNumbers[Math.floor(Math.random() * myNumbers.length)];
            const index = myNumbers.indexOf(randomItem);
            if (index > -1){
                myNumbers.splice(index, 1);
            }

            document.getElementById('message').innerHTML = randomItem;
        }

        const CebonNumber = () => {
            document.getElementById('message').innerHTML = '3';
        }

        var btn = document.getElementById('button');

        var timesClicked = 0;

        if(btn){
            btn.addEventListener('click', () => {
                timesClicked++;

                if(timesClicked == 3){
                    CebonNumber()
                } else if(timesClicked > 8){
                    document.getElementById('message').innerHTML = "There is no more rooms available!";
                } else {
                    getNumber()
                }
            })
        }
})