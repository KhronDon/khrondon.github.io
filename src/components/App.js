import React, { Component } from 'react'

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
        <h1>Portfolio 2.0</h1>
        <img src={this.state.avatar} />
        <blockquote> Hi! I'm {this.state.name}. </blockquote>
        <blockquote>{this.state.bio}</blockquote>
        <section className='Pics'>
          <ul>
            <li>
              <img src={'https://images-na.ssl-images-amazon.com/images/I/81ataWrZmvL._SL1417_.jpg'} />
            </li>
            <li>
              <img src={'https://images-na.ssl-images-amazon.com/images/I/618laH4lVRL.jpg'} />
            </li>
            <li>
              <img src={'https://demonszone.com/wp-content/uploads/2014/04/Opus-Eponymous.jpg'} />
            </li>
            <li>
              <img src={'http://www.progarchives.com/progressive_rock_discography_covers/4492/cover_1454131452009.jpg'} />
            </li>
          </ul>
        </section>
      </header>
      <section className='Blogs'>
        <div className='React'>
          <img src={'https://i.ytimg.com/vi/AwkNFjr-C-I/maxresdefault.jpg'} />
          <h2>Hello, React </h2>
          <h4>December 6th, 2016 </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas velit eos quo illo vitae ducimus rerum explicabo quasi libero laudantium impedit quod expedita, dolores tempora aliquam veritatis maxime dolorem, officia.</p>
          <a className='More' href='https://medium.com/@brubakerwills/hello-react-9d50f7395181#.4k7blgpgm'>Keep Reading</a>
        </div>
        <div className='Fizz'>
          <img src={'https://lh5.googleusercontent.com/-IwJg9nIlqd8/UwlThsMVyAI/AAAAAAAAAME/AB4x3jMhcR0/s912/Clouds.png'} />
          <h2>FIZZ BUZZ </h2>
          <h4>November 15th, 2016</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas velit eos quo illo vitae ducimus rerum explicabo quasi libero laudantium impedit quod expedita, dolores tempora aliquam veritatis maxime dolorem, officia.</p>
          <a className='More' href='https://medium.com/@brubakerwills/fizzbuzz-666f0b37d5d5#.17ooucz7g'>Keep Reading</a>
        </div>
        <footer>Made with &hearts; in {this.state.location}</footer>
      </section>
    </div>
  }
}

export default App
