/**
 * basic.forever(function () {
 * 
 * if (R <= 3) {
 * 
 * DFRobotMaqueenPlusV2.setIndexColor(R, 0xff0000)
 * 
 * R += 1
 * 
 * } else {
 * 
 * R = 0
 * 
 * }
 * 
 * if (G <= 3) {
 * 
 * DFRobotMaqueenPlusV2.setIndexColor(G, 0x00ff00)
 * 
 * G += 1
 * 
 * } else {
 * 
 * G = 0
 * 
 * }
 * 
 * if (B <= 3) {
 * 
 * DFRobotMaqueenPlusV2.setIndexColor(B, 0x007fff)
 * 
 * B += 1
 * 
 * } else {
 * 
 * B = 0
 * 
 * }
 * 
 * if (P <= 3) {
 * 
 * DFRobotMaqueenPlusV2.setIndexColor(P, 0xff00ff)
 * 
 * P += 1
 * 
 * } else {
 * 
 * P = 0
 * 
 * }
 * 
 * n += 1
 * 
 * basic.pause(1000)
 * 
 * })
 */
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
let direction = 0
let distance = 0
let R = 0
let n = 0
let VELOCIDAD = 60
let G = 1
let B = 2
let P = 3
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
DFRobotMaqueenPlusV2.setBrightness(100)
// Logica del motor
datalogger.setColumnTitles(
"D1",
"D2",
"D3"
)
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    // basic.showNumber(distance)
    direction = randint(1, 2)
    // basic.showNumber(direction)
    if (distance < 30 && distance > 15) {
        if (direction == 1) {
            datalogger.log(datalogger.createCV("D1", distance))
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eClose)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, VELOCIDAD * 2)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
            basic.pause(1000)
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        }
        if (direction == 2) {
            datalogger.log(datalogger.createCV("D2", distance))
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eClose)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, VELOCIDAD * 2)
            basic.pause(1000)
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        }
    } else if (distance < 10 && distance > 0) {
        datalogger.log(datalogger.createCV("D3", distance))
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eLeftLed, MyEnumSwitch.eOpen)
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eRightLed, MyEnumSwitch.eOpen)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, VELOCIDAD)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, VELOCIDAD)
        basic.pause(1000)
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, VELOCIDAD)
    }
})
