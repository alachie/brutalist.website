import {useState, useEffect} from 'react'

export default function EmojiRandom() {
    const [emoji, setEmoji] = useState('')

    const emojis = ['🍄', '🌿', '🌵', '🧙‍♂️', '🤠', '🥴', '🐛', '🚧', '🪄', '🪞', '🎈', '🌳', '🌲', '🥬', '🌏', '🪐', '🌻', '🌼', '🌸', '🌺', '🦋', '🐌', '🐞']
    useEffect(() => {
        
        setInterval(() => {
            const newEmojis = [...new Array(20)].map(() => emojis[Math.floor(Math.random() * emojis.length)])

            // setEmoji(emoji => emojis[Math.floor(Math.random() * emojis.length)] + emoji)
            setEmoji(newEmojis)
        }, 500);
    },[])

    
    return (
        <div className="emoji-random">
            {emoji}
        </div>
    )
}
