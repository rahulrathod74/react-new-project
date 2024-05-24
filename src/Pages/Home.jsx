import { Box, Heading ,Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
let imgobject=[
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/564x/e9/04/2a/e9042abdc139772c658a6a14af280333.jpg",
    cardcontent:"Love is the essence of life and the key to all happiness",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/564x/e0/a6/9f/e0a69f86c8f0535208c3262abcf27289.jpg",
    cardcontent:"Love is not something you find, it is something that finds you",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/564x/44/39/d2/4439d266784da22a7d9899156f1bc802.jpg",
    cardcontent:"In love, there is no room for ego or self-centeredness",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/564x/08/b6/8e/08b68e499b6e6881e0a79398c724dd6a.jpg",
    cardcontent:"love is the greatest binding force that unites all beings",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/736x/6b/83/57/6b83570e70bd8ca2257aa4ce7404897e.jpg",
    cardcontent:" Lord Krishna's true love is Radha.",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/736x/68/c7/05/68c7059eeaaebe2bacdecf1d44d942fb.jpg",
    cardcontent:" When you feel a peaceful joy, that’s when you are near truth. – Lord Krishna.",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/736x/5e/c6/f3/5ec6f36b1f3e42343663f2c677d11ccb.jpg",
    cardcontent:" The mind acts like an enemy for those who do not control it.” – Lord Krishna",
  },
  { title:"Radha Krishna",
    imgurl:"https://i.pinimg.com/736x/80/57/c4/8057c428c2c43de8bf92f0c1a6cca2e2.jpg",
    cardcontent:" Set your heart upon your work but never on its reward.” – Lord Krishna",
  },
  
]
const Home = () => {
  const Navigate=useNavigate()
  const toast = useToast()
  function handleClcik(){
    toast({
      title: 'You are going About Page',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    Navigate("/about")
  }
  return (
   <Box>
    <Heading as="h1" size="xl"  >
        Home Page
    </Heading>
    <div style={{display:'flex', flexWrap:"wrap", justifyContent:"center"}}>
    {
        imgobject.map((ele)=>( 
          
            <div className="card">
                <h2>{ele.title}</h2>
                <img src={ele.imgurl} alt="" />
                <p>{ele.cardcontent}</p>

            </div>
                     
        
        ))
       }
       <Button colorScheme='orange' variant='solid' onClick={handleClcik}>
    Go to About page
  </Button>
       </div>
    
   </Box>
  )
}

export default Home