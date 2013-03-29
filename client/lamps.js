var Lights = new Meteor.Collection("lights");

function updateLightbar() {
  var lights = [];
  if (Lights.find().count() > 0) {
    lights = _.map(Lights.find().fetch(), function(doc) {
      return "#" + doc.hex;
    });
  }

  var handcraftCornerLight = lights[9] || "#9fc";
  var stefOfficeLight = lights[0] || "#c9f";
  var rijksmuseumTeamLight = lights[4] || "#f66";
  var cynthiaDeskLight = lights[23] || "#cf9";
  var _9292Light = lights[26] || "#9cf";
  var kitchenLight = lights[14] || "#9cf";

  lights = [handcraftCornerLight, stefOfficeLight, rijksmuseumTeamLight, cynthiaDeskLight, _9292Light];
  if (Lights.find().count() == 29) // THERE ARE 29 LIGHTS!!!
    $("#header").css("background", "-webkit-linear-gradient(left, " + lights + ")");
}

Meteor.startup(function() {
  Deps.autorun(function() {
    Meteor.subscribe("lights");
    updateLightbar();
  });
});