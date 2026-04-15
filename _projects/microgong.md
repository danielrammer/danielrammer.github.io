---
title: micro:gong
date: 2026-04-01
category: 0
facts: A micro:bit Timer with LED Display, Sound, and Vibration
subpage: false
titleimage: "microGong1-Preview800.jpg"
gallery:
  - file: "microGong1-1920.jpg"
    preview: "microGong1-150.jpg"
    description: "micro:gong font"
  - file: "microGong2-1920.jpg"
    preview: "microGong2-150.jpg"
    description: "micro:gong back"
---

# micro:gong is a micro:bit Timer with LED Display, Sound, and Vibration

The idea to build this one came from the desire to have a silent (egg) timer (no ticking) for meditation. First impulse, there must be a product out there ... but then, why don't build it myself. Saves time. At the end, there was a nice an simpel piece with a tiny vibration motor.

Your find models for 3d printing, and everything you need to know to build a micro:gong at home in the repository/Readme.

[Repository](https://github.com/danielrammer/microgong) <br>
[MakeCode direct link](https://makecode.microbit.org/S24370-71822-65545-11374)<br>
[Get on Printables.com](https://www.printables.com/model/1690607-microbit-cylindric-case)

## How it works

It's a micro:bit-based timer with a 5×5 LED countdown display, adjustable from 1 to 75 minutes. The timer can use either sound or a vibration motor for start and end alerts, and the remaining time can still be increased or decreased while the countdown is running. During countdown, the display turns off after a few seconds to save power and can be woken again by pressing a button or shaking the device.

Use B to add time, A to reduce time, and A+B to start the timer. Holding A+B for 2 seconds during countdown resets the timer. In the idle state at 0 minutes, holding A+B for 2 seconds opens the sound/vibration settings, where A and B adjust the feedback strength.