function updateGamepad(){

    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [])

    for(var i = 0; i < gamepads.length; i++){

        var gamepad = gamepads[i]

        if( gamepad != null ){

          document.querySelector('.detect').innerText = 'Detected'

            var name   = gamepad.id,
                layout = (name.indexOf('Xbox') > -1) ? 2 : 1

            if( layout == 1 ){

                var arrows = gamepad.axes[9]

                if(arrows >= -1 && arrows < -.70 || arrows >= .9 && arrows < 1.1)
                    goMove('up', 'gamepad')

                if(arrows > -.72 && arrows < -.13)
                    goMove('right', 'gamepad')

                if(arrows > -.15 && arrows < .43)
                    goMove('down', 'gamepad')

                if(arrows > .41 && arrows <= 1)
                    goMove('left', 'gamepad')

            }

            if( gamepad.buttons[1].pressed )
                goBack('gamepad')

            if( gamepad.buttons[0].pressed && layout == 2 || gamepad.buttons[2].pressed && layout == 1 )
                goEnter('gamepad')

            var leftX = gamepad.axes[0],
                leftY = gamepad.axes[1]

            if( leftX > .75 )
                goMove('right', 'gamepad')

            if( leftX < -.75 )
                goMove('left', 'gamepad')

            if( leftY > .75 )
                goMove('down', 'gamepad')

            if( leftY < -.75 )
                goMove('up', 'gamepad')

        }

    }

    requestAnimationFrame(updateGamepad)

}

addEventListener('gamepadconnected', function(e) {

    updateGamepad()

})

addEventListener('gamepaddisconnected', function(e) {

    updateGamepad()

})
