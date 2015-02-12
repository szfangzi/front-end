require.config({
    paths: {
        cache: 'js/a/cache',
        selector:'js/selector',
        event:'js/event',
    },
	shim : {

		// Shimmed dependecies and export
		"event" : {
		   deps : ["cache"],
		},
	
	}
});