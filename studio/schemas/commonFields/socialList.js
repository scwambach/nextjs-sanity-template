export const socialList = {
  title: 'Icon',
  name: 'icon',
  type: 'string',
  options: {
    list: [
      { title: 'facebook', value: 'SiFacebook' },
      { title: 'twitter', value: 'SiTwitter' },
      { title: 'youtube', value: 'SiYoutube' },
      { title: 'instagram', value: 'SiInstagram' },
      { title: 'linkedin', value: 'SiLinkedin' },
      { title: 'pinterest', value: 'SiPinterest' },
      { title: 'tiktok', value: 'SiTiktok' },
      { title: 'spotify', value: 'SiSpotify' },
      { title: 'venmo', value: 'SiVenmo' },
      { title: 'snapchat', value: 'SiSnapchat' },
      { title: 'twitch', value: 'SiTwitch' },
      { title: 'dribbble', value: 'SiDribbble' },
      { title: 'email', value: 'AiOutlineMail' },
      { title: 'website', value: 'AiOutlineLink' },
    ],
  },
};

export const socialName = (name) => {
  let iconName = '';
  socialList.options.list.forEach((item) => {
    if (name === item.value) {
      console.log('item', item);
      console.log('name', name);
      iconName = item.title;
    }
  });

  return iconName;
};
