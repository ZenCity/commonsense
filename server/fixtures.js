if (DUMMY_DATA) {

  //Add Posts, Users, Publishers, Actions

  //Posts
  Users.insert({
    user_id: 'axbh38d0x9_1rt',
    username: 'idoivri',
    name: ['Ido','Ivri'],
    profile_pic: 'images/some_pic.jpg',
    home_address: 'Uriel Da Costa 18, Tel Aviv',
    work_address: 'Ahad ha\'am 9, Tel Aviv',
    demography: {
      age: '30-40',
      sex: 'm',
      occupation: 'software engineer',
      marital_status: 'm'
    },
    interests: [],
    inbox: []

  });

  //Publishers

  Publishers.insert({
    name: 'Mayor\'s office',
    city: 'Tel-Aviv',
    publisher_id: 'sbb985cSa;_',
    profile_pic: 'images/some_pic.jpg',
    message_type: 'manual',
    owner: 'Galit Elhanani, spokeswoman',
    default_location: [32.081806, 34.780556]
  });

  Actions.insert({
    Content: "Please tell us if you'd like city hall to be opened until 20:00 once a week",
    creation_date: '17-08-15 15:00',
    location: [32.073889, 34.792222],
    priority: 'normal',
    action: 'vote_yes',
    conversion_rate: 56
  });

  Posts.insert({
    publisher: 'Tel Aviv Municipality',
    creation_date: '13-08-15 15:00',
    location: [32.086667,34.789722], //latitude / longtitude
    content: 'I just got introduced to Meteor, I think it\'s a great technology, bla bla bla...',
    user: 'sauro',
    likes: 25,
    comments: [],
    url: 'http://sachagreif.com/introducing-telescope/',


  });
  Posts.insert({
    publisher: 'ZenCity, Inc.',
    creation_date: '17-08-15 15:00',
    location: [32.064019,34.769772], //latitude / longtitude
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.',
    user: 'jina',
    likes: 115,
    comments: [],
    url: 'http://meteor.com'
  }); 
  Posts.insert({
    publisher: 'City beautification department (SHEFA)',
    creation_date: '18-08-15 15:00',
    location: [32.073889, 34.792222], //latitude / longtitude
    content: 'The Meteor Book',
    user: 'allisongrayce',
    likes: 35,
    comments: [],
    url: 'http://themeteorbook.com'
  });



}

