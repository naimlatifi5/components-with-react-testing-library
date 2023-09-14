import MultiSelectCheckbox from './components/MultiSelectCheckbox'
import CountryCard from './components/CountryCard'
import ButtonStyle from './components/ButtonStyle'
import FetchPosts from './components/FetchPosts'
import Input from './components/Input'

import Checkbox from './components/Checkbox'

function App() {
  const options = [{ label: 'checkbox 1' }, { label: 'checkbox 2' }]
  const countries = {
    name: 'Sweden',
    capital: 'Stockholm',
    population: '10 million',
    currency: 'SEK',
  }
  const handleOnChange = (item) => {
    console.log(item)
  }

  const onHandleClick = () => {
    console.log('Button clicked message from parent')
  }
  return (
    <div className="App">
      <Input />
      <MultiSelectCheckbox options={options} onChange={handleOnChange} />
      <CountryCard country={countries} />
      <ButtonStyle handleClick={onHandleClick} />
      <Checkbox />
      <FetchPosts />
    </div>
  )
}

export default App
