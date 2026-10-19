---
title: CitiFoxCharger
date: 2026-10-19
category: 0
release: 2026-10-19
subpage: false
facts: Python | Windows | EV charging | Home energy
excerpt: A small charging and home-energy dashboard for a Windows wall tablet.
titleimage: "portrait-dark.jpg"
gallery:
  - file: "portrait-light.jpg"
    preview: "portrait-light.jpg"
    description: "Portrait tablet view in light mode. All values are simulated."
  - file: "portrait-dark.jpg"
    preview: "portrait-dark.jpg"
    description: "Portrait tablet view in dark mode. All values are simulated."
---

CitiFoxCharger is a small web app connecting a Škoda Citigo e iV with SMARTFOX energy management. It runs locally on a Windows wall tablet and can also be accessed from other devices on the home network.

- View the battery level, start or stop charging, and adjust the monitored target percentage.
- See home energy use and control the charger, heaters and hot water.
- Keep charging monitored in the backend while the browser is closed or the screen is off.

Built with Python, HTML, CSS and JavaScript.

### Architecture

The browser talks to the Python backend on the tablet. SMARTFOX registers are read over **Modbus TCP**; live energy values and mode changes use its **local web interface**, with readback verification. The **Škoda Public API** supplies battery status and charging start/stop commands. The backend monitors the target; delayed cloud data can cause overshoot.

![Communication between the browser, tablet backend, SMARTFOX and the Škoda cloud. Modbus is read-only; SMARTFOX control uses its local web interface.](architecture.svg)

*Both screenshots show simulated data.*

[Source code and documentation on GitHub](https://github.com/danielrammer/CitiFoxCharger)
