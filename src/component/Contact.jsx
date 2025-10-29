import { Linkedin, Mail, MapPin } from 'lucide-react'
import React from 'react'

const Contact = ({themeClasses, isDarkMode}) => {
  return (
      <div className='space-y-8'>
          <div className='text-center mb-8'>
              <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>Let's work together</h2>
              <p className={` text-lg ${themeClasses.textSecondary}`}>
                  ready to start your next project? Get in touch!
              </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8 '>
              <div className='space-y-6'>
                  <div className={`rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300  ${themeClasses.cardBg} ${themeClasses.border}`}>
                      <div className=' flex items-center space-x-4'>
                          <div className='bg-blue-100 dark:bg-blue-200 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 '>
                              
                              <Mail size={24} className='text-blue-900'/>
                          </div>
                          <div>
                              <h3 className={`font-bold ${themeClasses.text}`}>
                                  Email
                              </h3>
                              <p className={`${themeClasses.textSecondary}`}>join.doexample.com</p>
                              <p className={`${themeClasses.textMuted}`}>I'llrespond within 24 hours</p>
                          </div>
                      </div>
                  </div>
                  <div className={`rounded-2xl p-6 shadow-lg  group hover:shadow-xl  transition-all duration-300  ${themeClasses.cardBg} ${themeClasses.border}`}>
                      <div className='flex items-center space-x-4'>
                          
                      
                      <div className={`bg-green-100 dark:bg-green-200 p-3 rounded-xl  group-hover:scale-110 transition-all duration-300 `}>
                          <Linkedin size={24} className='text-green-900'/>
                          
                      </div>
                      <div>
                              <h3 className={`font-bold ${themeClasses.text}`}>LinkdIn</h3>
                              <p className={`${themeClasses.textSecondary}`}>/injohndoe</p>
                              <p className={`text-sm ${themeClasses.textMuted}`}>Let's connect professionally </p>
                          </div>
                          </div>
                  </div>
                  <div className={`rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}>
                      <div className='flex items-center space-x-4'>
                          <div className='bg-purple-100 dark:bg-purple-200 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 '>
                              
                              <MapPin size={24} className='text-purple-900'/>
                          </div>
                          <div>
                              <h3 className={`font-bold ${themeClasses.text}`}>Location</h3>
                              <p className={`${themeClasses.textSecondary}`}>San Francisco, CA</p>
                              <p  className={`text-sm ${themeClasses.textMuted}`}>Available for remote work</p>
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
              <div className={`rounded-2xl shadow-lg p-8 border ${themeClasses.cardBg} ${themeClasses.border}`} >
                  <h3 className={`text-xl font-bold mb-6 ${themeClasses.text}`}>
                      Send a Messege
                  </h3>
                  <div className='space-y-4 '>
                      <div>
                          <label htmlFor="" className={`block text-sm font-semibold mb-2 ${themeClasses.text}`}>Name</label>

                          <input type="text" placeholder=' Your Name' className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border} outline-none`} />
                      </div>
                      <div>
                          <label htmlFor="" className={`block text-sm font-semibold mb-2 ${themeClasses.text}`}>Email</label>

                          <input type="email" placeholder=' you@mail.example.com' className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border} outline-none`} />
                      </div>
                      <div>
                          <label htmlFor="" className={`block text-sm font-semibold mb-2 ${themeClasses.textSecondary}`}>Messege</label>

                          <input type="messege" placeholder=' Tell me about your project' className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300
                          ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border} outline-none`} />
                      </div>
                      <button className='w-full bg-gradient-to-r from-blue-600 to bg-purple-600 text-white py-3 px-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg'>
                          Send messege
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Contact