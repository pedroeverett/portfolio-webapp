import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      // <div className={'portfolio-page'}>
      //   <NavBar />
      //   <div className={'portfolio-page-body'}>
      //     <div className={'hello-top'}>Welcome to</div>
      //     <div className={'hello-bottom'}>Portfolio </div>
      //     <div className='about-title'></div>
      //   </div>
      // </div>
      <>
        <div className='portfolio-header'>
          <h1>Wellcome to my portfolio</h1>
        </div>
        <div className='portfolio-about'>
          <div className='portfolio-about-title'>
            <h2>About me</h2>
          </div>
          <div className='portfolio-about-pages'>
            <div>
              <h2>Project 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2>Project 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='portfolio-footer'>LinkedIn Icon here</div>
      </>
    );
  }
}
