const API_KEY = "AIzaSyDci8SQ4d07plNc2nJyER1iK6YK4_UulvY";
const VIDEO_ID = "SxaQ8usCuXs";

async function getVideoInfo(videoId) {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.items.length > 0) {
      console.log(data.items);

      return data.items[0];
    } else {
      throw new Error("Video not found");
    }
  } catch (error) {
    console.error("Error fetching video info:", error);
  }
}

getVideoInfo(VIDEO_ID).then((videoInfo) => {
  if (videoInfo) {
    console.log("Video Title:", videoInfo.snippet.title);
    console.log("Video Description:", videoInfo.snippet.description);
    console.log("View Count:", videoInfo.statistics.viewCount);
    console.log("Like Count:", videoInfo.statistics.likeCount);

    document.querySelector(".card-title").textContent = videoInfo.snippet.title;
    document.querySelector(".card-description").textContent =
      videoInfo.snippet.description;
    document.querySelector(".card-button").href =
      "https://www.youtube.com/watch?v=" + videoInfo.id;
    document.querySelector(".card-yt").src =
      "https://www.youtube.com/embed/" + videoInfo.id;

    document.querySelector(".card-static").innerHTML =
      "View Count: " +
      videoInfo.statistics.viewCount +
      "<br>Like Count: " +
      videoInfo.statistics.likeCount;
  }
});
