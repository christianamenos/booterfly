# Booterfly
Booterfly is a sass/scss library that aims to work likke Twitter bootstrap but getting a full control over what is inside and what is not for our projects.
I takes some features over other existing frameworks adapted to our necessities that will help us to develop job faster and easier web structures and styling them.

This project is built using sass files, so if you need to make some changes for a specific project feel free to fork it and change all values to the needed.

If you find that it will be nice to add some additional features feel free to make a new branch and contact with the project responsible to add it in the next release. The responsible at this moment is Christian Amenós (christian.amenos@gmail.com).

# Project structure

The project is structured in a way that will help you to find, edit and add new features easyly for that this is the folder structure you will find:

# Include in our projects

Once your sass files are compiled into our booterfly.css stylesheet you will be able to use it on your own projects adding it into your project header:
<link rel="stylesheet" type="text/css" href="/css/booterfly.css">

# Features and how to use it

You can find more information and examples on how to use  on the index.html defined on the root structure. Make sure to update this document and explain so you or others can start to build their own sites as fast as possible.

## Grid system

**Description**

- 12 columns
- Responsive, fluid
- Columns will be wrapper in a container
- Each column will have the class of .col-$
- Also create a .container class that wraps all content and centers it on the page. The container must be fuid in width

**Responsive behaviour**

- In smaller screen sizes (<1024px) the columns will have their gutter width halved
- In mobile sizes (<768px) all columns will get a 100% width

## Typography

**Elements**

- Headings
- Paragraphs
- Bold, em, strike, link
- Code blocks
- Lists
- Blockquotes

## Buttons
 
**Descriptions**

- 4 stules: default, primary, success, danger, warning
- 3 sizes: small, default, big
- Styles for all HTML elements: a, bitton, input type button, input type submit

## Form Elements

**Elements**

- Inputs
- Radio and checkboxes (custom controls)
- Pre-made forms: sing-in, sign-up, contact

## Icons

**Description**

- Will use FontAwesome
- Styles for bordered icons
- Styles for square, rounded or circle border
- 3 different sizes: small, default, big, huge

## Feedback (notification boxes)

**Description**

- 4 message boxes: information, success, error, warning

## Navigation

**Elements and characteristics**

- Navbar
- Contains logos on the left side and menu on the right side
- The menu will be powered by the Superdish jQuery plugin

**Responsive Behaviour**

- At page load, the main menu will be cloned via jQuery into a responsive menu
- The logo will be centered and the menu will be hidden and it will appear a button to show it instead

## Animations

**Description**

- Will use the animate.css library by Dan Eden

## Tabs and Accordions

**Descriptions**

- Custom controls

## Carousels

**Description**

- Will use the Cycle2 jQuery plugin

