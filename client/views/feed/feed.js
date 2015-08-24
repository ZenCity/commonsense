if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);

  Template.feed.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.feed.events({
    'click button': function () {
      console.log("aha");
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
    }
  });
}


