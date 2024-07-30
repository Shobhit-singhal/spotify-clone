let artists = document.querySelectorAll(".artist");

class artistClass {
  constructor(artistName, artistPost, artistImg) {
    this.artistName = artistName;
    this.artistPost = artistPost;
    this.artistImg = "images\\artist\\" + artistImg;
  }
}
let artist;
let artistCollection = [
  new artistClass("Arijit Singh", "Artist", "arijitsingh.jpeg"),
  new artistClass("Pritam", "Artist", "pritam.jpeg"),
  new artistClass("A.R.Rahman", "Artist", "arrahman.jpeg"),
  new artistClass("Atif Aslam", "Artist", "atifaslam.jpeg"),
  new artistClass("Justin Beiber", "Artist", "justin.jpeg"),
  new artistClass("Eminem", "Artist", "eminem.jpeg"),
  new artistClass("kendrik Lamar", "Artist", "kendrik.jpeg"),
];
let i = 0;
artists.forEach((artist) => {
  // console.log(artist);
  artist.querySelector("img").src = artistCollection[i].artistImg;
  artist.querySelector(".artist-name").innerText =
    artistCollection[i].artistName;
  artist.querySelector(".artist-post").innerText =
    artistCollection[i].artistPost;
  i++;
});

class albumClass {
  constructor(albumName, albumArtist, albumImg) {
    this.albumName = albumName;
    this.albumArtist = albumArtist;
    this.albumImg = "images\\album\\" + albumImg;
  }
}

let albums = document.querySelectorAll(".album");
let albumCollection = [
  new albumClass(
    "Aashiqui2",
    "Mithoon, Ankit Tiwary, JeetGanguli",
    "cover1.jpeg"
  ),
  new albumClass("Ek Tha Raja", "Badhshah", "cover2.jpeg"),
  new albumClass(
    "Animal",
    "Manan Bhardwaj, Vishal Mishra, Jaani",
    "cover3.jpeg"
  ),
  new albumClass("Sajni", "Ram Sampath, Arijit Singh", "cover4.jpeg"),
  new albumClass("Moosetape", "Sidhoo Moose Wala", "cover5.jpg"),
  new albumClass("Still rolin", "Shubh", "cover6.jpg"),
  new albumClass("Making Memories", "Karan Aujila", "cover7.jpeg"),
];
i = 0;
albums.forEach((album) => {
  album.querySelector("img").src = albumCollection[i].albumImg;
  album.querySelector(".album-name").innerText = albumCollection[i].albumName;
  album.querySelector(".album-artist").innerText =
    albumCollection[i].albumArtist;
  i++;
});
