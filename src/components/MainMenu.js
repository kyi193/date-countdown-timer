import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

const templates = [
  {
    title: 'Wedding',
    imgSrc: require('../assets/images/wedding.jpg')
  },
  {
    title: 'Birthday',
    imgSrc: require('../assets/images/birthday.jpg')
  },
  {
    title: 'Graduation',
    imgSrc: require('../assets/images/graduation.jpg')
  },
  {
    title: 'Apocalypse',
    imgSrc: require('../assets/images/apocalypse.jpg')
  }
]

class MainMenu extends Component {
  render() {
    return (
      <div>
        <h2>Choose your countdown template:</h2>
        <div className="templates-container">
          {templates.map(template => {
            return (
              <div key={template.title} className="template">
                <Link to={{
                  pathname: `/templates/${template.title}`,
                  state: {
                    title: template.title
                  }
                }}>
                  <img src={template.imgSrc} alt={template.title} height={200} width={400} />
                </Link>
                <p>{template.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MainMenu
