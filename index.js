/// es module import
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

/// commonJs module import
var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');

Header();
Sidebar();
Content();
