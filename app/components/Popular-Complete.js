/*
var React = require('react');
var PropTypes = require ('prop-types');

function SelectLanguage (props){
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
     <ul className='languages'>
          {languages.map(function (lang) {
            return (
              <li
                style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                onClick={props.onSelect.bind(null, lang)} //hooks up updateLanguage to <li>
                key={lang}>
                  {lang}
              </li>
            )
          })}
      </ul>
    )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
   // default state
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    //make it so that the 'this' keyword inside of updateLanguage 
    //is always the component instance itself (the container)
    //which will have a setState property
    //do it in the constructor
  }
  updateLanguage(lang) {
    //changes the state
    this.setState({
        selectedLanguage: lang, //new state
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage 
          selectedLanguage= {this.state.selectedLanguage}
          onSelect = {this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
*/
