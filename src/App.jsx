import React, { useState } from "react";
import Hero from "./component/Hero";
import TabNavigation from "./component/TabNavigation";
import About from "./component/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isVisible, setVisible] = useState(true);

  useState(() => {
    setVisible(true);
    setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode ? "bg-gray-900" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-gray-800" : "bg-white",
    text: isDarkMode ? "text-gray-100" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    border: isDarkMode ? "border-gray-700" : "border-gray-200",
    hover: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <About
            themeClasses={themeClasses}
            isDarkMode={isDarkMode}
            isVisible={isVisible}
          />
        );
      case "skills":
        return <Skills themeClasses={themeClasses} isDarkMode={isDarkMode} />;
      case "education":
        return <Education themeClasses={themeClasses} isDarkMode={isDarkMode} />;
      case "projects":
        return <Projects themeClasses={themeClasses} isDarkMode={isDarkMode}/>;
      case "contact":
        return <Contact themeClasses={themeClasses} isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${themeClasses.background}`}
    >
      <Hero
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isVisible={isVisible}
      />

      <TabNavigation
        themeClasses={themeClasses}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* main content */}

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div
          className={`${themeClasses.cardBg}/60 backdrop-blur-sm rounded-3xl shadow-xl border transition-colors duration-300 p-10 ${themeClasses.border}`}
        >
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
