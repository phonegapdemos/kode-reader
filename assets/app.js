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
    }
};
