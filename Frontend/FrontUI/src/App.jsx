  import React, { useContext } from 'react'
  import Dashboard from './Pages/Instructor/Dashboard'
  import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
  import Login from "./Pages/Auth/Login"
  import SignUp from "./Pages/Auth/SignUp"
  import LandingPage from './Pages/Home/LandingPage'
  import DefaultLayout from './Layouts/DefaultLayout'
  import InstructorLayout from "./Layouts/Instructor/DefaultLayout_INS"
  import Protected from './Utility/ProtectedRoutes/Protected'
  import StudentDashboard from "./Pages/Students/Dashboard"
  import UserProvider from './Pages/ContextApi/UserContext'
import EditChallenge from './Pages/Instructor/EditChallenge'
import EditChallengeLayout from './Layouts/Instructor/EditChallengeLayout'
import CodeEditor from './Pages/Students/CodeEditor'
import CodeingEnvironment from './Pages/Students/CodeingEnvironment'
import MyPerformance from './Pages/Students/MyPerformance'
import Leaderboard from './Pages/Students/Leaderboard'
import CreatChallengeForm from './Pages/Instructor/CreatChallengeForm'
import ManagaCometition from './Pages/Instructor/ManagaCometition'
import { ToastContainer } from 'react-toastify'
  const App = () => {
      
    return (
      <UserProvider>
        <Router>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
              <Route path='/Instructor' 
                element={
                  <Protected allowed={['Instructor']}>
                    <InstructorLayout/>
                  </Protected>
                }
                
                >
                <Route path='Dashboard' element={<Dashboard/>}/>
                <Route path='Manage' element={<ManagaCometition/>}/>
                <Route path='Leaderboard' element={<Leaderboard/>}/>
              </Route>
              <Route path='/Instructor/Challenge/:ChallengeID' element={
                  <EditChallenge/>
                }/>
              <Route path='/Student' 
                element={
                  <Protected allowed={['Student']}>
                    <DefaultLayout/>
                  </Protected>
                }
                >
                <Route path='Dashboard' element={<StudentDashboard/>}/>
                <Route path='Performance' element={<MyPerformance/>}/>
                <Route path='Leaderboard' element={<Leaderboard/>}/>
              </Route>
              <Route path='/Student/Editor/:ChallengeID' element={
                  <CodeingEnvironment/>
                }/>

          </Routes>
        </Router>
         <ToastContainer
          position="top-right"
          autoClose={3000}
          className={"mt-20 mr-7 "}
        />
      
      </UserProvider>
      

    )
  }

  export default App