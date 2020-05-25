import React from 'react';
import AdSense from 'react-adsense';


export const ads = (size) => {
  switch (size) {
    case 'smallBanner':
      return (
        <AdSense.Google
          class="adsbygoogle"
          style={{ display: 'block', width: '300px', height: '250px' }}
          client="ca-pub-2270636537108959"
          slot="5480228173"
          format=""
          responsive=""
        />
      );
    case 'banner':
      return (
        <AdSense.Google
          class="adsbygoogle"
          style={{
            display: 'block',
            width: "798px",
            height: '90px',
          }}
          client="ca-pub-2270636537108959"
          slot="9000794686"
          format=""
          responsive=""
        />
      );
    default:
      return (
        <AdSense.Google
          class="adsbygoogle"
          style={{ display: 'block', width: '300px', height: '250px' }}
          client="ca-pub-2270636537108959"
          slot="9252076129"
          format=""
          responsive=""
        />
      )
  }
};
