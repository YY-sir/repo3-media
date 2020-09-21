function audioPlay(){var note = document.getElementById('note');
            var audio = document.getElementById('myaudio');
            var tag = true;
            if (audio.play()) {
            $('.play').addClass("imgrotate")
                }
                note.onclick = function () {
                if (tag) {
                    audio.pause();
                    $('.play').addClass("suspend")
                    tag = false;
                    console.log(2);
                } else {
                    audio.play();
                    $('.play').removeClass("suspend")
                    $('.play').addClass("imgrotate")
                    tag = true;
                    console.log(3);
                }
            }
            var v = document.getElementsByClassName('v');
            console.log(1);
            if (audio.play()) {
                $('.play').addClass("imgrotate")
                    }
                    note.onclick = function () {
                    if (tag) {
                        audio.pause();
                        $('.play').addClass("suspend")
                        tag = false;
                        console.log(2);
                    } else {
                        audio.play();
                        $('.play').removeClass("suspend")
                        $('.play').addClass("imgrotate")
                        tag = true;
                        console.log(3);
                    }
                }
}