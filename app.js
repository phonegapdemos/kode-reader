var app = 
{
    resultText: '',
    adMobId: {},

    initialize: function()
    {
        document.addEventListener('deviceready', app.onDeviceReady, false);

        /**
         * Get proper AdMob ad unit's IDs.
         *
         * https://github.com/floatinghotpot/cordova-admob-pro/wiki/00.-How-To-Use-with-PhoneGap-Build
         */
        
        /**
         * Windows 8 / Windows Phone 8
         */
        app.adMobId = {
            banner: 'ca-app-pub-2443694251751888/6171320055',
            interstitial: 'ca-app-pub-2443694251751888/9124786451'
        };

        /**
         * Android
         */
        if(/(android)/i.test(navigator.userAgent)) { 
            app.adMobId = {
                banner: 'ca-app-pub-2443694251751888/3915857654',
                interstitial: 'ca-app-pub-2443694251751888/9403988055'
            };
        }

        /**
         * iOS
         */
        if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            app.adMobId = {
                banner: 'ca-app-pub-2443694251751888/6310920852',
                interstitial: 'ca-app-pub-2443694251751888/9264387253'
            };
        }
    },

    onDeviceReady: function()
    {
        document.addEventListener('menubutton', app.menuButtonHandler, false);
        
        document.getElementById('scan').addEventListener('click', app.scan, false);
        document.getElementById('encode').addEventListener('click', app.encode, false);
        document.getElementById('browser').addEventListener('click', app.openInBrowser, false);
        document.getElementById('clipboard').addEventListener('click', app.copyToClipboard, false);

        app.toggleResultButtons('[none]');
        document.getElementById('data-format').innerHTML = '[none]';

        app.initAdMob();
        app.scan();
    },
    
    menuButtonHandler: function()
    {
        /**
         * Do nothing, when user presses system menu button. Used to handle small
         * group of devices, that crashes Kode Reader app under Android 4.x or newer
         * when user presses system menu button.
         *
         * See: http://stackoverflow.com/a/30968157/1469208 for details.
         */
        //Do nothing...
    },

    toggleResultButtons: function(result)
    {
        app.resultText = result;

        var resultString = (result.length > 33) ? result.substring(0, 32) + '...' : result;

        document.getElementById('data-result').innerHTML = resultString;

        if (app.validateURL(result))
        {
            document.getElementById('browser').removeAttribute('disabled');
        }
        else
        {
            document.getElementById('browser').setAttribute('disabled', 'diabled');
        }

        if ((result !== '[none]' && result !== ''))
        {
            document.getElementById('clipboard').removeAttribute('disabled');
        }
        else
        {
            document.getElementById('clipboard').setAttribute('disabled', 'diabled');
        }
    },

    copyToClipboard: function()
    {
        var
            text = app.resultText,
            disabled = document.getElementById('clipboard').hasAttribute('disabled');

        if (text === '[none]' || text === '' || disabled) return false;

        /**
         * https://build.phonegap.com/plugins/67
         * https://github.com/VersoSolutions/CordovaClipboard/
         *
         * "Simplified" version of call as per http://stackoverflow.com/q/30758290/1469208
         */
        window.plugins.copy(text);
        // window.plugins.copy(text, function(){alert('Copied to clipboard!')}, function(){alert('Error copying code to clipboard! Sorry...')});
    },

    openInBrowser: function()
    {
        var
            url = app.resultText,
            disabled = document.getElementById('browser').hasAttribute('disabled');

        if (url === '[none]' || url === '' || disabled) return false;

        /**
         * https://build.phonegap.com/plugins/233
         * http://stackoverflow.com/a/17887465/1469208
         * http://stackoverflow.com/a/20060846/1469208
         * http://docs.phonegap.com/en/edge/cordova_inappbrowser_inappbrowser.md.html
         */
        window.open(url, '_system');
    },

    scan: function()
    {
        navigator.vibrate(100);

        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan(function (result)
        {
            if(!result.cancelled)
            {
                document.getElementById('data-format').innerHTML = result.format;

                app.toggleResultButtons(result.text);
            }

        }, function (error){alert("Scanning failed! Reason: ", error);});
        
        return false;
    },

    encode: function()
    {
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
     * Used regular expression from:
     * 
     * http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without
     * 
     * http://stackoverflow.com/a/17726973/1469208
     * http://stackoverflow.com/a/9284473/1469208
     * http://stackoverflow.com/a/17714711/1469208
     * http://stackoverflow.com/a/2015516/1469208
     * http://stackoverflow.com/a/14582229/1469208
     */
    validateURL: function(url)
    {
        var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

        return urlRegex.test(url);
    },

    initAdMob: function()
    {
        /**
         * https://github.com/floatinghotpot/cordova-admob-pro/wiki/00.-How-To-Use-with-PhoneGap-Build
         */
        if (AdMob) {
            AdMob.createBanner({
                adId : app.adMobId.banner,
                position : AdMob.AD_POSITION.BOTTOM_CENTER,
                autoShow : true
            });
        }
    }
};