var app = 
{
    initialize: function()
    {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },

    onDeviceReady: function()
    {
        document.getElementById('scan').addEventListener('click', app.scan, false);
        document.getElementById('encode').addEventListener('click', app.encode, false);

        app.scan();
    },

    toggleInfoBox: function(hide)
    {
        var
            hide = hide || false,
            hideString = (hide) ? 'none' : 'block';

        document.getElementById('info').style.display = hideString;
    },

    scan: function()
    {
        navigator.vibrate(300);
        app.toggleInfoBox(true);

        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan(function (result)
        {
            if(!result.cancelled)
            {
                app.toggleInfoBox();

                document.getElementById('data-result').innerHTML = result.text;
                document.getElementById('data-format').innerHTML = result.format;

                // alert(app.validateURL(result));
            }
            else app.toggleInfoBox(true);

        }, function (error)
        {
            app.toggleInfoBox(true);

            alert("Scanning failed! Reason: ", error); 
        });
        
        return false;
    },

    encode: function()
    {
        app.toggleInfoBox(true);

        var
            result = window.prompt('Encode what?'),
            scanner = cordova.require("cordova/plugin/BarcodeScanner");

        /**
         * Cancel encoding if user hit 'Cancel' button or entered an empty string.
         */
        if (result === null || typeof result === 'object' || result === '') return false;

        scanner.encode(scanner.Encode.TEXT_TYPE, result, function(success)
        {
            /**
             * Do nothing...
             */
        }, function(fail)
        {
            alert("Encoding failed! Reason: " + fail);
        });
        
        return false;
    },

    /**
     * Used regular expression from http://stackoverflow.com/a/17726973/1469208
     *
     * Alternatives to be eventually considered:
     *
     * http://stackoverflow.com/a/9284473/1469208
     * http://stackoverflow.com/a/17714711/1469208
     * http://stackoverflow.com/a/2015516/1469208
     * http://stackoverflow.com/a/14582229/1469208
     */
    validateURL: function(url)
    {
        var urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        return urlRegex.test(url);
    }
};
