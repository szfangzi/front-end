require.config({
    baseUrl: 'js',
    paths: {
        cache: 'a/cache',
        selector:'selector',
        event:'event',
    },
    
});
 
require(['selector', 'event'], function($, E) {
    var els = $('p');
    for (var i=0; i<els.length; i++) {
        console.log(i);
    }
});