import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { submitParameters } from '../actions'
import { connect } from 'react-redux'
const templates = [
  {
    title: 'Wedding',
    imgSrc: require('../assets/images/wedding.jpg'),
    article: "the"
  },
  {
    title: 'Birthday',
    imgSrc: require('../assets/images/birthday.jpg'),
    article: "the"
  },
  {
    title: 'Graduation',
    imgSrc: require('../assets/images/graduation.jpg'),
    article: "the"
  },
  {
    title: 'Apocalypse',
    imgSrc: require('../assets/images/apocalypse.jpg'),
    article: "the"
  },
  {
    title: 'Halloween',
    imgSrc: require('../assets/images/halloween.jpg'),
    article: "it's"
  }
]

class MainMenu extends Component {
  saveTemplate = (template, article) => {
    const { dispatch } = this.props
    dispatch(submitParameters(template, article))
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Choose your countdown template:</h2>
        <div className="templates-container">
          {templates.map(template => {
            return (
              <div key={template.title}>
                <div className="template">
                  <Link to={{
                    pathname: `/templates/${template.title}`,
                    state: {
                      title: template.title
                    }
                  }}
                    onClick={() => this.saveTemplate(template.title, template.article)}>
                    <img src={template.imgSrc} alt={template.title} height={200} width={400} />
                  </Link>
                </div>
                <p>{template.title}</p>
              </div>

            )
          })}
        </div>
      </div>
    )
  }
}

export default connect()(MainMenu)
