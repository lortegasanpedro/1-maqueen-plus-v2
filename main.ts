/**
 * Muestra la distancia del sensor
 */
/**
 * Leds
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
let n = 0
let R = 0
let VELOCIDAD = 60
let G = 1
let B = 2
let P = 3
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
DFRobotMaqueenPlusV2.setBrightness(100)
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
// Logica del motor
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    // basic.showNumber(distance)
    direction = randint(1, 2)
    // basic.showNumber(direction)
    if (distance < 30) {
        if (direction == 1) {
            DFRobotMaqueenPlusV2.setIndexColor(1, 0x00ff00)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, VELOCIDAD * 2)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
            basic.pause(1000)
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
            DFRobotMaqueenPlusV2.ledBlank()
        }
        if (direction == 2) {
            DFRobotMaqueenPlusV2.setIndexColor(1, 0x0000ff)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, VELOCIDAD * 2)
            basic.pause(1000)
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
            DFRobotMaqueenPlusV2.ledBlank()
        }
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, VELOCIDAD)
    }
})
