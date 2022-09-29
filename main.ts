controller.combos.attachCombo("Down,Left", function () {
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fccf...........
        ..........f9f2f22fcccf..........
        .........f999f9f2fcccf..........
        ........f966f966f6ffcf......f...
        .........f666f666f66fff....fdf..
        ........f99666f6f9f6f88f...fdf..
        .......f996f4f4ff44f6ff.fffdddff
        ........f66fdfd4fd44fdffdddddddf
        .........ffddddddfd4f4f.ffffdddf
        ........fddddffff2f4fff...fddddf
        ....ffff4ffddddf22ff.....fdfdd4f
        ...f44444ffffffffff1fffffdf4d44f
        ..fffdfdffcf1111133111fdd4ff4fff
        ff444fbffcfcf22213f111f44f.fff..
        f4dd4fbfcfbff11221f111fff.......
        fddddfcffbfbf12121fffff.........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666ff........
        .......fff8888888f8668f.........
        ......f22cf8fff8fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ....f13cccccccccfcc133122f......
        ...f13ccccccccccffccccccccf.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value += -1
    Boyfriend.setImage(img`
        ...............ffffffff.........
        ..............f9f2f9fccf........
        .............f9f9f96fcccf.......
        ............f9f966f6fcccf.......
        ...........f966f6f4f6ffcf.......
        ............fdf4f4f4f66fff......
        ...........ffdfd4dfd4f6f88f.....
        ..........ffddfdddfdd4f6ff......
        .........fdddddddddfdd4fdf......
        .........fdddddffff2fd4f4f......
        ..........fdddddf222fd4fff......
        .......ffffffddddfffdd4f........
        ......ffcfbfbfdddddddff.........
        ......fcfbfbfffffffff33f........
        ......ffcfbfbf3222333311f.......
        .......ffcfcf12112231111f.......
        ........ffff11212121ffff........
        .......fbbccf1221121f444f.......
        ........fffff112221ffdddf.......
        .......f44ddfffffff88fff........
        .......f4ddfdf8886668888f.......
        .......f4ddfdf8866f6666f........
        ........f4ddff888f2f66f2f.......
        .......ffffff2f8f222ff22f.......
        .......f22ff222ff222222f........
        ......f1113cccf222213312f.......
        .....f1113cccccf222211112f......
        ....f1113ccccccff2ccc11112f.....
        ....f22cccccccf3ffccccccccf.....
        .....fffffffff3f31ffffffff1f....
        .....f11133333f.f3311111113f....
        ......ffffffff...ffffffffff.....
        `)
})
controller.combos.attachCombo("Up,Left", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Boyfriend.setImage(img`
        ................................
        ...................ffffffff.....
        ..................f22222fccf....
        .................f9f2f22fcccf...
        ................f999f9f2fcccf...
        ...............f966f966f6ffcf...
        ................f666f666f66fff..
        ...............f99666f6f9f6f88f.
        ..............f996f4f4f4f4f6ff..
        ...............f66fdfd4df44fdf..
        ................ffdddddddf4f4f..
        ...............fdddffffffd4fff..
        ................ffdddddddff.....
        ..............ff33fffffff33f....
        .fff....ffff.f333f3222333311f...
        fbfbf.f.fddf.f33f12112231111f...
        ffbfcfcfdffdffff11212121ffff....
        fbfbffcfddddf44f11221121f444f...
        ffbfcfbf4dd4f44ff112221ffdddf...
        fcfcffbf444fffff6ffffff88fff....
        ffcff.f.fff.f666688886668888f...
        .fff........f866888866f6666f....
        ...........fff8888888f2f66f2f...
        ..........f222f8ff88f222ff22f...
        ..........f2222f22fff222222f....
        .........f13ccccccf222213312f...
        ........f13ccccccccf222211112f..
        .......f13ccccccccccf2ccc11112f.
        .......f22ccccccccccffccccccccf.
        ......f1ffffffffffff31ffffffff1f
        ......f1111333333333f3311111113f
        .......fffffffffffff.ffffffffff.
        `)
})
controller.combos.attachCombo("Left,Up", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value += -1
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fccf...........
        ..........f9f2f22fcccf..........
        .........f999f9f2fcccf..........
        ........f966f966f6ffcf..........
        .........f666f666f66fff.........
        ........f99666f6f9f6f88f........
        .......f996f4f4ff44f6ff.........
        ........f66fdfd4fd44fdf.........
        .........ffddddddfd4f4f.........
        ........fddddffff2f4fff.........
        ....ffff4ffddddf22ff............
        ...f44444ffffffffff1ff..........
        ..fffdfdffcf1111133111f.........
        ff444fbffcfcf22213ffff..........
        f4dd4fbfcfbff11221f444f.........
        fddddfcffbfbf12121ffdddf........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666f.........
        ........f68888888866668f........
        .......fff8866666f8668f.........
        ......f22cf8fff6fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ....f13cccccccccfcc133122f......
        ...f13ccccccccccffccccccccf.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
controller.combos.attachCombo("Left,Right", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("Left,Down", function () {
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fccf...........
        ..........f9f2f22fcccf..........
        .........f999f9f2fcccf..........
        ........f966f966f6ffcf......f...
        .........f666f666f66fff....fdf..
        ........f99666f6f9f6f88f...fdf..
        .......f996f4f4ff44f6ff.fffdddff
        ........f66fdfd4fd44fdffdddddddf
        .........ffddddddfd4f4f.ffffdddf
        ........fddddffff2f4fff...fddddf
        ....ffff4ffddddf22ff.....fdfdd4f
        ...f44444ffffffffff1fffffdf4d44f
        ..fffdfdffcf1111133111fdd4ff4fff
        ff444fbffcfcf22213f111f44f.fff..
        f4dd4fbfcfbff11221f111fff.......
        fddddfcffbfbf12121fffff.........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666ff........
        .......fff8888888f8668f.........
        ......f22cf8fff8fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ....f13cccccccccfcc133122f......
        ...f13ccccccccccffccccccccf.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Boyfriend.setImage(img`
        ................................
        ...................ffffffff.....
        ..................f22222fccf....
        .................f9f2f22fcccf...
        ................f999f9f2fcccf...
        ...............f966f966f6ffcf...
        ................f666f666f66fff..
        ...............f99666f6f9f6f88f.
        ..............f996f4f4f4f4f6ff..
        ...............f66fdfd4df44fdf..
        ................ffdddddddf4f4f..
        ...............fdddffffffd4fff..
        ................ffdddddddff.....
        ..............ff33fffffff33f....
        .fff....ffff.f333f3222333311f...
        fbfbf.f.fddf.f33f12112231111f...
        ffbfcfcfdffdffff11212121ffff....
        fbfbffcfddddf44f11221121f444f...
        ffbfcfbf4dd4f44ff112221ffdddf...
        fcfcffbf444fffff6ffffff88fff....
        ffcff.f.fff.f666688886668888f...
        .fff........f866888866f6666f....
        ...........fff8888888f2f66f2f...
        ..........f222f8ff88f222ff22f...
        ..........f2222f22fff222222f....
        .........f13ccccccf222213312f...
        ........f13ccccccccf222211112f..
        .......f13ccccccccccf2ccc11112f.
        .......f22ccccccccccffccccccccf.
        ......f1ffffffffffff31ffffffff1f
        ......f1111333333333f3311111113f
        .......fffffffffffff.ffffffffff.
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Boyfriend.setImage(img`
        ................................
        ...................ffffffff.....
        ..................f22222fccf....
        .................f9f2f22fcccf...
        ................f999f9f2fcccf...
        ...............f966f966f6ffcf...
        ................f666f666f66fff..
        ...............f99666f6f9f6f88f.
        ..............f996f4f4f4f4f6ff..
        ...............f66fdfd4df44fdf..
        ................ffdddddddf4f4f..
        ...............fdddffffffd4fff..
        ................ffdddddddff.....
        ..............ff33fffffff33f....
        .fff....ffff.f333f3222333311f...
        fbfbf.f.fddf.f33f12112231111f...
        ffbfcfcfdffdffff11212121ffff....
        fbfbffcfddddf44f11221121f444f...
        ffbfcfbf4dd4f44ff112221ffdddf...
        fcfcffbf444fffff6ffffff88fff....
        ffcff.f.fff.f666688886668888f...
        .fff........f866888866f6666f....
        ...........fff8888888f2f66f2f...
        ..........f222f8ff88f222ff22f...
        ..........f2222f22fff222222f....
        .........f13ccccccf222213312f...
        ........f13ccccccccf222211112f..
        .......f13ccccccccccf2ccc11112f.
        .......f22ccccccccccffccccccccf.
        ......f1ffffffffffff31ffffffff1f
        ......f1111333333333f3311111113f
        .......fffffffffffff.ffffffffff.
        `)
})
controller.combos.attachCombo("Up,Down", function () {
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fcfff.ff.......
        ..........f9f2f22ffdfdfdf.......
        .........f999f9f2ffdfdfdf.......
        ........f966f966f6fdfdfdf.......
        .........f666f666ffdfdfdf.......
        ........f99666f6fffddddf........
        .......f996f4f4f4fddddf.........
        ........f66ffdf4fdffddf.........
        .........ffddddddfdfddf.........
        ........fddddffff2ff44f.........
        ....ffff4ffddddf22fffff.........
        ...f44444ffffffffff111f.........
        ..fffdfdffcf1111133111f.........
        ff444fbffcfcf22213f111f.........
        f4dd4fbfcfbff11221f111f.........
        fddddfcffbfbf12121ffff..........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666ff........
        .......fff8888888f8668f.........
        ......f22cf8fff8fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ....f13cccccccccfcc133122f......
        ...f13ccccccccccffccccccccf.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
controller.combos.attachCombo("Right,Up", function () {
    Boyfriend.setImage(img`
        ...........ffffffff.............
        ..........f9f2f9fccf............
        .........f9f9f96fcccf...........
        ........f9f966f6fcccf...........
        .......f966f6f4f6ffcf...........
        ........fdf4f4f4f66fff..........
        .......ffdfd4dfd4f6f88f.........
        ......ffddfdddfdd4f6ff..........
        .....fdddddddddfdd4fdf..........
        .....fdddddffff2fd4f4f.fff......
        ......fdddddf222fd4fff.fddfffff.
        ...ffffffddddfffdd4f....fddddddf
        ..ffcfbfbfdddddddff...fffddfffff
        ..fcfbfbfffffffff33fffdddddd4f..
        ..ffcfbfbf3222333311fd444dffff..
        ...ffcfcf12112231111f4fff4444f..
        ....ffff11212121f111ff...fffff..
        ...fbbccf1221121ffff............
        ....fffff112221ff...............
        ...f44ddfffffff88fff............
        ...f4ddfdf8886668888f...........
        ...f4ddfdf8866f6666f............
        ....f4ddff888f2f66f2f...........
        ...ffffff2f8f222ff22f...........
        ...f22ff222ff222222f............
        ..f1113cccf222213312f...........
        .f1113cccccf222211112f..........
        f1113ccccccff2ccc11112f.........
        f22cccccccf3ffccccccccf.........
        .fffffffff3f31ffffffff1f........
        .f11133333f.f3311111113f........
        ..ffffffff...ffffffffff.........
        `)
})
controller.combos.attachCombo("Down,Right", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("Right,Down", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value += -1
    Boyfriend.setImage(img`
        ................................
        ...................ffffffff.....
        ..................f22222fccf....
        .................f9f2f22fcccf...
        ................f999f9f2fcccf...
        ...............f966f966f6ffcf...
        ................f666f666f66fff..
        ...............f99666f6f9f6f88f.
        ..............f996f4f4f4f4f6ff..
        ...............f66fdfd4df44fdf..
        ................ffdddddddf4f4f..
        ...............fdddffffffd4fff..
        ................ffdf22222ff.....
        ..............ff33fffffff33f....
        .............f333f3fff333311f...
        ............fff3f1ffcff31111f...
        ..........ff444fbffcfcf1ffff....
        ..........f4dd4fbfcfbff1f444f...
        ..........fddddfcffbfbfffdddf...
        ..........fdffdfcfcfbff88fff....
        ...........fddf6f8fbfbf68888f...
        ...........ffff6888ffff6666f....
        ...........fff8888888f2f66f2f...
        ..........f222f8ff88f222ff22f...
        ..........f2222f22fff222222f....
        .........f13ccccccf222213312f...
        ........f13ccccccccf222211112f..
        .......f13ccccccccccf2ccc11112f.
        .......f22ccccccccccffccccccccf.
        ......f1ffffffffffff31ffffffff1f
        ......f1111333333333f3311111113f
        .......fffffffffffff.ffffffffff.
        `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Boyfriend.setImage(img`
        ................................
        ...................ffffffff.....
        ..................f22222fccf....
        .................f9f2f22fcccf...
        ................f999f9f2fcccf...
        ...............f966f966f6ffcf...
        ................f666f666f66fff..
        ...............f99666f6f9f6f88f.
        ..............f996f4f4f4f4f6ff..
        ...............f66fdfd4df44fdf..
        ................ffdddddddf4f4f..
        ...............fdddffffffd4fff..
        ................ffdddddddff.....
        ..............ff33fffffff33f....
        .fff....ffff.f333f3222333311f...
        fbfbf.f.fddf.f33f12112231111f...
        ffbfcfcfdffdffff11212121ffff....
        fbfbffcfddddf44f11221121f444f...
        ffbfcfbf4dd4f44ff112221ffdddf...
        fcfcffbf444fffff6ffffff88fff....
        ffcff.f.fff.f666688886668888f...
        .fff........f866888866f6666f....
        ...........fff8888888f2f66f2f...
        ..........f222f8ff88f222ff22f...
        ..........f2222f22fff222222f....
        .........f13ccccccf222213312f...
        ........f13ccccccccf222211112f..
        .......f13ccccccccccf2ccc11112f.
        .......f22ccccccccccffccccccccf.
        ......f1ffffffffffff31ffffffff1f
        ......f1111333333333f3311111113f
        .......fffffffffffff.ffffffffff.
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value += -1
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fccf...........
        ..........f9f2f22fcccf..........
        .........f999f9f2fcccf..........
        ........f966f966f6ffcf..........
        .........f666f666f66fff.........
        ........f99666f6f9f6f88f........
        .......f996f444f444f6ff.........
        ........f66ffdf4fdf4fdf.........
        .........ffddfdddfd4f4f.........
        ........fdddddffddf4fff.........
        ....ffff4ffddf22fdff............
        ...f44444fffff22fff1ff..........
        ..fffdfdffcf11ff133111f.........
        ff444fbffcfcf22213ffff..........
        f4dd4fbfcfbff11221f444f.........
        fddddfcffbfbf12121ffdddf........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666ff........
        .......fff8866666f8668f.........
        ......f22cf8fff6fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ...ff13cccccccccfcc133122ff.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
controller.combos.attachCombo("Up,Right", function () {
    Boyfriend.setImage(img`
        ...........ffffffff.............
        ..........f9f2f9fccf............
        .........f9f9f96fcccf...........
        ........f9f966f6fcccf...........
        .......f966f6f4f6ffcf...........
        ........fdf4f4f4f66fff..........
        .......ffdfd4dfd4f6f88f.........
        ......ffddfdddfdd4f6ff..........
        .....fdddddddddfdd4fdf..........
        .....fdddddffff2fd4f4f.fff......
        ......fdddddf222fd4fff.fddfffff.
        ...ffffffddddfffdd4f....fddddddf
        ..ffcfbfbfdddddddff...fffddfffff
        ..fcfbfbfffffffff33fffdddddd4f..
        ..ffcfbfbf3222333311fd444dffff..
        ...ffcfcf12112231111f4fff4444f..
        ....ffff11212121f111ff...fffff..
        ...fbbccf1221121ffff............
        ....fffff112221ff...............
        ...f44ddfffffff88fff............
        ...f4ddfdf8886668888f...........
        ...f4ddfdf8866f6666f............
        ....f4ddff888f2f66f2f...........
        ...ffffff2f8f222ff22f...........
        ...f22ff222ff222222f............
        ..f1113cccf222213312f...........
        .f1113cccccf222211112f..........
        f1113ccccccff2ccc11112f.........
        f22cccccccf3ffccccccccf.........
        .fffffffff3f31ffffffff1f........
        .f11133333f.f3311111113f........
        ..ffffffff...ffffffffff.........
        `)
})
controller.combos.attachCombo("Right,Left", function () {
    Boyfriend.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.combos.attachCombo("Down,Up", function () {
    Boyfriend.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ............ffffffff............
        ...........f22222fcfff.ff.......
        ..........f9f2f22ffdfdfdf.......
        .........f999f9f2ffdfdfdf.......
        ........f966f966f6fdfdfdf.......
        .........f666f666ffdfdfdf.......
        ........f99666f6fffddddf........
        .......f996f4f4f4fddddf.........
        ........f66ffdf4fdffddf.........
        .........ffddddddfdfddf.........
        ........fddddffff2ff44f.........
        ....ffff4ffddddf22fffff.........
        ...f44444ffffffffff111f.........
        ..fffdfdffcf1111133111f.........
        ff444fbffcfcf22213f111f.........
        f4dd4fbfcfbff11221f111f.........
        fddddfcffbfbf12121ffff..........
        fdffdfcfcfbff21121f6fff.........
        .fddf.f.fbfbf22211f6666f........
        .ffff...ffff8fffff6666ff........
        .......fff8888888f8668f.........
        ......f22cf8fff8fcf88f2f........
        .....f13cccf22ff221ff1ccf.......
        ....f13cccccccccfcc133122f......
        ...f13ccccccccccffccccccccf.....
        ..f1ffffffffffff31ffffffff1f....
        ..f1111333333333f3311111113f....
        ...fffffffffffff.ffffffffff.....
        `)
})
let statusbar: StatusBarSprite = null
let Boyfriend: Sprite = null
Boyfriend = sprites.create(img`
    ................................
    ...................ffffffff.....
    ..................f22222fccf....
    .................f9f2f22fcccf...
    ................f999f9f2fcccf...
    ...............f966f966f6ffcf...
    ................f666f666f66fff..
    ...............f99666f6f9f6f88f.
    ..............f996f4f4f4f4f6ff..
    ...............f66fdfd4df44fdf..
    ................ffdddddddf4f4f..
    ...............fdddffffffd4fff..
    ................ffdddddddff.....
    ..............ff33fffffff33f....
    .fff....ffff.f333f3222333311f...
    fbfbf.f.fddf.f33f12112231111f...
    ffbfcfcfdffdffff11212121ffff....
    fbfbffcfddddf44f11221121f444f...
    ffbfcfbf4dd4f44ff112221ffdddf...
    fcfcffbf444fffff6ffffff88fff....
    ffcff.f.fff.f666688886668888f...
    .fff........f866888866f6666f....
    ...........fff8888888f2f66f2f...
    ..........f222f8ff88f222ff22f...
    ..........f2222f22fff222222f....
    .........f13ccccccf222213312f...
    ........f13ccccccccf222211112f..
    .......f13ccccccccccf2ccc11112f.
    .......f22ccccccccccffccccccccf.
    ......f1ffffffffffff31ffffffff1f
    ......f1111333333333f3311111113f
    .......fffffffffffff.ffffffffff.
    `, SpriteKind.Player)
statusbar = statusbars.create(100, 4, StatusBarKind.Health)
statusbar.setColor(2, 7)
statusbar.setBarBorder(1, 15)
statusbar.value = 50
statusbar.max = 100
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setOffsetPadding(0, 0)
