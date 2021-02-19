import { v4 as uuidv4 } from "uuid";

function songLibrary() {
    return [
        {
            name: "Flashback",
            artist: " Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: true,
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10536"
        },
        {
            name: "Toofpick",
            artist: " Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-150x150.jpg"
        },
        {
            name: "Day One",
            artist: " Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            id: uuidv4(),
            audio: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-150x150.jpg"
        }
    ]
}

export default songLibrary;

