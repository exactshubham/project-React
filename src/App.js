import React, { Component } from 'react';


class GooglePage extends Component {
constructor(props) {
super(props);
this.state = {
searchQuery: ''
};
}

handleChange = (event) => {
this.setState({ searchQuery: event.target.value });
}

handleSearchSubmit = (event) => {
event.preventDefault();
console.log(`Search query: ${this.state.searchQuery}`);
}

handleFeelingLuckySubmit = (event) => {
event.preventDefault();
console.log(`Feeling lucky search query: ${this.state.searchQuery}`);
}

render() {
return (
<div>
<header>
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo" />
<form onSubmit={this.handleSearchSubmit}>
<input type="text"/* placeholder="Search"*/ value={this.state.searchQuery} onChange={this.handleChange} />
</form>
</header>
<main>
<button type="submit">Google Search</button>
<button type="submit" onClick={this.handleFeelingLuckySubmit}>I'm Feeling Lucky</button>
<h1>Welcome to Google</h1>
<p>The world's information is at your fingertips.</p>
<h2>Google's Offered Services</h2>
<ul>
<li>Search</li>
<li>Gmail</li>
<li>Google Maps</li>
<li>YouTube</li>
</ul>
</main>
<footer>
<p>Copyright Google 2020</p>
</footer>
</div>
);
}
}

export default GooglePage;