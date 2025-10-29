import React from 'react'
import {tabs} from '../data/data.js'
import { CloudCog } from 'lucide-react'

const TabNavigation = ({themeClasses, activeTab, setActiveTab}) => {
    console.log(activeTab)
  return (
      <div className={` sticky top-0 z-20 backdrop-blur-md border-b shadow-sm transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}>
          <div className='max-w-6xl mx-auto px-4'>
              <div className='flex justify-center'>
                  <div className='flex space-x-4 p-6 overflow-x-auto'>
                      {/* I will map method */}
                      {tabs.map((tab, index) => {
                          
                          
                          const Icon = tab.icon
                          return (
                                <button className={`flex flex-col items-center px-6 py-4 rounded-2xl text-sm font-semibold duration-300 transition-all transform hover:scale-105 min-w-max group ${activeTab === tab.id ? `bg-gradient-to-r ${tab.color} text-white shadow-lg` : `${themeClasses.text} ${themeClasses.hover}`} `} style={{animationDelay:`${index * 100}ms`}} onClick={()=>setActiveTab(tab.id)}>
                          
                                
                                  <Icon size={24} className={`mb-2 ${activeTab === tab.id ? 'text-white ' : ''}`} />
                                  <span className='font-bold '>{tab.label}</span>
                                 <span className={`text-xs mt-1 ${activeTab === tab.id ? 'text-white/80':themeClasses.textMuted}`}> {tab.description}</span>
                          {/* conditional rendering */}

                         
                      </button>
                          )
                      })}
                    
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TabNavigation