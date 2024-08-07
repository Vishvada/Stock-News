import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { pages } from './utils/pagePaths';
import { lazy, Suspense } from 'react';
import EmailVerification from './screens/OTP';
import OtpInput from './screens/OTP';
import StocksPage from './screens/Stocks';

// Lazy load components
const Home = lazy(() => import('./screens/Home'));
const Login = lazy(() => import('./screens/Login'));
const SignUp = lazy(() => import('./screens/SignUp'));
const ForgotPasswordPage = lazy(() => import('./screens/ForgotPassword'));
const Learn = lazy(() => import('./screens/Learning'));
const AboutPage = lazy(() => import('./screens/About'));

// Loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={pages.login} element={<Login />} />
          <Route path={pages.signup} element={<SignUp />} />
          <Route path={pages.forgotpassword} element={<ForgotPasswordPage />} />
          <Route path={pages.learn} element={<Learn />} />
          <Route path={pages.about} element={<AboutPage />} />
          <Route path={pages.stocks} element={<StocksPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App