import './style/App.scss'
import mediumLogo from './assets/medium.svg'
import writeIcon from './assets/write.svg'
import bellIcon from './assets/bell.svg'
import clapsIcon from './assets/claps.svg'
import commentIcon from './assets/comment.svg'
import bookmarkIcon from './assets/bookmark.svg'
import playIcon from './assets/play.svg'
import shareIcon from './assets/share.svg'

function App() {
  return (
    <>
      <header>
        <div className='logo'>
          <img src={mediumLogo} />
        </div>
        <input type="text" placeholder='Search' />
        <img src={writeIcon} />
        Write
        <img src={bellIcon} />
        <img src="https://miro.medium.com/v2/resize:fill:64:64/1*dmbNkD5D-u45r44go_cf0g.png" alt="" />
      </header>
      <main>
        <div id="article-title">
          <p>Member-only story</p>
          <h1>Microsoft is ditching React</h1>
          <h2>Here’s why Microsoft considers React a mistake for Edge.</h2>
          <div id="writer-info">
            Afan Khan
            ·
            Follow
            JavaScript in Plain English
            Published in
            JavaScript in Plain English
            ·
            6 min read
            ·
            Jun 6, 2024
          </div>
        </div>
        <div id="article-actions">
          <img src={clapsIcon} />
          3.3K
          <img src={commentIcon} />
          72
          <img src={bookmarkIcon} />
          <img src={playIcon} />
          <img src={shareIcon} />
        </div>
        <div id="free-baner">
          If you’re a non-premium user, click <a href="/">here</a> to read this article for free. If not, continue reading.
        </div>
        <div id="article">
          <img src="" alt="" />
          <p>Recently, the Microsoft Edge Team wrote an article on how Microsoft team is improving Edge to become faster.</p>
          <p>However, Microsoft took shots at React and announced they will not use React for Edge anymore.</p>
          <p>I will explain their entire article and how it affects React, JavaScript Developers, and what are the true intentions of the Microsoft Edge Team.</p>
          <h3>History</h3>
          <p>Microsoft Edge is built using Chromium, an Open-Source web browser project by Google. The default UI of Microsoft Edge is derived from Chromium.</p>
          <p>Microsoft doesn’t want Edge to look like Chrome (obviously). Therefore, Edge has UI components and elements designed by Microsoft. However, these components are made using React.</p>
          <p>Many small components throughout Edge are created using React which collectively builds the entire browser.</p>
          <p>The entire Edge browser isn’t a React application. It combines multiple components using HTML pages with React. The menu, dropdown, and the favourites tab are mini React apps.</p>
          <p>That’s not efficient, right? Especially for UI data that never changes dynamically. Its inefficiency has caused Microsoft to doubt React.</p>
          <p>But this story is half-baked. We’ll soon unveil whether React was at fault or Microsoft had a manufactured flaw.</p>
        </div>
      </main>
      <footer>
        <ul>
          <li>Help</li>
          <li>Status</li>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Text to speech</li>
          <li>Teams</li>
        </ul>
      </footer>
    </>
  )
}

export default App
