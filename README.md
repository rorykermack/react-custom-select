![Redux Custom Select Header](/readme-header.jpg?raw=true)

# React Custom Select
React custom select gives you a simple boiler plate for fully customizable select/option groups without having to battle with native styles. Because it's a react component you can easily integrate it with an existing react or flux style project.


## Usage & Installation:
* Clone / Download this repo. <br/>
* Install customSelect.react.js as a component into your project. <br/>
* Include CustomSelect and use.
* Done!

## How to setup: <br/>
### 1) Install customSelect.react as a component<br/>
### 2) Include CustomSelect<br/>
### 2) Define your customSelect
```
/*
  static propTypes = {
    options: React.PropTypes.array.required,
    onSelect: React.PropTypes.func
  };
*/

<CustomSelect
  options={_options}
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
