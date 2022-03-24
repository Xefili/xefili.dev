int schere = 3;
int stein = 4;
int papier = 5;
int winPin1 = 6;
int pointsP1 = 0;

int schere2 = 8;
int stein2 = 9;
int papier2 = 10;
int winPin2 = 7;
int pointsP2 = 0;

int cpu;
int cpu2;
int delayy = 1000;
int i;

void setup() {
    pinMode(schere, OUTPUT);
    pinMode(stein, OUTPUT);
    pinMode(papier, OUTPUT);
    pinMode(schere2, OUTPUT);
    pinMode(stein2, OUTPUT);
    pinMode(papier2, OUTPUT);
    pinMode(11, OUTPUT);

    randomSeed(analogRead(A0));

    Serial.begin(9600);
}
void loop() {
    main3();
}
void player1(int cpu, int cpu2) {
    if(cpu == 3) {
        digitalWrite(schere, HIGH);
    }
    if(cpu == 4) {
        digitalWrite(stein, HIGH);
    }
    if(cpu == 5) {
        digitalWrite(papier, HIGH);
    }
    if(cpu2 == 8) {
        digitalWrite(schere2, HIGH);
        delay(delayy);
    }
    if(cpu2 == 9) {
        digitalWrite(stein2, HIGH);
        delay(delayy);
    }
    if(cpu2 == 10) {
        digitalWrite(papier2, HIGH);
        delay(delayy);
    }
    digitalWrite(schere, LOW);
    digitalWrite(stein, LOW);
    digitalWrite(papier, LOW);
    digitalWrite(schere2, LOW);
    digitalWrite(stein2, LOW);
    digitalWrite(papier2, LOW);
}
void main2() {
    if(pointsP2 <4 || pointsP1 <4) {
        cpu = random(3, 6);
        cpu2 = random(8, 11);

        Serial.print(cpu);
        Serial.print("--");
        Serial.print(cpu2);
        Serial.println();

        player1(cpu, cpu2);

        if(cpu == 3 && cpu2 == 8 || cpu == 4 && cpu2 == 9 || cpu == 5 && cpu2 == 10) {
            Serial.println("Unentschieden :/");
        }
        if(cpu == 3 && cpu2 == 9 || cpu == 4 && cpu2 ==10 || cpu == 5 && cpu2 == 8) {
            Serial.println("Player2 gewinnt!");
            digitalWrite(winPin2, HIGH);
            delay(100);
            digitalWrite(winPin1, LOW);
            pointsP2++;
        }
        if(cpu == 5 && cpu2 == 9 || cpu == 4 && cpu2 == 8 || cpu == 3 && cpu2 == 10) {
            Serial.println("Player1 gewinnt!");
            digitalWrite(winPin1, HIGH);
            delay(100);
            digitalWrite(winPin1, LOW);
            pointsP1++;
        }
    }
    if(pointsP2 == 3) {
        digitalWrite(winPin2, HIGH);
        delay(5000);
        digitalWrite(winPin2, LOW);
    }
    if(pointsP1 == 3) {
        digitalWrite(winPin1, HIGH);
        delay(5000);
        digitalWrite(winPin1, LOW);
    }
}
void main3() {
    if(i<4) {
        cpu = random(3, 6);
        cpu2 = random(8, 11);

        Serial.print(cpu);
        Serial.print("--");
        Serial.print(cpu2);
        Serial.println();

        player1(cpu, cpu2);

        if(cpu == 3 && cpu2 == 8 || cpu == 4 && cpu2 == 9 || cpu == 5 && cpu2 == 10) {
            Serial.println("Unentschieden :/");
            i++;
        }
        if(cpu == 3 && cpu2 == 9 || cpu == 4 && cpu2 ==10 || cpu == 5 && cpu2 == 8) {
            Serial.println("Player2 gewinnt!");
            digitalWrite(winPin2, HIGH);
            delay(100);
            digitalWrite(winPin1, LOW);
            pointsP2++;
            i++;
        }
        if(cpu == 5 && cpu2 == 9 || cpu == 4 && cpu2 == 8 || cpu == 3 && cpu2 == 10) {
            Serial.println("Player1 gewinnt!");
            digitalWrite(winPin1, HIGH);
            delay(100);
            digitalWrite(winPin1, LOW);
            pointsP1++;
            i++;
        }
    }
    if(pointsP2>pointsP1 && i==3) {
        digitalWrite(winPin2, HIGH);
        delay(5000);
        digitalWrite(winPin2, LOW);
    }
    if(pointsP1>pointsP2 && i==3) {
        digitalWrite(winPin1, HIGH);
        delay(5000);
        digitalWrite(winPin1, LOW);
    }
    if(pointsP1==pointsP2 && i==3) {
        Serial.println("Unentschieden :/");
        digitalWrite(11, HIGH);
        delay(5000);
        digitalWrite(11, LOW);
        i=0;
        pointsP1, pointsP1 = 0, 0;
    }
}


/*
main(); wenn bis ein Spieler 3x gewonnen hat,
main2(); wenn nur 3 Runden gespielt werden, chance auf Unentschieden > PIN 11
*/