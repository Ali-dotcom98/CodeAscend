import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const languages = [
  { id: 63, name: 'C++', icon: 'C++' },
  { id: 71, name: 'Python', icon: 'Py' },
  { id: 62, name: 'Java', icon: 'Ja' },
  { id: 54, name: 'C', icon: 'C' },
];

const LanguageSelector = ({ selectedLanguageId, onLanguageChange , updateSection  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage = languages.find((lang) => lang.id === selectedLanguageId) || languages[0];

  return (
    <div className="relative w-[150px] "> 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-small-light w-[100px]"
      >
        <div className=' flex w-full items-center justify-between gap-1'>
            <div className="">
            {selectedLanguage.icon}
            </div>
            <span  className=" ">{selectedLanguage.name}</span>
            <ChevronDown className="h-4 w-4 " />
            </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white text-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
          <ul className="py-1">
            {languages.map((language) => (
              <li
                key={language.id}
                onClick={() => {
                  onLanguageChange(language.id, language.name);
                  updateSection("language", language.name );
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer ${
                  language.id === selectedLanguageId
                    ? 'bg-slate-100'
                    : ' hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-center w-6 h-6 bg-dark-bg-secondary4 rounded text-xs font-bold">
                  {language.icon}
                </div>
                <span className="min-w-16">{language.name}</span>
                {language.id === selectedLanguageId && (
                  <Check className="ml-auto h-4 w-4 text-purple-600" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
