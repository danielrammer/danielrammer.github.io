---
title: Tortuga
date: 2018-07-04
category: 0
date: 2018-07-04
facts: Game | Mobile | Web
subpage: false
titleimage: "tortuga-preview.jpg"
gallery:
  - file: "tortuga-chased.png"
    preview: "tortuga-chased-150.jpg"
    description: "Two sharks chaseing the turtle (no in-game content)."
  - file: "tortuga-sand.png"
    preview: "tortuga-sand-150.jpg"
    description: "Screenshot: on the beach."
  - file: "tortuga-ocean.png"
    preview: "tortuga-ocean-150.jpg"
    description: "Screenshot: in open ocean."
  - file: "tortuga-score.png"
    preview: "tortuga-score-150.jpg"
    description: "Online hight-score."
---

As a hatchling, you have to make the first steps towards the incredibly long journey of a turtle. Eat to get stronger and avoid your natural enemies. Tortuga is a twitch skill one button mobile game. Tortuga will be available on the Google Play Store soon. 
[Link to BETA version of Tortuga](https://play.google.com/apps/testing/at.molding.tortuga)

## Play the Game in Web Browser

The game might not work in all browser. Also, not all features are active in the Web-Version. Get the mobile version on Google Play.

It's a one-button game. So just click somewhere or hit a button to keep the small turtle moving.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
    $('#buttonGame').click(function(){ 
        if(!$('#iframe').length) {
                $('#iframeHolderGame').html('<iframe src="tortugaGame.html" width="100%" height="700"></iframe>');
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
id="buttonGame">Click to Play Tortuga</button>
<div id="iframeHolderGame"></div>

## Some of the Low Poly Models which you see in Trotuga

Press 1,2,3,4 keys to switch between the models faster.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
    $('#buttonShow').click(function(){ 
        if(!$('#iframe').length) {
                $('#iframeHolderShow').html('<iframe src="tortugaShow.html" width="100%" height="700"></iframe>');
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
id="buttonShow">Click to Watch Low Poly Models</button>
<div id="iframeHolderShow"></div>
