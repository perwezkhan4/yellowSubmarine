import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Yesterday",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
      artist: "Mo Anando",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6692",
      color: ["#FDD1AD", "#E185A9"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Daydream",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6518",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Not A Cloud In Sight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      artist: "Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10449",
      color: ["#60A0DD", "#B76CB4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Small Town Palm Tree",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12122",
      color: ["#447F8D", "#1E606E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
