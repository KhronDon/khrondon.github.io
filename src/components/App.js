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
      </section>
      <section className='blogs'>
        <h1>Blogs</h1>
        <img className='tri' src={triangle} width='100vh' height='100vw' />
        <section className='blogPosts'>
          {/* <div className='React'>
            <h2>Hello, React </h2>
            <h4>December 6th, 2016 </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas velit eos quo illo vitae ducimus rerum explicabo quasi libero laudantium impedit quod expedita, dolores tempora aliquam veritatis maxime dolorem, officia.</p>
            <a className='More' href='https://medium.com/@brubakerwills/hello-react-9d50f7395181#.4k7blgpgm'>Keep Reading</a>
          </div>
          <div className='Fizz'>
          <h2>FIZZ BUZZ </h2>
          <h4>November 15th, 2016</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas velit eos quo illo vitae ducimus rerum explicabo quasi libero laudantium impedit quod expedita, dolores tempora aliquam veritatis maxime dolorem, officia.</p>
          <a className='More' href='https://medium.com/@brubakerwills/fizzbuzz-666f0b37d5d5#.17ooucz7g'>Keep Reading</a>
        </div> */}

        </section>
        <footer>Made with &hearts; in {this.state.location}</footer>
      </section>
      <section className='contactMe' />
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

      <footer>Made with &hearts; in {this.state.location}</footer>
    </div>
  }
}

export default App
