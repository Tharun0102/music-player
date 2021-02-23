import { v4 as uuidv4 } from "uuid";

function LibraryState() {
    return [
        {
            name: "Flashback",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: true,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10536"
        },
        {
            name: "Toofpick",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11227"
        },
        {
            name: "Day One",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11231"
        },
        {
            name: "Murmuration",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7814"
        },
        {
            name: "Bloom",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11235"
        },
        {
            name: "Home Court",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11233"
        },
        {
            name: "Déjà Vu",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11229"
        },
        {
            name: "sopha",
            artist: "Plusma, Von Wegen ",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9061"
        },
        {
            name: "Beyond Clouds",
            artist: "Saib",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9297"
        }
    ]
}

export default LibraryState;

