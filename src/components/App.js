import React, { Component } from 'react'
import chooChooImage from '../images/choo-choo.png'
import triangle from '../images/triangle.png'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      bio: '',
      avatar: ''
    }
  }

  componentDidMount () {
    const URL = 'https://api.github.com/users/khrondon'
    fetch(URL).then(res => res.json()).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar: data.avatar_url
      })
    })
  }

  render () {
    return <div>
      <header>
        <h1 className='myName'>{this.state.name}</h1>
        <img className='myPic' src={this.state.avatar} />
        <h3 className='shortBio'>{this.state.bio}</h3>
        {/* <ul>
          <li>
            <blockquote className='shortBio'>{this.state.bio}</blockquote>
          </li>
          <li>
            <img className='myPic' src={this.state.avatar} />
          </li>
        </ul> */}
      </header>
      <section className='aboutMe'>
        <h1>About Me</h1>
        <img className='tri' src={triangle} width='100vh' height='100vw' />
      </section>
      <section className='myWork'>
        <h1>My Work</h1>
        <img className='tri' src={triangle} width='100vh' height='100vw' />
        <section className='Pics'>
          <ul>
            <li>
              <a href='http://choo-choo-todo.surge.sh/'> <img src={chooChooImage} /> </a>
            </li>
            <li>
              <img src={'https://demonszone.com/wp-content/uploads/2014/04/Opus-Eponymous.jpg'} />
            </li>
            <li>
              <img src={'http://www.progarchives.com/progressive_rock_discography_covers/4492/cover_1454131452009.jpg'} />
            </li>
          </ul>
        </section>
      </section>
      <section className='blogs'>
        <h1>Blogs</h1>
        <img className='tri' src={triangle} width='100vh' height='100vw' />
        <section className='blogPosts'>
          <div className='React'>
            <h2>Hello, React </h2>
            <h4>December 6th, 2016 </h4>
            <p>I’m still clueless, so let’s start with that. We’re only a couple weeks into learning JavaScript, and now it’s time to learn React. I don’t know much about it yet, but it seems like another mountain to climb. I’ve only had a small amount of exposure to React thus far, but I’m already starting to realize it’s potential... </p>
            <a className='More' href='https://medium.com/@brubakerwills/hello-react-9d50f7395181#.4k7blgpgm'>Keep Reading</a>
          </div>
          <div className='Fizz'>
            <h2>FIZZ BUZZ </h2>
            <h4>November 15th, 2016</h4>
            <p>I’m just over a week in and I still feel clueless. So far my HTML and CSS have created webpages like neanderthal man cave drawings, except my buffalo look like giraffes and my fellow cavemen (and women) have too many limbs and oddly shaped heads. Now we’re moving on to JavaScript...</p>
            <a className='More' href='https://medium.com/@brubakerwills/fizzbuzz-666f0b37d5d5#.17ooucz7g'>Keep Reading</a>
          </div>
        </section>
      </section>
      <section className='contactMe'>
        <h1>Contact Me</h1>
        <img className='tri' src={triangle} width='100vh' height='100vw' />
      </section>
      <footer>Made with &hearts; in {this.state.location}</footer>
    </div>
  }
}

export default App
