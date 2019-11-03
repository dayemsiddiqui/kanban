import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { firebaseApp } from '../../firebaseApp';

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ]
};

const Header: React.FC = () => {
  return (
    <>
      {/* Header */}
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h1>
                    <span className="turquoise">Track Tasks</span>
                    <br /> With Kanban
                  </h1>
                  <p className="p-large">
                    Achive your goals and improve productivity with simple
                    Kanban boards.
                  </p>
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebaseApp.auth()}
                  />
                </div>
                {/* end of text-container */}
              </div>
              {/* end of col */}
              <div className="col-lg-6">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="images/header-teamwork.svg"
                    alt="alternative"
                  />
                </div>{' '}
                {/* end of image-container */}
              </div>{' '}
              {/* end of col */}
            </div>{' '}
            {/* end of row */}
          </div>{' '}
          {/* end of container */}
        </div>{' '}
        {/* end of header-content */}
      </header>{' '}
      {/* end of header */}
    </>
  );
};

export default Header;
