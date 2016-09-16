const emails = [
  {
    "from": "test@example.com",
    "subject": "Something new",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nibh vehicula, facilisis dolor eu, condimentum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dapibus, odio quis rutrum elementum, augue dui vestibulum risus, bibendum accumsan ex sapien a massa. Fusce vitae fringilla est. Cras faucibus velit sapien. Fusce eros lacus, egestas et orci sed, pulvinar sagittis tortor. Morbi enim turpis, finibus eget convallis eget, sodales quis tellus. Duis porta, metus sed bibendum ornare, odio mauris condimentum ante, et mattis libero erat ut odio. Mauris mattis sem in neque tristique, vel facilisis lorem cursus. Etiam eget odio ac ipsum mattis interdum quis eget turpis. Sed a nisl vitae arcu pharetra malesuada. Mauris ac facilisis enim. Integer venenatis urna orci, eget auctor purus iaculis ut.",
    "read": false,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "bill.brown@ups.com",
    "subject": "sem tellus, sollicitudin in lec",
    "content": "Morbi sem tellus, sollicitudin in lectus a, dignissim maximus diam. Phasellus felis urna, finibus non magna interdum, luctus bibendum diam. Vestibulum a sapien neque. Nunc et interdum diam. Phasellus vel justo vulputate, consequat nibh eget, tincidunt mauris. Etiam imperdiet euismod lorem ut commodo. Cras ac libero porta massa pretium eleifend dapibus non erat.",
    "read": false,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "rich@me.com",
    "subject": "egestas libero id lacus ullamcorper",
    "content": "egestas libero id lacus ullamcorper, eleifend cursus turpis bibendum. Pellentesque ut sem eu nisl pretium viverra eu ac mi. Mauris vel facilisis ex. Curabitur congue, nibh non facilisis condimentum, magna libero blandit mauris, feugiat feugiat justo ipsum convallis sapien. Suspendisse tempor",
    "read": false,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "kelly@gmail.com",
    "subject": "vehicula, Pellentesque ha",
    "content": "Nullam ac nibh vehicula, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dapibus, odio quis rutrum elementum, augue dui vestibulum risus, bibendum accumsan ex sapien a massa. Fusce vitae fringilla est. Cras faucibus velit sapien. Fusce eros lacus, egestas et orci sed, pulvinar sagittis tortor. Morbi enim turpis, finibus eget convallis eget, sodales quis tellus. Duis porta, metus sed bibendum ornare, odio mauris condimentum ante, et mattis libero erat ut odio. Mauris mattis sem in neque tristique, vel facilisis lorem cursus. Etiam eget odio ac ipsum mattis interdum quis eget turpis. Sed a nisl vitae arcu pharetra malesuada. Mauris ac facilisis enim. Integer venenatis urna orci, eget auctor purus iaculis ut.",
    "read": false,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "mary@me.com",
    "subject": "is tortor, cursus ut la",
    "content": "r felis tortor, cursus ut lacus quis, tristique aliquet metus. Morbi convallis leo a mi lobortis consequat. Sed ullamcorper quam vitae eros venenatis porta. Sed eget libero risus. Suspendisse rutrum, tellus non pellentesque congue, nisl risus volutpat purus, vel aliquam turpis ex id nulla. Quisque ut sapien nisl.",
    "read": true,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "will@myhouse.com",
    "subject": "STurpis egestas. Nulla dapibus,",
    "content": "Turpis egestas. Nulla dapibus, odio quis rutrum elementum, augue dui vestibulum risus, bibendum accumsan ex sapien a massa. Fusce vitae fringilla est. Cras faucibus velit sapien. Fusce eros lacus, egestas et orci sed, pulvinar sagittis tortor. Morbi enim turpis, finibus eget convallis eget, sodales quis tellus. Duis porta, metus sed bibendum ornare, odio mauris condimentum ante, et mattis libero erat ut odio. Mauris mattis sem in neque tristique, vel facilisis lorem cursus. Etiam eget odio ac ipsum mattis interdum quis eget turpis. Sed a nisl vitae arcu pharetra malesuada. Mauris ac facilisis enim. Integer venenatis urna orci, eget auctor purus iaculis ut.",
    "read": true,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "jeffrey@wii.com",
    "subject": "enean egestas mi at euismod",
    "content": "Aenean egestas mi at euismod convallis. Donec consequat molestie bibendum. Integer nunc est, ultrices at augue vitae, convallis vehicula lacus. Integer tortor mi, mollis ut lorem vel, finibus euismod dolor. Aenean euismod laoreet enim, mattis tempor tortor volutpat id.",
    "read": true,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "myself@me.com",
    "subject": "Surpis egestas. Nulla dapibus,",
    "content": "Turpis egestas. Nulla dapibus, odio quis rutrum elementum, augue dui vestibulum risus, bibendum accumsan ex sapien a massa. Fusce vitae fringilla est. Cras faucibus velit sapien. Fusce eros lacus, egestas et orci sed, pulvinar sagittis tortor. Morbi enim turpis, finibus eget convallis eget, sodales quis tellus. Duis porta, metus sed bibendum ornare, odio mauris condimentum ante, et mattis libero erat ut odio. Mauris mattis sem in neque tristique, vel facilisis lorem cursus. Etiam eget odio ac ipsum mattis interdum quis eget turpis. Sed a nisl vitae arcu pharetra malesuada. Mauris ac facilisis enim. Integer venenatis urna orci, eget auctor purus iaculis ut.",
    "read": true,
    "profile": "http://placekitten.com/g/200/300"
  },
  {
    "from": "myself@me.com",
    "subject": "Aenean egestas mi",
    "content": "Aenean egestas mi at euismod convallis. Donec consequat molestie bibendum. Integer nunc est, ultrices at augue vitae, convallis vehicula lacus. Integer tortor mi, mollis ut lorem vel, finibus euismod dolor. Aenean euismod laoreet enim, mattis tempor tortor volutpat id.",
    "read": true,
    "profile": "http://placekitten.com/g/200/300"
  }
]

export default emails;
