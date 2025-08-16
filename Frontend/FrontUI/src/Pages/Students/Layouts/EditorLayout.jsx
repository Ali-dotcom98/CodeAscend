import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../../components/SiderBar';
import { NavBar } from '../../Dashboard/Components/NavBar';
import CodeingEnvironment from '../CodeingEnvironment.jsx';

const EditorLayout = ({ activeMenu }) => {
  const User = true;
  const [shrink, setshrink] = useState(true);

  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-dark-bg-secondary1">
        <NavBar />

        {User && (
          <div className="flex flex-1    overflow-hidden">
            <div
              className={`${
                shrink ? 'w-16' : 'w-64'
              } h-full transition-all duration-300 ease-in-out`}
            >
              <SideBar
                activeMenu={'Editor'}
                shrink={shrink}
                setshrink={() => setshrink((prev) => !prev)}
              />
            </div>

            <div className="flex-1 overflow-auto bg-dark-bg-secondary3 px-5 pt-4">
              <CodeingEnvironment />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditorLayout;
