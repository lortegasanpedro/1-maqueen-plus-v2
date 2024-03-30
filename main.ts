// serial.writeLine("direccion end")
function direccion () {
    serial.writeLine("direccion init")
    direction = randint(1, 2)
    if (direction == 1) {
        directionLeftMotor()
    }
    if (direction == 2) {
        directionRightMotor()
    }
    serial.writeLine("direccion end")
}
// serial.writeLine("backward END")
function backward () {
    serial.writeLine("bacward Init")
    // datalogger.log(datalogger.createCV("D3", distance))
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, velocidad)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, velocidad)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    direccion()
    serial.writeLine("bacward End")
}
function directionRightMotor () {
    serial.writeLine("directionRightMotor Init")
    // datalogger.log(datalogger.createCV("D2", distance))
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, velocidad * 2)
    basic.pause(pauseGiro)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    serial.writeLine("directionRightMotor End")
}
function directionLeftMotor () {
    // datalogger.log(datalogger.createCV("D1", distance))
    serial.writeLine("directionLeftMotor Init")
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, velocidad * 2)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
    basic.pause(pauseGiro)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    serial.writeLine("directionLeftMotor End")
}
/*
input.onSound(DetectedSound.Loud, function () {
    serial.writeLine("DetectedSound.Loud")
    aplauso = !aplauso
    if (aplauso) {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
    } else {
        DFRobotMaqueenPlusV2.setIndexColor(3, 0x0000ff)
    }
})*/

let roll = 0
let distance = 0
let direction = 0
let aplauso = true
let pauseGiro = 0
let velocidad = 0
let x = 0
let y = 0
let z = 0
let speed = 0
velocidad = 50
pauseGiro = 500
// let n = 0
// let R = 0
// let G = 1
// let B = 2
// let P = 3
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
DFRobotMaqueenPlusV2.setBrightness(100)
//input.setSoundThreshold(SoundThreshold.Loud, 60)
/**
 * Logica del motor
 */
/**
 * datalogger.setColumnTitles(
 * 
 * "forward",
 * 
 * "backward",
 * 
 * "right",
 * 
 * "left",
 * 
 * "speed"
 * 
 * )
 */
// basic.forever(function () {
// 
// if (R <= 3) {
// 
// DFRobotMaqueenPlusV2.setIndexColor(R, 0xff0000)
// 
// R += 1
// 
// } else {
// 
// R = 0
// 
// }
// 
// if (G <= 3) {
// 
// DFRobotMaqueenPlusV2.setIndexColor(G, 0x00ff00)
// 
// G += 1
// 
// } else {
// 
// G = 0
// 
// }
// 
// if (B <= 3) {
// 
// DFRobotMaqueenPlusV2.setIndexColor(B, 0x007fff)
// 
// B += 1
// 
// } else {
// 
// B = 0
// 
// }
// 
// if (P <= 3) {
// 
// DFRobotMaqueenPlusV2.setIndexColor(P, 0xff00ff)
// 
// P += 1
// 
// } else {
// 
// P = 0
// 
// }
// 
// n += 1
// 
// basic.pause(1000)
// 
// })
basic.forever(function () {
    //serial.writeLine("Robot forever Init : ")
    if (input.soundLevel() > 138) {
        aplauso = !aplauso
        if (aplauso) {
            DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
        } else {
            DFRobotMaqueenPlusV2.setIndexColor(3, 0x0000ff)
        }
        basic.pause(50)
    }
    if (aplauso) {
        distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
        // serial.writeLine("Robot READ D: " + distance)
        if (distance < 30 && distance > 15) {
            direccion()
        } else if (distance < 10 && distance > 0) {
            backward()
        } else {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, velocidad)
        }
        roll = input.rotation(Rotation.Roll)
        // basic.showArrow(ArrowNames.West)
        // basic.showArrow(ArrowNames.East)
        if (roll < 40 && roll > -40) {
            // basic.clearScreen()
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eClose)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eClose)
        } else if (roll < -41 && roll > -500) {
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eClose)
        } else if (roll > 41 && roll > 500) {
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eClose)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
        } else {
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
        }
    } else {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
    //serial.writeLine("Robot forever End : ")
    basic.pause(30)
})
