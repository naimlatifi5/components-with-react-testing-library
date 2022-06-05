import MultiSelectCheckbox from './components/MultiSelectCheckbox'
import CountryCard from './components/CountryCard'
import SearchInput from './components/SearchInput'
import ButtonStyle from './components/ButtonStyle'
import Users from './components/TODOS'

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
  const handleChange = (e) => {
    console.log('event ', e.target.value)
  }
  const onHandleClick = () => {
    console.log('Button clicked message from parent')
  }
  return (
    <div className="App">
      <MultiSelectCheckbox options={options} onChange={handleOnChange} />
      <CountryCard country={countries} />
      <SearchInput value="hej" handleChangeValue={handleChange} />
      <ButtonStyle handleClick={onHandleClick} />
      <Users />
    </div>
  )
}

export default App
