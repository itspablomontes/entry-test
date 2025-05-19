# Thought Process


- First I forked the repo and skimmed through the repository, analyzed its folder structure and file division
- I installed project dependencies
- Then i ran the project dev server
- I noticed the login page was just refreshing, just like the javascript native form behavior
- I noticed the onLogin function wasn't being executed on submission



**Why the bug happened?**

The App component was passing a handle login function that was going to "validate" the form data and authenticate the user, setting his status to logged in and redirecting to the welcome page. But by not using the prop the form was not executing this functionality, so I just added on the onSubmit form property.

I also correct the fact that the formData wasn't being passed on the login function on the form, therefore not showing the user name on the welcome page.

**Testing Stage**

My cypress skills were kind of rusty, so I asked Gemini AI to generate a cheat sheet of commands based on the official docs, I used the following prompt:

``Create a cypress syntax cheat sheet based on the official documentation, be clear, concise, and explain each functionality using the Feynman method.`



I then added a test for verifying the inputs, entering a user and password, verifying the existence of a welcome message if the right info, and that's it.

I ended up running into a slow-down because I forgot to use e.preventDefault() in the login form, but I corrected afterwards.