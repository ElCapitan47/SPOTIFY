import React from 'react'
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextwithHover';
import { Link } from 'react-router-dom';



const focusCardsData = [
  {title:'Metropolitan Dream' ,
   desc:'Focus with deep techno and tech house',
   imgUrl:'https://images.unsplash.com/photo-1701822839967-06308ce8f99c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Tree House' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Moonlight Road' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Beach Ecstasy' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'TranquilAqua' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const SpotifyPlaylistCardData = [
  {title:'Mathematical Melody' ,
   desc:'Focus with deep techno and tech house',
   imgUrl:'https://images.unsplash.com/photo-1516381548400-349d680edb56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Tree House' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Moonlight Road' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'Beach Ecstasy' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {title:'TranquilAqua' ,
  desc:'Focus with deep techno and tech house',
  imgUrl:'https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
 


const HomeComponent = () => {
  return (
    <div className='h-full w-full flex flex-row'>
      
          {/* Left Panel - 20%*/}
          <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
            <div>
                <div className='p-6'>
                    <Icon icon="logos:spotify"  width='145'/>
                </div>
                <div className='py-5'>
                    <IconText displaytext={'Home'} iconname={"material-symbols:home"} active></IconText>
                    <IconText displaytext={'Search'} iconname={"material-symbols:search"}></IconText>
                    <IconText displaytext={'Your Library'} iconname={"fluent:library-24-filled"}></IconText>
                </div>
                <div className='pt-7'>
                    <IconText displaytext={'Create Playlist'} iconname={"basil:add-solid"}></IconText>
                    <IconText displaytext={'Liked Songs'} iconname={"icon-park-solid:like"}></IconText>
                    
                </div>
            </div>
            
            <div className="px-5">
                <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="bi:globe" />
                    <div className="ml-2 text-sm font-semibold">
                        English
                    </div>
                </div>
            </div>
            
            

          </div>
          {/* Right Panel -80% */}
          <div className='h-full w-4/5 bg-app-black overflow-auto'>
                {/* Navbar */}
                <div className='w-full h-1/10 bg-black bg-opacity-40 flex flex items-center justify-end p-5'>
                  <div className='w-1/2 flex '>
                    <div className='w-3/5 flex justify-around items-center '>
                      <TextwithHover displaytext={'Premium'}/>
                      <TextwithHover displaytext={'Support'}/>
                      <TextwithHover displaytext={'Download'}/>
                      <div className='h-1/2 border-r border-white'></div>
                    </div>
                    <div className='w-2/5 flex justify-around'>
                        <Link to='/signup' className='flex items-center justify-center'>
                           <TextwithHover displaytext={'Sign Up'}/>
                        </Link>
                        <Link to='/login' className='block'>
                          <div className='bg-white rounded-full px-8 py-3 items-center justify-center font-semibold cursor-pointer'>
                            <button> Log In</button>
                          </div>
                        </Link>
                        
                    </div>
                    
                    

                  </div>
                

                </div>
                {/* Song Cards */}
                <div className='overflow-auto'>
                  <PlaylistView titleText='Focus' cardsData={focusCardsData}/>
                  <PlaylistView titleText='Spotify Hits' cardsData={SpotifyPlaylistCardData}/>
                  <PlaylistView titleText='Sound of India' cardsData={focusCardsData}/>
                </div>
          </div>
 \
      
    </div>
  )
}


const PlaylistView = ({titleText, cardsData}) => {
  return (
    <div className='text-white p-8 mt-4'>
      <div className='text-2xl font-semibold mb-5'> {titleText}</div>
      <div className='w-full flex justify-between space-x-4'>
           {/* Cards Data will be an array */}
           {
             cardsData.map((item) => {
              return(
                <Card title={item.title} desc={item.desc} imgUrl={item.imgUrl}/>

              );

            })

           }
           
           {/* <Card title='Metropolitan Dream' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701822839967-06308ce8f99c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Tree House' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1589138193516-8fedb70ca778?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Moonlight Road' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701711995517-c992ace5fe93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Beach Ecstasy' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701443478334-c1a4bfda91ff?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
           <Card title='Tranquilaqua' desc='Focus with deep techno and tech house' imgUrl='https://images.unsplash.com/photo-1701676566598-75ce4b488597?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card> */}
      </div>
    </div>
  )
}

const Card = ({title,desc, imgUrl}) => {
  return (
    <div className='bg-black bg-opacity-40 w-1/5 px-6 py-2 rounded-lg'>
      <div className='py-4'>
            <img className='w-full rounded-md' src={imgUrl}></img>
      </div>
      <div className='text-white font-semibold py-3'> {title} </div>
      <div className='text-gray-500 text-sm'>{desc}</div>

      
    </div>
  )
}



export default HomeComponent;
