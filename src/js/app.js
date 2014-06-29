$(document).ready(function(){

  var Character={
    aspects: {},
    phases: []
  };

  $("#save-basic-info").click(function(){
    Character.playerName = $("#player-name").val();
    Character.characterName = $("#character-name").val();
    Character.template = $("#template").val();
    Character.musts = $("#musts").val();
    Character.aspects.highConcept = $("#highConcept").val();
    Character.aspects.trouble = $("#trouble").val();
    console.log(Character);
  });

  $("#save-aspects").click(function(){
    var phase = {};
    savePhaseOne();
    savePhaseTwo();
    savePhaseThree();
    savePhaseFour();
    savePhaseFive();

    console.log(Character);
  });

  function savePhaseOne(){
    var phaseOne = {}
    phaseOne.story = $("#background-story").val();
    Character.aspects.background = $("#background-aspect").val();
    Character.phases.push(phaseOne);
  }

  function savePhaseTwo(){
    var phaseTwo = {}
    phaseTwo.story = $("#rising-conflict-story").val();
    Character.aspects.risingConflict = $("#rising-conflict-aspect").val();
    Character.phases.push(phaseTwo);
  }

  function savePhaseThree(){
    var phaseThree={}
    phaseThree.title = $("#first-adventure-title").val();
    phaseThree.story  = $("#first-adventure").val();
    phaseThree.guest = $("#first-adventure-guest").val();
    Character.aspects.firstAdventure = $("#first-adventure-aspect").val();
    Character.phases.push(phaseThree);
  }

  function savePhaseFour(){
    var phaseFour={}
    phaseFour.title = $("#guest-story-title").val();
    phaseFour.story  = $("#guest-events").val();
    phaseFour.guest = $("#story-owner").val();
    Character.aspects.guestStar = $("#guest-aspect").val();
    Character.phases.push(phaseFour);
  }


  function savePhaseFive(){
    var phaseFive={}
    phaseFive.title = $("#guest-story-title2").val();
    phaseFive.story  = $("#guest-events2").val();
    phaseFive.guest = $("#story-owner2").val();
    Character.aspects.guestStarRedux = $("#guest-aspect2").val();
    Character.phases.push(phaseFive);
  }
});