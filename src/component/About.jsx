import { Award, Briefcase, Code, Rocket, Star, User } from "lucide-react";
import React from "react";

const About = ({themeClasses, isDarkMode, isVisible}) => {
  return (
    <div className={` space-y-8 `}>
      <div className=" grid md:grid-cols-3 gap-6">
        <div
          className={` rounded-2xl p-6 shadow-lg ${themeClasses.border} ${themeClasses.cardBg}  border transform hover:scale-105 transition-all duration-300`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="text-center">
            <Rocket size={32} className={`mx-auto mb-3 ${isDarkMode ? 'text-blue-400':'text-blue-500'}`} />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>Experience</h3>
            <p className={`text-3xl font-bold text-blue-500 mb-1`}>1+</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>Years of Development</p>
          </div>
        </div>
        <div
          className={`rounded-2xl p-6 shadow-lg border transform hover:scale-105 transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <Briefcase size={32} className={`mx-auto mb-3 ${isDarkMode ? 'text-green-400':'text-green-500'}`} />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>Projects</h3>
            <p className={`text-3xl font-bold text-blue-500 mb-1`}>10+</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>Completed Successfully</p>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 shadow-lg border transform hover:scale-105 transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <Star size={32} className={`mx-auto mb-3 ${isDarkMode ? 'text-yellow-400':'text-yellow-500'}`} />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>Rating</h3>
            <p className={`text-3xl font-bold text-blue-500 mb-1`}>4.9</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-2xl font-bold mb-6 flex items-center ${themeClasses.text}`}>
            <User className=" mr-3 text-blue-500" size={24} />
            About Me
                  </h3>
                  <div className={`space-y-4 leading-relaxed ${themeClasses.textSecondary}`}>
                      <p className="transform hover:translate-x-2 transition-all duration-300">
                          {""}
                          I am a passionate Full Stack Developer with over one years of experience building impactful digital solutions. What began as a curiosity about how the web works has grown into a deep commitment to designing elegant, efficient, and scalable solutions to complex challenges.
                          
                      </p>
                      <p className="transform hover:translate-x-2 transition-all duration-300">
                          I specialize in modern web technologies and place strong emphasis on creating seamless user experiences. Whether it’s architecting scalable backend systems or developing pixel-perfect user interfaces, I bring enthusiasm, precision, and attention to detail to every project.
                      </p>
                      
                  </div>
        </div>
        <div className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-500 hover:shadow-2xl  ${themeClasses.cardBg} ${themeClasses.border}`}>
              
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${themeClasses.text}`}>
                  <Rocket className=" mr-3 text-purple-500 animate-pulse " size={24} style={{ animationDelay: "0.5s" }} />
                  What I Do
              </h3>
              <div className=" space-y-4">
                  <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300 ">
                      <div className=" bg-blue-100 dark:bg-blue-200 p-2 rounded-lg  hover:scale-110 transition-all duration-300">
                          <Code size={16} className="text-blue-900"/>
                      </div>
                      <div >
                          <h4 className={`font-semibold ${themeClasses.text}`}>
                               Full Stack Developer
                          </h4>
                          <p className={`text-sm ${themeClasses.textMuted}`}>
                              End-to-End web application development
                          </p>
                          
                      </div>
                      
                  </div>
                  <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300" style={{transitionDelay:"0.1s"}}>
                       <div className=" bg-blue-100 dark:bg-green-200 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                          <Star className="text-green-900" size={16} />
                          </div>
                      <div>
                          <h4 className={`font-semibold ${themeClasses.text}`}>UI/UX Design</h4>
                          <p className={`text-sm ${themeClasses.textMuted}`}>Creating intuitive user interface</p>
                      </div>
                  </div>
                  <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300" style={{transitionDelay:"0.2s"}}>
                       <div className=" bg-blue-100 dark:bg-purple-200 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                          <Award className="text-purple-900" size={16} />
                          </div>
                      
                      <div>
                          <h4 className={`font-semibold ${themeClasses.text}`}>Consulting</h4>
                          <p className={`text-sm ${themeClasses.textMuted}`}>Technical guidance and mentoring</p>
                      </div>
                  </div>
              </div>
              
          </div>
        
          </div>
          
    </div>
  );
};

export default About;
