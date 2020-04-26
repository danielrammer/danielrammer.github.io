---
title: Swarmify
date: 2018-08-04
category: 0
date: 2018-08-04
facts: PC/Web | Simulation
subpage: false
titleimage: "swack-preview.jpg"
gallery:
  - file: "swack-500-air.jpg"
    preview: "swack-500-air-150.jpg"
    description: "Swarm of 500 in air."
  - video: "r3WMYEVHk84"
    type: "youtube"
    preview: "swack-tut-video-150.jpg"
  - file: "swack-400-sequence.gif"
    preview: "swack-400-sequence-150.jpg"
    description: "Swarm of "
  - file: "swack-400-ground.jpg"
    preview: "swack-400-ground-150.jpg"
    description: "Swarm of "
  - file: "swack-400-air-sheres.jpg"
    preview: "swack-400-air-sheres-150.jpg"
    description: "Swarm of "
---

Swarmify is a naive swarm behavior implementation. A quick proof of concept of an idea how a force based swarm simulation could work.

The WebGL box beneath shows an early stage of the project. You can control the swarm by moving around the attractor and manipulate the camera perspective.
The frame rate drops you may experience might not occur in the desktop application.


Older version of Swarmify - you can buy the latest version in the [Assetstore](http://u3d.as/1BJw).

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
    $('#button').click(function(){ 
        if(!$('#iframe').length) {
                $('#iframeHolder').html('<iframe src="swack.html" width="100%" height="700"></iframe>');
        }
    });   
});
</script>
 
<button 
style="
    border-radius: 1em;
    background-color: white;
    padding: 1em;
    border: 0.1em solid #555555;
    cursor: pointer;"
id="button">Click To Load Simulation</button>
<div id="iframeHolder"></div>

### Controls
*Move attractor/swarm:* "Arrow Keys", hold "Shift" for altitude

*Toggle debug visualization:* "R,T"

*Toggle camera (free/fixed):* "Space"

*Free camera controls:* "W,A,S,D" and "Mouse + Mouse keys"

*Locked camera controls:* zoom with "W,S" and pivot with "A,D"

*Load entity sets (UAVs):* "1,2,3,4,5,6,7"

*Load with fixed height (UGVs):* Hold "Shift" 

*Toggle fixed height on the fly:* "Return"

*Toggle UI:* "Escape"

*Have fun! :)*
