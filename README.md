# Giffaw

Your goal is to integrate with the Giphy API.

https://github.com/Giphy/GiphyAPI

Basic Requirements:

* A user can see the top 25 gifs (on page load)
* A user can search for gifs, using the input field
* Bonus: A user can "load more" gifs

> ***Note:*** _This can be a pair programming activity or done independently._

Your site should look something like:

![desktop layout](/layout_goal.png)

# Using AJAX

## Introduction

You're about to write a lot of AJAX-backed JavaScript using jQuery that will complete our little Gif app.

Make use of the fantastic Giphy api:
http://api.giphy.com/

Check out the documentation here:
https://github.com/Giphy/GiphyAPI

#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time.

This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Skim the docs! https://github.com/Giphy/GiphyAPI
	- Pay extra attention to the sections we will be using,
		- trending: https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint
		- search: https://github.com/Giphy/GiphyAPI#search-endpoint
		- Also note the ever-important API Key situation (We will be using the Public Beta API key): https://github.com/Giphy/GiphyAPI#public-beta-key
	- Don't spend much time on this. You will go back to figure out things as they come up.

2. Test the API out using 'curl'!
  - curl is a *nix utility that simply fetches a URL.  Test it out by running `curl http://jquery.com` in the console.  Is this HTML?
	- Try http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC
	- What did you get back? It looks like a mess! Is it HTML?  But that is because it isn't meant to come back human-readable. Its just a JSON Object!

3. Crack open your blank template. We first want to write JavaScript that returns that same object we got back using curl when we open our index.html! BUT HOW DO I AJAX!!??
	- Skim this explanation of AJAX using jQuery: http://www.sitepoint.com/use-jquerys-ajax-function/
	- Pay extra attention to the example. Think about what you would change to GET the data you want from the URL you want.

4. Start playing in your base.js file. You want an Ajax call to fire when your page has loaded, so you won't be putting your ajax in an `$().on('click'`!
	- Don't try to do everything at once! First try to log the data to the console! Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object, and this is actually not a trivial question.
	- Once you narrowed that down, THEN you want to build functions that generate HTML Strings.
	- First log those strings to the console, and make sure they look like you think they should. THEN append them into the DOM!
	- Don't forget about your friend the javaScript 'debugger' keyword. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger

5. Can you bonus? Get a little search box to make a different AJAX call to the search URL.
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the dom? Do we need to clear previous gifs before loading more?
	- OMG are you making a one page app using AJAX like a boss?

#### Deliverable

Take a screenshot of your app and post it to Funny Biz!

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
