$(function(){


  Character = {
    aspects: {}
  },

  saveBasicInfo = function () {
    Character.playerName = $('#player-name').val();
    Character.characterName = $('#character-name').val();
    Character.template = $('#template').val();
    Character.musts = $('#musts').val();
    Character.highConcept = $('#high-concept').val();
    Character.trouble = $('#trouble').val();
    console.log(Character);
  }


});