// Working with Spotify API/Auth
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "3863388d4dc4493c8454e81513b3dfc9";
const redirectUri = "http://localhost:5174";
const scopes = ["user-library-read, playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// const authEndpoint = "https://accounts.spotify.com/authorize?";
// const clientId = "3863388d4dc4493c8454e81513b3dfc9";
// const redirectUri = "http://localhost:3000";
// const scopes = ["user-library-read", "playlist-read-private"];

// export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;