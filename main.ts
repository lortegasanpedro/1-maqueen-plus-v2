/**
 * Leds
 */
/**
 * Muestra la distancia del sensor
 */
/**
 * basic.forever(function () {
 * 
 * basic.showNumber(distance)
 * 
 * })
 */
function direccion () {
    direction = randint(1, 2)
    if (direction == 1) {
        directionLeftMotor()
    }
    if (direction == 2) {
        directionRightMotor()
    }
}
function bacward () {
    // datalogger.log(datalogger.createCV("D3", distance))
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, velocidad)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, velocidad)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    direccion()
}
function directionRightMotor () {
    // datalogger.log(datalogger.createCV("D2", distance))
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eClose)
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, velocidad * 2)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
}
function directionLeftMotor () {
    // datalogger.log(datalogger.createCV("D1", distance))
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eClose)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, velocidad * 2)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
    basic.pause(1000)
    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
}
let distance = 0
let speed = 0
let z = 0
let y = 0
let x = 0
let direction = 0
let velocidad = 0
let roll = 0
/*
let n = 0
let R = 0
let G = 1
let B = 2
let P = 3 */
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
DFRobotMaqueenPlusV2.setBrightness(100)
// Logica del motor
/*datalogger.setColumnTitles(
"forward",
"backward",
"right",
"left",
"speed"
)*/
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
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (distance < 30 && distance > 15) {
        direccion()
    } else if (distance < 10 && distance > 0) {
        bacward()
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, velocidad)
    }
    roll = input.rotation(Rotation.Roll)
    if (roll < 40 && roll > -40) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    basic.pause(30)
})
