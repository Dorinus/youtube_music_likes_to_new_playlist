# YouTube Music Playlist Automation

This script automates the process of adding songs from your "Likes" playlist in YouTube Music to a target playlist. The script utilizes JavaScript and can be executed in the browser console while on the YouTube Music website.

## Prerequisites

- A YouTube Music account
- A target playlist already created in your YouTube Music account

## Usage

1. Open your YouTube Music account and go to the "Likes" playlist.

2. Open the browser console by right-clicking on the page and selecting "Inspect" or pressing `F12` or `Ctrl + Shift + J` (or `Cmd + Option + J` on macOS).

3. Copy the entire code from the provided script.

4. In the code, modify the following variables according to your requirements:

   - `label`: Replace `'PlayList_Name'` with the name of your target playlist.
   - `numberOfSongs`: Set the total number of songs in your "Likes" playlist.
   - `delayDuration`: Adjust the delay duration in milliseconds (e.g., 1000 for 1 second) to accommodate your internet speed.

5. Paste the modified code into the browser console and press `Enter` to execute it.

6. The script will automatically scroll through your "Likes" playlist, click the "More actions" button for each song, select the "Add to playlist" option, and finally add the song to your target playlist.

7. Monitor the console for any error messages or progress updates.

**Note: Make sure you have already created the target playlist in your YouTube Music account before executing the script.**

## Limitations

- This script assumes that your "Likes" playlist is loaded entirely on the page. If you have a large number of songs, you may need to scroll through the playlist manually and execute the script multiple times.
- The script relies on the HTML structure and class names of the YouTube Music website. If there are any changes to the website structure, the script may need adjustments to work correctly.

## Disclaimer

Use this script responsibly and in accordance with YouTube's terms of service. The script is provided as-is, without warranty or support. Use it at your own risk.

