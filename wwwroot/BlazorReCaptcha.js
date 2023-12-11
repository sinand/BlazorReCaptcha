var BlazorReCaptcha;
(function (BlazorReCaptcha) {
    let scriptLoadedPromise = null;

    function waitScriptLoaded(resolve) {
        if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.render !== 'undefined') {
            resolve();
        } else {
            setTimeout(() => waitScriptLoaded(resolve), 100);
        }
    }

    function init() {
        if (!scriptLoadedPromise) {
            const scripts = Array.from(document.getElementsByTagName('script'));
            if (!scripts.some(s => (s.src || '').startsWith('https://www.google.com/recaptcha/api.js'))) {
                const script = document.createElement('script');
                script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
            scriptLoadedPromise = new Promise(waitScriptLoaded);
        }
        return scriptLoadedPromise.catch(error => console.error('reCAPTCHA script failed to load:', error));
    }

    function render(dotNetObj, selector, siteKey) {
        return grecaptcha.render(selector, {
            'sitekey': siteKey,
            'callback': (response) => { dotNetObj.invokeMethodAsync('CallbackOnClientSuccess', response); },
            'expired-callback': () => { dotNetObj.invokeMethodAsync('CallbackOnExpired'); }
        });
    }

    function getResponse(widgetId) {
        return grecaptcha.getResponse(widgetId);
    }

    function reset(widgetId) {
        return grecaptcha.reset(widgetId);
    }

    BlazorReCaptcha.init = init;
    BlazorReCaptcha.render = render;
    BlazorReCaptcha.getResponse = getResponse;
    BlazorReCaptcha.reset = reset;
})(BlazorReCaptcha || (BlazorReCaptcha = {}));

 