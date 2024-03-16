import MultiSelectCheckbox from './components/MultiSelectCheckbox';
import CountryCard from './components/CountryCard';
import MagicButton from './components/MagicButton';
import FetchPosts from './components/FetchPosts';
import Input from './components/Input';

import Checkbox from './components/Checkbox';
import MagicButton1 from './components/MagicButton1';

function App() {
  const options = [{ label: 'checkbox 1' }, { label: 'checkbox 2' }];
  const countries = {
    name: 'Sweden',
    capital: 'Stockholm',
    population: '10 million',
    currency: 'SEK',
  };
  const handleOnChange = (item) => {
    console.log(item);
  };

  const handleClickOnParent = () => {
    console.log('This is important -> Button clicked on parent component');
  };

  const handleCallFromParen = () => {
    console.log('This is important -> Call from parent');
  };

  return (
    <div className="App">
      <Input />
      <MultiSelectCheckbox options={options} onChange={handleOnChange} />
      <CountryCard country={countries} />
      <MagicButton handleClickAsProp={handleClickOnParent} />
      <Checkbox />
      <FetchPosts />
      <MagicButton1 callFromParent={handleCallFromParen} />
    </div>
  );
}

export default App;
