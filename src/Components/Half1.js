import React from 'react'
import {VscGraphLine} from 'react-icons/vsc'
import {ImPodcast} from 'react-icons/im'
import {ImSphere} from 'react-icons/im'
import {ImMakeGroup} from 'react-icons/im'

function Half1() 
{
  return (
    <div>
     
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-blue-900 mt-1 md:text-xl font-semi text-center">
        CARE FEATURES 
        </p>
        <p className="italic font-bold text-3xl text-left md:text-center text-blue-900 leading-relaxed mt-1 justify-center">
        Platform highlights - UPS's - how to?
        </p>
      </div>

      <div className='lg:grid grid-cols-4 gap-4 mt-4 mx-10'>
        <div className='flex flex-col justify-center max-w-s mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 transform hover:scale-110 hover:bg-opacity-50'>

          <div className='text-xl sm:text-2xl font-semibold text-blue-900 hover:text-white'>
            Discover,Explore the product
            <div className='mt-10 mb-5'>
              {/* <img className='w-10' src={profile} alt="bg image"/> */}
                <VscGraphLine size={60} />
              
            </div>

            -----

            <div className='text-sm'>
              Discover,explore and understanding the product
            </div>
          </div>
        </div>

          

          <div className='flex flex-col justify-center max-w-xs mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50'>

          <div className='text-xl sm:text-2xl font-semibold text-blue-900 hover:text-white'>
            Art Direction and Brand Strategy
            <div className='mt-10 mb-5 '><ImPodcast size={60} /></div>

            -----

            <div className='text-sm'>
              Art direction and Brand Communication
            </div>
            
          </div>

          </div>


          <div className='flex flex-col justify-center max-w-xs mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50'>

          <div className='text-xl sm:text-2xl font-semibold text-blue-900 hover:text-white'>
            Product UX, Design and Development
            <div className='mt-10 mb-5 '><ImSphere size={60} /></div>

            -----

            <div className='text-sm'>
              DIGITAL PRODUCT UX, DESIGN AND DEVELOPMENT 
            </div>
            
          </div>

          </div>

          <div className='flex flex-col justify-center max-w-xs mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl rounded-xl p-5 hover:bg-blue-900 transform hover:scale-110 hover:bg-opacity-50'>

          <div className='text-xl sm:text-2xl font-semibold text-blue-900 hover:text-white'>
            Marketing Strategy and SEO Campaigns
            <div className='mt-10 mb-5'><ImMakeGroup size={60} /></div>

            -----

            <div className='text-sm'>
              MARKETINIG STRATEGY AND SEO CAMPAIGNS 
            </div>
            
          </div>

          </div>
        </div>

      
      
      
    
    </div>
  )
}

export default Half1;
