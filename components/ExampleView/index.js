import { useRef, useState } from 'react';
import useOnScreen from 'customHooks/useOnScreen';
import SideNav from 'components/SideNav';


export default function ExampleView() {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, '-300px');

  return (
    <div>
      <div style={{ height: '100vh', padding: '20px' }}>
        <SideNav />
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: onScreen ? '#23cebd' : '#efefef',
          color: onScreen ? 'white' : 'black',
          transition: 'all .5s ease-in'
        }}
      >
        {onScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
    </div>
  );
}