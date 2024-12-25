import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
const data = [
  {
    image:
      "https://drytickets.com.au/assets/upload/600/600/50/music/arijit-singh-11/arijit-singh-muskurane-ki-wajah-tum-ho-a.jpg",
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    added: false,
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b27351629118842986112395209e",
    name: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh, Sapna Awasthi",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Kal+Ho+Naa+Ho",
    name: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Kabira",
    name: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Jashn-e-Bahara",
    name: "Jashn-e-Bahara",
    artist: "Javed Ali",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Kun+Faya+Kun",
    name: "Kun Faya Kun",
    artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Dil+Se+Re",
    name: "Dil Se Re",
    artist: "A.R. Rahman",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Galliyan",
    name: "Galliyan",
    artist: "Ankit Tiwari",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Agar+Tum+Saath+Ho",
    name: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Zindagi+Do+Pal+Ki",
    name: "Zindagi Do Pal Ki",
    artist: "KK",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Gerua",
    name: "Gerua",
    artist: "Arijit Singh, Antara Mitra",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Bulleya",
    name: "Bulleya",
    artist: "Amit Mishra, Shilpa Rao",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Tera+Ban+Jaunga",
    name: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva, Tulsi Kumar",
    added: true,
  },
  {
    image: "https://via.placeholder.com/150?text=Khairiyat",
    name: "Khairiyat",
    artist: "Arijit Singh",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Jeene+Laga+Hoon",
    name: "Jeene Laga Hoon",
    artist: "Atif Aslam, Shreya Ghoshal",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Raabta",
    name: "Raabta",
    artist: "Arijit Singh",
    added: false,
  },
  {
    image: "https://c.saavncdn.com/240/Dil-Dhadakne-Do-Hindi-2015-500x500.jpg",
    name: "Dil Dhadakne Do",
    artist: "Shankar Mahadevan, Farhan Akhtar, Siddharth Mahadevan",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Subhanallah",
    name: "Subhanallah",
    artist: "Sreeram Chandra, Shilpa Rao",
    added: false,
  },
  {
    image: "https://via.placeholder.com/150?text=Laal+Ishq",
    name: "Laal Ishq",
    artist: "Arijit Singh",
    added: false,
  },
  {
    image:
      "https://c.saavncdn.com/024/Nagada-Sang-Dhol-From-Goliyon-Ki-Raasleela-Ram-Leela-Remix-Hindi-2022-20230430081825-500x500.jpg",
    name: "Nagada Sang Dhol",
    artist: "Shreya Ghoshal, Osman Mir",
    added: false,
  },
];
  
  const [music, setMusic] = useState(data);
  const handleAddtofavourites = (index) => {
    setMusic((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) {
          return {...item,added:!item.added}
        }
        return item;
      
    })
  })
    
  }

  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <Navbar data={music} />
      <div className='px-20 flex gap-10 flex-wrap mt-'>
        {music.map((item, index) => <Card
          key={index}
          item={item}
          index={index}
          handleClick={handleAddtofavourites}
        />)}
        
        
     

      </div>
    </div>
  )
}

export default App
