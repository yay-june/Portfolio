const int JOYX_PIN = A0;
const int JOYY_PIN = A1;
const int SW_PIN = 7;
const int NUM_READINGS = 10;
const int buttonPin = 2;
const int greenLED = 6;
const int redLED = 5;
const int blueLED = 4;

int buttonState = 0;
int previousButtonState = 0;

struct AxisReadings{
  int readIndex;
  int readings[NUM_READINGS];
  float total = 0;
  int average = 0;
  int zeroed;

} xAxisReadings, yAxisReadings;

bool zeroing = false;
bool ready = false;

void setup() {
  Serial.begin(9600);

  pinMode(SW_PIN, INPUT_PULLUP);
  pinMode(greenLED, OUTPUT);
  pinMode(redLED, OUTPUT);
  pinMode(buttonPin, INPUT);
  pinMode(blueLED, OUTPUT);

  for(int i = 0; i<NUM_READINGS; i++){
    xAxisReadings.readings[i] = yAxisReadings.readings[i]=0;
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available() > 0) {
    String msg = Serial.readStringUntil('\n');
    msg.trim(); // Remove any leading/trailing whitespace

    if (msg == "zero") {
      zeroing = true;
    } else {
      // Parse comma-separated RGB values
      int red, green, blue;

      int firstComma = msg.indexOf(',');
      int secondComma = msg.indexOf(',', firstComma + 1);

      if (firstComma > 0 && secondComma > firstComma) {
        red = msg.substring(0, firstComma).toInt();
        green = msg.substring(firstComma + 1, secondComma).toInt();
        blue = msg.substring(secondComma + 1).toInt();

        red = constrain(red, 0, 255);
        green = constrain(green, 0, 255);
        blue = constrain(blue, 0, 255);

        analogWrite(redLED, red);
        analogWrite(greenLED, green);
        analogWrite(blueLED, blue);
      }
    }
  }

  buttonState = digitalRead(buttonPin);

  int xValue = analogRead(JOYX_PIN);
  int yValue = analogRead(JOYY_PIN);
  int swValue = !digitalRead(SW_PIN);

  smoothAxis(&xAxisReadings, xValue);
  smoothAxis(&yAxisReadings, yValue);

  if (zeroing){
    xAxisReadings.zeroed = xAxisReadings.average;
    yAxisReadings.zeroed = yAxisReadings.average;
    zeroing = false;
    ready = true;
  }

  if (ready){
    Serial.print(xAxisReadings.average - xAxisReadings.zeroed);//Serial.print(xValue);
    Serial.print(",");
    Serial.print(yAxisReadings.average - yAxisReadings.zeroed);//Serial.print(yValue);
    Serial.print(",");
    if (buttonState != previousButtonState){
      Serial.println(buttonState);
    }else{
      Serial.println(buttonState);
    }
  }

  delay(16);
}

void smoothAxis(AxisReadings *readings, int newValue){
  int index = readings->readIndex;
  readings->total = readings->total - readings->readings[readings->readIndex];
  readings->readings[index]=newValue;
  readings->total += newValue;
  readings->readIndex = readings->readIndex + 1;

  if (readings->readIndex >= NUM_READINGS)
    readings->readIndex=0;

  readings->average = round(readings->total / NUM_READINGS);
  

}
