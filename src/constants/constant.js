export const path = new Map();
path.set('/', 'about')
path.set('/about', 'projects');
path.set('/projects', 'contact');
path.set('/contact', '');


export const text  = new Map();
text.set('/', 'See More About Me');
text.set('/about', 'See Projects');
text.set('/projects', 'Contact Me');
text.set('/contact', 'Go Back to Home Page');