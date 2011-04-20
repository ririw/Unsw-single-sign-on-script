// ==UserScript==
// @name           Fill out UNSW SSO details automatically
// @namespace      http://richardweiss.org/gmscripts
// @description    Fills out your id and zpass automatically 
// @include        https://ssologin.unsw.edu.au/cas/login*
// ==/UserScript==

// Locate form elements
var form = document.forms.namedItem('muLoginForm');
var uid = form.elements.namedItem('username');
var pw = form.elements.namedItem('password');

uid.value = "YOUR STUDENT NUMBER";
pw.value = "YOUR PASSWORD";
