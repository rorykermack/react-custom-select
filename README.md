![Redux Custom Select Header](https://raw.githubusercontent.com/rorykermack/react-custom-select/master/readme-header.jpg)

# React Custom Select
React custom select gives you a simple boiler plate for fully customizable select/option groups without having to battle with native styles. Because it's a react component you can easily integrate it with an existing react or flux style project and pass in the options via the props.



## Installation:
```
npm install react-custom-select
```

## Usage & Installation:
* Install react-custom-select
* Include CustomSelect, set your options & callback and use.
* Done!

## Example:

```
/* Array of your selectOptions */
const selectOptions = [
  {text: 'one', value: 1},
  {text: 'two', value: 2},
  {text: 'three', value:3},
  {text: 'three', value:4}
];

/*
  static propTypes = {
    options: React.PropTypes.array.required,
    onSelect: React.PropTypes.func
  };
*/

<CustomSelect
  options={selectOptions}
  />
```

### Defining your callback: (optional)<br/>
* This allows you to send a callback to when the value is changed.
```
<CustomSelect
  options={selectOptions}
  onSelect={(value) => this.updateForm(value)}
  />
```

## Contributing
It doesn't matter if you're a veteran or not. Everyone brings something awesome to the party so please contribute.
If you have any suggestions give me a shout on twitter<br/>
1. Fork it! <br/>
2. Create your feature branch: `git checkout -b my-new-feature` <br/>
3. Commit your changes: `git commit -am 'Add some feature'` <br/>
4. Push to the branch: `git push origin my-new-feature` <br/>
5. Submit a pull request :D <br/>

## Credits
Created and maintained by [@rorykermack](https://twitter.com/@rorykermack)
## License
[WTFPL](http://www.wtfpl.net/) (100% Open Source)
