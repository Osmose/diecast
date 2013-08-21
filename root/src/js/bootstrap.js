require.config({
    baseUrl: 'js',
    paths: {
        // library: 'vendor/library/library.js',
    }
});

require(['{%= name %}'], function(main) {
    main.load();
});
