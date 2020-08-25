(function() {
    var getGlobalObject = function() {
            if (typeof globalThis !== 'undefined') {
                return globalThis; 
            }
            if (typeof self !== 'undefined') {
                return self; 
            }
            if (typeof window !== 'undefined') {
                return window; 
            }
            if (typeof global !== 'undefined') {
                return global; 
            }
            throw new Error('cannot find the global object');
    };
    var globalObj = getGlobalObject();
    globalObj.globalYonyouCoordinationCliTopLevelObj = globalObj.globalYonyouCoordinationCliTopLevelObj || {};
    var globalYonyouCoordinationCliTopLevelObj = globalObj.globalYonyouCoordinationCliTopLevelObj;
    if(!globalYonyouCoordinationCliTopLevelObj.globalSeparateYonbipHostFileConfig) {
        globalYonyouCoordinationCliTopLevelObj.globalSeparateYonbipHostFileConfig = {
            dev: {
                apiHost: '',
                lang: ''
            },
            test: {
                apiHost: '',
                lang: ''
            },
            daily: {
                apiHost: ''
            },
            prev: {
                apiHost: '',
                lang: ''
            },
            production: {
                apiHost: '',
                lang: ''
            },
            smallProgramTest: {
                apiHost: '',
                lang: ''
            },
            yonbip: {
                apiHost: '',
                lang: ''
            }
        };
    }
})();
