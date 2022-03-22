import React from 'react'
import {GoStar} from 'react-icons/go'


function page8()
{
    return(
        <div className =" grid grid-cols-2 gap-4 mx-12 my-28 ">
{/* right part */}
  <div className ="">
    <div className ="font-semibold text-2xl mt-8 mb-6 w-2/3  ">
      Most Popular Software Categories
    </div>
    <div className ="grid grid-cols-1 justify-items-stretch  ">
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Project Management </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Video Conferencing </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> E-Commerece Platforms </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Marketing Automation </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Accounting </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> CRM </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Expense Management </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> ERP Systems </a>
      <a href="#" className ="border-2 border-white hover:text-red-600  hover:border-red-400 mb-1 mr-12 h-8 pl-2"> Online Backup </a>
    </div>
  </div>
  
  
{/* <left part */}
  <div className ="grid grid-cols-3 gap-2 max-w-fit  ">
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2 ">
        Asana
        <div className='flex ml-2 mt-1'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://logos-world.net/wp-content/uploads/2021/02/Asana-Symbol.png" alt="asana" className ="w-1/2 mt-3 m-auto"></img> 
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2">
        SamrtSheet
        <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://yt3.ggpht.com/ytc/AKedOLT9FSQIL4JJNUJ1L2CZ2J5Eros8_KTu1lwncLpjWQ=s900-c-k-c0x00ffffff-no-rj" className ="w-1/3 mt-3 m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce ">
      <a href="#" className ="text-xs font-bold ml-2">
          ClickUp
          <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://cdn.theorg.com/7e38c149-9323-4382-a0ad-ce3d55f1f86f_thumb.png" alt="clickup" className ="w-1/2 m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2">
          Wrike
          <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://www.wrike.com/newsroom/content/uploads/2018/03/Checkmark_preview_2x.png" alt="wrike" className ="m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2">
          monday.com
          <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://www.monday.com/blog/wp-content/uploads/2018/02/22852120_1266763086768693_6004893502123596052_n.png" alt="monday"  className ="w-1/2 m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2">
          Airtable
          <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d8d487b67574b56a5ad57a2f0f159a30/airtable.jpg" alt="airtable" className ="m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="#" className ="text-xs font-bold ml-2">
          BaseCamp
          <div className='flex ml-2 mt-1'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://w7.pngwing.com/pngs/997/302/png-transparent-basecamp-logo-logos-logos-and-brands-icon.png" alt="basecamp" className ="w-1/2 m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
     <a href="#" className ="text-xs font-bold ml-2">
         Trello
         <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://mpng.subpng.com/20181201/ib/kisspng-portable-network-graphics-trello-scalable-vector-g-5c025368ae6bb9.4395252315436562967144.jpg" alt="trello" className ="w-1/2 mt-4 m-auto"></img>
      </a>
    </div>
    <div className ="w-40 h-32 border-2 hover:animate-bounce">
      <a href="" className ="text-xs font-bold ml-2">
          Teamwork
          <div className='flex ml-2 mt-1 fill-red-600'>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
            <GoStar color="red"/>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Teamwork-icon.jpg/800px-Teamwork-icon.jpg" alt="teamwork" className ="w-1/2 m-auto"></img>
      </a>
    </div>
  </div>
</div>

    )
}

export default page8
