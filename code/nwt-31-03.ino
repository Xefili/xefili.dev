int tasterStat;
int hoch;
int tief;

void setup() {
    pinMode(7, INPUT_PULLUP);
    pinMode(6, INPUT_PULLUP);
    pinMode(2, OUTPUT);
    pinMode(3, OUTPUT);
    Serial.begin(9600);
}
void loop() {
    aufgabe122();
}
void aufgabe121() {
    tasterStat = digitalRead(7);
    if(tasterStat==1) {
        digitalWrite(6, HIGH);
    }
    else {
        digitalWrite(6, LOW);
    }
}
void aufgabe122() {
    tief = digitalRead(7);
    hoch = digitalRead(6);
    delay(10);
    if(tief==1) {
        tone(2, 200);
    }
    if(hoch==1) {
        tone(3, 900);
    }
    if(hoch==0) {
        noTone(3);
    }
    if(tief==0) {
        noTone(2);
    }
}