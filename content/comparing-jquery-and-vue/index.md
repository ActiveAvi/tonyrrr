---
title: jQuery and Vue, a Comparison
description: An in-depth comparison of two Js libraries, Vue and jQuery
image: jquery-and-vue.png
tags:
  - webdev
---

# jQuery and Vue, a Comparison

![vue-jquery-comparison](~/assets/img/jquery-and-vue.png)

## jQuery... Who needs it?

Well, a lot of people do! jQuery is still the number one used javascript library. It's been around much longer than frameworks such as React and Vue, so it's more widely used still.

The demo app that we'll be creating will be simple. It'll have an input, a paragraph that gets updated with whatever's in the input, and a reset button.

## jQuery vs Vue syntax

Let's see what it takes to get this done with both jQuery and Vue.

### jQuery implementation

#### Setting up the HTML

To get started, download the uncompressed, development version of jQuery and toss it into the root of your project. [jQuery download](https://jquery.com/download/)

The project needs two other files: **index.html and main.js**

Fill in the HTML boilerplate, and then add two following **script** tags within the **head**. If your files aren't all located within the same directory, you'll need to adjust the source paths.

File: index.html

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="jquery-3.6.0.js"></script>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

And now to add the elements with-in the body tag...

```html
<body>
  <input type="text" />
  <button>reset</button>
  <p></p>
</body>
```

#### jQuery in our js file, _main.js_

And now, let's add the javascript. As a reminder, here's what we'd like to do:

- Create a value variable that will be set by the input, outputted in the paragraph, and reset by the button.

```js
$(document).ready(function () {
  let p = $('p')
  let input = $('input')
  let button = $('button')

  input.keydown(function (event) {
    p.text(event.target.value)
  })

  button.click(function () {
    p.text('')
    input.val('')
  })
})
```

The **$(document).ready(function(){})** function waits until the document is ready before running the function it's passed.

`let p = $('p')` selects the **paragraph** tag. The other _let_ declarations select their corresponding tags.

The `let value = ' '` declaration sets the initial value of the variable we'll be using to set the paragraph's inner-text.

Next we take the **input** that we've stored in the variable of the same name, and attach an event listener to it. In this case, we want to trigger an event on **keydown**, meaning, when a key is pressed down.

```js
input.keydown(function (event) {
  p.text(event.target.value)
})
```

We have to pass the **event object** to the function handling our event. This object contains valuable information, such as the **event target** (our html input), and the **value** of that target (whatever has been typed into the input).

Now, whenever the user presses a key with the input selected, this function will run.

When the function fires, it simply runs **p.text(value)** to set the text of our **paragraph** tag to **value**. That way, whenever the uses types a character into the input, the value variable is updated, and the paragraph is then set to that new value.

Next step: Set up the reset function.

```js
button.click(function () {
  p.text('')
  input.val('')
})
```

Here we attach an event listener, **.click(function(){})** to our button. Now when our button is clicked, it'll run whatever function we pass it.

First, we'll reset our text of our paragraph with `p.text('')`.

And finally, we'll reset the value of our input in order to clear it as well. `input.val('')`

### Vue implementation

#### Setting up index.html

It is time to implement this same simple application using the Vue framework.

Let us begin by adding a **script** tag linking to a Vue CDN, as well as adding the input, button, and paragraph elements to the body.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="main.js" defer></script>
  </head>
  <body>
    <div>
      <input type="text" />
      <button>Reset</button>
      <p></p>
    </div>
  </body>
</html>
```

Now, set the **id** of the **div** tag to **app**.

```html
<div id="#app"></div>
```

Let's now add the Vue html tag **attributes** necessary to accomplish our tasks.

```html
<input type="text" v-model="value" /> <button v-on:click="reset">Reset</button>
```

`v-model="value"` is a Vue-specific attribute that creates a two way data-bind. When the input changes, the variable _value_ changes, and when the value of the variable changes, the input value changes. It's a two-way street.

Next we have our button and it's funky new Vue attribute, **v-on:click="reset"**. This is Vue's way of attaching an event listener, in this case, of the click type. And when the button is clicked, it's running a method called reset.

Using curly brackets {{}} we can inject data using javascript. Add this within the paragraph tag to inject the value of the variable _value_:

```html
<p>{{ value }}</p>
```

Our final html code using Vue should look like this:

```html
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div id="app">
      <input type="text" v-model="value" />
      <button v-on:click="reset">Reset</button>
      <p>{{ value }}</p>
    </div>
  </body>
</html>
```

Now, on to the javascript file, _main.js_.

#### Using Vue in our _main.js_ file

Here's what our final code is going to look like:

```js
const app = Vue.createApp({
  data() {
    return {
      value: '',
    }
  },
  methods: {
    reset() {
      this.value = ''
    },
  },
})

app.mount('#app')
```

Let's break it down.

To begin, a new Vue app is created and stored in the variable aptly named app. `const app = Vue.createApp({})`

An object is passed to the createApp function. In this object we can define variables that can be injected into our html.

```js
data() {
	return {
		value: '',
	}
}
```

This **data()** function lets us declare variables to be used by our html template. In this case, we delare value and set it equal to an empty string.

What's cool, is that the **{{ value }}** bit we put in our html will now automatically be replaced with the value of that variable. No need to select our paragraph using **$('p')**, or to change it's input with ${'p'}.text(). Vue will take care of that.

The next key that was passed to the createApp object was **methods**, which is an oject consisting of whatever methods you want! In this case, I created a method called **reset()**, and within it's function body, I reset the value variable to an empty string using `this.value = ''`.

When value is reset, the paragraph automatically changes, and because of the two-way data-bind created with **v-model**, the input also changes (to an emtpy string).

## Conclusion

Both jQuery and Vue are great tools, with very different approaches. And this was just the beginning! Soon I'll be delving even deeper into what seperates the two. (like the virtual dom!) Why are frameworks like React, Vue, and Angular gaining popularity, while jQuery's popularity slowly dwindles? Could it be because of jQuery's **imperative** approach, as opposed to Vue's **declarative** approach? What does this mean?!?!? These are the questions I'll explore in the next article on jQuery and Vue.
