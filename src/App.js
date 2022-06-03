import MultiSelectCheckbox from './components/MultiSelectCheckbox'
import CountryCard from './components/CountryCard'

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
  return (
    <div className="App">
      <MultiSelectCheckbox options={options} onChange={handleOnChange} />
      <CountryCard country={countries}></CountryCard>
    </div>
  )
}

export default App
