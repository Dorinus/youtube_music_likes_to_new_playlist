const label = 'PlayList_Name'; // Playlist Name to add songs too
const numberOfSongs = 1000; // Number of songs in Your Likes playlist
const delayDuration = 1000; // Delay duration in milliseconds, adjust to higher values if you have slow internet

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scrollPage = async () => {
  for (let i = 0; i < numberOfSongs / 100; i++) {
    await delay(delayDuration);
    window.scrollTo(0, document.body.scrollHeight);
  }
};

const elements = document.querySelectorAll(
  'yt-button-shape[aria-label="More actions"]'
);

const processElements = async () => {
  await scrollPage();

  if (elements.length >= 2) {
    for (let i = 1; i < elements.length; i++) {
      let button = elements[i].querySelector('button');
      button.click();

      await delay(delayDuration);

      const addToPlaylistElement = document.querySelectorAll(
        'a.yt-simple-endpoint.style-scope.ytmusic-menu-navigation-item-renderer'
      );

      if (addToPlaylistElement.length > 1) {
        addToPlaylistElement[1].click();

        await delay(delayDuration);

        const buttons = document.querySelectorAll(
          `button[aria-label="${label} "]`
        );

        if (buttons.length > 0) {
          const button = buttons[0];
          button.click();
        } else {
          console.log('Button not found');
        }
      } else {
        console.log('Add to playlist element not found');
      }
    }
  } else {
    console.log('Not enough elements found');
  }
};

processElements();
