import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import SignupForm from "../components/common/SignupForm";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Seo pageTitle="Sign Up" />
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link to="/" className="d-block">
              <img src="/images/logo/my.png" alt="" style={{ height: '100px', width: '150px' }}  />
              </Link>
            </div>
            <Link to="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
            <p className="fs-20 tx-dark">
              Have an account? <Link to="/login">Login Here</Link>
            </p>
          </div>
          <SignupForm />
        </div>
        {/* End form-wrapper */}

        <p className="mt-auto pt-50">Copyright @{currentYear} Fission inc.</p>
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default SignUp;
