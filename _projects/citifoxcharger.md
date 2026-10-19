---
title: CitiFoxCharger
date: 2026-10-19
category: 0
release: 2026-10-19
subpage: false
facts: Python | Windows | EV charging | Home energy
excerpt: A local-first charging and home-energy dashboard connecting a Škoda Citigo e iV with SMARTFOX energy management.
titleimage: "dashboard-desktop.jpg"
gallery:
  - file: "dashboard-desktop.jpg"
    preview: "dashboard-desktop.jpg"
    description: "CitiFoxCharger desktop dashboard. All vehicle and energy values shown are simulated."
  - file: "dashboard-portrait.jpg"
    preview: "dashboard-portrait.jpg"
    description: "Portrait wall-tablet layout at 800 by 1280 pixels. Simulated vehicle and energy data."
---

<link rel="stylesheet" href="{{ '/projects/citifoxcharger/case-study.css' | relative_url }}">

<p class="cf-intro">One clear view of the car, the charger and the energy at home.</p>

CitiFoxCharger is a personal integration project for a Škoda Citigo e iV and a SMARTFOX energy manager. It brings battery level, charging controls, grid power and heating outputs into one compact browser dashboard, designed for a Windows tablet on the wall.

<p class="cf-caption">The screenshots on this page use simulated data. They do not show a live vehicle, household measurements or personal account information.</p>

<div class="cf-links">
  <a href="https://github.com/danielrammer/CitiFoxCharger">View source on GitHub ↗</a>
  <a href="https://github.com/danielrammer/CitiFoxCharger/blob/main/COMMUNICATION.md">Communication diagrams ↗</a>
</div>

## Two systems. One charging workflow.

The car and the wallbox each have their own charging permissions and schedules. Starting just one side does not necessarily start a charge. The dashboard coordinates both sides while keeping their individual states visible.

<ol class="cf-workflow">
  <li><strong>Choose a target.</strong><span>Set the desired battery percentage and request manual charging. The target can also be adjusted during an active session.</span></li>
  <li><strong>Prepare the charger.</strong><span>Switch SMARTFOX to M+, verify local readiness and show any reported phase switching before issuing the vehicle start.</span></li>
  <li><strong>Monitor and stop.</strong><span>The Windows backend watches vehicle reports. At the target, or on a stop request, it first attempts to secure the local wallbox Off, then coordinates the vehicle stop.</span></li>
</ol>

After a confirmed combined stop, normal A+ operation can resume. An explicitly selected Off mode stays Off. Existing vehicle and SMARTFOX schedules remain separate from the app's percentage target.

## Local control meets cloud telemetry

<figure class="cf-architecture">
  <img src="{{ '/projects/citifoxcharger/architecture.svg' | relative_url }}" alt="The browser connects to a shared Windows backend. That backend reads SMARTFOX locally through Modbus and XML, sends verified local web commands, and separately talks to the Škoda cloud API for vehicle data and charging commands." loading="lazy">
  <figcaption>The two communication paths are deliberately separate. Battery state comes from the vehicle API, not from the charging cable. <a href="{{ "/projects/citifoxcharger/architecture.svg" | relative_url }}" target="_blank" rel="noopener">Open diagram at full size ↗</a></figcaption>
</figure>

The backend is written in Python using the standard library. The frontend uses HTML, CSS and JavaScript. It reads SMARTFOX locally over Modbus TCP and the installed vendor web interface; the Škoda connection uses the public HTTPS API, with capabilities discovered for the configured vehicle.

Modbus access remains read-only. Local SMARTFOX control uses narrowly scoped, explicitly enabled vendor web commands with firmware checks and readback. The documentation lists the exact register addresses, XML fields and API calls rather than treating an observed number as a verified protocol.

## Designing around uncertainty

The difficult part is not the Start button. It is deciding what a delayed or incomplete response actually means.

- **Freshness is visible.** The dashboard distinguishes when a vehicle captured a measurement from when the backend last fetched it. Another cloud read does not guarantee a new in-car measurement.
- **Acceptance is not completion.** A successful command response is checked against subsequent telemetry. An uncertain start is not blindly repeated.
- **The local stop comes first.** A cloud timeout must not prevent the backend from attempting to switch the wallbox Off. Local readback failures remain visible.
- **The target is monitored, not programmed into the battery.** Cloud delays can lead to overshoot. The app does not claim to enforce an exact native charging limit.
- **API requests are shared and budgeted.** Multiple browsers read the same backend cache; request limits, cooldowns and reserved command capacity are respected.

These cases are covered by a simulated integration suite. The full offline suite reached **282 tests**, covering charging state transitions, target handling, phase preparation, local control, network access and update recovery. The latest artwork release also passed the targeted service/server checks.

## A dashboard for the wall

The portrait layout fits charging and home energy on a single overview. Large touch controls, light and dark themes, German and English labels, visible charging feedback and a page-reload button make it practical in full-screen tablet use.

The app also shows house consumption, grid import/export, the analogue heater, a second heater, hot water and charger power. Controls expose only the supported operating modes. Estimates and reported output actuation are labelled separately from measured electrical consumption.

Monitoring belongs to the backend, so it does not depend on an open browser tab. The display can turn off while the backend continues running; actual Windows sleep is a different execution state and must be handled by the tablet's power configuration. Optional HTTPS access lets other devices in the home network share the same monitor and controls.

## Identity and implementation

<figure class="cf-identity">
  <img src="{{ '/projects/citifoxcharger/logo.png' | relative_url }}" alt="CitiFoxCharger identity: a green compact electric car wrapped by a red fox tail that becomes a charging cable." loading="lazy">
  <figcaption>An original car, fox-tail and charging-cable identity, using green and red color families inspired by the connected systems.</figcaption>
</figure>

My focus for this side project was the interaction concept, integration workflow and iterative testing against real device behavior. The implementation and visual exploration were developed with AI assistance. Source code, interface notes, startup/update scripts and validation reports are kept together in the repository.

## Private data stays in the local profile

The browser never receives the vehicle API key. Credentials are entered locally and can be stored with Windows per-user encryption. The public source excludes personal configuration, vehicle caches, network certificates, keys and diagnostic exports.

Before publication, the repository's reachable Git history and GitHub attachments were reviewed for secrets and personal vehicle data. The [publication review](https://github.com/danielrammer/CitiFoxCharger/blob/main/PUBLICATION-REVIEW.md) records the scope, the checksum false positive and the limits of that check.

<div class="cf-links cf-end-links">
  <a href="https://github.com/danielrammer/CitiFoxCharger">Explore the repository ↗</a>
  <a href="{{ '/projects/' | relative_url }}">All projects</a>
</div>
