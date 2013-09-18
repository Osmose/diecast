require.config({
    paths: {
        // library: '/components/library/library.js',
    }
});

require(['{%= name %}'], function(main) {
    main.load();
});
